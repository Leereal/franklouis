import { Facebook, Linkedin } from "lucide-react";
import { SITE } from "./siteData";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-base/70 backdrop-blur-sm">
      <div className="container-site flex flex-col items-center justify-between gap-4 py-7 text-xs font-light tracking-wide text-white/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p className="text-center">
          SAICA Member · CIMA Practising Certificate Holder · Registered Tax Practitioner
        </p>
        <span className="flex items-center gap-4">
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition-colors hover:text-accent"
          >
            <Facebook size={16} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent"
          >
            <Linkedin size={16} />
          </a>
        </span>
      </div>
    </footer>
  );
}
