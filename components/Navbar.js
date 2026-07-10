"use client";

import { useEffect, useState } from "react";
import { Facebook, Linkedin, X } from "lucide-react";
import Logo from "./Logo";
import { SITE } from "./siteData";

const LINKS = [
  ["#home", "Home"],
  ["#services", "Services"],
  ["#tax-resolution", "SARS Debt Relief"],
  ["#healthcare", "Doctors & Dentists"],
  ["#affiliations", "Affiliations"],
  ["#contact", "Contact Us"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-base/85 backdrop-blur-md" : "bg-gradient-to-b from-base/60 to-transparent"
        }`}
      >
        <div className="container-site flex h-20 items-center justify-between">
          <a href="#home" aria-label="Frank Louis Chartered Accountants — home">
            <Logo />
          </a>
          <div className="flex items-center gap-6">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hidden text-white/70 transition-colors hover:text-accent sm:block"
            >
              <Facebook size={18} />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden text-white/70 transition-colors hover:text-accent sm:block"
            >
              <Linkedin size={18} />
            </a>
            {/* two-bar burger, as on the reference site */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="group flex h-10 w-10 flex-col items-end justify-center gap-[7px]"
            >
              <span className="h-[2px] w-8 bg-white transition-all group-hover:bg-accent" />
              <span className="h-[2px] w-6 bg-white transition-all group-hover:w-8 group-hover:bg-accent" />
            </button>
          </div>
        </div>
      </header>

      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* slide-in accent-blue panel, as on the reference site */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[340px] flex-col bg-accent px-10 py-8 transition-transform duration-500 ease-[cubic-bezier(.7,0,.3,1)] sm:max-w-[380px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Site menu"
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="self-end p-2 text-base/80 transition-colors hover:text-base"
        >
          <X size={26} />
        </button>
        <nav className="mt-14 flex flex-col gap-1">
          {LINKS.map(([href, label], i) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 45}ms` : "0ms" }}
              className={`py-3 text-lg font-normal tracking-wide text-base transition-all duration-500 hover:pl-2 hover:opacity-70 ${
                open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="mt-auto border-t border-base/25 pt-6 text-sm font-normal text-base/80">
          <p>{SITE.phoneDisplay}</p>
          <p className="mt-1">{SITE.email}</p>
        </div>
      </aside>
    </>
  );
}
