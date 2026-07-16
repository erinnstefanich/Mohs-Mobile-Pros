# Website Launch Readiness Report — Phase 1

**Website:** Mohs Mobile Pros  
**Audit date:** July 15, 2026  
**Audit type:** QA and validation only  
**Deployment performed:** No  
**Branding or approved content changed:** No  
**Critical fixes applied:** None; no Critical defects were confirmed

## Executive decision

**Launch status: HOLD — not yet ready for production approval.**

The production build passes and every requested route is reachable, responsive, and structurally complete. The site has no confirmed Critical defect. Launch approval should nevertheless remain on hold because Major findings remain in form delivery assurance, accessibility contrast, canonical SEO metadata, security hardening, dependency health, performance, and the quality gate.

No non-Critical finding has been changed. This report is the approval checkpoint requested before remediation.

## Severity model

| Severity | Definition |
|---|---|
| Critical | Prevents launch, causes data loss/exposure, or breaks a primary user journey with no viable fallback. Fixed immediately when confirmed. |
| Major | Material launch risk or failure affecting conversion, accessibility, security, discoverability, or operational reliability. Approval required before change. |
| Minor | Limited-impact defect or standards gap that should be scheduled but does not independently block launch. |
| Cosmetic | Presentation-only inconsistency with no material functional or accessibility impact. |

## Test summary

| Test | Result |
|---|---|
| Next.js production build | **Pass** — compiled, type-checked, and generated 26 static pages; exit code 0 |
| Requested route status audit | **Pass** — all 9 routes returned HTTP 200 |
| Full internal page-route audit | **Pass** — all 20 discovered page routes returned HTTP 200 |
| Internal anchor audit | **Pass** — careers and request-service anchors resolve |
| Responsive review | **Pass with findings** — mobile (375 CSS px), tablet (753 CSS px), and desktop (1265 CSS px); no document-level horizontal overflow |
| Mobile navigation | **Pass with Minor finding** — toggle works and updates `aria-expanded`; no `aria-controls` |
| Accessibility review | **Fail** — Lighthouse 92–97; repeated contrast and accessible-name failures; mobile target-size failure on homepage |
| Lighthouse | **Pass with findings** — completed on all 9 requested routes; raw JSON retained beside this report |
| Form validation | **Pass with findings** — request-service and careers APIs reject empty payloads with 400 |
| Email delivery | **Not fully verified** — SendGrid key is present, but a controlled real delivery was not sent during this no-side-effect audit |
| Dependency security audit | **Fail** — 1 Moderate production vulnerability reported |
| Lint quality gate | **Fail** — configured command opens an interactive setup prompt and exits 1 |
| Deployment | Not run, per instruction |

## Requested route matrix

| Route | HTTP | H1 | Responsive overflow | Canonical | Lighthouse P/A/BP/SEO |
|---|---:|---:|---|---|---|
| `/` | 200 | 1 | None | Correct | 76 / 92 / 96 / 100 |
| `/services` | 200 | 1 | None | **Incorrect: homepage** | 82 / 96 / 96 / 100 |
| `/service-areas` | 200 | 1 | None | **Incorrect: homepage** | 97 / 96 / 96 / 100 |
| `/practice-managers` | 200 | 1 | None | **Incorrect: homepage** | 96 / 96 / 96 / 100 |
| `/about` | 200 | 1 | None | **Incorrect: homepage** | 93 / 96 / 96 / 100 |
| `/faq` | 200 | 1 | None | **Incorrect: homepage** | 75 / 96 / 96 / 100 |
| `/careers` | 200 | 1 | None | Correct | 75 / 97 / 96 / 100 |
| `/contact` | 200 | 1 | None | **Incorrect: homepage** | 98 / 96 / 96 / 100 |
| `/request-service` | 200 | 1 | None | Correct | 98 / 96 / 96 / 100 |

P = Performance, A = Accessibility, BP = Best Practices. Lighthouse used its simulated mobile profile; single-run scores are directional and may vary.

## Lighthouse metrics

| Route | FCP | LCP | TBT | CLS | Speed Index |
|---|---:|---:|---:|---:|---:|
| `/` | 1.2 s | 3.4 s | 580 ms | 0 | 2.8 s |
| `/services` | 1.1 s | 3.1 s | 460 ms | 0 | 2.3 s |
| `/service-areas` | 0.9 s | 2.3 s | 130 ms | 0 | 1.4 s |
| `/practice-managers` | 0.9 s | 2.4 s | 150 ms | 0 | 1.6 s |
| `/about` | 0.9 s | 2.6 s | 210 ms | 0 | 1.6 s |
| `/faq` | 0.8 s | 2.6 s | 1,020 ms | 0 | 1.4 s |
| `/careers` | 0.9 s | 2.8 s | 910 ms | 0 | 1.8 s |
| `/contact` | 0.8 s | 2.1 s | 130 ms | 0 | 1.2 s |
| `/request-service` | 0.9 s | 2.2 s | 140 ms | 0 | 1.3 s |

## Findings by checkpoint

### 1. Site Structure & Navigation

| ID | Severity | Finding | Affected scope | Recommended action (not applied) |
|---|---|---|---|---|
| NAV-01 | Minor | Navigation does not identify the current page with `aria-current` or a persistent active state. | All requested routes | Add active-page semantics and an approved visual state. |
| NAV-02 | Minor | Mobile menu toggle exposes `aria-expanded` but not `aria-controls`; the menu container has no stable ID. | All requested routes at mobile/tablet navigation widths | Associate the toggle with the controlled menu. |
| NAV-03 | Minor | There is no skip-to-main-content link on long pages. | All requested routes | Add a keyboard-visible skip link without changing approved page content. |

Passes: all primary routes are present in desktop/mobile navigation; mobile menu opens and closes; each requested route has exactly one H1 and one main landmark.

### 2. Forms & Email Delivery

| ID | Severity | Finding | Affected scope | Recommended action (not applied) |
|---|---|---|---|---|
| FORM-01 | Major | Contact form does not submit to the website. It opens a local `mailto:` draft, so delivery depends on the visitor having a configured email client and completing the send. | `/contact` | Use an approved server-side delivery endpoint, or explicitly approve the mail-client-only behavior. |
| FORM-02 | Major | Real SendGrid delivery, sender authentication, inbox placement, reply-to behavior, and confirmation delivery were not proven with a controlled end-to-end test. A key is configured locally, but presence is not delivery evidence. | `/careers`, `/request-service` | Approve controlled test submissions to designated test inboxes before launch. |
| FORM-03 | Major | Request-service sends the scheduling email first and the customer confirmation second. If confirmation fails after the primary email succeeds, the API returns an error; the visitor may retry and create a duplicate request. | `/api/request-service` | Treat primary delivery as success, record confirmation failure separately, and add idempotency/deduplication. |
| FORM-04 | Major | Public email endpoints have no rate limit, CAPTCHA/honeypot, abuse monitoring, request-size limit, or replay protection. | `/api/request-service`, `/api/careers`, `/api/schedule` | Add layered abuse controls and operational monitoring. |
| FORM-05 | Major | Server validation checks presence but not valid email format, phone/date constraints, allowed enum values, array contents, or field length. | `/api/request-service`, `/api/careers` | Add schema validation and bounded inputs server-side. |
| FORM-06 | Major | Legacy `/api/schedule` accepts an empty object and attempts delivery rather than returning validation errors; it is not used by the current audited forms but remains publicly exposed. | `/api/schedule` | Remove the unused endpoint or bring it to the same validation/security standard. |
| FORM-07 | Major | Careers guidance says applicants can “upload or provide” a résumé, but the form has no file upload and instructs users to email it separately. | `/careers` | Align the approved workflow and copy, or add an approved secure upload workflow. |
| FORM-08 | Minor | Contact form success text is not in an `aria-live` region, and it reports that the email client opened rather than confirming delivery. | `/contact` | Announce state changes accessibly and keep status wording precise. |

Passes: all visible text, email, select, and textarea controls are labeled; request-service and careers reject empty API payloads with HTTP 400; client error fallbacks display direct email addresses.

### 3. Links & Routing

| ID | Severity | Finding | Affected scope | Recommended action (not applied) |
|---|---|---|---|---|
| LINK-01 | Minor | “Mohs Mobile Pros on LinkedIn” links to the generic LinkedIn homepage, not a verified company profile. | Footer on all routes | Replace with the approved company profile URL or remove until available. |
| LINK-02 | Minor | `/favicon.ico` returns 404, producing a console error and lowering Lighthouse Best Practices to 96 on every audited route. | All routes | Add approved favicon/app icons and metadata. |

Passes: every discovered internal page route returns 200; all audited fragment links resolve; phone, information email, and scheduling email links use valid `tel:`/`mailto:` formats.

### 4. Visual Consistency

| ID | Severity | Finding | Affected scope | Recommended action (not applied) |
|---|---|---|---|---|
| VIS-01 | Major | Brand orange `#f97316` fails WCAG contrast against white and light-gray surfaces (approximately 2.63–2.8:1), including eyebrow text, “PROS,” and several orange buttons with white text. | All requested routes | Approve an accessible brand-orange variant and/or approved text/background treatment that meets 4.5:1 for normal text and 3:1 for large text. |
| A11Y-01 | Minor | Header and footer logo links use the accessible name “Mohs Mobile Pros home,” which does not contain all visible logo/tagline text; Lighthouse flags a label/content-name mismatch. | All requested routes | Align the accessible name with visible wording or hide decorative tagline text from the accessibility tree. |
| A11Y-02 | Minor | Homepage mobile footer links and contact links have targets under 24 px high and insufficient spacing. | `/` at mobile width | Increase interactive padding/spacing while preserving the approved visual composition. |

Passes: shared header/footer, logo treatment, typography, spacing, button patterns, and page-shell structure are visually consistent. No branding changes were made. No Cosmetic-only inconsistency was confirmed.

### 5. Performance

| ID | Severity | Finding | Affected scope | Recommended action (not applied) |
|---|---|---|---|---|
| PERF-01 | Major | Simulated-mobile Performance is below 80 on homepage (76), FAQ (75), and Careers (75); Services is 82. Homepage LCP is 3.4 s; FAQ and Careers TBT are 1,020 ms and 910 ms. | `/`, `/services`, `/faq`, `/careers` | Profile client JavaScript and rendering work, reduce main-thread execution, and retest with three-run medians. |
| PERF-02 | Minor | Lighthouse reports avoidable image bytes in small PNG icons and large imagery, plus render-blocking CSS and legacy JavaScript overhead. | Primarily `/` and content-heavy routes | Convert/compress assets where visually lossless, right-size images, and review bundle targets/CSS delivery. |

Passes: CLS is 0 on all nine routes; static page payloads are modest (approximately 106–114 kB first-load JavaScript in the production build).

### 6. SEO

| ID | Severity | Finding | Affected scope | Recommended action (not applied) |
|---|---|---|---|---|
| SEO-01 | Major | Root metadata declares canonical `/`, and six requested pages inherit it. Search engines are told that Services, Service Areas, Practice Managers, About, FAQ, and Contact are duplicates of the homepage. | `/services`, `/service-areas`, `/practice-managers`, `/about`, `/faq`, `/contact` | Add a self-referencing canonical to every indexable page. |
| SEO-02 | Minor | Static sitemap omits `/careers`, `/privacy`, and `/terms`; `/careers` is an audited indexable page. | `public/sitemap.xml` | Generate sitemap from the route inventory and include all approved indexable routes. |
| SEO-03 | Minor | Open Graph metadata has no approved share image; Twitter card metadata and structured organization/local-business data are absent. | Site-wide | Add approved social imagery/metadata and validated structured data. |

Passes: every requested route has a unique title, a meta description, one H1, index/follow directives, and Lighthouse SEO 100. Robots file allows crawling and references the sitemap.

### 7. Security

| ID | Severity | Finding | Affected scope | Recommended action (not applied) |
|---|---|---|---|---|
| SEC-01 | Major | Application responses do not set a Content Security Policy, frame-ancestor protection, Referrer-Policy, Permissions-Policy, or MIME-sniffing protection. HSTS cannot be evaluated on local HTTP. | Site-wide | Define application/edge security headers and verify them on the HTTPS production candidate. |
| SEC-02 | Major | Current registry audit reports one Moderate production vulnerability: PostCSS XSS in CSS stringify output (`<8.5.10`), introduced through Next.js. | Production dependency tree | Upgrade to a dependency set resolving PostCSS `>=8.5.10`, then rebuild and re-audit. |
| SEC-03 | Minor | Responses disclose `X-Powered-By: Next.js`. | Site-wide | Disable the framework disclosure header. |

Additional form abuse and input-validation risks are recorded as FORM-04 through FORM-06.

### 8. Production Readiness

| ID | Severity | Finding | Affected scope | Recommended action (not applied) |
|---|---|---|---|---|
| PROD-01 | Major | The `lint` script is not a non-interactive quality gate: it starts first-time ESLint configuration and exits 1. `eslint-config-next` is version 13 while runtime Next.js is 15.5.20. | CI/release process | Configure ESLint explicitly, align framework tooling versions, and require lint in CI. |
| PROD-02 | Major | Hosting candidate was not provided, so HTTPS redirect, HSTS, custom-domain/DNS, compression/CDN behavior, production environment variables, rollback, monitoring, and real mail egress remain unverified. | Production environment | Run Phase 2 against an approved staging/production-candidate URL before launch. |
| PROD-03 | Minor | No documented health check, uptime/error monitoring, alert ownership, or form-delivery monitoring was found. | Operations | Define launch monitoring, alerts, owner, and rollback procedure. |

Passes: optimized build completes; all requested routes prerender; no deployment occurred; local production server starts successfully.

## Issue count and approval gates

| Severity | Count | Action |
|---|---:|---|
| Critical | 0 | No immediate code fix required |
| Major | 14 | Approval required before remediation; launch hold recommended |
| Minor | 13 | Approval required before remediation; may be scheduled by risk |
| Cosmetic | 0 | None confirmed |

Recommended approval sequence:

1. Approve form/email and abuse-control remediation (FORM-01 through FORM-07).
2. Approve accessible brand treatment for contrast (VIS-01) without redesigning approved pages.
3. Approve canonical metadata, dependency, security-header, performance, and lint-gate remediation.
4. Approve Minor cleanup as a separate batch.
5. Run a controlled email test and a production-candidate/staging audit before deployment approval.

## Evidence artifacts

Raw Lighthouse JSON files retained in the project root:

- `lighthouse-home.json`
- `lighthouse-services.json`
- `lighthouse-service-areas.json`
- `lighthouse-practice-managers.json`
- `lighthouse-about.json`
- `lighthouse-faq.json`
- `lighthouse-careers.json`
- `lighthouse-contact.json`
- `lighthouse-request-service.json`

## Change-control statement

This Phase 1 exercise changed no approved page, branding, production configuration, form implementation, route, or content. The only new durable artifacts are this report and the Lighthouse evidence files. All remediation is paused pending explicit approval.
