# ComputeZap — Free Online Calculators

**Live:** https://www.computezap.com
**GitHub:** https://github.com/Sajawaljutt14/computezap
**Goal:** $10,000/month via Google AdSense

---

## Project Overview

ComputeZap is an Astro-based static site with 646+ pages of free calculators and unit converters. Built for organic Google traffic with a focus on low-KD keywords and programmatic SEO.

**Stack:** Astro · Vercel (free) · Vanilla JS · Custom CSS design system
**Domain:** computezap.com — Namecheap, expires June 23 2027
**Analytics:** GA4 — G-HKNEP4FGVH

---

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

---

## Project Structure

```
computezap/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          ← Nav + Footer + SEO head
│   └── pages/
│       ├── index.astro            ← Homepage
│       ├── converters/            ← 20 unit converter tool pages
│       ├── finance/                ← 16 finance calculator tool pages
│       ├── calculators/           ← 10 math/utility calculator tool pages
│       ├── date-time/             ← 8 date & time tool pages
│       ├── health/                ← 1 health tool page (BAC)
│       ├── [kg]-kg-to-lbs.astro   ← ~113 programmatic pages
│       ├── [x]-percent-off-[y].astro ← ~285 programmatic pages
│       ├── [n]-days-from-today.astro ← ~31 programmatic pages
│       ├── [mb]-mb-to-gb.astro    ← ~52 programmatic pages
│       ├── [yards]-yards-to-meters.astro ← ~109 programmatic pages
│       └── [feet]-feet-[inches]-inches-in-cm.astro ← ~48 height pages
├── public/
│   ├── styles/
│   │   └── global.css             ← Design system (all shared CSS)
│   ├── favicon.svg
│   └── favicon.ico
├── progress.md                    ← Full roadmap + status tracker
├── ranking-track.md               ← GA4 snapshots + ranking data
├── tomorrow-plan.md               ← Session-by-session task log
├── keyword-research.md            ← 15,000+ keyword analysis
└── DESIGN_STANDARD.md             ← UI/CSS design rules (v2)
```

---

## Design Standard v2 — Layout Pattern

All pages follow this 3-section layout:

```
.page-hero     → breadcrumb + H1 + subtitle (centered)
.calc-center   → max-width 620px — calculator card
.content-wrap  → max-width 900px — reference tables, FAQ, related tools
```

**Key CSS rule:** All shared classes live in `public/styles/global.css` (loaded once via Layout.astro `<link>`). Newer pages add zero local CSS — they use only existing global classes (`.mode-wrap`, `.input-group`, `.answer-hero`, `.stats-row`, `.formula-box`, `.tip-box`, `.faq-item`, `.next-grid`, `.payoff-table`, `.two-col`, etc). Only add a local `<style is:global>` block for something genuinely new to that one page.

**Key JS rule:** Always use `<script is:inline>` — regular `<script>` is module-scoped in Astro and can't access global onclick handlers.

---

## Pages Live (646 total)

URLs include their category in the path (e.g. `/finance/car-payoff-calculator`, `/converters/atm-to-bar`) — old flat URLs 301-redirect to the new ones.

| Category | Pages |
|----------|-------|
| Unit Converters (`/converters/`) | 20 tools |
| Finance Calculators (`/finance/`) | 16 tools |
| Math Calculators (`/calculators/`) | 10 tools |
| Time & Date Tools (`/date-time/`) | 8 tools |
| Health Tools (`/health/`) | 1 tool |
| Homepage + Directory pages | 6 pages |
| Programmatic (kg/mb/yards/height/percent/days) | 580+ pages |

---

## Roadmap

See `progress.md` for full phase-by-phase plan.

| Phase | Status |
|-------|--------|
| Phase 1 — Design Standard v2 (35 pages) | ✅ Done |
| Phase 2 — Batch 7 (7 simple converters) | ✅ Done |
| Phase 3 — Batch 8 (binary + military time) | ✅ Done |
| Phase 4 — Programmatic expansion | ✅ Done |
| Phase 5 — High-CPC finance tools | ✅ Done |
| Phase 5.5 — Category URL restructure | ✅ Done |
| Phase 6 — Hard KD tools (fraction ✅, tire size, BMI, GPA, body fat) | 🔄 In progress |

---

*Last updated: July 1, 2026*
