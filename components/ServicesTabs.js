"use client";

import { useState } from "react";
import { LineChart, Users, Scale, Compass, Check } from "lucide-react";

const CATEGORIES = [
  {
    key: "accounting",
    label: "Accounting",
    icon: LineChart,
    intro:
      "Accurate books, meaningful reports and complete statutory compliance — the financial foundation your business runs on.",
    items: [
      "Annual Financial Statements Preparation",
      "Full-Service Bookkeeping & Monthly Management Reporting",
      "Dedicated Client Support & Ongoing Financial Guidance",
      "Secure Online Portal for Document Exchange",
      "Procurement & Supplier Payment Support",
      "VAT Return Preparation & Submission",
      "Balance Sheet Reconciliations",
      "Statutory Accounts Preparation",
      "Corporate Income Tax (ITR14) Preparation & Submission",
      "Provisional Tax Return Preparation & Submission",
      "Annual Returns & Regulatory Filings",
      "Compliance Monitoring & Reporting",
    ],
  },
  {
    key: "payroll",
    label: "Payroll",
    icon: Users,
    intro:
      "End-to-end payroll that pays your people correctly and on time — with every SARS and COIDA submission handled.",
    items: [
      "Payroll System Setup & Implementation",
      "End-to-End Payroll Processing",
      "Company-Branded Employee Payslips",
      "PAYE, UIF & SDL (EMP201) Submissions",
      "Biannual EMP501 Reconciliations & Submissions",
      "Annual COIDA Return Preparation & Submission",
      "Secure Employee Self-Service Portal",
      "Payment File Preparation (CSV & Bank Formats)",
      "Payroll Journal Preparation for Accounting Systems",
      "Employment Contract Templates",
      "Expert Payroll Advice & Ongoing Support",
      "Comprehensive Payroll Reports",
    ],
  },
  {
    key: "tax",
    label: "Tax & Compliance",
    icon: Scale,
    intro:
      "From registrations to dispute resolution — proactive tax compliance that keeps you in good standing with SARS.",
    items: [
      "Company Registration & Tax Registrations",
      "SARS Compliance & Tax Advisory",
      "Preparation & Submission of VAT Returns",
      "PAYE, UIF & SDL Returns (EMP201)",
      "Annual Corporate Income Tax Returns (ITR14)",
      "Provisional Tax Returns",
      "Dividends Tax Returns & Submissions",
      "Tax Liability Calculations & Payment Processing",
      "SARS Query Management & Dispute Resolution",
      "Tax Clearance & Compliance Status Assistance",
      "Annual Returns & Regulatory Filings",
      "Ongoing Tax Compliance Monitoring",
    ],
  },
  {
    key: "advisory",
    label: "Advisory",
    icon: Compass,
    intro:
      "CFO-level insight without the CFO overhead — clarity on performance, cash flow and the decisions that grow value.",
    items: [
      "CFO Services",
      "Cash Flow Forecasting & Management",
      "Budgeting & Financial Planning",
      "Business Performance Reviews",
      "Profitability Analysis",
      "Board & Management Reporting",
      "Forecasting & Scenario Planning",
      "Financial Health Checks",
      "Pricing & Cost Analysis",
      "Business Process Improvement",
      "Business Valuations",
      "Due Diligence Support",
    ],
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState("accounting");
  const cat = CATEGORIES.find((c) => c.key === active);

  return (
    <div>
      {/* tab bar */}
      <div
        role="tablist"
        aria-label="Service categories"
        className="flex flex-wrap justify-center gap-3 sm:gap-4"
      >
        {CATEGORIES.map((c) => {
          const isActive = c.key === active;
          return (
            <button
              key={c.key}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${c.key}`}
              id={`tab-${c.key}`}
              onClick={() => setActive(c.key)}
              className={`flex items-center gap-2.5 border px-5 py-3 text-sm tracking-widest transition-all duration-300 sm:px-7 ${
                isActive
                  ? "border-accent bg-accent/15 text-accent shadow-glowaccent"
                  : "border-white/25 text-white/70 hover:border-accent/60 hover:text-white"
              }`}
            >
              <c.icon size={18} strokeWidth={1.4} aria-hidden="true" />
              {c.label}
            </button>
          );
        })}
      </div>

      {/* panel */}
      <div
        key={cat.key}
        role="tabpanel"
        id={`panel-${cat.key}`}
        aria-labelledby={`tab-${cat.key}`}
        className="animate-fadeup mx-auto mt-12 max-w-5xl border border-white/12 bg-white/[0.04] px-6 py-10 backdrop-blur-sm sm:px-12"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <cat.icon size={64} strokeWidth={0.9} className="text-white" aria-hidden="true" />
          <h3 className="text-2xl font-light tracking-wide text-accent">{cat.label}</h3>
          <p className="max-w-2xl text-[14px] font-light leading-relaxed text-white/75">
            {cat.intro}
          </p>
        </div>
        <ul className="mt-9 grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
          {cat.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check size={16} strokeWidth={1.6} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              <span className="text-[14px] font-light leading-relaxed text-white/85">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <a href="#contact" className="btn-line !px-6 !py-2.5 !text-xs">
            Enquire About {cat.label}
          </a>
        </div>
      </div>
    </div>
  );
}
