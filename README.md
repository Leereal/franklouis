# Frank Louis Chartered Accountants — Website

A one-page, full-screen website built with **Next.js 14 (App Router)**, **Tailwind CSS** and **Poppins**, following the "digital constellation" design language of the reference site, recoloured to a completely different palette: deep emerald green with gold accents — with a glowing low-poly growth graphic in place of the wireframe hands.

Live domain: https://franklouis.co.za

## Design features
- Deep emerald gradient theme (gold accents) with a drifting constellation background across every section
- Full-screen sections with scroll-snap (desktop) and right-side dot navigation
- Burger menu with a gold slide-in panel (same mechanic as the reference, different colour)
- Sections: Hero · Complete Accounting Under One Roof (tabbed services: Accounting / Payroll / Tax & Compliance / Advisory, each with the full service list) · SARS Debt Relief · Doctors & Dentists (R3 500/m) · Our Affiliations (official partner logos on white cards for correct branding) · Get In Touch (split form / details / map)
- New brand identity: the **ascending constellation** logo mark (rising nodes ending in a summit star) — files in `public/brand/`
- Fully mobile responsive; reduced-motion respected

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production
```bash
npm run build
npm start
```
Deploy easily on **Vercel** (import the repo, point franklouis.co.za DNS at Vercel).

## Customising
- Contact details, WhatsApp, partner logos: `components/siteData.js`
- Colours (emerald base, gold accent): `tailwind.config.js` — change `base`, `accent`, `accentlight`, `accentdark` to re-theme the whole site; SVG hexes live in `components/Logo.js`, `components/Constellation.js`, `components/PlexusGraphic.js`
- Logo: `components/Logo.js` + standalone SVGs in `public/brand/`
- Section content: `app/page.js`

## Client-review changes applied
- Hero headline: "Accounting That Powers Business Growth" for small and medium businesses, with the approved sub-copy
- "Complete accounting, under one roof" used as the services introduction
- Four service categories with the complete detailed lists (Accounting, Payroll, Tax & Compliance, Advisory)
- About section removed
- Official affiliation logos displayed on white cards so brand colours render correctly
- LinkedIn + Facebook social icons in the header and footer — **update `linkedin` in `components/siteData.js` with the firm's real LinkedIn URL**

## Notes
- The contact form opens a pre-filled email draft (no backend needed); the "or WhatsApp us" link and the floating green button open WhatsApp at +27 62 925 6411.
- To wire the form to real inbox delivery later, add an API route or a service like Formspree/Resend.
