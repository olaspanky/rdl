"use client";

import React, { useMemo, useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import { pricingData } from "@/lib/pricing";

type BillingCycle = "monthly" | "yearly";
type PlanType = "all" | "enterprise" | "non-enterprise";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "";
const CHECKOUT_PATH =
  process.env.NEXT_PUBLIC_BILLING_CHECKOUT_PATH || "/billing/checkout";

function getToken() {
  try {
    return localStorage.getItem("token");
  } catch {
    return null;
  }
}
function getStoredAccountType() {
  try {
    return localStorage.getItem("accountType") as
      | "enterprise"
      | "non-enterprise"
      | null;
  } catch {
    return null;
  }
}

function PlanPageContent() {
  const router = useRouter();
  const params = useSearchParams();

  const sid = params.get("sid") ?? "";
  const name = params.get("name") ?? "";
  const email = params.get("email") ?? "";
  const initialCycle = (params.get("billingCycle") ?? "monthly") as BillingCycle;
  const initialAccountType = (params.get("accountType") ??
    "") as "" | "enterprise" | "non-enterprise";

  const [billingCycle, setBillingCycle] = useState<BillingCycle>(initialCycle);
  const [planType, setPlanType] = useState<PlanType>(
    initialAccountType === "enterprise"
      ? "enterprise"
      : initialAccountType === "non-enterprise"
      ? "non-enterprise"
      : "all"
  );
  const [selectedPlan, setSelectedPlan] = useState<string>(""); // stores the tier/name
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // research details
  const [organisation, setOrganisation] = useState("");
  const [role, setRole] = useState("");
  const [teamSize, setTeamSize] = useState("");

  // sets to infer account type from a tier name
  const enterpriseNames = useMemo(
    () => new Set(pricingData.enterprise.map((p) => p.tier)),
    []
  );
  const nonEnterpriseNames = useMemo(
    () => new Set(pricingData.nonEnterprise.map((p) => p.tier)),
    []
  );

  const inferAccountType = (
    tier: string
  ): "enterprise" | "non-enterprise" | "" => {
    if (enterpriseNames.has(tier)) return "enterprise";
    if (nonEnterpriseNames.has(tier)) return "non-enterprise";
    return "";
  };

  // Helper to fetch planId from pricing structure (safer than string-building)
  const getPlanIdFor = (tier: string, cycle: BillingCycle): string => {
    const plan =
      pricingData.nonEnterprise.find((p) => p.tier === tier) ||
      pricingData.enterprise.find((p) => p.tier === tier);
    if (!plan) return "";
    return cycle === "monthly" ? plan.monthly.planId : plan.yearly.planId;
  };

  // plans to render based on planType switch
  type AnyPlan =
    | (typeof pricingData.enterprise)[number]
    | (typeof pricingData.nonEnterprise)[number];

  const plansToShow: AnyPlan[] = useMemo(() => {
    if (planType === "enterprise") return pricingData.enterprise;
    if (planType === "non-enterprise") return pricingData.nonEnterprise;
    return [...pricingData.nonEnterprise, ...pricingData.enterprise];
  }, [planType]);

const backToSignup = () => {
  console.log("Back button clicked");
  router.back();
};
  
  const nextFromPlans = () => selectedPlan && setShowModal(true);

  const finishAndPay = async () => {
    if (!organisation || !role || !teamSize || !selectedPlan) return;

    const inferred = inferAccountType(selectedPlan);
    const stored = getStoredAccountType();
    const accountType = (inferred || stored || "") as
      | "enterprise"
      | "non-enterprise"
      | "";

    const planId = getPlanIdFor(selectedPlan, billingCycle); // e.g., "Explorer_monthly"
    const token = getToken();

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}${CHECKOUT_PATH}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          planId, // e.g. "Explorer_monthly"
          quantity: 1,
          accountType, // enterprise | non-enterprise
          organisation,
          role,
          teamSize,
          sid,
          name,
          email,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.url) {
        throw new Error(
          data?.error || data?.message || "Could not start checkout"
        );
      }
      router.push(data.url);
    } catch (e: any) {
      alert(e?.message || "Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  // auto-open modal when a plan is selected (instead of rendering void)
  useEffect(() => {
    if (selectedPlan && !showModal) {
      setShowModal(true);
    }
  }, [selectedPlan, showModal]);

  const PlanCard = ({ plan }: { plan: AnyPlan }) => {
    const isEnterprise = enterpriseNames.has(plan.tier);
    const badge = isEnterprise ? (
      <span className="ml-2 text-[10px] px-2 py-1 rounded-full bg-purple-100 text-purple-700">
        Enterprise
      </span>
    ) : (
      <span className="ml-2 text-[10px] px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
        Non-Enterprise
      </span>
    );

    const displayPrice =
      billingCycle === "monthly" ? plan.monthly.price : plan.yearly.price;

    return (
      <div
        className={`border-2 rounded-lg p-6 flex flex-col ${
          selectedPlan === plan.tier
            ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200"
            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center">
          <h3 className="text-xl font-semibold text-gray-900">{plan.tier}</h3>
          {badge}
        </div>

        <p className="text-gray-500 text-sm mt-1">{plan.typicalUsers}</p>

        <div className="mt-4">
          <span className="text-3xl font-bold text-gray-900">
            ${displayPrice}
          </span>
          <span className="text-gray-500 text-sm">
            {billingCycle === "monthly" ? "/month" : "/year"}
          </span>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          ${plan.costPerRow}/row per month
        </p>

        <ul className="mt-4 space-y-2 flex-1">
          <li className="flex items-center text-sm text-gray-600">
            <Check className="w-4 h-4 text-indigo-600 mr-2" />
            {plan.rowsPerMonth.toLocaleString()} rows/month
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Check className="w-4 h-4 text-indigo-600 mr-2" />
            {plan.historyWindow} history
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Check className="w-4 h-4 text-indigo-600 mr-2" />
            {plan.recency}
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Check className="w-4 h-4 text-indigo-600 mr-2" />
            {plan.access}
          </li>
        </ul>

        <button
          onClick={() => setSelectedPlan(plan.tier)}
          className={`mt-6 w-full py-3 rounded-lg font-medium ${
            selectedPlan === plan.tier
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
        >
          {selectedPlan === plan.tier ? "Selected" : "Select Plan"}
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <div className="flex items-center mb-8 justify-center">
            <Link href="/">
              <img
                src="/images/rdlogo.png"
                alt="PBR Research Data Lab"
                className="h-10"
              />
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 mb-6">
            {name ? `Hi ${name.split(" ")[0]}, ` : ""}select the plan that best
            fits your needs.
          </p>

          {/* Top controls: Billing + Change Plan Type */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            {/* Billing cycle toggle */}
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    billingCycle === "monthly"
                      ? "bg-indigo-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    billingCycle === "yearly"
                      ? "bg-indigo-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Change plan type control */}
            <div className="flex justify-center md:justify-end">
              <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
                <button
                  onClick={() => setPlanType("all")}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    planType === "all"
                      ? "bg-indigo-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  title="Show all plans"
                >
                  All
                </button>
                <button
                  onClick={() => setPlanType("non-enterprise")}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    planType === "non-enterprise"
                      ? "bg-indigo-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  title="Show non-enterprise plans"
                >
                  Non-Enterprise
                </button>
                <button
                  onClick={() => setPlanType("enterprise")}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    planType === "enterprise"
                      ? "bg-indigo-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  title="Show enterprise plans"
                >
                  Enterprise
                </button>
              </div>
            </div>
          </div>

          {/* Plans grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plansToShow.map((plan) => (
              <PlanCard key={plan.tier} plan={plan} />
            ))}
          </div>

          <div className="flex justify-between mt-10">
            <button
              onClick={backToSignup}
              className="text-indigo-600 font-medium"
            >
              ← Back
            </button>
            <button
              onClick={nextFromPlans}
              disabled={!selectedPlan}
              className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium disabled:bg-gray-300"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Research details modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-center mb-4">
              <Link href="/">
                <img
                  src="/images/rdlogo.png"
                  alt="PBR Research Data Lab"
                  className="h-12"
                />
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Nice to meet you, {name ? name.split(" ")[0] : "there"}!
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Tell us more about your research needs.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="organisation"
                >
                  Name of Organisation / Institution
                </label>
                <input
                  id="organisation"
                  value={organisation}
                  onChange={(e) => setOrganisation(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="role"
                >
                  Your role*
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select a role</option>
              <option value="Clinical Researcher">Clinical Researcher</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Research Coordinator">Student</option>
              <option value="Research Coordinator">Freelance Researcher</option>
              <option value="Research Coordinator">Public Health</option>
              <option value="Research Coordinator">Others</option> </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="teamSize"
                >
                  Team size*
                </label>
                <select
                  id="teamSize"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select team size</option>
    <option value="1-5">1 - 5</option>
    <option value="6-10">6 - 10</option>
    <option value="11-15">11 - 15</option>
    <option value="16-20">16 - 20</option>
    <option value="21-25">21 - 25</option>
    <option value="26-30">26 - 30</option>
    <option value="31-35">31 - 35</option>
    <option value="36-40">36 - 40</option>
    <option value="41-45">41 - 45</option>
    <option value="46-50">46 - 50</option>
    <option value="50+">50+</option>
                </select>
              </div>

              <div className="flex justify-between mt-6">
                <button
  onClick={() => {
    setShowModal(false);
    setSelectedPlan(""); // Clear selected plan to prevent useEffect from re-opening
  }}
  className="text-indigo-600 font-medium"
>
  ← Back
</button>
                <button
                  onClick={finishAndPay}
                  disabled={!organisation || !role || !teamSize || loading}
                  className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium disabled:bg-gray-300"
                >
                  {loading ? "Processing..." : "Continue to payment"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Loading fallback component
function PlanPageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading plans...</p>
      </div>
    </div>
  );
}

export default function PlanPage() {
  return (
    <Suspense fallback={<PlanPageFallback />}>
      <PlanPageContent />
    </Suspense>
  );
}