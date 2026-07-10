"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  ["home", "Home"],
  ["services", "Services"],
  ["tax-resolution", "SARS Debt Relief"],
  ["healthcare", "Doctors & Dentists"],
  ["affiliations", "Affiliations"],
  ["contact", "Contact"],
];

export default function DotNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    SECTIONS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
    >
      {SECTIONS.map(([id, label]) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          title={label}
          className={`block rounded-full border transition-all duration-300 ${
            active === id
              ? "h-3.5 w-3.5 border-accent bg-accent shadow-glowaccent"
              : "h-2.5 w-2.5 border-white/50 bg-transparent hover:border-accent"
          }`}
        />
      ))}
    </nav>
  );
}
