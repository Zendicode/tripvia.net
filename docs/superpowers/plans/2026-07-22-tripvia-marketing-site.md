# Tripvia Marketing Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, animated, multi-page marketing site for Tripvia (polarsteps-inspired) that static-exports to GitHub Pages at tripvia.net.

**Architecture:** Next.js App Router in static-export mode. Presentational React components styled with Tailwind + CSS-variable design tokens, animated with Framer Motion. All copy/data lives in typed `content/*.ts` files, separated from layout. No runtime server, no external network requests (fonts self-hosted, all imagery inline SVG). A GitHub Actions workflow builds `out/` and deploys to Pages.

**Tech Stack:** Next.js 14.2 (App Router, `output: 'export'`), React 18.3, TypeScript 5, Tailwind CSS 3.4, Framer Motion 11, lucide-react, Vitest + React Testing Library (logic tests only).

## Global Constraints 

- Node 20; package manager npm.
- Next config: `output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true`, **no** `basePath` (apex custom domain).
- **No external runtime requests:** fonts via `next/font/google` (self-hosted at build), all graphics inline SVG/CSS, no remote images or CDNs.
- Palette (CSS vars, exact): bg `#FAF8F3`, bg-alt `#EDF7F1`, surface `#FFFFFF`, ink `#1A1C18`, ink-muted `#5C6159`, primary `#22C481`, primary-600 `#17A86C`, primary-700 `#0F7D4F`, primary-tint `#DDF3E8`, forest `#0B3D28`, border `#E7E3D8`.
- Font: **Plus Jakarta Sans** (display + body).
- All motion must honor `prefers-reduced-motion` (fall back to no/instant animation).
- Accessibility: semantic landmarks, keyboard-operable nav/accordion, visible focus rings, WCAG AA contrast, `alt`/`aria` on meaningful graphics.
- Content lives in `content/*.ts`; components import from there — never hardcode marketing copy in components.
- Commit identity: `Zendicode <zendicode@gmail.com>` (already set on the repo). Commit after each task.
- Six routes only: `/`, `/how-it-works`, `/pricing`, `/support`, `/privacy`, `/terms`.

---

## File Structure

```
app/
  layout.tsx            # html shell, fonts, metadata, Header+Footer wrap
  page.tsx              # Home — composes sections
  how-it-works/page.tsx
  pricing/page.tsx
  support/page.tsx
  privacy/page.tsx
  terms/page.tsx
  not-found.tsx         # 404
  globals.css           # Tailwind directives + token vars + base styles
  sitemap.ts            # static sitemap
  robots.ts             # robots.txt
components/
  layout/Header.tsx     # sticky nav, transparent→solid on scroll, mobile menu
  layout/Footer.tsx
  layout/MobileNav.tsx  # slide-in menu (client)
  ui/Container.tsx      # max-width wrapper
  ui/Section.tsx        # <section> with padding + optional alt bg
  ui/Button.tsx         # link-styled button, primary/secondary/ghost
  ui/Card.tsx
  ui/AppBadge.tsx       # App Store / Google Play "coming soon" SVG badges
  ui/Counter.tsx        # animated number (client, in-view + reduced-motion)
  ui/Accordion.tsx      # FAQ disclosure (client, keyboard-accessible)
  ui/Reveal.tsx         # Framer Motion scroll-reveal wrapper (client)
  graphics/Logo.tsx     # wordmark + route-pin mark
  graphics/RouteMap.tsx # animated self-drawing route SVG (client)
  graphics/PhoneMockup.tsx # phone frame with app-screen placeholder
  sections/Hero.tsx
  sections/Pillars.tsx
  sections/FeatureHighlight.tsx  # one alternating image/text block
  sections/FeatureList.tsx       # maps features[] → FeatureHighlight
  sections/SocialProof.tsx
  sections/CtaBand.tsx
  sections/Steps.tsx             # How-It-Works 4-step flow
  sections/PricingTable.tsx
  sections/FaqSection.tsx
  sections/LegalPage.tsx         # shared long-form layout for privacy/terms
content/
  site.ts        # brand, nav, socials, appLinks, meta defaults
  features.ts    # 7 feature entries
  pillars.ts     # 3 pillars
  steps.ts       # 4 how-it-works steps
  pricing.ts     # 3 tiers
  faq.ts         # Q&A
  testimonials.ts, stats.ts
lib/
  motion.ts      # shared Framer variants + useReducedMotion helper
public/
  CNAME          # tripvia.net
  favicon.svg
.github/workflows/deploy.yml
next.config.mjs, tailwind.config.ts, postcss.config.mjs, tsconfig.json,
.eslintrc.json, vitest.config.ts, vitest.setup.ts, package.json, README.md, .gitignore
```

---

## Task 1: Scaffold project + static-export config

**Files:** Create `package.json`, `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`, `tailwind.config.ts`, `.eslintrc.json`, `.gitignore`, `app/layout.tsx` (minimal), `app/page.tsx` (placeholder), `app/globals.css`.

**Produces:** A buildable Next app that emits `out/` via `output: 'export'`.

- [ ] **Step 1:** Create `.gitignore`:
```
node_modules/
.next/
out/
.DS_Store
*.log
.env*
```
- [ ] **Step 2:** Create `package.json`:
```json
{
  "name": "tripvia-net",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run"
  },
  "dependencies": {
    "next": "14.2.15",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "framer-motion": "11.11.0",
    "lucide-react": "0.451.0"
  },
  "devDependencies": {
    "typescript": "5.6.2",
    "@types/react": "18.3.11",
    "@types/react-dom": "18.3.0",
    "@types/node": "20.16.11",
    "tailwindcss": "3.4.13",
    "postcss": "8.4.47",
    "autoprefixer": "10.4.20",
    "eslint": "8.57.1",
    "eslint-config-next": "14.2.15",
    "vitest": "2.1.2",
    "@testing-library/react": "16.0.1",
    "@testing-library/jest-dom": "6.5.0",
    "jsdom": "25.0.1",
    "@vitejs/plugin-react": "4.3.2"
  }
}
```
- [ ] **Step 3:** Create `next.config.mjs`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};
export default nextConfig;
```
- [ ] **Step 4:** Create `tsconfig.json` (Next default + `@/*` path alias to root):
```json
{
  "compilerOptions": {
    "target": "ES2020", "lib": ["dom","dom.iterable","esnext"],
    "allowJs": true, "skipLibCheck": true, "strict": true, "noEmit": true,
    "esModuleInterop": true, "module": "esnext", "moduleResolution": "bundler",
    "resolveJsonModule": true, "isolatedModules": true, "jsx": "preserve",
    "incremental": true, "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```
- [ ] **Step 5:** Create `postcss.config.mjs`: `export default { plugins: { tailwindcss: {}, autoprefixer: {} } };`
- [ ] **Step 6:** Create `tailwind.config.ts` mapping tokens to Tailwind theme colors (`bg`, `bgAlt`, `surface`, `ink`, `inkMuted`, `primary`, `primary600`, `primary700`, `primaryTint`, `forest`, `border`) all referencing `var(--…)`; set `fontFamily.sans` to `var(--font-jakarta)`; content globs `./app`, `./components`, `./content`; extend `borderRadius` (`xl2: '1.25rem'`) and container.
- [ ] **Step 7:** Create `app/globals.css` — `@tailwind base/components/utilities;`, `:root{ --bg:#FAF8F3; … all tokens … }`, base `body{ background:var(--bg); color:var(--ink); }`, focus-visible ring using `--primary`, and a `@media (prefers-reduced-motion: reduce)` block zeroing animation/transition durations.
- [ ] **Step 8:** Create minimal `app/layout.tsx` wiring Plus Jakarta Sans via `next/font/google` (`variable: '--font-jakarta'`) onto `<html>`, and minimal `app/page.tsx` returning `<main>Tripvia</main>`.
- [ ] **Step 9:** `npm install`
- [ ] **Step 10:** Run build — verify export:
Run: `npm run build`
Expected: build succeeds and `out/index.html` exists (`test -f out/index.html`).
- [ ] **Step 11:** Commit: `chore: scaffold Next.js static-export project with Tailwind`

---

## Task 2: Design tokens, base UI primitives, motion helper

**Files:** Create `lib/motion.ts`, `components/ui/Container.tsx`, `Section.tsx`, `Button.tsx`, `Card.tsx`, `Reveal.tsx`. Test: `components/ui/__tests__/Reveal.test.tsx`.

**Produces:** `Container`, `Section({alt?})`, `Button({href,variant,children})` (variants `primary|secondary|ghost`, pill radius), `Card`, `Reveal` (Framer scroll-reveal that renders children statically when reduced-motion). `lib/motion.ts` exports `fadeUp` variants and `usePrefersReducedMotion()`.

- [ ] **Step 1 (test):** Write `Reveal.test.tsx` — render `<Reveal><p>hi</p></Reveal>` and assert the child text is in the document (guards against motion wrapper hiding content).
- [ ] **Step 2:** Run `npm test` → FAIL (module missing).
- [ ] **Step 3:** Implement `lib/motion.ts` + `Reveal.tsx` (uses `whileInView`, `viewport={{ once: true, margin: '-10%' }}`, opacity/translateY variants; when `useReducedMotion()` true, render a plain `<div>`).
- [ ] **Step 4:** Implement `Container`, `Section`, `Button`, `Card` (Tailwind classes from tokens).
- [ ] **Step 5:** Run `npm test` → PASS; `npm run build` → PASS.
- [ ] **Step 6:** Commit: `feat: add design tokens, UI primitives, and motion helpers`

---

## Task 3: Content data files

**Files:** Create `content/site.ts`, `features.ts`, `pillars.ts`, `steps.ts`, `pricing.ts`, `faq.ts`, `testimonials.ts`, `stats.ts`. Test: `content/__tests__/content.test.ts`.

**Produces:** Typed exports consumed by every section. Key shapes:
- `site`: `{ name, tagline, nav: {label,href}[], appLinks: {ios,android}, socials, email, meta:{title,description} }`
- `features`: `{ id, icon (lucide name), title, body, bullets: string[] }[]` — the 7 features from the spec.
- `pillars`: `{ icon, title, body }[]` — Track / Log / Report.
- `steps`: `{ n, title, body }[]` — Drive → Auto-detect → Review & classify → Export.
- `pricing`: `{ name, price, cadence, blurb, features: string[], cta, highlighted? }[]` — Free/Pro/Business.
- `faq`: `{ q, a }[]`; `testimonials`: `{ quote, name, role }[]`; `stats`: `{ value:number, suffix, label }[]`.

- [ ] **Step 1 (test):** Assert `features.length === 7`, every feature has non-empty `title`/`body`, `pricing.length === 3`, `site.nav.length === 4`.
- [ ] **Step 2:** Run `npm test` → FAIL.
- [ ] **Step 3:** Write the content files with placeholder-but-polished copy derived from the app description.
- [ ] **Step 4:** `npm test` → PASS; `npm run typecheck` → PASS.
- [ ] **Step 5:** Commit: `feat: add site content data files`

---

## Task 4: Brand graphics (Logo, RouteMap, PhoneMockup)

**Files:** Create `components/graphics/Logo.tsx`, `RouteMap.tsx`, `PhoneMockup.tsx`. Test: `graphics/__tests__/RouteMap.test.tsx`.

**Produces:** `Logo({className})` inline SVG wordmark + green route-pin. `RouteMap` animated SVG (path draws via `stroke-dashoffset`; static full path under reduced-motion). `PhoneMockup({children})` CSS/SVG phone frame with a screen slot.

- [ ] **Step 1 (test):** Render `RouteMap` with mocked reduced-motion=true; assert the `<path>` renders with `strokeDashoffset` 0 (fully drawn, not hidden).
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Implement the three graphics (all inline SVG, tokens for colors).
- [ ] **Step 4:** `npm test` → PASS; `npm run build` → PASS.
- [ ] **Step 5:** Commit: `feat: add logo, animated route map, and phone mockup graphics`

---

## Task 5: Header + Footer + MobileNav

**Files:** Create `components/layout/Header.tsx`, `Footer.tsx`, `MobileNav.tsx`; wire into `app/layout.tsx`. Test: `layout/__tests__/MobileNav.test.tsx`.

**Produces:** Sticky `Header` (transparent over hero → solid after scroll via scroll listener; logo, nav from `site.nav`, Download CTA). `MobileNav` toggle (hamburger → slide-in panel; `Esc`/overlay closes; focus managed; `aria-expanded`). `Footer` (columns, `AppBadge`s, socials, copyright).

- [ ] **Step 1 (test):** Render `MobileNav`; assert panel hidden initially, click hamburger → nav links visible (`aria-expanded=true`), click close → hidden.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Implement `AppBadge`, `MobileNav`, `Header`, `Footer`; wrap `{children}` in `app/layout.tsx` with Header/Footer + skip-link.
- [ ] **Step 4:** `npm test` → PASS; `npm run build` → PASS.
- [ ] **Step 5:** Commit: `feat: add sticky header, mobile nav, and footer`

---

## Task 6: Home page sections + assembly

**Files:** Create `components/sections/Hero.tsx`, `Pillars.tsx`, `FeatureHighlight.tsx`, `FeatureList.tsx`, `SocialProof.tsx`, `CtaBand.tsx`, `ui/Counter.tsx`; compose in `app/page.tsx`. Test: `ui/__tests__/Counter.test.tsx`.

**Produces:** Full Home: Hero (RouteMap + PhoneMockup, CTAs, rating chip) → Pillars (3 cards) → FeatureList (7 alternating `FeatureHighlight` blocks, image side alternates) → SocialProof (Counter stats + testimonials) → CtaBand. `Counter` animates on in-view, shows final value immediately under reduced-motion.

- [ ] **Step 1 (test):** Render `<Counter value={370000} suffix="+" />` with reduced-motion; assert final formatted text present.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Implement `Counter`, then the sections, then assemble `app/page.tsx`. Use `Reveal` for scroll-in.
- [ ] **Step 4:** `npm test` → PASS; `npm run build` → PASS. Visual check via `npm run dev`.
- [ ] **Step 5:** Commit: `feat: build home page (hero, pillars, features, social proof, CTA)`

---

## Task 7: How It Works page

**Files:** Create `components/sections/Steps.tsx`; `app/how-it-works/page.tsx`.

**Produces:** 4-step flow from `content/steps.ts` with connecting route motif + closing CtaBand + per-page metadata.

- [ ] **Step 1:** Implement `Steps` (numbered cards, Reveal stagger) and the page (Section header + Steps + CtaBand).
- [ ] **Step 2:** `npm run build` → PASS; `test -f out/how-it-works/index.html`. Visual check.
- [ ] **Step 3:** Commit: `feat: add How It Works page`

---

## Task 8: Pricing page

**Files:** Create `components/sections/PricingTable.tsx`; `app/pricing/page.tsx`.

**Produces:** 3 `PricingCard`s from `content/pricing.ts` (highlighted "Pro"), per-tier CTA, note about placeholder pricing, metadata.

- [ ] **Step 1:** Implement `PricingTable` + page.
- [ ] **Step 2:** `npm run build` → PASS; `test -f out/pricing/index.html`. Visual check.
- [ ] **Step 3:** Commit: `feat: add Pricing page`

---

## Task 9: Support / FAQ page

**Files:** Create `components/ui/Accordion.tsx`, `components/sections/FaqSection.tsx`; `app/support/page.tsx`. Test: `ui/__tests__/Accordion.test.tsx`.

**Produces:** Keyboard-accessible `Accordion` (button + `aria-expanded` + region), `FaqSection` from `content/faq.ts`, contact block with `mailto:` from `site.email`, metadata.

- [ ] **Step 1 (test):** Render `Accordion`; assert answer hidden until trigger clicked/Enter, `aria-expanded` toggles.
- [ ] **Step 2:** `npm test` → FAIL.
- [ ] **Step 3:** Implement `Accordion`, `FaqSection`, page.
- [ ] **Step 4:** `npm test` → PASS; `npm run build` → PASS; `test -f out/support/index.html`.
- [ ] **Step 5:** Commit: `feat: add Support/FAQ page with accessible accordion`

---

## Task 10: Privacy + Terms pages

**Files:** Create `components/sections/LegalPage.tsx`; `app/privacy/page.tsx`, `app/terms/page.tsx`.

**Produces:** Shared long-form `LegalPage({title, updated, children})` layout; both pages filled with clearly-marked **placeholder** legal text + "Last updated 2026-07-22"; metadata.

- [ ] **Step 1:** Implement `LegalPage` + both pages.
- [ ] **Step 2:** `npm run build` → PASS; `test -f out/privacy/index.html && test -f out/terms/index.html`.
- [ ] **Step 3:** Commit: `feat: add Privacy and Terms pages (placeholder text)`

---

## Task 11: SEO, favicon, 404, sitemap/robots

**Files:** Create `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`, `public/favicon.svg`; set root `metadata` (title template, description, Open Graph) in `app/layout.tsx`.

**Produces:** Per-route titles, sitemap covering all 6 routes (base `https://tripvia.net`), robots allowing all, branded 404 with link home, SVG favicon.

- [ ] **Step 1:** Implement all of the above.
- [ ] **Step 2:** `npm run build` → PASS; verify `out/sitemap.xml`, `out/robots.txt`, `out/404.html` exist.
- [ ] **Step 3:** Commit: `feat: add SEO metadata, sitemap, robots, favicon, and 404`

---

## Task 12: GitHub Pages deploy workflow + CNAME + README

**Files:** Create `.github/workflows/deploy.yml`, `public/CNAME`, `README.md`.

**Produces:** Actions workflow (push to `main` → Node 20 → `npm ci` → `npm run build` → `upload-pages-artifact ./out` → `deploy-pages`), `CNAME` = `tripvia.net`, README with dev/deploy/DNS instructions.

- [ ] **Step 1:** Create `public/CNAME` containing `tripvia.net`.
- [ ] **Step 2:** Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push: { branches: [main] }
  workflow_dispatch:
permissions: { contents: read, pages: write, id-token: write }
concurrency: { group: pages, cancel-in-progress: true }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with: { path: ./out }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: "${{ steps.deployment.outputs.page_url }}" }
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```
- [ ] **Step 3:** Write `README.md` (overview, `npm run dev/build`, editing `content/*`, deploy-on-push, exact DNS records for tripvia.net, Settings→Pages→Source: GitHub Actions).
- [ ] **Step 4:** Verify workflow YAML parses (`npx --yes yaml-lint .github/workflows/deploy.yml` or a Node `YAML.parse`) and `npm run build` still succeeds.
- [ ] **Step 5:** Commit: `ci: add GitHub Pages deploy workflow, CNAME, and README`

---

## Task 13: Final verification pass

- [ ] **Step 1:** `npm run build && npm run lint && npm run typecheck && npm test` — all green.
- [ ] **Step 2:** `npm run dev` and visually verify all 6 routes: responsive (mobile+desktop), animations run, reduced-motion fallback (toggle OS setting or emulate), keyboard nav through header/accordion, focus visible.
- [ ] **Step 3:** Confirm `out/` contains index + all route folders + sitemap/robots/404 + CNAME copied.
- [ ] **Step 4:** Resolve push auth and push `main` to `github.com/Zendicode/tripvia.net`; confirm Actions deploy succeeds. (Auth options per spec §7.)

---

## Self-Review

**Spec coverage:** Tech stack (T1), design tokens/motion (T2), all 7 features + 3 pillars + social proof (T3/T6), animated hero route+phone (T4/T6), header/footer/download CTA (T5), all 6 pages incl. How-It-Works/Pricing/Support/Privacy/Terms (T6–T10), SEO (T11), Pages deploy + CNAME + DNS (T12), accessibility + reduced-motion (woven through T2/T5/T6/T9/T13), placeholder-editable content (T3). ✔ No spec section left unimplemented.

**Placeholder scan:** Marketing *copy* is intentionally placeholder (per spec) and centralized in `content/*`; no plan step defers implementation detail — configs, workflow, and logic-component behaviors are fully specified. ✔

**Type consistency:** Content shapes defined in T3 are the exact props consumed in T6–T10 (`features[].{id,icon,title,body,bullets}`, `pricing[].{name,price,cadence,blurb,features,cta,highlighted}`, `steps[].{n,title,body}`, `faq[].{q,a}`, `stats[].{value,suffix,label}`). `Reveal`/`Counter`/`Accordion`/`RouteMap` interfaces are stable across tasks. ✔
