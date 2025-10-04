import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export type Subscription = {
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


export const fmtDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";

export const daysBetween = (aISO: string, bISO: string) => {
  const a = new Date(aISO).getTime();
  const b = new Date(bISO).getTime();
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
};

export const timeAgo = (iso?: string) => {
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

export const copyText = async (text?: string) => {
  try {
    if (!text) return false;
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

export const toCSV = (rows: Subscription[]) => {
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

export const downloadCSV = (subs: Subscription[]) => {
  const blob = new Blob([toCSV(subs)], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `subscriptions_${new Date().toISOString().slice(0, 19)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

export const fetchSubscriptions = async (apiUrl: string): Promise<Subscription[]> => {
  const token = localStorage.getItem("token") || "";
  const res = await fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!res.ok) throw new Error(`Failed ${res.status}`);
  const payload = await res.json();

  return Array.isArray(payload)
    ? payload
    : payload?.items ??
      payload?.data ??
      payload?.results ??
      [];
};


export function Pill({
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

export const StatusBadge = ({ status }: { status?: Subscription["status"] }) => {
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
 

export const inferAccountTypeFromPlan = (planId: string): "enterprise" | "non-enterprise" => {
    if (/^(Explorer|Program|Platform)_(monthly|yearly)$/.test(planId)) return "enterprise";
    return "non-enterprise";
  };
export const AccountTypeBadge = ({ accountType, planId }: { accountType?: Subscription["accountType"]; planId: string }) => {
  const type = accountType ?? inferAccountTypeFromPlan(planId);
  return type === "enterprise" ? (
    <Pill color="purple">Enterprise</Pill>
  ) : (
    <Pill color="emerald">Non-Enterprise</Pill>
  );
}; 

export const Copyable = ({ label, value }: { label: string; value?: string }) => {
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

