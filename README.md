# ComputeZap — Free Online Calculators

**Live:** https://www.computezap.com
**GitHub:** https://github.com/Sajawaljutt14/computezap
**Goal:** $10,000/month via Google AdSense

---

## Project Overview

ComputeZap is an Astro-based static site with 426+ pages of free calculators and unit converters. Built for organic Google traffic with a focus on low-KD keywords and programmatic SEO.

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
│       ├── [tool-name].astro      ← 36 individual tool pages
│       ├── [kg]-kg-to-lbs.astro   ← 56 programmatic pages
│       ├── [x]-percent-off-[y].astro ← 308 programmatic pages
│       ├── [n]-days-from-today.astro ← 31 programmatic pages
│       └── [feet]-feet-[inches]-inches-in-cm.astro ← height pages
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

**Key CSS rule:** All shared classes live in `global.css`. Only truly unique CSS goes in `<style is:global>` per page.

**Key JS rule:** Always use `<script is:inline>` — regular `<script>` is module-scoped in Astro and can't access global onclick handlers.

---

## Pages Live (426 total)

| Category | Pages |
|----------|-------|
| Unit Converters | 12 tools |
| Math Calculators | 4 tools |
| Finance Calculators | 5 tools |
| Time & Date Tools | 9 tools |
| Homepage + Directory | 7 pages |
| Programmatic (kg/height/percent/days) | 380+ pages |

---

## Roadmap

See `progress.md` for full phase-by-phase plan.

| Phase | Status |
|-------|--------|
| Phase 1 — Design Standard v2 (35 pages) | ✅ Done |
| Phase 2 — Batch 7 (7 simple converters) | ⏳ Next |
| Phase 3 — Batch 8 (binary + military time) | ⏳ Pending |
| Phase 4 — Programmatic expansion | ⏳ Pending |
| Phase 5 — High-CPC finance tools | ⏳ Pending |

---

*Last updated: June 26, 2026*
