# Mission 3 quality assurance

October 30, 2026. Tested using disposable data; the real student decision remains unconfirmed.

## Automated checks

17 Node test groups passed: source/schema integrity; independent single-product arithmetic; upward rounding; zero/negative contribution; startup cash/capital separation; percentage/transaction fees; pack normalization; monthly subscriptions; multi-product shared allocation; product-specific expenses; zero volume and mismatched mix; explicit mix and scenario independence; competitor normalization; immutable snapshots/privacy; stale evaluation and acknowledgment guards; invalid imports; full default cost reconciliation.

Default reference: annual revenue $105,000; variable costs $74,455.96; fixed costs including $4,000 depreciation $62,809; modeled operating loss $32,264.96; startup cash $58,175. These are assumed budgets, not forecasts.

## Browser tests actually performed

- Research loads and navigation works.
- Expense search, numerical edits, keyboard slider input, disable/re-enable and restore suggested values.
- Add/delete custom expense; change fixed to variable and per-sale to percentage basis.
- Edit selling price, add/remove product scenario; charts and KPIs update.
- Break-even and sensitivity SVG charts render.
- Switch operating scenarios; save custom scenario; prior edits persist when switching back.
- Competitor normalization at $60 per three-ball pack gives $20 per ball.
- Evaluate decision; high-risk warnings shown; confirmation blocked without acknowledgment.
- Disposable test confirmation accepted only with rationale and acknowledgment.
- Actual DOCX and JSON downloads succeed.
- Changing price after confirmation marks evaluation outdated and disables confirmation and downloads.
- Reload retains draft inputs and outdated state.
- Working JSON download and file-chooser import succeed; import resets review to an unconfirmed draft.
- Desktop 1440×1000 and mobile 390×844 layouts inspected; mobile document width equals viewport.

## Report checks

Downloaded DOCX is a valid ZIP/OOXML package with all ten required headings. Its snapshot ID and student explanation match the JSON. Financial results reconcile; customerFacing excludes private variable-cost fields. The actual downloaded report rendered to nine PDF/PNG pages. Page montage and full-size table/financial/confirmation pages were inspected for layout. Example is labeled TEST SNAPSHOT, not a student decision.

An initial report-module syntax error was found in browser startup and fixed before deployment. A hand-entered expected test number was corrected after independently summing the per-pack cost components. No manufacturing estimates were changed to improve the modeled result.

## Limits

Cost assumptions are not supplier commitments; technical feasibility, production yields, performance, demand and inventory fulfillment are unvalidated. The app does not model taxes, financing, churn, capacity steps or a full cash-flow schedule. Source URLs were checked during research; no purchase or checkout was performed. Browser behavior outside the tested environment is not guaranteed.
