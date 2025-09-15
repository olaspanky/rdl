"use client";

import React, { useState } from "react";
import { Building2, User, Check } from "lucide-react";
import Link from "next/link";

const pricingData = {
  nonEnterprise: [
    {
      tier: "Starter-Lite",
      monthlyPrice: 100,
      yearlyPrice: 1200,
      rowsPerMonth: 1000,
      historyWindow: "4 quarters",
      recency: "T–4 (12-month lag)",
      access: "In-platform; exports disabled",
      typicalUsers: "Learners, course labs",
      costPerRow: 0.1,
    },
    {
      tier: "Student Club",
      monthlyPrice: 200,
      yearlyPrice: 2400,
      rowsPerMonth: 2000,
      historyWindow: "8 quarters",
      recency: "T–4 (12-month lag)",
      access: "In-platform; exports disabled",
      typicalUsers: "Small research groups",
      costPerRow: 0.1,
    },
    {
      tier: "Research Micro",
      monthlyPrice: 400,
      yearlyPrice: 4800,
      rowsPerMonth: 4000,
      historyWindow: "8 quarters",
      recency: "T–4 (12-month lag)",
      access: "In-platform; exports disabled",
      typicalUsers: "Pilot projects & PoCs",
      costPerRow: 0.1,
    },
    {
      tier: "Research Plus",
      monthlyPrice: 500,
      yearlyPrice: 6000,
      rowsPerMonth: 5000,
      historyWindow: "8 quarters",
      recency: "T–4 (12-month lag)",
      access: "In-platform; exports disabled",
      typicalUsers: "Pilot projects & PoCs",
      costPerRow: 0.1,
    },
  ],
  enterprise: [
    {
      tier: "Explorer",
      monthlyPrice: 600,
      yearlyPrice: 7200,
      rowsPerMonth: 10000,
      historyWindow: "16 quarters",
      recency: "T (latest after quarterly release)",
      access: "In-platform analytics; exports disabled",
      typicalUsers: "Department teams starting out",
      costPerRow: 0.06,
    },
    {
      tier: "Program",
      monthlyPrice: 900,
      yearlyPrice: 10800,
      rowsPerMonth: 15000,
      historyWindow: "16 quarters",
      recency: "T (latest after quarterly release)",
      access: "In-platform analytics; exports disabled",
      typicalUsers: "Busy departments / institutes",
      costPerRow: 0.06,
    },
    {
      tier: "Platform",
      monthlyPrice: 1200,
      yearlyPrice: 14400,
      rowsPerMonth: 20000,
      historyWindow: "20 quarters",
      recency: "T (latest after quarterly release)",
      access: "In-platform analytics; exports disabled",
      typicalUsers: "Research centres, pharma RWE teams",
      costPerRow: 0.06,
    },
  ],
};

interface FormData {
  name: string;
  email: string;
  accountType: "" | "enterprise" | "non-enterprise";
  selectedPlan: string;
  billingCycle: "monthly" | "yearly";
  organisation: string;
  role: string;
  teamSize: string;
}

const SignupForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    accountType: "",
    selectedPlan: "",
    billingCycle: "monthly",
    organisation: "",
    role: "",
    teamSize: "",
  });
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAccountTypeSelect = (type: FormData["accountType"]) => {
    setFormData({
      ...formData,
      accountType: type,
      selectedPlan: "",
    });
  };

  const handlePlanSelect = (plan: string) => {
    setFormData({
      ...formData,
      selectedPlan: plan,
    });
  };

  const handleBillingCycleChange = (cycle: "monthly" | "yearly") => {
    setFormData({
      ...formData,
      billingCycle: cycle,
    });
  };

  const handleNext = () => {
    if (step === 1 && formData.name && formData.email && formData.accountType) {
      setStep(2);
    } else if (step === 2 && formData.selectedPlan) {
      setStep(3);
      setIsModalOpen(true);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setFormData({ ...formData, accountType: "", selectedPlan: "" });
    } else if (step === 3) {
      setStep(2);
      setIsModalOpen(false);
    }
  };

  const handleSubmit = () => {
    if (step === 3 && formData.organisation && formData.role && formData.teamSize) {
      console.log("Final form submitted:", formData);
      alert("Account and research details submitted successfully!");
      setIsModalOpen(false);
      setStep(1);
      setFormData({
        name: "",
        email: "",
        accountType: "",
        selectedPlan: "",
        billingCycle: "monthly",
        organisation: "",
        role: "",
        teamSize: "",
      });
    }
  };

  const renderAccountTypeSelection = () => (
    <div className="w-full max-w-md">
      <div className="flex items-center mb-8 justify-center">
        <Link href="/">
          <img
            src="/images/rdlogo.png"
            alt="PBR Research Data Lab"
            className="h-10 hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h2>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Account Type*
          </label>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                type: "enterprise",
                icon: Building2,
                label: "Enterprise",
                description: "For large organizations and institutions",
              },
              {
                type: "non-enterprise",
                icon: User,
                label: "Non-Enterprise",
                description: "(Individual/Small Practice, Student)",
              },
            ].map(({ type, icon: Icon, label, description }) => (
              <button
                key={type}
                type="button"
                onClick={() => handleAccountTypeSelect(type as FormData["accountType"])}
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.accountType === type
                    ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200"
                    : "border-gray-200 hover:border-gray-300 hover: -50"
                }`}
                aria-pressed={formData.accountType === type}
              >
                <div className="flex items-center">
                  <Icon
                    className={`w-5 h-5 mr-3 ${
                      formData.accountType === type
                        ? "text-indigo-600"
                        : "text-gray-400"
                    }`}
                  />
                  <div>
                    <div
                      className={`font-medium ${
                        formData.accountType === type
                          ? "text-indigo-900"
                          : "text-gray-900"
                      }`}
                    >
                      {label}
                    </div>
                    <div className="text-sm text-gray-500">{description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={!formData.name || !formData.email || !formData.accountType}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled: -300 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>

        <p className="text-xs text-gray-500 text-center leading-relaxed">
          By continuing, you agree to our{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-700">
            Terms of Service
          </a>{" "}
          and acknowledge our{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-700">
            Privacy & Cookies Policy
          </a>.
        </p>
      </div>

      <div className="text-center mt-6">
        <span className="text-gray-600">Already have an account? </span>
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Log in
        </a>
      </div>
    </div>
  );

  const renderPricingPlans = () => {
    const plans =
      formData.accountType === "enterprise"
        ? pricingData.enterprise
        : pricingData.nonEnterprise;

    return (
      <div className="w-full max-w-4xl">
        <div className="flex items-center mb-8 justify-center">
          <Link href="/">
            <img
              src="/images/rdlogo.png"
              alt="PBR Research Data Lab"
              className="h-10 hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Plan</h2>
        <p className="text-gray-600 mb-6">Select the plan that best fits your needs.</p>

        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg border border-gray-200 p-1  -50">
            <button
              onClick={() => handleBillingCycleChange("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                formData.billingCycle === "monthly"
                  ? "bg-indigo-600 text-white"
                  : "bg-transparent text-gray-600 hover: -100"
              }`}
              aria-pressed={formData.billingCycle === "monthly"}
            >
              Monthly
            </button>
            <button
              onClick={() => handleBillingCycleChange("yearly")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                formData.billingCycle === "yearly"
                  ? "bg-indigo-600 text-white"
                  : "bg-transparent text-gray-600 hover: -100"
              }`}
              aria-pressed={formData.billingCycle === "yearly"}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.tier}
              className={`border-2 rounded-lg p-6 flex flex-col ${
                formData.selectedPlan === plan.tier
                  ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200"
                  : "border-gray-200 hover:border-gray-300 hover: -50"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900">{plan.tier}</h3>
              <p className="text-gray-500 text-sm mt-1">{plan.typicalUsers}</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-gray-900">
                  $
                  {formData.billingCycle === "monthly"
                    ? plan.monthlyPrice
                    : plan.yearlyPrice}
                </span>
                <span className="text-gray-500 text-sm">
                  {formData.billingCycle === "monthly" ? "/month" : "/year"}
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
                onClick={() => handlePlanSelect(plan.tier)}
                className={`mt-6 w-full py-3 rounded-lg font-medium transition-colors ${
                  formData.selectedPlan === plan.tier
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : " -100 text-gray-900 hover: -200"
                }`}
                aria-pressed={formData.selectedPlan === plan.tier}
              >
                {formData.selectedPlan === plan.tier ? "Selected" : "Select Plan"}
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
            aria-label="Go back to account type selection"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            disabled={!formData.selectedPlan}
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled: -300 disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    );
  };

  const renderResearchDetailsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <Link href="/">
            <img
              src="/images/rdlogo.png"
              alt="PBR Research Data Lab"
              className="h-12 hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Nice to meet you, {formData.name.split(" ")[0]}!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Tell us more about your research needs.
        </p>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="organisation"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name of Organisation*
            </label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              value={formData.organisation}
              onChange={handleInputChange}
              placeholder="PBR Insights"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your role*
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              aria-required="true"
            >
              <option value="">Select a role</option>
              <option value="Clinical Researcher">Clinical Researcher</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Research Coordinator">Research Coordinator</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="teamSize"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Team size*
            </label>
            <select
              id="teamSize"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
              aria-required="true"
            >
              <option value="">Select team size</option>
              <option value="1-10">1 - 10</option>
              <option value="11-20">11 - 20</option>
              <option value="21-50">21 - 50</option>
              <option value="51+">51+</option>
            </select>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={handleBack}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
              aria-label="Go back to plan selection"
            >
              ← Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={
                !formData.organisation || !formData.role || !formData.teamSize
              }
              className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled: -300 disabled:cursor-not-allowed transition-colors"
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 relative overflow-hidden">
        <img
          src="/images/s1.png"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        {step === 1
          ? renderAccountTypeSelection()
          : step === 2
          ? renderPricingPlans()
          : null}
        {isModalOpen && renderResearchDetailsModal()}
      </div>
    </div>
  );
};

export default SignupForm;