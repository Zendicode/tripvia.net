# Tripvia Marketing Site — Design Spec

**Date:** 2026-07-22
**Repo:** https://github.com/Zendicode/tripvia.net
**Status:** Approved design direction — pending spec review

## 1. Overview

A polished, animated multi-page marketing website for **Tripvia**, a mobile app that
automates business trip log book creation via background GPS tracking, Google Maps, and
Google Timeline import, with PDF/CSV report generation.

The site's look and feel is modeled on [polarsteps.com](https://www.polarsteps.com/)
(a warm, premium, richly animated product site built in Framer) — adapted from a
travel/wanderlust tone to a professional **business-mileage** tone, and rebuilt as a
real React app that deploys to GitHub Pages.

### Purpose
- Present Tripvia and its features to individuals and companies.
- Drive app downloads (App Store / Google Play — placeholders for now).
- Provide the pages app stores require (Privacy, Terms, Support).

### Success criteria
- Multi-page site builds to a **static export** with no errors and deploys to GitHub Pages.
- Reads as a modern, animated product site (not a flat HTML page): warm cream base +
  `#22c481` green accent, rounded shapes, scroll-reveal animations, a self-drawing route
  line, carousels.
- Fully **responsive** (mobile-first) and **accessible** (semantic HTML, keyboard nav,
  visible focus, `prefers-reduced-motion` support, WCAG AA contrast).
- All copy/imagery is **placeholder but easy to edit** (centralized content files), so the
  user can swap text, screenshots, links, and legal text later without touching layout.
- Served at **tripvia.net** (apex custom domain) once DNS is pointed at GitHub Pages.

### Non-goals (YAGNI)
- No backend, real auth, database, or payment processing.
- No CMS. Content lives in typed files in the repo.
- No working contact-form backend (use a `mailto:` link now; a form service can be added
  later). No blog, no i18n, no dark mode (unless requested later).
- Real legal text — Privacy/Terms ship as clearly-marked placeholders.

## 2. Tech stack & architecture

| Concern | Choice |
|---|---|
| Framework | **Next.js (App Router)** with `output: 'export'` (static export) |
| Styling | **Tailwind CSS** + a small set of design tokens (CSS variables) |
| Animation | **Framer Motion** (scroll reveals, parallax, self-drawing SVG, counters) |
| Icons | **lucide-react** |
| Fonts | **Plus Jakarta Sans** via `next/font/google` (self-hosted at build time) |
| Hosting | **GitHub Pages** via GitHub Actions |
| Node | v20 (available locally) |

**Why Next.js static export:** it produces real pre-rendered HTML per route (good SEO for
ranking `tripvia.net`), gives file-based multi-page routing, and supports a full React +
Framer Motion animation layer — i.e. it feels like polarsteps, not a static page — while
still exporting plain files that GitHub Pages can serve. No server is used at runtime.

**Static-export config:**
- `output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true`
  (so `/pricing/` resolves to `pricing/index.html` on Pages).
- Apex custom domain → **no `basePath`** needed. `public/CNAME` contains `tripvia.net`.
- All assets self-hosted / inline SVG — **no external CDN, font, or image requests**
  (keeps it fast, private, and offline-safe).

### Project structure (target)
```
tripvia.net/
  app/
    layout.tsx            # root layout: fonts, header, footer, metadata
    page.tsx              # Home
    how-it-works/page.tsx
    pricing/page.tsx
    support/page.tsx
    privacy/page.tsx
    terms/page.tsx
    globals.css           # Tailwind + tokens
  components/
    layout/               # Header, Footer, MobileNav
    ui/                   # Button, Card, Section, Accordion, AppBadge, Counter
    sections/             # Hero, Pillars, FeatureHighlight, SocialProof, CtaBand
    graphics/             # RouteMap (animated SVG), PhoneMockup, Logo
  content/
    site.ts               # nav, brand, socials, app links, meta
    features.ts           # the 7 feature highlights (title/body/icon/visual)
    pricing.ts            # tiers
    faq.ts                # Q&A
    testimonials.ts       # social proof
  public/
    CNAME                 # tripvia.net
  .github/workflows/deploy.yml
  next.config.mjs, tailwind.config.ts, tsconfig.json
```

Content and layout are separated: editing `content/*.ts` changes copy/links without
touching components.

## 3. Design language

Adapted from polarsteps: warm, friendly, premium, spacious — with a fresh green accent.

### Palette (warm cream + green)
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FAF8F3` | Page background (warm cream) |
| `--bg-alt` | `#EDF7F1` | Alternating sections (soft mint tint) |
| `--surface` | `#FFFFFF` | Cards |
| `--ink` | `#1A1C18` | Primary text (warm near-black) |
| `--ink-muted` | `#5C6159` | Secondary text |
| `--primary` | `#22C481` | **Accent green** — buttons, links, highlights |
| `--primary-600` | `#17A86C` | Hover/darker green |
| `--primary-700` | `#0F7D4F` | Deep green (text on tint) |
| `--primary-tint` | `#DDF3E8` | Green wash for badges/chips |
| `--forest` | `#0B3D28` | Deep contrast (footer, ink on green) |
| `--border` | `#E7E3D8` | Warm hairline borders |

Exact values may be tuned during build; direction is fixed (cream base, `#22c481` accent).

### Typography
- **Plus Jakarta Sans** for display + body (friendly geometric, wide weight range).
- Large, tight-tracked bold headlines; comfortable ~1.6 line-height body.

### Shape & depth
Rounded corners (cards ~16–24px, pill buttons), soft diffuse shadows, generous whitespace.

### Motion (Framer Motion)
- Scroll-triggered reveal (fade + rise) as sections enter the viewport.
- **Self-drawing route line** in the hero (animated SVG `stroke-dashoffset`) with pins that
  pop in sequence.
- Subtle parallax on hero graphic; hover micro-interactions on buttons/cards.
- Animated number counters for stats; testimonial + screenshot carousels.
- All motion respects `prefers-reduced-motion` (falls back to static).

### Signature hero graphic
A stylized **map with a dotted route line** connecting start → stops → end pins (a business
trip), beside a **phone mockup** of the Tripvia app (map + trip list). Both are hand-built
SVG/CSS placeholders — no external images — with a clear slot to drop real screenshots later.

## 4. Sitemap & page structure

Shared **Header** (sticky; transparent over hero → solid on scroll; logo, nav, Download
CTA; mobile hamburger) and **Footer** (Product / Company / Legal columns, app badges,
socials, copyright) wrap every page.

### Home (`/`)
1. **Hero** — headline + subhead (placeholder), primary CTA "Get the app", secondary "See
   how it works", rating chip, route-map + phone graphic.
2. **Three pillars** — **Track / Log / Report** (icon + short blurb cards).
3. **Feature highlights** — all seven features as alternating image/text blocks revealed on
   scroll: (1) Automatic trip detection (background GPS), (2) Manual entry with address
   autocomplete + auto-distance, (3) Google Maps route visualization, (4) Google Timeline
   import, (5) PDF/CSV reports in official logbook format, (6) Offline-first + Supabase
   cloud sync, (7) Multi-vehicle support with odometer tracking.
4. **Social proof** — rating, download count, testimonials carousel, "as featured in"
   logos (all placeholder).
5. **Final CTA band** — "Start your logbook" + app badges.

### How It Works (`/how-it-works`)
Four-step flow with supporting graphics: **Drive → Auto-detect → Review & classify
(business/personal) → Export report.** Closes with a CTA.

### Pricing (`/pricing`)
Three placeholder tiers — **Free / Pro / Business** — feature lists + per-tier CTA
(optional monthly/annual toggle). Values are placeholders to adjust later.

### Support / FAQ (`/support`)
FAQ accordion (placeholder Q&A) + a contact block (`mailto:` placeholder; a form service
can be wired later since Pages is static).

### Privacy (`/privacy`) & Terms (`/terms`)
Long-form legal layout with **clearly-marked placeholder text** and a "last updated" date.

## 5. Content & assets (placeholders)

- **Logo:** simple SVG wordmark "Tripvia" + a route-pin mark in green (swappable).
- **App screenshots:** CSS/SVG phone mockups showing a map + trip list (labelled slots for
  real screenshots).
- **Feature icons:** lucide-react.
- **Illustrations:** lightweight hand-built SVG (route line, map grid, step icons).
- **Photos/press logos/testimonials:** placeholder blocks — no external image dependencies.
- **App store badges:** "Coming soon" placeholders linking to `#`.

To provide later: final copy, real screenshots, App Store/Play links, brand logo, legal
text, testimonials, and pricing details.

## 6. Deployment (GitHub Pages)

- **Workflow** `.github/workflows/deploy.yml`: on push to `main` → checkout → setup Node 20
  → `npm ci` → `npm run build` (emits `./out`) → `actions/upload-pages-artifact` (`./out`)
  → `actions/deploy-pages`. Uses `actions/configure-pages`.
- Repo **Settings → Pages → Source: GitHub Actions** (one-time, done by the user).
- `public/CNAME` = `tripvia.net`.
- **DNS (user configures at registrar):** apex `A` records to GitHub Pages
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and/or an
  `ALIAS`/`ANAME`), plus `www` `CNAME` → `zendicode.github.io`. Exact records provided at
  deploy time.

## 7. Repo & git

- Local clone at `C:\Users\jakub.klein\tripvia.net`, remote `origin` →
  `github.com/Zendicode/tripvia.net`, branch `main`.
- Commit identity set locally to **Zendicode / zendicode@gmail.com** (not the machine's
  work account) so history is attributed correctly.
- **Push auth is unresolved:** the repo is public (clone worked) but pushing needs write
  credentials for the zendicode account. Options, decided at push time: install `gh` + log
  in as zendicode, use a personal access token over HTTPS, use an SSH key, or the user
  pushes the prepared commit. This does not block building the site locally.

## 8. Open questions / to confirm at spec review
- Next.js as the stack (recommended) — OK?
- Any pages beyond the six above for v1?
- Fine to ship placeholder legal text and a `mailto:` contact for now?
