# ComputeZap Tool Design Standard — v2 (Hybrid Centered Layout)

> This file is the single source of truth for all tool pages on ComputeZap.
> Every new tool and every updated tool MUST match this standard exactly.

---

## Page Structure (3 Sections, Always in This Order)

```
1. .page-hero       — centered title section
2. .calc-center     — calculator card (max-width: 620px, centered)
3. .content-wrap    — content cards below (max-width: 900px, centered)
```

---

## Section 1 — `.page-hero`

```html
<div class="page-hero">
  <nav><a href="/">Home</a> › Tool Name</nav>
  <h1>Tool Title Here</h1>
  <p>One-line description of what the tool does.</p>
</div>
```

---

## Section 2 — `.calc-center` (Calculator Card)

Required elements **in this order** inside `.card`:

| Order | Element | Required? |
|-------|---------|-----------|
| 1 | `.mode-wrap` — toggle between modes (e.g. kg→lbs / lbs→kg) | If bidirectional |
| 2 | `.input-group` — label + input + suffix span | Always |
| 3 | `.preset-wrap` — quick-value preset buttons | Always |
| 4 | `.calc-btn` — "Convert" button | Always |
| 5 | `.answer-hero` — blue gradient result box | Always |
| 6 | `.stats-row` — 4 stat boxes (2×2 grid) | Always |

```html
<div class="calc-center">
  <div class="card">

    <!-- 1. Mode Toggle (if bidirectional) -->
    <div class="mode-wrap">
      <button class="mode-btn active" id="btn-a">A → B</button>
      <button class="mode-btn" id="btn-b">B → A</button>
    </div>

    <!-- 2. Input -->
    <div class="input-group">
      <label id="inp-lbl">Unit A</label>
      <div class="input-wrap">
        <input type="number" id="amount" value="DEFAULT_VALUE" min="0" step="any" />
        <span class="input-sfx" id="inp-sfx">unit</span>
      </div>
    </div>

    <!-- 3. Preset Buttons -->
    <span class="preset-lbl">Quick values</span>
    <div class="preset-wrap" id="preset-wrap">
      <button class="preset-btn" onclick="setVal(X)">X</button>
      <!-- ... -->
    </div>

    <!-- 4. Convert Button -->
    <button class="calc-btn" id="calc-btn">Convert</button>

    <!-- 5. Answer Hero -->
    <div class="answer-hero" id="answer">
      <div class="a-label" id="ans-label">X unit =</div>
      <div class="a-value" id="ans-value">—</div>
      <div class="a-unit" id="ans-unit">result unit</div>
      <div class="a-sub" id="ans-sub"></div>
    </div>

    <!-- 6. Stats Row (4 boxes, 2×2) -->
    <div class="stats-row" id="stats">
      <div class="stat-box"><span class="stat-lbl" id="s1-lbl">Stat 1</span><span class="stat-val" id="s1-val">—</span></div>
      <div class="stat-box"><span class="stat-lbl" id="s2-lbl">Stat 2</span><span class="stat-val" id="s2-val">—</span></div>
      <div class="stat-box"><span class="stat-lbl" id="s3-lbl">Stat 3</span><span class="stat-val" id="s3-val">—</span></div>
      <div class="stat-box"><span class="stat-lbl" id="s4-lbl">Stat 4</span><span class="stat-val" id="s4-val">—</span></div>
    </div>

  </div>
</div>
```

---

## Section 3 — `.content-wrap` (Content Cards)

Required cards **in this order**:

| Order | Card Content | Required? |
|-------|-------------|-----------|
| 1 | Formula / How it works + `.answer-box` key facts + `.formula-box` | Always |
| 2 | Quick Reference Table (`.ref-tbl`) | Always |
| 3 | How to Convert (detailed) + `.tip-box` + list of common values | Always |
| 4 | "When You Need This" — use cases list | For popular tools |
| 5 | FAQ (`.faq-item` list, 6–8 questions) | Always |
| 6 | Related Converters (`.next-grid` 6 cards) | Always |

---

## Complete CSS (copy this block into every new page's `<style is:global>`)

```css
/* === ComputeZap Standard Tool Layout v2 === */
.page-hero{text-align:center;padding:2rem 1rem 1rem}
.page-hero h1{font-size:1.9rem;font-weight:800;letter-spacing:-.03em;color:#111;margin:0 0 .35rem}
.page-hero p{color:#64748b;font-size:1rem;margin:0}
.page-hero nav{font-size:.82rem;color:#94a3b8;margin-bottom:.75rem}
.page-hero nav a{color:var(--blue);text-decoration:none}

.calc-center{max-width:620px;margin:0 auto;padding:0 1rem 2rem}
.content-wrap{max-width:900px;margin:0 auto;padding:0 1rem 3.5rem}

.card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:1.5rem;margin-bottom:1rem;box-shadow:0 1px 4px rgba(0,0,0,.04)}
.content-card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:1.5rem;margin-bottom:1rem;box-shadow:0 1px 4px rgba(0,0,0,.04)}
.content-card h2{font-size:1.05rem;font-weight:700;color:#111;margin:0 0 .8rem}
.content-card h3{font-size:.95rem;font-weight:700;color:#111;margin:.75rem 0 .4rem}
.content-card p{color:#444;line-height:1.75;font-size:.93rem;margin:0 0 .7rem}
.content-card p:last-child{margin-bottom:0}
.content-card ul{color:#444;line-height:1.85;font-size:.93rem;padding-left:1.25rem;margin:.5rem 0 0}

.mode-wrap{display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-bottom:1.25rem}
.mode-btn{padding:.55rem;font-size:.85rem;font-weight:600;border:1.5px solid #e2e8f0;border-radius:8px;background:#f8fafc;color:#64748b;cursor:pointer;transition:all .15s;text-align:center}
.mode-btn.active{background:var(--blue);color:#fff;border-color:var(--blue)}

.input-group{margin-bottom:.85rem}
.input-group label{display:block;font-size:.82rem;font-weight:600;color:#374151;margin-bottom:.4rem}
.input-wrap{position:relative}
.input-sfx{position:absolute;right:.9rem;top:50%;transform:translateY(-50%);color:#94a3b8;font-weight:600;pointer-events:none;font-size:.9rem}
.input-group input{width:100%;padding:.65rem 3rem .65rem .9rem;border:1.5px solid #e2e8f0;border-radius:8px;font-size:1rem;font-family:inherit;color:#111;transition:border-color .15s;box-sizing:border-box}
.input-group input:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(37,99,235,.1)}

.preset-lbl{font-size:.7rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.5rem;display:block}
.preset-wrap{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1rem}
.preset-btn{background:#fff;color:var(--blue);border:1.5px solid #dbeafe;border-radius:20px;padding:.28rem .75rem;font-size:.82rem;font-weight:700;cursor:pointer;transition:all .15s}
.preset-btn:hover{background:var(--blue);color:#fff;border-color:var(--blue)}

.calc-btn{width:100%;padding:.8rem;background:var(--blue);color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:700;cursor:pointer;transition:background .15s;margin-bottom:1rem}
.calc-btn:hover{background:#1d4ed8}

.answer-hero{background:linear-gradient(135deg,#1d4ed8 0%,#2563eb 60%,#3b82f6 100%);border-radius:14px;padding:1.75rem 1.5rem 1.25rem;text-align:center;margin-bottom:1rem;box-shadow:0 6px 24px rgba(37,99,235,.22);display:none}
.answer-hero.show{display:block}
.a-label{font-size:.68rem;color:rgba(255,255,255,.65);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.4rem;font-weight:700}
.a-value{font-size:2.8rem;font-weight:900;color:#fff;line-height:1;letter-spacing:-.02em}
.a-unit{font-size:1rem;font-weight:600;color:rgba(255,255,255,.8);margin-top:.3rem}
.a-sub{font-size:.85rem;color:rgba(255,255,255,.7);margin-top:.4rem}

.stats-row{display:none;grid-template-columns:1fr 1fr;gap:.55rem}
.stats-row.show{display:grid}
.stat-box{background:#f8fafc;border:1px solid #f1f5f9;border-radius:10px;padding:.85rem .75rem;text-align:center}
.stat-lbl{display:block;font-size:.62rem;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.25rem;font-weight:700}
.stat-val{display:block;font-size:.95rem;font-weight:800;color:#1e293b}

.answer-box{background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:.75rem 1rem;margin:.75rem 0}
.answer-row{display:flex;justify-content:space-between;align-items:center;padding:.35rem 0;border-bottom:1px solid #f1f5f9;font-size:.93rem}
.answer-row:last-child{border-bottom:none}
.answer-lbl{color:#64748b;font-weight:600}
.answer-val{color:#2563eb;font-weight:800}

.formula-box{background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:.85rem 1rem;text-align:center;font-family:monospace;font-weight:800;color:#1e293b;font-size:.95rem;margin:.6rem 0 1rem}

.tip-box{display:flex;gap:.75rem;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:.9rem 1rem;margin:.75rem 0}
.tip-icon{font-size:1.1rem;flex-shrink:0;margin-top:.1rem}
.tip-box p{margin:0;font-size:.875rem;color:#1e40af}

.ref-tbl{width:100%;border-collapse:collapse;font-size:.875rem}
.ref-tbl th{background:#f8fafc;padding:.6rem .85rem;text-align:left;font-size:.68rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:.05em;border-bottom:2px solid #e2e8f0}
.ref-tbl td{padding:.65rem .85rem;border-bottom:1px solid #f3f4f6;color:#374151}
.ref-tbl tr:last-child td{border-bottom:none}
.ref-tbl tbody tr:hover td{background:#f8faff;cursor:pointer}
.ref-tbl a{color:var(--blue);text-decoration:none;font-weight:600}
.ref-tbl a:hover{text-decoration:underline}
.ref-tbl .acc{color:var(--blue);font-weight:700}
.ref-tbl .hi td{background:#eff6ff;font-weight:700}

.faq-item{border-bottom:1px solid #f3f4f6;padding:.9rem 0}
.faq-item:last-child{border-bottom:none;padding-bottom:0}
.faq-item h3{font-size:.9rem;color:#111;margin:0 0 .35rem;font-weight:700}
.faq-item p{color:#555;font-size:.865rem;margin:0;line-height:1.65}

.next-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem}
.next-card{background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:1rem;border-top:3px solid var(--blue);text-decoration:none;display:block}
.next-card:hover{box-shadow:0 4px 12px rgba(0,0,0,.08);text-decoration:none}
.next-tag{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--blue);margin-bottom:.3rem;display:block}
.next-card h3{font-size:.88rem;font-weight:700;color:#111;margin:0 0 .25rem}
.next-card p{font-size:.78rem;color:#64748b;margin:0;line-height:1.5}

@media(max-width:768px){
  .page-hero h1{font-size:1.65rem}
  .a-value{font-size:2.1rem}
  .next-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:480px){.next-grid{grid-template-columns:1fr}}
```

---

## JavaScript Pattern (`<script is:inline>`)

```js
// Always use is:inline — regular <script> is module-scoped in Astro
// Pre-fill default value and call calculate() on page load

var mode = 'a'; // track current mode

// addEventListener (NOT inline onclick) for main controls
document.getElementById('btn-a').addEventListener('click', function() { setMode('a'); });
document.getElementById('btn-b').addEventListener('click', function() { setMode('b'); });
document.getElementById('calc-btn').addEventListener('click', calculate);
document.getElementById('amount').addEventListener('input', calculate);
document.addEventListener('keydown', function(e) { if (e.key === 'Enter') calculate(); });

// Pre-fill on load
document.getElementById('amount').value = DEFAULT_VALUE;
calculate();

function setMode(m) { /* update mode, swap label/suffix, reset, recalculate */ }
function calculate() { /* read input, compute, update DOM */ }
function setVal(v) { document.getElementById('amount').value = v; calculate(); }
```

---

## New Tool Checklist

Use this before marking a tool as done:

- [ ] `<style is:global>` — uses the exact CSS block above (copy-paste, no custom classes)
- [ ] `.page-hero` with breadcrumb nav, h1, subtitle p
- [ ] `.calc-center` with `.card` containing all 6 elements in order
- [ ] Mode toggle present (if converter has two directions)
- [ ] Input has label, input-wrap with suffix span
- [ ] Preset buttons (5–9 common values)
- [ ] Convert button (`.calc-btn`)
- [ ] `.answer-hero` hidden by default, shown via `.show` class on calculate
- [ ] `.stats-row` with exactly 4 `.stat-box` items
- [ ] `.content-wrap` with all required content cards
- [ ] Formula card has `.answer-box` key facts + `.formula-box`
- [ ] Reference table has 10–15 rows
- [ ] Tip box present in "How to Convert" card
- [ ] FAQ has 6–8 questions
- [ ] Related converters grid has 6 cards
- [ ] `<script is:inline>` — pre-fills default value, calls calculate() on load
- [ ] Schema: WebApplication + BreadcrumbList + FAQPage
- [ ] `canonical` prop set correctly
- [ ] Tested: result shows immediately on page load

---

## Pages Status

| Page | Status | Updated |
|------|--------|---------|
| yards-to-meters.astro | ✅ Done | 2026-06-25 |
| mb-to-gb.astro | ✅ Done | 2026-06-25 |
| kg-to-lbs.astro | ✅ Done | 2026-06-25 |
| cm-to-inches.astro | ✅ Done | 2026-06-25 |
| km-to-miles.astro | ✅ Done | 2026-06-25 |
| celsius-to-fahrenheit.astro | ✅ Done | 2026-06-25 |
| fahrenheit-to-celsius.astro | ✅ Done | 2026-06-25 |
| meters-to-feet.astro | ✅ Done | 2026-06-25 |
| liters-to-gallons.astro | ⏳ Pending | — |
| oz-to-quarts.astro | ⏳ Pending | — |
| cups-to-tablespoons.astro | ⏳ Pending | — |
| cups-to-gallons.astro | ⏳ Pending | — |
| knots-to-mph.astro | ⏳ Pending | — |
| ounces-in-a-pound.astro | ⏳ Pending | — |
| percentage-calculator.astro | ⏳ Pending | — |
| percent-off-calculator.astro | ⏳ Pending | — |
| percentage-increase-calculator.astro | ⏳ Pending | — |
| percentage-decrease-calculator.astro | ⏳ Pending | — |
| margin-calculator.astro | ⏳ Pending | — |
| markup-calculator.astro | ⏳ Pending | — |
| reverse-sales-tax-calculator.astro | ⏳ Pending | — |
| mortgage-payoff-calculator.astro | ⏳ Pending | — |
| biweekly-mortgage-calculator.astro | ⏳ Pending | — |
| cd-calculator.astro | ⏳ Pending | — |
| debt-snowball-calculator.astro | ⏳ Pending | — |
| pythagorean-theorem-calculator.astro | ⏳ Pending | — |
| decimal-to-fraction.astro | ⏳ Pending | — |
| square-footage-calculator.astro | ⏳ Pending | — |
| time-to-decimal-calculator.astro | ⏳ Pending | — |
| days-from-today.astro | ⏳ Pending | — |
| hours-in-a-month.astro | ⏳ Pending | — |
| hours-in-a-year.astro | ⏳ Pending | — |
| minutes-in-a-day.astro | ⏳ Pending | — |
| seconds-in-a-year.astro | ⏳ Pending | — |
| weeks-in-a-year.astro | ⏳ Pending | — |
