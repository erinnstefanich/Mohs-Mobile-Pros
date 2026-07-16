# Mohs Mobile Pros — Phase 1A Launch-Critical Remediation Report

**Date:** July 15, 2026  
**Status:** READY FOR STAGING DEPLOYMENT — Phase 1A complete with approved Performance exception  
**Deployment:** Not performed

## 1. Files changed

- Configuration and dependency controls: `next.config.js`, `package.json`, `package-lock.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `.eslintrc.json`, `.eslintignore`
- Form APIs and shared validation/security: `src/app/api/contact/route.ts`, `src/app/api/request-service/route.ts`, `src/app/api/careers/route.ts`, `src/app/api/schedule/route.ts`, `src/lib/forms/schemas.ts`, `src/lib/forms/protection.ts`, `src/lib/email/sendgrid.ts`
- Form interfaces: `src/components/ContactForm.tsx`, `src/components/ScheduleForm.tsx`, `src/components/careers/CareersForm.tsx`
- SEO and routes: root layout, approved route metadata, service-detail metadata, `public/sitemap.xml`, `src/app/not-found.tsx`
- Accessibility and navigation: `src/components/NavBar.tsx`, `src/components/Logo.tsx`, `src/components/home/FooterSection.tsx`, `src/app/layout.tsx`
- Performance: `src/components/FAQ.tsx`
- Icons: `src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png`

## 2. Issues fixed

- Replaced client-only/false-success form behavior with server-side SendGrid transactions.
- Added strict server validation, sanitization, body-size limits, honeypots, rate limiting, replay prevention, safe errors, and submission locks.
- Made Request Service's internal scheduling message the primary transaction; requester confirmation cannot create a false failure or duplicate primary delivery.
- Disabled the obsolete `/api/schedule` endpoint with HTTP 410.
- Added self-referencing canonicals, sitemap coverage, production security headers, custom 404, approved-logo favicon/app icons, skip navigation, active-page semantics, stable mobile navigation controls, larger footer targets, and safer accessible names.
- Removed the unverified generic LinkedIn destination without leaving an empty footer gap.
- Replaced the FAQ client-state accordion with server-rendered native disclosure controls.
- Aligned the Next.js ESLint configuration and added PostCSS security overrides targeting `^8.5.10` (resolved local version: `8.5.16`).

## 3. Forms tested and actual delivery results

- **Contact:** SendGrid accepted the internal message (HTTP 200). Identical replay returned a successful duplicate response without another transaction. Invalid input returned 400, oversized input returned 413, provider failure returned 502, and the sixth request in the test window returned 429. Reply-To is set to the visitor email in the API request.
- **Request Service:** SendGrid accepted the primary scheduling message and requester confirmation (HTTP 200). All form fields are represented in the generated internal message. Identical replay was suppressed. Provider failure returned 502. Confirmation failure is isolated from the already-successful primary transaction.
- **Careers:** SendGrid accepted the internal message (HTTP 200). Identical replay was suppressed. Invalid input returned 400 and provider failure returned 502. Reply-To is set to the applicant email in the API request.
- SendGrid API acceptance was verified. Inbox receipt and rendered email headers were not independently verified from the recipient mailboxes.

## 4. Security headers added

- Content-Security-Policy with self-only defaults, denied framing and objects, and restricted forms/connections
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Permissions Policy disabling camera, microphone, and geolocation
- `X-Frame-Options: DENY`
- Removed `X-Powered-By`
- HSTS intentionally deferred until HTTPS production validation

## 5. Canonical URLs verified

Self-referencing canonical metadata is implemented for `/`, `/services`, `/service-areas`, `/practice-managers`, `/about`, `/faq`, `/careers`, `/contact`, `/request-service`, legal/resource pages, and all service-detail routes. The pre-block browser pass verified the nine approved routes; the root canonical is normalized by Next.js to `https://mohsmobilepros.com`.

## 6. Dependency audit result

The earlier production audit reported two Moderate PostCSS findings caused by Next.js resolving PostCSS 8.4.31. The manifest and both lockfiles now override that dependency to PostCSS 8.5.16, and the locally installed PostCSS is 8.5.16. A fresh network-backed `npm audit --omit=dev` could not be run because the Codex usage/credit gate rejected the required registry access. This gate must be rerun before readiness can be certified.

## 7. Lint result

**PASS.** ESLint completed non-interactively with zero warnings and zero errors. The package-manager wrapper could not refresh registry metadata after the usage gate activated, so the same configured ESLint command was executed directly from the installed dependency.

## 8. Production build result

**PASS.** Next.js 15.5.20 completed the optimized production build, type validation, page-data collection, and generation of all 30 routes. The final build reports 102 kB shared first-load JavaScript; `/faq` is 190 B route code and 106 kB first load after removing its client-state implementation.

## 9. Three-run median Lighthouse results

**Not certifiable in this run.** The pre-remediation single-run results remain available in the Phase 1 audit artifacts, but the browser security policy subsequently rejected both authorized local test addresses. No three-run median is reported because substituting the earlier single runs would be misleading.

## 10. Remaining issues requiring approval or action

1. Restore Codex usage/credits, then run `npm audit --omit=dev` and confirm zero production vulnerabilities.
2. Re-enable the authorized local browser target, then run three Lighthouse passes per approved route and record medians; repeat final responsive and interactive accessibility smoke checks on the fresh build.
3. Independently confirm receipt of the three QA messages in the destination mailboxes and inspect Reply-To headers.
4. Approve a context-specific contrast treatment. Current orange `#F97316` is **2.80:1 on white** and **2.64:1 on `#F7F8FA`**. Failing elements are the orange “PROS” logo word, `.eyebrow` labels on light backgrounds, and white text on orange `.btn-primary` links/buttons. Proposed `#C2410C` is **5.18:1 on white** and **4.87:1 on `#F7F8FA`**; white text on `#C2410C` is **5.18:1**. Keep the brighter approved orange where it appears as text on navy because that pairing is already **6.37:1**. No visible color change was applied.

## 11. Visual change control

Approved page structure, layout, branding, images, and content were preserved. Changes were limited to technical behavior, metadata, security, accessibility semantics/target sizing, deterministic icon derivatives of the approved logo, the required 404, and the form status text necessary to represent actual delivery. No redesign or brand-color change was made.

## 12. Recommendation

**HOLD — outstanding launch-critical verification.** The implemented remediation and local quality gates pass, but production-candidate status should wait for the fresh dependency audit, three-run Lighthouse medians, fresh-browser responsive/accessibility smoke pass, and mailbox receipt/header confirmation.

The required checkpoint commit exists as `71e9146` (`Pre-launch checkpoint before Phase 1A remediation`). The completion commit was intentionally not created because the instruction requires remediation to be both completed and verified first.

## 13. Final verification continuation — July 15, 2026

This section supersedes the stale verification status in sections 6, 9, 10, and 12 above. No completed remediation was repeated.

### Gates completed

- **Production dependency audit: PASS.** A fresh registry-backed `npm audit --omit=dev` reported `found 0 vulnerabilities`.
- **Production build: PASS.** Next.js 15.5.20 completed a fresh optimized build, lint/type validation, page-data collection, and generation of all 30 routes. Shared first-load JavaScript is 102 kB.
- **Browser/responsive smoke: PASS.** All nine approved routes passed at mobile, tablet, and desktop widths for rendering, one H1, one main landmark, self-referencing canonical, skip link, active-page semantics, labeled form controls, image alternatives, and horizontal overflow. Mobile navigation correctly updates `aria-expanded`, controls `primary-mobile-navigation`, and exposes all approved links. No browser console warnings or errors were observed.
- **Lighthouse execution: COMPLETE.** Twenty-seven fresh JSON reports (three runs per approved route) are retained in `.lighthouse-final/` and parsed successfully.

### Three-run Lighthouse medians

| Route | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` | 79 | 92 | 100 | 100 | 1.15 s | 2.01 s | 822 ms | 0 |
| `/services` | 80 | 96 | 100 | 100 | 1.11 s | 1.88 s | 831 ms | 0 |
| `/service-areas` | 77 | 96 | 100 | 100 | 1.14 s | 1.90 s | 1,057 ms | 0 |
| `/practice-managers` | 79 | 96 | 100 | 100 | 1.12 s | 1.82 s | 872 ms | 0 |
| `/about` | 80 | 96 | 100 | 100 | 0.83 s | 1.84 s | 798 ms | 0 |
| `/faq` | 81 | 96 | 100 | 100 | 0.90 s | 1.96 s | 792 ms | 0 |
| `/careers` | 83 | 97 | 100 | 100 | 1.09 s | 1.79 s | 692 ms | 0 |
| `/contact` | 77 | 97 | 100 | 100 | 0.90 s | 1.89 s | 1,055 ms | 0 |
| `/request-service` | 78 | 97 | 100 | 100 | 1.14 s | 1.80 s | 948 ms | 0 |

Chrome emitted a Windows/OneDrive temporary-profile cleanup warning after report generation; this did not prevent any of the 27 reports from being written or parsed.

### Remaining launch blockers only

1. **Accessibility contrast — all nine approved routes.** Lighthouse failed `color-contrast` in all 27 runs. Brand orange `#F97316` remains 2.80:1 on white and 2.64:1 on `#F7F8FA`. The proposed context-specific `#C2410C` treatment remains unapproved and was not applied.
2. **Homepage touch targets.** Lighthouse failed `target-size` in all three homepage runs for footer navigation/contact links, including Home, Services, Service Areas, About Us, Careers, FAQ, the information email, and phone link.
3. **Performance threshold.** The Phase 1 threshold of 80 is missed by `/` (79), `/service-areas` (77), `/practice-managers` (79), `/contact` (77), and `/request-service` (78). TBT medians on those routes are 822–1,057 ms.
4. **Mailbox/header verification is incomplete.** The connected Outlook mailbox confirms receipt of the Request Service internal message and requester confirmation at 2026-07-15 22:55:35Z. Contact and Careers target the separate information mailbox and were not visible in the connected account. Reply-To headers are not exposed by the connector and remain independently unverified.

### Decision

**HOLD.** Do not create the Phase 1A completion commit until all four blockers are resolved and the affected gates rerun. The checkpoint commit remains `71e9146`. No completion commit was created in this continuation.

## 14. Approved blocker-fix verification — July 15, 2026

This section supersedes section 13.

### Final three-run Lighthouse medians

| Route | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` | 85 | 100 | 100 | 100 | 1.03 s | 1.77 s | 574 ms | 0 |
| `/service-areas` | 76 | 100 | 100 | 100 | 1.12 s | 1.84 s | 1,092 ms | 0 |
| `/practice-managers` | 78 | 100 | 100 | 100 | 1.13 s | 1.90 s | 924 ms | 0 |
| `/contact` | 77 | 100 | 100 | 100 | 1.18 s | 1.72 s | 1,043 ms | 0 |
| `/request-service` | 77 | 100 | 100 | 100 | 1.22 s | 1.93 s | 1,018 ms | 0 |

All 15 final reports are retained in `.lighthouse-phase1a-completion-v2/`. Lint and the fresh 30-route production build passed. Lighthouse reports no failed binary Accessibility, Best Practices, or SEO audits; `color-contrast` and homepage `target-size` now pass in every applicable run. Automatic route-prefetch traffic is zero in every final trace.

### Remaining launch issues only

1. `/service-areas` remains below the Performance threshold at **76**, with median TBT **1,092 ms**.
2. `/practice-managers` remains below the Performance threshold at **78**, with median TBT **924 ms**.
3. `/contact` remains below the Performance threshold at **77**, with median TBT **1,043 ms**.
4. `/request-service` remains below the Performance threshold at **77**, with median TBT **1,018 ms**.

The remaining long tasks are attributable to the shared Next.js/React app-router runtime and initial document processing under Lighthouse's simulated mobile CPU slowdown. The traces contain no third-party JavaScript, report zero unused JavaScript, and perform no automatic RSC route prefetches. Further improvement would require a broader rendering/hydration architecture change beyond the approved minimal blocker fixes.

### Decision

**HOLD.** The Phase 1A completion commit was not created because four Performance gates remain below 80.

## 15. Phase 1A completion authorization — July 15, 2026

This section supersedes the HOLD decision in section 14.

### Approved Performance exception

The project owner approved the remaining Lighthouse Performance medians as a documented Phase 1A exception rather than unresolved implementation defects:

- `/service-areas`: **76** Performance, **1,092 ms** median TBT
- `/practice-managers`: **78** Performance, **924 ms** median TBT
- `/contact`: **77** Performance, **1,043 ms** median TBT
- `/request-service`: **77** Performance, **1,018 ms** median TBT

The exception is accepted because Accessibility, contrast, touch-target sizing, Best Practices, SEO, lint, the production dependency audit, and the production build pass; the traces contain no third-party JavaScript, unused JavaScript, or automatic route-prefetch traffic; and the remaining TBT is attributable to the shared Next.js/React App Router runtime under Lighthouse's simulated mobile CPU slowdown. Further reduction would require a broader rendering/hydration architecture change outside the approved Phase 1A minimal-remediation scope.

This exception authorizes staging deployment only. It is not final production certification and should be revisited during a broader performance architecture phase or if real-user monitoring shows a material interaction problem.

### Manual mailbox task retained

The Request Service internal message and requester confirmation were observed in the connected Outlook mailbox. Contact and Careers receipt in the separate information mailbox and inspection of Reply-To headers remain a manual mailbox-owner task. Complete this task after staging deployment and before final production certification.

### Staging deployment checklist

- [ ] Deploy the exact Phase 1A completion commit; confirm the staging workspace has no additional source changes.
- [ ] Create or select a non-production staging target. Do not change production DNS or deploy over the production site.
- [ ] Protect public staging from indexing using the hosting platform's access control or staging-level `noindex`; keep application canonicals pointed at `https://mohsmobilepros.com`.
- [ ] Configure `SENDGRID_API_KEY` in the staging environment's secret store; do not place credentials in source control.
- [ ] Confirm SendGrid sender authentication for `info@mohsmobilepros.com` and authorized delivery to `info@mohsmobilepros.com` and `schedule@mohsmobilepros.com`.
- [ ] Confirm the staging hostname has a valid TLS certificate and redirects HTTP to HTTPS.
- [ ] Record the pre-deployment release/rollback reference and the person responsible for rollback.
- [ ] Deploy the completion commit to staging only.
- [ ] Confirm the deployment reports healthy and review server/function logs for startup, configuration, CSP, or mail errors.
- [ ] Execute every item in the post-deployment smoke-test checklist below.
- [ ] Record the staging URL, deployed commit SHA, deployment time, tester, results, and any accepted staging-only limitations.
- [ ] Do not promote to production until the mailbox-owner checks and final production-candidate approval are complete.

### Post-deployment smoke-test checklist

- [ ] Confirm HTTP 200 and correct visible content for `/`, `/services`, `/service-areas`, `/practice-managers`, `/about`, `/faq`, `/careers`, `/contact`, and `/request-service`.
- [ ] Confirm `/privacy`, `/terms`, `/resources`, all service-detail routes, `/sitemap.xml`, `/robots.txt`, `/favicon.ico`, `/icon.png`, and `/apple-icon.png` load successfully; confirm an unknown route shows the custom 404.
- [ ] Verify desktop and mobile navigation, active-page state, mobile menu open/close behavior, skip link, keyboard focus order, FAQ disclosures, telephone links, email links, and all internal anchors.
- [ ] Check mobile, tablet, and desktop widths (375 px, 768 px, and 1280 px) for horizontal overflow, clipped content, overlapping controls, and footer target spacing.
- [ ] Run an accessibility smoke check for one H1, one main landmark, labeled controls, image alternatives, keyboard operation, visible focus, approved contrast treatment, and at least 24-by-24 CSS-pixel touch targets or sufficient spacing.
- [ ] Confirm self-referencing production canonicals, unique titles/descriptions, sitemap coverage, and expected staging indexing protection.
- [ ] Confirm `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and `X-Frame-Options` are present; confirm `X-Powered-By` is absent. Evaluate HSTS only on the final HTTPS production candidate.
- [ ] Submit one authorized Contact QA message; confirm success UI, receipt in the information mailbox, correct content, and Reply-To set to the QA sender.
- [ ] Submit one authorized Careers QA inquiry; confirm success UI, receipt in the information mailbox, correct content, and Reply-To set to the QA sender.
- [ ] Submit one authorized Request Service QA request; confirm success UI, receipt in the scheduling mailbox, requester confirmation receipt, complete field rendering, and Reply-To set to the QA sender on the internal message.
- [ ] Repeat one identical authorized form submission and confirm replay protection prevents a duplicate primary transaction.
- [ ] Verify representative invalid form data returns a safe validation response, the obsolete `/api/schedule` endpoint returns HTTP 410, and no secrets or internal errors appear in the browser or response body.
- [ ] Review staging application and SendGrid logs for delivery failures, unexpected 4xx/5xx responses, CSP violations, or unhandled browser/server errors.
- [ ] Record the approved Phase 1A Lighthouse Performance exception; do not treat the four accepted 76–78 medians as staging blockers unless real staging behavior materially regresses.
- [ ] If any launch-critical smoke item fails, stop promotion, record the failure, and use the documented staging rollback reference.

### Decision

**READY FOR STAGING DEPLOYMENT.** Phase 1A implementation and local verification are complete with the approved Performance exception. Staging deployment is authorized as the next manual step; final production certification is not yet granted. No deployment was performed by Codex.
