# ComputeZap — Progress Tracker

**Goal:** $10,000/month via Google AdSense
**Stack:** Astro + Vercel (free tier)
**Domain:** computezap.com — Namecheap, expires June 23 2027
**GitHub:** https://github.com/Sajawaljutt14/computezap
**GA4:** G-HKNEP4FGVH

---

## Site Status (July 1, 2026)

| Item | Status |
|---|---|
| Astro project setup | ✅ Done |
| Global CSS design system | ✅ Done |
| Layout component | ✅ Done |
| Homepage (index.astro) | ✅ Done |
| Domain purchase | ✅ Done |
| Vercel deploy | ✅ Done (auto-deploy on main push) |
| Google AdSense apply | ⏳ Pending (target: Oct 2026) |
| Design Standard v2 rollout | ✅ Done (35/35 pages) |
| Category URL restructure | ✅ Done (52 pages moved into `/converters/`, `/finance/`, `/calculators/`, `/date-time/`, `/health/` subfolders, old URLs 301-redirect) |

---

## Pages Live — 646 Total (build output, June 30 – July 1, 2026)

### New Tools Added Since Last Update
| Page | URL | Status |
|---|---|---|
| Concrete Calculator | `/calculators/concrete-calculator` | ✅ |
| Binary to Text Translator | `/calculators/binary-to-text` | ✅ |
| BAC Calculator | `/health/bac-calculator` | ✅ |
| Military Time Converter | `/date-time/military-time-converter` | ✅ |
| APR Calculator | `/finance/apr-calculator` | ✅ |
| Roth IRA Calculator | `/finance/roth-ira-calculator` | ✅ |
| 401K Calculator | `/finance/401k-calculator` | ✅ |
| Savings Calculator | `/finance/savings-calculator` | ✅ |
| Compound Interest Calculator | `/finance/compound-interest-calculator` | ✅ |
| Cost of Living Calculator | `/finance/cost-of-living-calculator` | ✅ |
| Amortization Calculator | `/finance/amortization-calculator` | ✅ |
| Personal Loan Calculator | `/finance/personal-loan-calculator` | ✅ |
| Car Payoff Calculator | `/finance/car-payoff-calculator` | ✅ (expanded content + dynamic summary + HowTo schema + a11y, Jul 1) |
| Fraction Calculator | `/calculators/fraction-calculator` | ✅ (add/subtract/multiply/divide, Jul 1) |

**Note:** All tool pages now live under category subdirectories (`/converters/`, `/finance/`, `/calculators/`, `/date-time/`, `/health/`) so the live URL itself shows the category (not just breadcrumb schema). Old flat URLs (e.g. `/atm-to-bar`) permanently redirect (301) to the new category URL via `astro.config.mjs` → `redirects`.

### Earlier Tool Pages (pre-June 26)

### Tool Pages (45)
| Page | URL | Status |
|---|---|---|
| Homepage | `/` | ✅ |
| cm to Inches | `/cm-to-inches` | ✅ |
| kg to lbs | `/kg-to-lbs` | ✅ |
| km to Miles | `/km-to-miles` | ✅ |
| Meters to Feet | `/meters-to-feet` | ✅ |
| Yards to Meters | `/yards-to-meters` | ✅ |
| Celsius to Fahrenheit | `/celsius-to-fahrenheit` | ✅ |
| Fahrenheit to Celsius | `/fahrenheit-to-celsius` | ✅ |
| Liters to Gallons | `/liters-to-gallons` | ✅ |
| Oz to Quarts | `/oz-to-quarts` | ✅ |
| Cups to Tablespoons | `/cups-to-tablespoons` | ✅ |
| Cups to Gallons | `/cups-to-gallons` | ✅ |
| Knots to MPH | `/knots-to-mph` | ✅ |
| Ounces in a Pound | `/ounces-in-a-pound` | ✅ |
| MB to GB | `/mb-to-gb` | ✅ |
| Percentage Calculator | `/percentage-calculator` | ✅ |
| Percent Off Calculator | `/percent-off-calculator` | ✅ |
| Percentage Increase | `/percentage-increase-calculator` | ✅ |
| Percentage Decrease | `/percentage-decrease-calculator` | ✅ |
| Margin Calculator | `/margin-calculator` | ✅ |
| Markup Calculator | `/markup-calculator` | ✅ |
| Reverse Sales Tax | `/reverse-sales-tax-calculator` | ✅ |
| Mortgage Payoff | `/mortgage-payoff-calculator` | ✅ |
| Biweekly Mortgage | `/biweekly-mortgage-calculator` | ✅ |
| CD Calculator | `/cd-calculator` | ✅ |
| Debt Snowball | `/debt-snowball-calculator` | ✅ |
| Pythagorean Theorem | `/pythagorean-theorem-calculator` | ✅ |
| Decimal to Fraction | `/decimal-to-fraction` | ✅ |
| Square Footage | `/square-footage-calculator` | ✅ |
| Time to Decimal | `/time-to-decimal-calculator` | ✅ |
| Days From Today | `/days-from-today` | ✅ |
| Hours in a Month | `/hours-in-a-month` | ✅ |
| Hours in a Year | `/hours-in-a-year` | ✅ |
| Minutes in a Day | `/minutes-in-a-day` | ✅ |
| Seconds in a Year | `/seconds-in-a-year` | ✅ |
| Weeks in a Year | `/weeks-in-a-year` | ✅ |

### Programmatic Pages (381 auto-generated)
| File | Pages | Status |
|---|---|---|
| `[n]-days-from-today.astro` | 31 pages | ✅ |
| `[x]-percent-off-[y].astro` | 308 pages | ✅ |
| `[kg]-kg-to-lbs.astro` | 56 pages | ✅ |
| `[feet]-feet-[inches]-inches-in-cm.astro` | ~many | ✅ |
| `[yards]-yards-to-meters.astro` | ~many | ✅ |
| `[mb]-mb-to-gb.astro` | ~many | ✅ |

### Directory Pages
| Page | Status |
|---|---|
| `/discount-pages` | ✅ |
| `/kg-pages` | ✅ |
| `/height-pages` | ✅ |
| `/yards-pages` | ✅ |
| `/mb-pages` | ✅ |

---

## Roadmap — Next Phases

### ✅ Phase 1 — DONE (Batches 1–6)
Design Standard v2 rollout — 35 pages rewritten. All tool pages live.

### ✅ Phase 2 — DONE — Batch 7 (Simple converters)
Oz to Pint, Gallons to Liters, Quart to Gallon, Bar to PSI, ATM to Bar, MPH to Knots, Hours in a Week — all built.

### ✅ Phase 3 — DONE — Batch 8 (Binary + Military Time)
Binary to Text Translator, Military Time Converter — both built.

### ✅ Phase 4 — DONE — Programmatic Expansion
days-from-today, kg-to-lbs, mb-to-gb, yards-to-meters, height — all expanded (580+ programmatic pages).

### ✅ Phase 5 — DONE — High-CPC Finance Expansion
APR, Roth IRA, 401K, Savings, Amortization, Cost of Living, Personal Loan, Car Payoff — all built.

### ✅ Phase 5.5 — DONE — Category URL Restructure (Jun 30, 2026)
52 pages moved from flat URLs into `/converters/`, `/finance/`, `/calculators/`, `/date-time/`, `/health/` so the live URL (not just schema) shows category. Old URLs 301-redirect via `astro.config.mjs`.

---

### 🔄 Phase 6 — Hard KD / High Volume (IN PROGRESS)
**Build authority first, then tackle these**

| Tool | Volume | KD | Status |
|------|--------|----|--------|
| Concrete Calculator | 550K | 40 | ✅ Done |
| BAC Calculator | 201K | 43 | ✅ Done |
| Compound Interest | 673K | 61 | ✅ Done |
| Fraction Calculator | 301K | 43 | ✅ Done (Jul 1, 2026) |
| Tire Size Calculator | 135K | 44 | ⏳ Next |
| Body Fat Calculator | 74K | 61 | ⏳ |
| Mortgage Calculator | 2.74M | 76 | ⏳ |
| GPA Calculator | 823K | 64 | ⏳ |
| BMI Calculator | 2.74M | 74 | ⏳ (very hard) |

---

## Revenue Projection

| Time | Traffic | RPM Mix | Est. Monthly Revenue |
|------|---------|---------|---------------------|
| 6 months | 1K–10K/mo | — | Pre-AdSense |
| 12 months | 20K–100K/mo | $8–12 avg | $160–$1,200 |
| 18 months | 100K–500K/mo | $15–20 avg | $1,500–$10,000 |

**Target:** 500K monthly visitors @ $20 avg RPM = **$10,000/month**

**Best combo:** Unit Converters (volume) + Financial Calculators (CPC)

---

## SEO Scores (June 2026 estimate)

| Signal | Score |
|--------|-------|
| Content quality | 9/10 |
| Technical SEO | 9.5/10 |
| Keyword targeting | 9/10 |
| Programmatic SEO | 8.5/10 |
| Domain authority | 2/10 (new domain — normal) |
| Brand signals | 6/10 (brand search #1 ✅) |

---

## Design Standard v2 — Layout Pattern

```
.page-hero          → breadcrumb + H1 + subtitle
.calc-center        → max-width:620px — calculator card
  .card             → mode toggle + inputs + presets + result-hero + stats-row
.content-wrap       → max-width:900px — content cards
  .card             → formula, reference table, FAQ, related tools
```

**CSS Rule:** All shared classes go in `global.css`. Only truly unique CSS in `<style is:global>`.
**JS Rule:** Always `<script is:inline>` — regular script is module-scoped in Astro.

---

*Last updated: July 1, 2026 | Total pages: 646 | Build: ✅ Zero errors*
