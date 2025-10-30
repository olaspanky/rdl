"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, Copy, Download, Loader2, RefreshCcw, Search, X } from "lucide-react";

type Subscription = {
  _id: string;
  accountType?: "enterprise" | "non-enterprise";
  createdAt: string;
  currentPeriodEnd: string;
  currentPeriodStart: string;
  organisation?: string;
  planId: string;
  status?: "active" | "trialing" | "past_due" | "unpaid" | "canceled" | string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  teamSize?: string;
  updatedAt: string;
  userId: string;
  daysUntilExpiry?: number;
  userName?: string;
  userEmail?: string;
};

const API_URL =
  process.env.NEXT_PUBLIC_ADMIN_API_URL ||
  "https://api.rdl.pbr.com.ng/billing/admin/subscriptions";

/* --------------- utils ---------------- */
const fmtDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";

const daysBetween = (aISO: string, bISO: string) => {
  const a = new Date(aISO).getTime();
  const b = new Date(bISO).getTime();
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
};

const timeAgo = (iso?: string) => {
  if (!iso) return "—";
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  const years = Math.floor(months / 12);
  return `${years}y ago`;
};

const copyText = async (text?: string) => {
  try {
    if (!text) return false;
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

const toCSV = (rows: Subscription[]) => {
  const headers = [
    "_id",
    "accountType",
    "status",
    "organisation",
    "planId",
    "teamSize",
    "userId",
    "userName",
    "userEmail",
    "createdAt",
    "updatedAt",
    "currentPeriodStart",
    "currentPeriodEnd",
    "daysUntilExpiry",
    "stripeCustomerId",
    "stripeSubscriptionId",
  ];
  const esc = (v: any) =>
    typeof v === "string" && (v.includes(",") || v.includes("\n") || v.includes('"'))
      ? `"${v.replace(/"/g, '""')}"`
      : v ?? "";
  return [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => esc((r as any)[h])).join(",")),
  ].join("\n");
};

const downloadCSV = (subs: Subscription[]) => {
  const blob = new Blob([toCSV(subs)], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `subscriptions_${new Date().toISOString().slice(0, 19)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

function Pill({
  children,
  color = "gray",
}: {
  children: React.ReactNode;
  color?: "gray" | "emerald" | "indigo" | "purple" | "yellow" | "red" | "blue" | "orange";
}) {
  const map: Record<string, string> = {
    gray: " -100 text-gray-700",
    emerald: "bg-emerald-100 text-emerald-700",
    indigo: "bg-indigo-100 text-indigo-700",
    purple: "bg-purple-100 text-purple-700",
    yellow: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-700",
    blue: "bg-blue-100 text-blue-700",
    orange: "bg-orange-100 text-orange-700",
  };
  return <span className={`px-2 py-1 text-xs rounded-full ${map[color]}`}>{children}</span>;
}

const StatusBadge = ({ status }: { status?: Subscription["status"] }) => {
  const s = String(status || "active").toLowerCase();
  const color =
    s === "active"
      ? "emerald"
      : s === "trialing"
      ? "indigo"
      : s === "past_due"
      ? "yellow"
      : s === "unpaid"
      ? "orange"
      : s === "canceled"
      ? "red"
      : "gray";
  return <Pill color={color}>{status || "active"}</Pill>;
};

const inferAccountTypeFromPlan = (planId: string): "enterprise" | "non-enterprise" => {
  // enterprise SKUs: Explorer / Program / Platform
  if (/^(Explorer|Program|Platform)_(monthly|yearly)$/.test(planId)) return "enterprise";
  return "non-enterprise";
};

const AccountTypeBadge = ({ accountType, planId }: { accountType?: Subscription["accountType"]; planId: string }) => {
  const type = accountType ?? inferAccountTypeFromPlan(planId);
  return type === "enterprise" ? (
    <Pill color="purple">Enterprise</Pill>
  ) : (
    <Pill color="emerald">Non-Enterprise</Pill>
  );
};

const Copyable = ({ label, value }: { label: string; value?: string }) => {
  const [ok, setOk] = useState<boolean | null>(null);
  const shown = value && value.length > 0 ? value : "—";
  const disabled = shown === "—";
  return (
    <button
      className={`inline-flex items-center gap-1 text-xs ${
        disabled ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:text-gray-900"
      } group`}
      onClick={async () => {
        if (disabled) return;
        const success = await copyText(value);
        setOk(success);
        setTimeout(() => setOk(null), 1200);
      }}
      title={disabled ? `${label} unavailable` : `Copy ${label}`}
      disabled={disabled}
      type="button"
    >
      <span className="font-mono truncate max-w-[160px]">{shown}</span>
      {ok ? (
        <Check className="w-3.5 h-3.5 text-emerald-600" />
      ) : (
        <Copy className={`w-3.5 h-3.5 ${disabled ? "opacity-30" : "opacity-60 group-hover:opacity-100"}`} />
      )}
    </button>
  );
};

/* ---------------- page ---------------- */
export default function AdminSubscriptionsPage() {
  const [data, setData] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  // filters
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("all");
  const [acctType, setAcctType] = useState<string>("all");

  const fetchSubs = async () => {
    setLoading(true);
    setErr(null);
    try {
      const token = localStorage.getItem("token") || "";
      const res = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!res.ok) throw new Error(`Failed ${res.status}`);
      const payload = await res.json();

      // Support: array | {data} | {items} (your case) | {results}
      const subs: Subscription[] = Array.isArray(payload)
        ? payload
        : payload?.items ??
          payload?.data ??
          payload?.results ??
          [];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const qLower = q.trim().toLowerCase();
    return data.filter((s) => {
      const matchQ =
        !qLower ||
        [
          s.userName ?? "",
          s.userEmail ?? "",
          s.organisation ?? "",
          s.planId ?? "",
          s.status ?? "",
          s._id ?? "",
          s.stripeCustomerId ?? "",
          s.stripeSubscriptionId ?? "",
        ]
          .some((v) => String(v).toLowerCase().includes(qLower));

      const statusOk = status === "all" || (s.status ?? "active") === status;
      const acct = s.accountType ?? inferAccountTypeFromPlan(s.planId);
      const acctOk = acctType === "all" || acct === acctType;

      return matchQ && statusOk && acctOk;
    });
  }, [data, q, status, acctType]);

  const total = filtered.length;

  return (
    <div className="min-h-screen  -50">
      {/* Header */}
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
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white hover: -50"
              type="button"
            >
              <RefreshCcw className="w-4 h-4" />
              Refresh
            </button>
            <button
              onClick={() => downloadCSV(filtered)}
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-white hover: -50"
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
            <div className="border rounded-lg p-3  -50">
              <div className="text-xs text-gray-500">Total filtered</div>
              <div className="text-lg font-semibold">{total}</div>
            </div>
            <div className="border rounded-lg p-3  -50">
              <div className="text-xs text-gray-500">Active</div>
              <div className="text-lg font-semibold">
                {filtered.filter((s) => (s.status ?? "active") === "active").length}
              </div>
            </div>
            <div className="border rounded-lg p-3  -50">
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

      {/* table */}
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className=" -50 text-gray-600">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">User</th>
                  <th className="px-4 py-3 text-left font-medium">Organisation</th>
                  <th className="px-4 py-3 text-left font-medium">Plan</th>
                  <th className="px-4 py-3 text-left font-medium">Type</th>
                  <th className="px-4 py-3 text-left font-medium">Status</th>
                  <th className="px-4 py-3 text-left font-medium">Period</th>
                  {/* <th className="px-4 py-3 text-left font-medium">Stripe</th> */}
                  <th className="px-4 py-3 text-left font-medium">Created</th>
                  <th className="px-4 py-3 text-left font-medium">Updated</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {loading && (
                  <tr>
                    <td colSpan={9} className="px-4 py-10 text-center text-gray-500">
                      <div className="inline-flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Loading…
                      </div>
                    </td>
                  </tr>
                )}

                {!loading && err && (
                  <tr>
                    <td colSpan={9} className="px-4 py-10 text-center text-red-600">
                      {err}
                    </td>
                  </tr>
                )}

                {!loading && !err && filtered.length === 0 && (
                  <tr>
                    <td colSpan={9} className="px-4 py-10 text-center text-gray-500">
                      No subscriptions found.
                    </td>
                  </tr>
                )}

                {!loading &&
                  !err &&
                  filtered.map((s) => {
                    const nowISO = new Date().toISOString();
                    const dte =
                      (typeof s.daysUntilExpiry === "number" ? s.daysUntilExpiry : undefined) ??
                      daysBetween(nowISO, s.currentPeriodEnd);
                    const totalPeriodDays = Math.max(
                      1,
                      daysBetween(s.currentPeriodStart, s.currentPeriodEnd)
                    );
                    const elapsed = Math.min(
                      totalPeriodDays,
                      Math.max(0, daysBetween(s.currentPeriodStart, nowISO))
                    );
                    const pct = Math.round((elapsed / totalPeriodDays) * 100);

                    return (
                      <tr key={s._id} className="hover: -50/60">
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-900">{s.userName || "—"}</div>
                          <div className="text-gray-600">{s.userEmail || "—"}</div>
                          <div className="mt-1 text-xs text-gray-500">
                            UID: <Copyable label="userId" value={s.userId} />
                          </div>
                        </td>

                        <td className="px-4 py-3">
                          <div className="font-medium">{s.organisation || "—"}</div>
                          <div className="text-xs text-gray-500">Team: {s.teamSize || "—"}</div>
                        </td>

                        <td className="px-4 py-3">
                          <div className="font-medium">{s.planId}</div>
                          <div className="mt-2">
                            <div className="h-2  -200 rounded-full">
                              <div
                                className={`h-2 rounded-full ${
                                  dte <= 3
                                    ? "bg-red-500"
                                    : dte <= 7
                                    ? "bg-yellow-500"
                                    : "bg-emerald-500"
                                }`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                              <span>{fmtDate(s.currentPeriodStart)}</span>
                              <span>{fmtDate(s.currentPeriodEnd)}</span>
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                              {dte >= 0 ? `${dte} days left` : `${Math.abs(dte)} days overdue`}
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-3">
                          <AccountTypeBadge accountType={s.accountType} planId={s.planId} />
                        </td>

                        <td className="px-4 py-3">
                          <StatusBadge status={s.status} />
                        </td>

                        <td className="px-4 py-3">
                          <div className="text-xs">
                            <div>
                              Start: <span className="font-medium">{fmtDate(s.currentPeriodStart)}</span>
                            </div>
                            <div>
                              End: <span className="font-medium">{fmtDate(s.currentPeriodEnd)}</span>
                            </div>
                          </div>
                        </td>

                        {/* <td className="px-4 py-3">
                          <div className="flex flex-col gap-1">
                            <Copyable label="customer" value={s.stripeCustomerId} />
                            <Copyable label="subscription" value={s.stripeSubscriptionId} />
                          </div>
                        </td> */}

                        <td className="px-4 py-3">
                          <div className="text-sm">{fmtDate(s.createdAt)}</div>
                          <div className="text-xs text-gray-500">{timeAgo(s.createdAt)}</div>
                        </td>

                        <td className="px-4 py-3">
                          <div className="text-sm">{fmtDate(s.updatedAt)}</div>
                          <div className="text-xs text-gray-500">{timeAgo(s.updatedAt)}</div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-xs text-gray-500 mt-4">
          Showing {total} {total === 1 ? "result" : "results"}
        </div>
      </div>
    </div>
  );
}
