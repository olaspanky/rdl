export type CyclePrice = { planId: string; price: number };

export type Plan = {
  tier: string;
  monthly: CyclePrice;
  yearly: CyclePrice;
  rowsPerMonth: number;
  historyWindow: string;
  recency: string;
  access: string;
  typicalUsers: string;
  costPerRow: number;
};

export const pricingData: {
  nonEnterprise: Plan[];
  enterprise: Plan[];
} = {
  nonEnterprise: [
    {
      tier: "Starter-Lite",
      monthly: { planId: "StarterLite_monthly", price: 100 },
      yearly:  { planId: "StarterLite_yearly",  price: 1200 },
      rowsPerMonth: 1000,
      historyWindow: "4 quarters",
      recency: "T–4 (12-month lag)",
      access: "In-platform; exports disabled",
      typicalUsers: "Learners, course labs",
      costPerRow: 0.1,
    },
    {
      tier: "Student Club",
      monthly: { planId: "StudentClub_monthly", price: 200 },
      yearly:  { planId: "StudentClub_yearly",  price: 2400 },
      rowsPerMonth: 2000,
      historyWindow: "8 quarters",
      recency: "T–4 (12-month lag)",
      access: "In-platform; exports disabled",
      typicalUsers: "Small research groups",
      costPerRow: 0.1,
    },
    {
      tier: "Research Micro",
      monthly: { planId: "ResearchMicro_monthly", price: 400 },
      yearly:  { planId: "ResearchMicro_yearly",  price: 4800 },
      rowsPerMonth: 4000,
      historyWindow: "8 quarters",
      recency: "T–4 (12-month lag)",
      access: "In-platform; exports disabled",
      typicalUsers: "Pilot projects & PoCs",
      costPerRow: 0.1,
    },
    {
      tier: "Research Plus",
      monthly: { planId: "ResearchPlus_monthly", price: 500 },
      yearly:  { planId: "ResearchPlus_yearly",  price: 6000 },
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
      monthly: { planId: "Explorer_monthly", price: 600 },
      yearly:  { planId: "Explorer_yearly",  price: 7200 },
      rowsPerMonth: 10000,
      historyWindow: "16 quarters",
      recency: "T (latest after quarterly release)",
      access: "In-platform analytics; exports disabled",
      typicalUsers: "Department teams starting out",
      costPerRow: 0.06,
    },
    {
      tier: "Program",
      monthly: { planId: "Program_monthly", price: 900 },
      yearly:  { planId: "Program_yearly",  price: 10800 },
      rowsPerMonth: 15000,
      historyWindow: "16 quarters",
      recency: "T (latest after quarterly release)",
      access: "In-platform analytics; exports disabled",
      typicalUsers: "Busy departments / institutes",
      costPerRow: 0.06,
    },
    {
      tier: "Platform",
      monthly: { planId: "Platform_monthly", price: 1200 },
      yearly:  { planId: "Platform_yearly",  price: 14400 },
      rowsPerMonth: 20000,
      historyWindow: "20 quarters",
      recency: "T (latest after quarterly release)",
      access: "In-platform analytics; exports disabled",
      typicalUsers: "Research centres, pharma RWE teams",
      costPerRow: 0.06,
    },
  ],
} as const;
