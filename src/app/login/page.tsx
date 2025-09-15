"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "";
const AUTH_LOGIN = process.env.NEXT_PUBLIC_AUTH_LOGIN_PATH || "/auth/login";
const POST_LOGIN_REDIRECT = process.env.NEXT_PUBLIC_POST_LOGIN_REDIRECT || "/dashboard";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleLogin() {
    setErr(null);
    if (!email || !password) {
      setErr("Email and password are required.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}${AUTH_LOGIN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, remember }),
        credentials: "include",
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg =
          (Array.isArray((data as any)?.errors) &&
            (data as any).errors.map((e: any) => e.msg).join(", ")) ||
          (data as any)?.message ||
          "Login failed";
        throw new Error(msg);
      }


      if ((data as any)?.token) {
        try {
          if (remember) localStorage.setItem("token", (data as any).token);
          else sessionStorage.setItem("token", (data as any).token);

          if ((data as any)?.user) {
            const store = remember ? localStorage : sessionStorage;
            store.setItem("user", JSON.stringify((data as any).user));
          }
        } catch {

        }
      }

      router.replace(POST_LOGIN_REDIRECT);
    } catch (e: any) {
      setErr(e?.message || "Could not complete login");
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleLogin();
  }

  return (
    <div className="min-h-screen flex">
 
      <div className="hidden md:block md:flex-1 relative overflow-hidden">
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
              <img src="/images/rdlogo.png" alt="PBR Research Data Lab" className="h-10" />
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-sm text-gray-600 mb-6">Log in to continue to your workspace.</p>

          <div className="space-y-6">
            {err && (
              <div className="rounded-md bg-red-50 text-red-700 px-3 py-2 text-sm">{err}</div>
            )}

 
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                autoComplete="email"
                inputMode="email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                Password*
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 pr-11"
                  autoComplete="current-password"
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
              <div className="mt-2 flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  Remember me
                </label>
                <Link href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>

  
            <button
              type="button"
              onClick={handleLogin}
              disabled={loading || !email || !password}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 disabled: -300 flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By continuing, you agree to our {" "}
              <Link href="/legal/terms" className="text-indigo-600">Terms of Service</Link> and acknowledge our {" "}
              <Link href="/legal/privacy" className="text-indigo-600">Privacy & Cookies Policy</Link>.
            </p>
          </div>

          <div className="text-center mt-6">
            <span className="text-gray-600">Don&apos;t have an account? </span>
            <Link href="/signup" className="text-indigo-600 font-medium">Create one</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
