# Golf Ball Locator Pricing and Cost Laboratory

Mission 3: an interactive, browser-only financial laboratory for the proposed smart golf ball and companion app. The original venture website is not modified.

- Laboratory repository: https://github.com/DaltonOchab/PricingDashboard
- Laboratory URL: https://daltonochab.github.io/PricingDashboard/
- Original venture repository: https://github.com/DaltonOchab/CreativeWebsite.git
- Original venture website: https://daltonochab.github.io/CreativeWebsite/

The original live URL was resolved from the supplied repository homepage and verified, because Student Setup provided only its repository URL.

## Run and publish

Use Node.js 20+ for tests/build. No installation is needed. Native ES modules, CSS, SVG charts and the vendored DOCX 9.6.1 browser library keep the deployed app independent of services and API keys. The DOCX license is in vendor/DOCX-LICENSE. Google Fonts is optional and has system-font fallbacks.

```sh
npm test
npm run build
python3 -m http.server 5174 --directory dist
```

Open http://localhost:5174. Do not use file:// because browser module/data loading requires HTTP. GitHub Actions runs tests, builds dist and deploys to Pages. Set repository Settings → Pages → Source to GitHub Actions. All runtime asset URLs are relative to the repository base. Hash navigation survives refresh.

## Research and assumptions

data/competitor_data.json is an unchanged Mission 1 copy. It contains three competitors and seven offers, checked against the original Excel and Word files in Mission 2. One representative offer per brand is retained; smart and conventional medians are never pooled. Historical prices are dated October 27, 2026. Volvik compare-at fields are explicitly not treated as verified historical regular prices.

seed.js contains 28 proposed costs: 5 researched reference rates, 22 reasoned estimates and 1 illustrative allowance. Published references, checked October 27, 2026, cover Stripe domestic card fees, Apple and Google app distribution, a candidate Nordic radio chip at DigiKey, and BLS developer wages. App development hours are assumptions multiplied by a wage reference, not quoted development prices. Candidate chip pricing does not establish engineering feasibility. Manufacturing, packaging, shipping, insurance, legal, tooling and testing require quotes. No office lease, full-time employee payroll or land acquisition is assumed.

The default is one proposed three-ball starter pack at $52.50, basic app included, and 2,000 assumed annual pack sales. This is not a final price or verified forecast. Original website materials confirm the proposed app/audible-cue concept, but no real product performance or willingness to pay is established.

## Financial conventions

- USD; 12-month operating horizon. Fixed monthly, quarterly, weekly and annual costs multiply by 12, 4, 52 and 1.
- Variable inputs apply per sale/billing cycle, per physical item or percentage of revenue. Product additional variable cost is additive, not a replacement for assigned cost records.
- One-time pack sales use price and cost per pack. Monthly subscriptions assume 12 paid cycles per full-year customer, with no churn, acquisition timing or prorating; annual subscriptions use one cycle. Services use engagements. These alternative models are student scenarios, not documented venture offers.
- Shared fixed overhead is counted once. Allocation by revenue, units or equal shares is for product reporting; zero denominators fall back to equal shares. Product-specific fixed costs remain with their product.
- Break-even uses explicit product mix weights and weighted annual contribution. It is undefined for nonpositive contribution or zero total weights. Single-product units round up. Multi-product counts are a continuous-mix approximation and may imply fractional product quantities; actual feasible orders depend on the mix. Margin of safety is shown only when entered quantities match mix weights and quantity is positive.
- Startup cash is separate. Explicit capital treatment adds amount/useful-life straight-line depreciation, zero salvage. Inventory cash reserves are not expensed again. The app does not provide tax depreciation advice, financing, tax, cash runway, inventory-turnover or startup-payback analysis.
- Price sensitivity holds quantities constant; volume scenarios hold prices and input cost rates constant. Neither predicts demand or capacity changes.

## Review and exports

Risk classification uses transparent teaching criteria: nonpositive weighted contribution is unsustainable; operating loss, negative/zero product contribution, stress-test losses or missing essential cost inputs indicate high risk; other uncertainty or low margin of safety indicates moderate risk. These are not failure probabilities. Stress tests increase ongoing cost inputs by 10% or reduce quantities by 20%.

Every model change invalidates the evaluation signature. Confirmation requires current evaluation, at least 20 characters of student rationale, and acknowledgment of major warnings when present. A risky choice may still be confirmed. DOCX and JSON derive from the same immutable confirmed snapshot. Updated inputs require reevaluation and confirmation before updated downloads. The JSON customerFacing object excludes private financial assumptions; the rest of the JSON and the Word report are private planning documents.

Browser local storage preserves draft, scenario edits and confirmation. Export/import the working JSON for backup across devices. Import validates size, structure, amounts, relationships and frequency types, then clears prior evaluation and confirmation. Storage is not a secure database and can be cleared by the browser. No data is sent to a backend.

## Verification

Run npm test for 17 independent model tests. QA.md records actual browser and report checks. Use ?test=1 for an explicitly labeled disposable workspace in session storage. Test confirmations are marked testOnly in exports and never alter the main workspace. No actual student pricing decision is preconfirmed.

## Source organization

- seed.js: cost assumptions and source register
- model.js: calculations, comparison, validation, risk and snapshot logic
- app.js: controls, charts, persistence, download workflow
- report.js: genuine DOCX document generation
- tests/model.test.mjs: independent arithmetic and decision guard tests

Review editorial assumptions and cost sources when updating research. No Mission 4 work is included.
