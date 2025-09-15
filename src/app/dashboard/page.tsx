"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Download, RefreshCcw, Search, X } from "lucide-react";
import SubscriptionTable from "../../components/SubscriptionsTable";
import { 
  Subscription, 
  fetchSubscriptions, 
  downloadCSV, 
  daysBetween, 
  inferAccountTypeFromPlan
} from "../../utils/subscription-utils";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

export default function AdminSubscriptionsPage() {
  const [data, setData] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("all");
  const [acctType, setAcctType] = useState<string>("all");

  const fetchSubs = async () => {
    setLoading(true);
    setErr(null);
    try {
      const subs = await fetchSubscriptions(`${API_URL}/billing/admin/subscriptions`);
      setData(subs);
    } catch (e: any) {
      setErr(e?.message || "Failed to load subscriptions");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubs();

  }, []);

  const filtered = useMemo(() => {
    const qLower = q.trim().toLowerCase();
    return data.filter((s) => {
      const matchQ = !qLower ||
        [
          s.userName ?? "",
          s.userEmail ?? "",
          s.organisation ?? "",
          s.planId ?? "",
          s.status ?? "",
          s._id ?? "",
          s.stripeCustomerId ?? "",
          s.stripeSubscriptionId ?? "",
        ].some((v) => String(v).toLowerCase().includes(qLower));

      const statusOk = status === "all" || (s.status ?? "active") === status;
      const acctOk = acctType === "all" || (s.accountType ?? inferAccountTypeFromPlan(s.planId)) === acctType;

      return matchQ && statusOk && acctOk;
    });
  }, [data, q, status, acctType]);

  const total = filtered.length;

  return (
    <div className="min-h-screen bg-gray-50">
   
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <img src="/images/rdlogo.png" alt="PBR Research Data Lab" className="h-8" />
            </Link>
            <h1 className="text-xl font-semibold text-gray-900">Admin · Subscriptions</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchSubs}
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white hover:bg-gray-50"
              type="button"
            >
              <RefreshCcw className="w-4 h-4" />
              Refresh
            </button>
            <button
              onClick={() => downloadCSV(filtered)}
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white hover:bg-gray-50"
              type="button"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </header>

      {/* Filters + Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white border rounded-xl p-4">
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            {/* search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search: name, email, organisation, planId, status, IDs…"
                className="w-full pl-9 pr-8 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              {q && (
                <button
                  onClick={() => setQ("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  type="button"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* selects */}
            <div className="flex gap-2">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="trialing">Trialing</option>
                <option value="past_due">Past due</option>
                <option value="unpaid">Unpaid</option>
                <option value="canceled">Canceled</option>
              </select>

              <select
                value={acctType}
                onChange={(e) => setAcctType(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              >
                <option value="all">All Types</option>
                <option value="non-enterprise">Non-Enterprise</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>
          </div>

          {/* stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            <div className="border rounded-lg p-3 bg-gray-50">
              <div className="text-xs text-gray-500">Total filtered</div>
              <div className="text-lg font-semibold">{total}</div>
            </div>
            <div className="border rounded-lg p-3 bg-gray-50">
              <div className="text-xs text-gray-500">Active</div>
              <div className="text-lg font-semibold">
                {filtered.filter((s) => (s.status ?? "active") === "active").length}
              </div>
            </div>
            <div className="border rounded-lg p-3 bg-gray-50">
              <div className="text-xs text-gray-500">Expiring ≤ 7 days</div>
              <div className="text-lg font-semibold">
                {
                  filtered.filter((s) => {
                    const nowISO = new Date().toISOString();
                    return daysBetween(nowISO, s.currentPeriodEnd) <= 7;
                  }).length
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <SubscriptionTable 
        data={filtered} 
        loading={loading} 
        error={err} 
        total={total} 
      />
    </div>
  );
}