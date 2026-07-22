# Tripvia — marketing site

The marketing website for **Tripvia**, a mobile app that automates business
trip log book creation with background GPS tracking, Google Maps, and Google
Timeline import, plus PDF/CSV report generation.

Live site: **https://tripvia.net**

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com/) with CSS-variable design tokens
- [Framer Motion](https://www.framer.com/motion/) for animations
- [lucide-react](https://lucide.dev/) icons
- Self-hosted Plus Jakarta Sans via `next/font`
- Deployed as a static site to **GitHub Pages** via GitHub Actions

The site is prerendered to plain HTML/CSS/JS (no server at runtime) and makes no
external network requests — fonts are self-hosted and all imagery is inline SVG.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # static export to ./out
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
npm test           # vitest
```

## Editing content

All marketing copy and data live in typed files under [`content/`](content/) —
edit these to change text, links, and lists without touching layout:

| File | What it controls |
| --- | --- |
| `content/site.ts` | Brand name, tagline, nav, footer, socials, **app store links**, contact email |
| `content/features.ts` | The seven feature highlights on the home page |
| `content/pillars.ts` | The Track / Log / Report cards |
| `content/steps.ts` | The four "How it works" steps |
| `content/pricing.ts` | Pricing tiers (**placeholder prices**) |
| `content/faq.ts` | Support page questions and answers |
| `content/testimonials.ts`, `content/stats.ts` | Social proof |

Legal copy lives in [`app/privacy/page.tsx`](app/privacy/page.tsx) and
[`app/terms/page.tsx`](app/terms/page.tsx) (currently placeholder text).

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes it to GitHub Pages.

**One-time setup** (in the GitHub repo):

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. **Settings → Pages → Custom domain:** enter `tripvia.net` and save
   (the [`public/CNAME`](public/CNAME) file already pins this domain).
3. Enable **Enforce HTTPS** once the certificate is issued.

## Custom domain DNS

At your domain registrar for **tripvia.net**, create:

**Apex `A` records** → GitHub Pages:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

(Optional `AAAA` for IPv6: `2606:50c0:8000::153`, `8001::153`, `8002::153`, `8003::153`.)

**`www` subdomain** → `CNAME` → `zendicode.github.io`

DNS can take up to 24 hours to propagate. Until then the site is reachable at
`https://zendicode.github.io/tripvia.net/`.

## Before launch — replace placeholders

- Real app copy, screenshots, and imagery
- App Store / Google Play links in `content/site.ts`
- Pricing details in `content/pricing.ts`
- Testimonials, stats, and social links
- Finalized Privacy Policy and Terms text
