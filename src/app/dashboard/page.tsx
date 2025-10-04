"use client";

import React, { useEffect, useMemo, useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || ""; 


function getAuthToken() {
  try {
    return localStorage.getItem("token") || localStorage.getItem("accessToken") || null;
  } catch {
    return null;
  }
}

interface CurrencyOptions {
  amount: number | null | undefined;
  curr?: string;
}

function currency(amount: number | null | undefined, curr: string = "usd"): string {
  if (amount == null) return "—";
  try {
    return new Intl.NumberFormat(undefined, { style: "currency", currency: curr.toUpperCase() }).format(amount);
  } catch {
    return `${amount} ${curr.toUpperCase()}`;
  }
}

function dt(s?: string | null) {
  if (!s) return "—";
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString();
}

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const [overview, setOverview] = useState<any>(null);
  const [savingAcct, setSavingAcct] = useState(false);

 
  const [accountType, setAccountType] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [role, setRole] = useState("");
  const [teamSize, setTeamSize] = useState("");

  const token = getAuthToken();

  async function fetchOverview() {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(`${API_BASE}/billing/users/overview`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
      const data = await res.json();
      setOverview(data);


      setAccountType(data?.account?.accountType || "");
      setOrganisation(data?.account?.organisation || "");
      setRole(data?.account?.role || "");
      setTeamSize(data?.account?.teamSize || "");
    } catch (e: any) {
      setErr(e?.message || "Failed to load");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOverview();

  }, []);

  const plan = overview?.plan || null;
  const invoices = overview?.invoices || [];
  const upcoming = overview?.upcomingInvoice || null;
  const pm = overview?.paymentMethod || null;
  const customer = overview?.customer || null;
  const portalUrl = overview?.portalUrl || null;

  const planTitle = useMemo(() => {
    if (!plan) return "No active subscription";
    const catItem = (overview?.catalog || []).find((c: any) => c.priceId === plan.priceId) || null;
    return catItem?.nickname || catItem?.product?.name || plan?.product?.name || plan?.planId || "Current Plan";
  }, [overview, plan]);

  async function saveAccount(e: React.FormEvent) {
    e.preventDefault();
    setSavingAcct(true);
    setErr(null);
    try {
      const res = await fetch(`${API_BASE}/billing/account`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ accountType, organisation, role, teamSize }),
      });
      if (!res.ok) throw new Error(`Save failed: ${res.status}`);
      await fetchOverview();
    } catch (e: any) {
      setErr(e?.message || "Failed to save");
    } finally {
      setSavingAcct(false);
    }
  }

  function openPortal() {
   
    if (portalUrl) window.open(portalUrl, "_blank");
  }

  return (
    <div style={styles.page}>
      <div style={styles.headerRow}>
        <h1 style={styles.h1}>Billing Dashboard</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            style={styles.secondaryBtn}
            onClick={fetchOverview}
            disabled={loading}
            aria-busy={loading}
            title="Refresh"
          >
            {loading ? "Refreshing…" : "Refresh"}
          </button>
          <button
            style={styles.primaryBtn}
            onClick={openPortal}
            disabled={!portalUrl}
            title="Open Stripe Billing Portal"
          >
            Manage Billing
          </button>
        </div>
      </div>

      {err && <div style={styles.errorBox}>⚠️ {err}</div>}

      {/* Top Grid: Plan • Payment Method • Customer */}
      <div style={styles.grid3}>
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Current Plan</h2>
          {loading ? (
            <Skeleton lines={4} />
          ) : plan ? (
            <>
              <div style={styles.kv}>
                <span style={styles.k}>Plan</span>
                <span style={styles.v}>{planTitle}</span>
              </div>
              <div style={styles.kv}>
                <span style={styles.k}>Status</span>
                <span style={styles.badge(plan?.status)}>{plan?.status || "—"}</span>
              </div>
              <div style={styles.kv}>
                <span style={styles.k}>Price</span>
                <span style={styles.v}>
                  {currency(plan?.unit_amount, plan?.currency)} / {plan?.interval || "—"}
                </span>
              </div>
              <div style={styles.kv}>
                <span style={styles.k}>Period</span>
                <span style={styles.v}>
                  {dt(plan?.current_period_start)} → {dt(plan?.current_period_end)}
                </span>
              </div>
            </>
          ) : (
            <Empty text="No active subscription." />
          )}
        </section>

        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Payment Method</h2>
          {loading ? (
            <Skeleton lines={3} />
          ) : pm ? (
            <>
              <div style={styles.kv}>
                <span style={styles.k}>Card</span>
                <span style={styles.v}>
                  {pm.brand?.toUpperCase()} •••• {pm.last4}
                </span>
              </div>
              <div style={styles.kv}>
                <span style={styles.k}>Expires</span>
                <span style={styles.v}>
                  {pm.exp_month}/{pm.exp_year}
                </span>
              </div>
              <div style={{ fontSize: 12, color: "#667085", marginTop: 8 }}>
                To update your card, click <b>Manage Billing</b>.
              </div>
            </>
          ) : (
            <Empty text="No default payment method found." />
          )}
        </section>

        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Customer</h2>
          {loading ? (
            <Skeleton lines={3} />
          ) : customer ? (
            <>
              <div style={styles.kv}>
                <span style={styles.k}>Name</span>
                <span style={styles.v}>{customer.name || "—"}</span>
              </div>
              <div style={styles.kv}>
                <span style={styles.k}>Email</span>
                <span style={styles.v}>{customer.email || "—"}</span>
              </div>
              <div style={styles.kv}>
                <span style={styles.k}>Tax</span>
                <span style={styles.v}>{customer.tax_exempt || "none"}</span>
              </div>
            </>
          ) : (
            <Empty text="No customer profile yet." />
          )}
        </section>
      </div>

      {/* Upcoming Invoice */}
      <section style={styles.card}>
        <h2 style={styles.cardTitle}>Upcoming Invoice</h2>
        {loading ? (
          <Skeleton lines={2} />
        ) : upcoming ? (
          <div style={styles.kvRow}>
            <div style={styles.kv}>
              <span style={styles.k}>Amount Due</span>
              <span style={styles.v}>{currency(upcoming.amount_due, upcoming.currency)}</span>
            </div>
            <div style={styles.kv}>
              <span style={styles.k}>Created</span>
              <span style={styles.v}>{dt(upcoming.created)}</span>
            </div>
          </div>
        ) : (
          <Empty text="No upcoming invoice." />
        )}
      </section>

      {/* Invoices Table */}
      <section style={styles.card}>
        <h2 style={styles.cardTitle}>Recent Invoices</h2>
        {loading ? (
          <Skeleton lines={4} />
        ) : invoices?.length ? (
          <div style={{ overflowX: "auto" }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Created</th>
                  <th>Period</th>
                  <th>Links</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv: any) => (
                  <tr key={inv.id}>
                    <td>{inv.number || inv.id}</td>
                    <td>
                      <span style={styles.badge(inv.status)}>{inv.status}</span>
                    </td>
                    <td>
                      {currency(inv.amount_paid || inv.amount_due, inv.currency)}
                    </td>
                    <td>{dt(inv.created)}</td>
                    <td>
                      {dt(inv.period_start)} → {dt(inv.period_end)}
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: 8 }}>
                        {inv.hosted_invoice_url && (
                          <a href={inv.hosted_invoice_url} target="_blank" rel="noreferrer">
                            View
                          </a>
                        )}
                        {inv.invoice_pdf && (
                          <a href={inv.invoice_pdf} target="_blank" rel="noreferrer">
                            PDF
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Empty text="No invoices yet." />
        )}
      </section>

      {/* Account Metadata Form */}
      <section style={styles.card}>
        <h2 style={styles.cardTitle}>Account Details</h2>
        <form onSubmit={saveAccount} style={styles.form}>
          <div style={styles.formRow}>
            <label style={styles.label}>Account Type</label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              style={styles.input}
            >
              <option value="">Select…</option>
              <option value="non-enterprise">Non-Enterprise</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
          <div style={styles.formRow}>
            <label style={styles.label}>Organisation</label>
            <input
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
              style={styles.input}
              placeholder="Company / Group"
            />
          </div>
          <div style={styles.formRow}>
            <label style={styles.label}>Role</label>
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={styles.input}
              placeholder="Your role"
            />
          </div>
          <div style={styles.formRow}>
            <label style={styles.label}>Team Size</label>
            <input
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              style={styles.input}
              placeholder="e.g., 1-10"
            />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button type="submit" style={styles.primaryBtn} disabled={savingAcct}>
              {savingAcct ? "Saving…" : "Save"}
            </button>
            <button type="button" style={styles.secondaryBtn} onClick={fetchOverview} disabled={loading}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

/* ---------- Small components ---------- */

function Skeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} style={styles.skel} />
      ))}
    </div>
  );
}

function Empty({ text = "No data." }: { text?: string }) {
  return <div style={{ color: "#667085", fontSize: 14 }}>{text}</div>;
}

/* ---------- Styles ---------- */

const styles: Record<string, any> = {
  page: {
    padding: 24,
    maxWidth: 1100,
    margin: "0 auto",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  h1: { fontSize: 24, margin: 0 },
  primaryBtn: {
    background: "#325B82",
    color: "white",
    border: "none",
    padding: "10px 14px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 600,
  },
  secondaryBtn: {
    background: "white",
    color: "#325B82",
    border: "1px solid #D0D5DD",
    padding: "10px 14px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 600,
  },
  errorBox: {
    background: "#FEF3F2",
    color: "#B42318",
    border: "1px solid #FEE4E2",
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 14,
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 16,
    marginBottom: 16,
  },
  card: {
    background: "white",
    border: "1px solid #E4E7EC",
    borderRadius: 12,
    padding: 16,
  },
  cardTitle: {
    margin: 0,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: 700,
  },
  kv: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 0",
    fontSize: 14,
  },
  kvRow: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 16,
  },
  k: { color: "#667085" },
  v: { color: "#0F1728", fontWeight: 600 },
  badge: (status?: string) => ({
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    textTransform: "capitalize",
    background:
      status === "active"
        ? "#EEF7EF"
        : status === "trialing"
        ? "#EFF8FF"
        : status === "past_due" || status === "unpaid"
        ? "#FFF6ED"
        : "#F2F4F7",
    color:
      status === "active"
        ? "#05603A"
        : status === "trialing"
        ? "#026AA2"
        : status === "past_due" || status === "unpaid"
        ? "#B54708"
        : "#344054",
    border: "1px solid #E5E7EB",
  }),
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    fontSize: 14,
  },
  form: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginTop: 8 },
  formRow: { display: "flex", flexDirection: "column", gap: 6 },
  label: { fontSize: 13, color: "#667085" },
  input: {
    border: "1px solid #D0D5DD",
    borderRadius: 10,
    padding: "10px 12px",
    fontSize: 14,
  },
  skel: {
    height: 12,
    background: "linear-gradient(90deg, #F2F4F7 25%, #E4E7EC 37%, #F2F4F7 63%)",
    backgroundSize: "400% 100%",
    animation: "pulse 1.2s ease-in-out infinite",
    borderRadius: 6,
    marginBottom: 8,
  },
};