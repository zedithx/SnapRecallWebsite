# Security Best Practices Report

## Executive Summary

I did not find any critical, high, or medium-severity security vulnerabilities in the current codebase.

This repository is a small Next.js/React marketing site with no visible authentication flows, API routes, file uploads, third-party scripts, browser storage of sensitive data, or raw HTML rendering sinks. The main gap visible in app code is missing baseline browser security headers and CSP configuration. That is a defense-in-depth issue rather than an actively exploitable bug in the current implementation, and it may already be handled at the CDN or hosting layer.

Update after remediation:

- `SBP-001` has now been addressed in `next.config.ts:3-58` by adding a baseline CSP and security-header policy in application code.
- Runtime confirmation should still be performed against the deployed site, since edge/CDN layers can override or append headers.

## Scope

- Frontend stack reviewed: TypeScript, React 19, Next.js 16 App Router
- Files reviewed:
  - `next.config.ts`
  - `src/app/layout.tsx`
  - `src/app/page.tsx`
  - `src/app/_components/*`

## Critical Findings

None.

## High Findings

None.

## Medium Findings

None.

## Low Findings

### SBP-001: Baseline browser security headers are not configured in visible app code

- Severity: Low
- Status: Fixed in local code after this report was generated; verify in deployed runtime
- Location:
  - `next.config.ts:1-7`
  - `src/app/layout.tsx:4-18`
- Evidence:

```ts
// next.config.ts
const nextConfig: NextConfig = {
  /* config options here */
};
```

```ts
// src/app/layout.tsx
export const metadata: Metadata = {
  title: "SnapRecall Waitlist",
  description:
    "Capture your screen, extract key facts instantly, and recall anything later with AI.",
};
```

- Impact:
  - There is no visible Content Security Policy, clickjacking protection (`frame-ancestors` or `X-Frame-Options`), `X-Content-Type-Options: nosniff`, or `Referrer-Policy` configured in the application code.
  - On a static landing page like this, that is mostly a hardening gap, but it reduces defense-in-depth if an XSS bug is introduced later and allows framing/referrer behavior to depend entirely on hosting defaults.
- Fix:
  - Add global security headers in `next.config.ts` via `async headers()`.
  - Prefer a CSP header set at the hosting/proxy/CDN layer. For this site, a restrictive baseline could include:
    - `Content-Security-Policy`
    - `X-Content-Type-Options: nosniff`
    - `Referrer-Policy: strict-origin-when-cross-origin`
    - `X-Frame-Options: DENY` or CSP `frame-ancestors 'none'`
  - Optionally extend `metadata` with a referrer policy if you want an app-level baseline in addition to response headers.
- Mitigation:
  - If your hosting platform already injects these headers, verify them in production with the browser network panel or a header check tool and document that setup in the repo.
- False positive notes:
  - This may already be enforced outside the repo by Vercel, Cloudflare, nginx, or another reverse proxy. I can only confirm that it is not visible in the application code checked here.

## Notable Clean Areas

- No `dangerouslySetInnerHTML`, `innerHTML`, `insertAdjacentHTML`, `eval`, or similar DOM/code-execution sinks were found in `src/`.
- No use of `localStorage`, `sessionStorage`, `postMessage`, or client-exposed environment variables was found.
- No authentication, cookie, or API-route code is present, which removes a large class of CSRF/session/authz risks from the current codebase.
- No third-party script tags or CDN-loaded JavaScript were found in the app code.

## Recommended Next Step

Add and verify a baseline security-header policy first. After that, the remaining security posture is mostly about keeping the site simple and maintaining the current pattern of:

- no raw HTML rendering,
- no client-side secret handling,
- no unnecessary third-party scripts.
