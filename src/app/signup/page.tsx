"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Building2, User, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";



type AccountType = "" | "enterprise" | "non-enterprise";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "";
const AUTH_REGISTER = process.env.NEXT_PUBLIC_AUTH_REGISTER_PATH || "/auth/register";



export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    accountType: "" as AccountType,
  });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const pickType = (type: AccountType) =>
    setForm((s) => ({ ...s, accountType: type }));

  async function submitAndContinue() {
    setErr(null);
    if (!form.name || !form.email || !form.password || !form.accountType) {
      setErr("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {

      const res = await fetch(`${API_BASE}${AUTH_REGISTER}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          accountType: form.accountType 
        }),
        credentials: "include",
      });
console.log(res)
      const data = await res.json().catch(() => ({}));
      console.log(data)
      if (!res.ok) {

        const msg =
          (Array.isArray((data as any)?.errors) &&
            (data as any).errors.map((e: any) => e.msg).join(", ")) ||
          (data as any)?.message ||
          "Signup failed";
        throw new Error(msg);
      }

      if ((data as any)?.token) {
        try {
          localStorage.setItem("token", (data as any).token);
          localStorage.setItem(
            "user",
            JSON.stringify((data as any).user ?? null)
          );
        } catch {
 
        }
      }

.
      try {
        localStorage.setItem("accountType", form.accountType);
      } catch {}

      router.push("/signup/plan");
    } catch (e: any) {
      setErr(e?.message || "Could not complete signup");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 relative overflow-hidden">
        <img
          src="/images/s1.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
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
            Create your account
          </h2>

          <div className="space-y-6">
            {err && (
              <div className="rounded-md bg-red-50 text-red-700 px-3 py-2 text-sm">
                {err}
              </div>
            )}

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="name"
              >
                Name*
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleInput}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                autoComplete="name"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleInput}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                autoComplete="email"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="password"
              >
                Password*
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPw ? "text" : "password"}
                  value={form.password}
                  onChange={handleInput}
                  placeholder="Create a password"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 pr-10"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Use 8+ characters with a mix of letters, numbers & symbols.
              </p>
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
                    onClick={() => pickType(type as AccountType)}
                    className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                      form.accountType === type
                        ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <Icon
                        className={`w-5 h-5 mr-3 ${
                          form.accountType === type
                            ? "text-indigo-600"
                            : "text-gray-400"
                        }`}
                      />
                      <div>
                        <div
                          className={`font-medium ${
                            form.accountType === type
                              ? "text-indigo-900"
                              : "text-gray-900"
                          }`}
                        >
                          {label}
                        </div>
                        <div className="text-sm text-gray-500">
                          {description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={submitAndContinue}
              disabled={
                loading ||
                !form.name ||
                !form.email ||
                !form.password ||
                !form.accountType
              }
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-300"
            >
              {loading ? "Submitting..." : "Next →"}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By continuing, you agree to our{" "}
              <a href="#" className="text-indigo-600">
                Terms of Service
              </a>{" "}
              and acknowledge our{" "}
              <a href="#" className="text-indigo-600">
                Privacy & Cookies Policy
              </a>
              .
            </p>
          </div>

          <div className="text-center mt-6">
            <span className="text-gray-600">Already have an account? </span>
            <a href="#" className="text-indigo-600 font-medium">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
