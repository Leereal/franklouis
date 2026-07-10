import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Constellation from "@/components/Constellation";
import DotNav from "@/components/DotNav";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  metadataBase: new URL("https://franklouis.co.za"),
  title: {
    default:
      "Frank Louis Chartered Accountants | Accounting, Payroll & Tax — Germiston",
    template: "%s | Frank Louis Chartered Accountants",
  },
  description:
    "Frank Louis Chartered Accountants combines chartered expertise with advanced cloud technology — accounting, payroll, tax compliance and SARS debt resolution for businesses and professionals in Germiston and across South Africa.",
  keywords: [
    "chartered accountants Germiston",
    "accounting services South Africa",
    "SARS debt help",
    "tax practitioner Meadowdale",
    "payroll services",
    "bookkeeping",
    "accountants for doctors and dentists",
  ],
  openGraph: {
    title: "Frank Louis Chartered Accountants",
    description:
      "Accounting, Payroll, Tax & SARS Debt Resolution — Germiston, South Africa.",
    url: "https://franklouis.co.za",
    siteName: "Frank Louis Chartered Accountants",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Constellation />
        <Navbar />
        <DotNav />
        <main className="relative z-10">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
