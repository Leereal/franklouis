import Image from "next/image";
import {
  Handshake,
  CalendarClock,
  Scale,
  MessagesSquare,
  Puzzle,
  HeartPulse,
  Check,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import PlexusGraphic from "@/components/PlexusGraphic";
import ServicesTabs from "@/components/ServicesTabs";
import ContactForm from "@/components/ContactForm";
import { SITE, PARTNERS, waLink } from "@/components/siteData";

const RELIEF = [
  {
    icon: CalendarClock,
    title: "Deferral Requests",
    text: "Temporary relief based on your circumstances to ease the pressure.",
  },
  {
    icon: Handshake,
    title: "Payment Arrangements",
    text: "Affordable, structured repayment plans designed to suit your cash flow.",
  },
  {
    icon: Scale,
    title: "Compromise Applications",
    text: "Negotiate reduced debt settlements with SARS where applicable.",
  },
  {
    icon: MessagesSquare,
    title: "Professional SARS Engagements",
    text: "We handle all communication and negotiations with SARS on your behalf.",
  },
  {
    icon: Puzzle,
    title: "Tailored Solutions",
    text: "Every case is unique. We provide customised strategies for the best possible outcome.",
  },
  {
    icon: HeartPulse,
    title: "Peace of Mind",
    text: "We take the stress off your shoulders so you can focus on what matters most.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section
        id="home"
        className="snap-sec relative flex min-h-screen items-center pb-16 pt-32 lg:pt-20"
      >
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <div className="animate-fadeup">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-accent">
              For Small &amp; Medium Businesses
            </p>
            <h1 className="heading-xl">
              Accounting That Powers
              <br />
              <span className="accent font-light">Business Growth</span>
            </h1>
            <p className="mt-8 max-w-xl text-[15px] font-light leading-[1.9] text-white/80">
              Accounting, Bookkeeping, Payroll, Tax, Compliance and Advisory
              services delivered with precision by qualified Chartered
              Accountants. Stay compliant, gain financial clarity, and focus on
              growing your business.
            </p>
            <a href="#services" className="btn-line mt-10">
              Learn More
            </a>
          </div>
          <div
            className="hidden justify-center animate-fadeup lg:flex"
            style={{ animationDelay: "200ms" }}
          >
            <PlexusGraphic />
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section
        id="services"
        className="snap-sec relative flex items-center py-24 lg:min-h-screen"
      >
        <div className="container-site">
          <Reveal>
            <div className="text-center">
              <h2 className="heading-lg">
                Complete Accounting, <span className="accent">Under One Roof</span>
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-[15px] font-light leading-[1.9] text-white/80">
                Whether it&apos;s accounting, bookkeeping, payroll processing,
                tax, compliance and advisory — we provide seamless support
                under one roof, helping your business stay compliant, efficient
                and growth focused.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-14">
              <ServicesTabs />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SARS DEBT RELIEF ============ */}
      <section
        id="tax-resolution"
        className="snap-sec relative flex items-center py-24 lg:min-h-screen"
      >
        <div className="container-site">
          <Reveal>
            <div className="text-center">
              <h2 className="heading-lg">
                Struggling with <span className="accent">SARS Debt?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] font-light leading-relaxed text-white/75">
                We specialise in resolving tax problems and helping businesses
                and individuals regain control. Let our expertise work for you.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {RELIEF.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="flex gap-5">
                  <r.icon
                    size={44}
                    strokeWidth={1}
                    className="shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-[16px] font-medium tracking-wide text-white">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] font-light leading-relaxed text-white/65">
                      {r.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-16 text-center">
              <p className="text-lg font-light tracking-wide text-white">
                Don&apos;t let SARS debt hold you back.
              </p>
              <a
                href={waLink("Hi, I need help resolving my SARS debt. Please contact me.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid mt-6"
              >
                Take the First Step Today
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ DOCTORS & DENTISTS ============ */}
      <section
        id="healthcare"
        className="snap-sec relative flex items-center py-24 lg:min-h-screen"
      >
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="heading-lg">
                Accounting for <span className="accent">Doctors &amp; Dentists</span>
              </h2>
              <p className="mt-6 max-w-xl text-[15px] font-light leading-[1.9] text-white/80">
                You focus on patients — we handle the numbers. Our fixed
                monthly package gives healthcare practices a complete finance
                function without the overhead of an in-house team.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Bookkeeping on cloud software (Xero)",
                  "Annual financial statements",
                  "Full payroll for your practice staff",
                  "Tax preparation, planning and submissions",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-4 font-light text-white/85">
                    <Check size={18} strokeWidth={1.5} className="shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="border border-white/15 bg-white/[0.05] p-10 text-center backdrop-blur-sm sm:p-12">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
                All-inclusive fixed fee
              </p>
              <p className="mt-6 flex items-end justify-center gap-2">
                <span className="text-6xl font-extralight tracking-tight text-white">
                  R3 500
                </span>
                <span className="pb-2 text-lg font-light text-white/60">/ month</span>
              </p>
              <p className="mx-auto mt-6 max-w-sm text-[14px] font-light leading-relaxed text-white/70">
                One predictable fee. No surprises. Everything a professional
                practice needs to stay compliant — from bookkeeping to SARS
                submissions.
              </p>
              <a
                href={waLink("Hi, I'm interested in the R3500/month package for medical practices.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid mt-9 w-full sm:w-auto"
              >
                Enquire Now
              </a>
              <p className="mt-5 text-xs font-light text-white/50">
                Also ideal for attorneys, engineers and other professionals — ask us.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ AFFILIATIONS ============ */}
      <section
        id="affiliations"
        className="snap-sec relative flex items-center py-24 lg:min-h-screen"
      >
        <div className="container-site text-center">
          <Reveal>
            <h2 className="heading-lg">Our Affiliations</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] font-light leading-relaxed text-white/75">
              Accredited by the profession&apos;s leading bodies and powered by
              trusted platforms.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {PARTNERS.map((p) => (
                <div
                  key={p.src}
                  className="flex h-28 items-center justify-center rounded-md bg-white px-9 shadow-lg transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.w}
                    height={80}
                    className="h-14 w-auto object-contain sm:h-16"
                  />
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-xl text-xs font-light leading-relaxed text-white/45">
              SAICA Member · CIMA Practising Certificate Holder · Registered Tax
              Practitioner · Xero Blue Partner · SimplePay Payroll
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="snap-sec relative lg:min-h-screen">
        <div className="grid lg:grid-cols-2">
          {/* form panel */}
          <div className="flex items-center bg-panelgray/95 px-6 py-20 backdrop-blur-sm sm:px-12 lg:px-16 lg:py-24">
            <div className="w-full max-w-xl">
              <Reveal>
                <h2 className="text-3xl font-light tracking-wide text-white">
                  Get In Touch
                </h2>
                <ContactForm />
              </Reveal>
            </div>
          </div>
          {/* details + map */}
          <div className="flex flex-col">
            <div className="flex flex-1 items-center bg-accent px-6 py-16 sm:px-12 lg:px-16">
              <div className="text-base">
                <p className="text-lg font-semibold">Germiston, South Africa</p>
                <ul className="mt-4 space-y-3 text-[15px] font-light">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-1 shrink-0" />
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {SITE.address}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="mt-1 shrink-0" />
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Tel / WhatsApp: {SITE.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-1 shrink-0" />
                    <a href={`mailto:${SITE.email}`} className="hover:underline">
                      Email: {SITE.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="mt-1 shrink-0" />
                    Mon – Fri, 08:00 – 17:00
                  </li>
                </ul>
              </div>
            </div>
            <iframe
              title="Map — 92 Essex Street, Meadowdale, Germiston"
              src="https://www.google.com/maps?q=92+Essex+Street,+Meadowdale,+Germiston,+1401&output=embed"
              className="h-[340px] w-full border-0 lg:h-[52vh]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
