# ComputeZap — Progress Tracker

**Goal:** $10,000/month via Google AdSense
**Stack:** Astro + Cloudflare Pages (~$15/year total)
**Domain:** computezap.com (buy on Namecheap — coupon NEWCOM679, ~$6.79 first year)

---

## Site Status

| Item | Status |
|---|---|
| Astro project setup | ✅ Done |
| Global CSS design system | ✅ Done |
| Layout component | ✅ Done |
| Homepage (index.astro) | ✅ Done |
| Dev server running | ✅ Done |
| Build (38 pages) | ✅ Zero errors |
| Domain purchase | ⏳ Pending |
| Cloudflare Pages deploy | ⏳ Pending |
| Google AdSense apply | ⏳ Pending |

---

## Pages Built

### Calculator Pages

| Page | URL | Status | Layout Updated |
|---|---|---|---|
| Homepage | `/` | ✅ Done | ✅ |
| Percent Off Calculator | `/percent-off-calculator` | ✅ Done | ✅ New layout |
| Reverse Sales Tax Calculator | `/reverse-sales-tax-calculator` | ✅ Done | ✅ New layout |
| Square Footage Calculator | `/square-footage-calculator` | ✅ Done | ✅ New layout |
| Time to Decimal Calculator | `/time-to-decimal-calculator` | ✅ Done | ✅ New layout |
| CD Calculator | `/cd-calculator` | ✅ Done | ✅ New layout |
| Days From Today | `/days-from-today` | ✅ Done | ✅ New layout |

### Programmatic Pages (Auto-generated)

| File | Pages Generated | Status |
|---|---|---|
| `[n]-days-from-today.astro` | 31 pages (1,2,3...365 days) | ✅ Done |

**31 programmatic URLs:**
`/1-days-from-today` through `/365-days-from-today`
Values: 1,2,3,4,5,6,7,8,9,10,12,14,15,20,21,25,28,30,45,56,60,75,84,90,100,120,150,180,200,270,365

---

## Layout Pattern (All Pages)

All pages now use the same consistent two-column layout:

```
LEFT (sticky, 360px)          RIGHT (content)
─────────────────────         ─────────────────────
• Input fields                • How it works card
• Blue result box             • Formula card
• 2×2 stats grid              • Reference table
• Optional visual             • FAQ (4-8 questions)
  (chart/canvas/bars)         • More calculators
```

**CSS Classes used across all pages:**
`.calc-wrap`, `.calc-left`, `.card`, `.result-box`, `.stats-grid`, `.stat-item`,
`.fld-lbl`, `.fld-wrap`, `.txt-input`, `.fld-pfx`, `.fld-sfx`, `.formula-box`,
`.tip-box`, `.faq-item`, `.ref-tbl`, `.next-grid`, `.next-card`

---

## SEO Done

### Global
- Canonical URLs on every page
- JSON-LD schema on every page (WebApplication + BreadcrumbList + FAQPage)
- Meta title + description optimized per page
- `text-decoration:none` on logo (navbar)

### Per Page SEO
| Page | Schema Types | FAQ Questions |
|---|---|---|
| Homepage | WebSite + ItemList | — |
| Percent Off | WebApplication + BreadcrumbList + FAQPage | 5 |
| Reverse Sales Tax | WebApplication + BreadcrumbList + FAQPage | 8 |
| Square Footage | WebApplication + BreadcrumbList + FAQPage | 4 |
| Time to Decimal | WebApplication + BreadcrumbList + FAQPage | 4 |
| CD Calculator | WebApplication + BreadcrumbList + FAQPage | 5 |
| Days From Today | WebApplication + BreadcrumbList + FAQPage | 4 |
| [n]-days-from-today | WebApplication + 3-level BreadcrumbList + FAQPage | 4 per page |

### Keyword Research
- Analyzed 8 competitor CSVs (15,000+ rows)
- Competitors: inchcalculator.com, coolconversion.com + 6 others
- Full analysis saved in: `keyword-research.md`

---

## Features Per Page

### Percent Off Calculator (`/percent-off-calculator`)
- $ prefix input (original price)
- % suffix input (discount)
- Preset pills: 5%, 10%, 15%, 20%, 25%, 30%, 40%, 50%, 60%, 70%
- Blue result box: Sale Price + You Save
- 2×2 stats: You Save (green), Discount %, Original Price, % Paid
- Visual stacked bar (blue=pay portion, green=save portion)
- Clickable examples table
- 5 FAQ questions

### Reverse Sales Tax Calculator (`/reverse-sales-tax-calculator`)
- $ prefix total input
- % suffix tax rate input
- **30 state pills** (CA, TX, NY, FL, WA, IL, PA, OH, GA, NC, NJ, VA, AZ, TN, CO, MI, IN, MO, MN, NV, SC, AL, LA, MA, KY, WI + OR, NH, MT, DE = 0%)
- Blue result box: Pre-Tax Price + Tax paid
- 2×2 stats: Pre-Tax Price, Tax Amount (red), Tax Rate, Total Paid
- Receipt-style breakdown
- **All 50 US states table** (collapsible — Show All ▼ / Hide ▲)
- 8 FAQ questions (state-specific: TX, TN, WA, LA, no-tax states, VAT)

### Square Footage Calculator (`/square-footage-calculator`)
- 4 shape tabs: Rectangle, Triangle, Circle, L-Shape
- Shape-specific inputs with `ft` suffix
- Blue result box: Total Area (ft²)
- 2×2 stats: Sq Feet, Sq Meters, Sq Yards, Sq Inches
- Live canvas shape diagram
- Formulas by shape (4 formula boxes)
- Common room sizes table

### Time to Decimal Calculator (`/time-to-decimal-calculator`)
- Live clock display (monospace, blue, HH:MM format)
- Hours + Minutes inputs
- Quick minutes grid (0, 5, 10...55 — 4 columns)
- Blue result box: Decimal Hours
- 2×2 stats: Decimal, Time Format, Total Minutes, Total Seconds
- Payroll section: hourly rate → green payroll box (hours × rate = total)
- JS-populated minutes reference table (0-59)

### CD Calculator (`/cd-calculator`)
- Initial Deposit ($ prefix)
- APY % input
- Term (number + months/years select)
- Compounding frequency select (Daily/Monthly/Quarterly/Semi/Annual)
- Blue result box: Total at Maturity + Interest earned
- 2×2 stats: Interest Earned (green), Effective APY, Principal, Total Return %
- Compact canvas chart (balance growth over time)
- vs National Average comparison bars (blue vs gray)
- Current CD Rates 2026 table (7 term lengths)
- 5 FAQ questions

### Days From Today (`/days-from-today`)
- Number input for days
- Blue result box: Date + Day name
- 3-column meta: Weeks, Months, Business Days
- Popular day links (7, 14, 21, 30, 60, 90, 180, 365)
- Common day reference table with links
- 4 FAQ questions

### [n] Days From Today (31 programmatic pages)
- Each page pre-calculates for specific n (e.g. 30-days-from-today)
- Unique H1, title, description, contextual paragraph per page
- 2×2 stats: Calendar Days, Weeks, Business Days, Months
- Today's date row
- Pill-shaped related links
- "Try Another Number" compact card with navigate input
- 3-level BreadcrumbList: Home → Days From Today → {n} Days From Today
- FAQPage with 4 {n}-specific questions
- Unique context paragraphs for: 7,14,21,28,30,45,56,60,75,84,90,100,120,150,180,200,270,365

---

## Bugs Fixed

| Bug | Fix |
|---|---|
| Double `>` after `<Layout schema={schema}>` | Removed extra `>` in all pages |
| 3-column meta label wrapping (CALENDAR DAYS) | Switched to 2×2 `.stats-grid` |
| Logo underline in navbar | Added `text-decoration:none` to `.logo` and `.logo:hover` in global.css |
| `define:vars` not working with `is:inline` | Used hidden `<div data-n={n}>` as data bridge |
| Redundant green biz-box in programmatic pages | Replaced with `.today-row` showing today's date |

---

## Technical Patterns Learned

### Passing Astro variables to inline JS
```html
<!-- In Astro template -->
<div id="__data__" data-n={n} style="display:none"></div>

<!-- In <script is:inline> -->
var n = parseInt(document.getElementById('__data__').getAttribute('data-n'), 10);
```

### Programmatic pages
```javascript
// [n]-days-from-today.astro
export function getStaticPaths() {
  return [1,2,3,...,365].map(n => ({ params: { n: String(n) } }));
}
const { n } = Astro.params;
```

### All JS uses window.addEventListener('load', fn) — no TypeScript

---

## Next Tasks (Priority Order)

### HIGH PRIORITY — Build Now
| Tool | KD | Volume | CPC | Reason |
|---|---|---|---|---|
| Cups to Tablespoons | 15 | 301K | $1.2 | KD 15 + 301K = build immediately |
| Liter to Gallon | 19 | 301K | $1.1 | Same tier |
| Decimal to Fraction | 15 | 200K+ | $0.9 | Very low KD |
| Programmatic % off pages | — | 90K+ | $1.5 | `/30-percent-off-100` etc. |

### MEDIUM PRIORITY
| Tool | KD | Volume | CPC |
|---|---|---|---|
| Debt Snowball Calculator | 29 | 40K | $4-8 |
| Biweekly Mortgage Calculator | 22 | 60K | $5-10 |
| Oz to Quarts | 20 | 301K | $1.0 |
| Height converter programmatic pages | — | 90K each | $0.8 |

### DEPLOYMENT
1. Buy domain: computezap.com on Namecheap (coupon: NEWCOM679, ~$6.79)
2. Push to GitHub
3. Connect Cloudflare Pages (free)
4. Add custom domain in Cloudflare
5. Apply for Google AdSense (need 20-30 pages minimum — already have 38 ✅)

---

## File Structure

```
computezap/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          ← Nav + Footer + SEO head
│   └── pages/
│       ├── index.astro            ← Homepage
│       ├── percent-off-calculator.astro
│       ├── reverse-sales-tax-calculator.astro
│       ├── square-footage-calculator.astro
│       ├── time-to-decimal-calculator.astro
│       ├── cd-calculator.astro
│       ├── days-from-today.astro
│       └── [n]-days-from-today.astro  ← 31 programmatic pages
├── public/
│   └── styles/
│       └── global.css             ← Design system (CSS variables + shared classes)
├── progress.md                    ← This file
├── keyword-research.md            ← Keyword analysis (15,000+ rows)
└── astro.config.mjs
```

---

*Last updated: June 2026 | Total pages: 38 | Build: ✅ Zero errors*
