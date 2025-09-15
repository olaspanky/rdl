import React from "react";
import { Loader2 } from "lucide-react";
import { Subscription, fmtDate, daysBetween, timeAgo } from "../utils/subscription-utils";
import { StatusBadge, AccountTypeBadge, Copyable } from "../utils/subscription-utils";

interface SubscriptionTableProps {
  data: Subscription[];
  loading: boolean;
  error: string | null;
  total: number;
}

export default function SubscriptionTable({ data, loading, error, total }: SubscriptionTableProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-10">
      <div className="bg-white border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left font-medium">User</th>
                <th className="px-4 py-3 text-left font-medium">Organisation</th>
                <th className="px-4 py-3 text-left font-medium">Plan</th>
                <th className="px-4 py-3 text-left font-medium">Type</th>
                <th className="px-4 py-3 text-left font-medium">Status</th>
                <th className="px-4 py-3 text-left font-medium">Period</th>
                <th className="px-4 py-3 text-left font-medium">Created</th>
                <th className="px-4 py-3 text-left font-medium">Updated</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {loading && (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-gray-500">
                    <div className="inline-flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Loading…
                    </div>
                  </td>
                </tr>
              )}

              {!loading && error && (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-red-600">
                    {error}
                  </td>
                </tr>
              )}

              {!loading && !error && data.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-gray-500">
                    No subscriptions found.
                  </td>
                </tr>
              )}

              {!loading && !error && data.map((s) => (
                <SubscriptionRow key={s._id} subscription={s} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-xs text-gray-500 mt-4">
        Showing {total} {total === 1 ? "result" : "results"}
      </div>
    </div>
  );
}

function SubscriptionRow({ subscription: s }: { subscription: Subscription }) {
  const nowISO = new Date().toISOString();
  const dte = (typeof s.daysUntilExpiry === "number" ? s.daysUntilExpiry : undefined) ??
              daysBetween(nowISO, s.currentPeriodEnd);
  const totalPeriodDays = Math.max(1, daysBetween(s.currentPeriodStart, s.currentPeriodEnd));
  const elapsed = Math.min(totalPeriodDays, Math.max(0, daysBetween(s.currentPeriodStart, nowISO)));
  const pct = Math.round((elapsed / totalPeriodDays) * 100);

  return (
    <tr key={s._id} className="hover:bg-gray-50/60">
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
          <div className="h-2 bg-gray-200 rounded-full">
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
}