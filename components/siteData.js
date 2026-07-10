export const SITE = {
  name: "Frank Louis Chartered Accountants",
  shortName: "Frank Louis",
  tagline: "Your numbers. Your success. Our priority.",
  phoneDisplay: "+27 62 925 6411",
  phoneTel: "+27629256411",
  whatsapp: "27629256411",
  email: "finance@franklouis.co.za",
  address: "92 Essex Street, Meadowdale, Germiston, 1401",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=92+Essex+Street+Meadowdale+Germiston+1401",
  facebook: "https://www.facebook.com/profile.php?id=61581472933183",
  // TODO: replace with the firm's real LinkedIn page URL when available
  linkedin: "https://www.linkedin.com/",
  established: 2022,
};

export const waLink = (message) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    message || "Hi Frank Louis Chartered Accountants, I'd like to enquire about your services."
  )}`;

export const SERVICES = [
  {
    slug: "accounting",
    title: "Accounting & Bookkeeping",
    short:
      "Accurate, up-to-date books on modern cloud software, so you always know where your business stands.",
    points: [
      "Monthly bookkeeping and ledger management",
      "Cloud accounting on Xero",
      "Management accounts and reporting",
      "Bank reconciliations and fixed asset registers",
    ],
  },
  {
    slug: "financial-statements",
    title: "Financial Statements",
    short:
      "Annual financial statements prepared in line with IFRS for SMEs, ready for banks, SARS and stakeholders.",
    points: [
      "Annual financial statements (IFRS for SMEs)",
      "Independent reviews and compilations",
      "CIPC annual returns and compliance",
      "Statements ready for finance applications",
    ],
  },
  {
    slug: "payroll",
    title: "Payroll Services",
    short:
      "Reliable monthly payroll on SimplePay, from payslips to SARS submissions, so your team is paid right, on time.",
    points: [
      "Monthly payslips and payroll processing",
      "PAYE, UIF and SDL calculations",
      "EMP201 and EMP501 submissions",
      "IRP5 certificates and leave management",
    ],
  },
  {
    slug: "tax",
    title: "Tax Preparation & Planning",
    short:
      "Proactive tax compliance and planning for individuals, companies and trusts, keeping you ahead of deadlines.",
    points: [
      "Income tax returns (individuals & companies)",
      "Provisional tax (IRP6) submissions",
      "VAT registration and VAT201 returns",
      "Tax clearance certificates and planning",
    ],
  },
  {
    slug: "sars-debt",
    title: "SARS Debt Resolution",
    short:
      "Struggling with SARS debt? We negotiate directly with SARS to structure relief that fits your cash flow.",
    points: [
      "Deferral requests for temporary relief",
      "Structured payment arrangements",
      "Compromise applications to reduce debt",
      "Objections, disputes and penalty remission",
    ],
    featured: true,
  },
  {
    slug: "advisory",
    title: "Business Advisory",
    short:
      "More than compliance: practical guidance to help you understand your numbers and grow with confidence.",
    points: [
      "Budgets, forecasts and cash flow planning",
      "Company registrations and structuring",
      "Systems setup and internal controls",
      "One-on-one owner coaching on your numbers",
    ],
  },
];

export const PARTNERS = [
  { src: "/logos/saica.jpg", alt: "SAICA — The South African Institute of Chartered Accountants", w: 220 },
  { src: "/logos/cima.jpg", alt: "CIMA Practising Certificate Holder", w: 200 },
  { src: "/logos/xero.jpg", alt: "Xero Blue Partner", w: 170 },
  { src: "/logos/sars.jpg", alt: "SARS — Registered Tax Practitioner", w: 150 },
  { src: "/logos/simplepay.jpg", alt: "SimplePay — Payroll made simple", w: 110 },
];
