# stackswitch.co — repo brain

Astro 5 + Tailwind, 776 pages (tools/alternatives/compare/category/pricing), data-driven from `data/tools/*.json`.
Deploy: git push to `sunnyp81/stackswitch.co` master, then `npx vercel --prod` (Vercel auto-preview only, prod needs manual CLI deploy).

## 2026-07-07 — GSC recovery pass
- Diagnosis: no page-1 rankings anywhere. Site had a brief top-10 window Mar 17-31 2026 (avg position dipped to ~8.7 on Mar 30) that decayed back to a ~55-65 average position baseline by mid-April and has stayed there since (confirmed via date-dimension GSC pull, not host-level demotion, no thin-page pattern, not pSEO risk class).
- Closest-to-page-1 real pages (striking distance): compare/sistrix-vs-ahrefs (pos ~28, 61 impr/28d), compare/sistrix-vs-semrush (pos ~39, 23 impr), alternatives/sistrix (pos ~36), alternatives/metricool (pos ~29), alternatives/drata (pos ~29), category/lms (pos ~25), category/bi-analytics (pos ~28), tools/moz (pos ~36, the only click site-wide this period).
- Fix shipped: added a visible "Quick answer" box (one extractable sentence, built from existing tool JSON data, no new claims) near the top of `src/pages/compare/[slug].astro`, `src/pages/alternatives/[tool].astro`, `src/pages/category/[cat].astro`. Goal: give Google snippets / AI Overviews / Perplexity a citable one-liner and nudge borderline positions toward clicks. No title/meta changes, no new pages, no bulk rewrite.
- Verified internal linking from the top-traffic page (tools/sistrix, 437 impr) to the sistrix compare/alternatives cluster already existed, no change needed there.
- Commit `ccd5900` pushed to master, deployed via `npx vercel --prod`, verified 200 + "Quick answer" text live on stackswitch.co/compare/sistrix-vs-ahrefs, /alternatives/sistrix, /category/lms.
- Submitted 10 changed URLs to Bing (site verified, `stackswitch.co`).
- Not touched: title/meta templates (already rewritten Apr 10, rule caps rewrites at 20 pages and this wasn't a CTR pass), no postcode/thin-page issue exists on this site.
- Next check: re-pull GSC by ~2026-08-04 to see if quick-answer boxes moved position or CTR on the sistrix cluster.
