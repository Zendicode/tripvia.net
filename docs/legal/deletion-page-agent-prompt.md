# Agent prompt — publish the Tripvia legal pages on tripvia.net

Hand the **PROMPT** block below to an AI coding agent that has access to the
**tripvia.net** website repository/hosting. It covers the three legal pages the
Tripvia app needs live: **Privacy Policy**, **Terms of Service**, and **Account
Deletion**.

Why this matters: Google Play requires a public **Privacy Policy URL** and an
**account / data deletion path** reachable without installing the app — both must
be live before the Play production review.

> **Fastest path:** three self-contained, ready-to-host HTML files already exist
> in this repo — `docs/legal/privacy.html`, `docs/legal/terms.html`,
> `docs/legal/delete-account.html` (delete-account is bilingual EN/SK, and all
> three are theme-aware). Just upload them to tripvia.net at the routes below.
> Use the prompt only if you want them rebuilt inside tripvia.net's own template.

---

## PROMPT (copy everything below this line)

**Task:** Publish three legal pages for our mobile app **Tripvia** on our website
**tripvia.net**. They must be publicly reachable without login and without
installing the app (Google Play requires this).

**Pages & routes:**
- `https://tripvia.net/privacy` — Privacy Policy
- `https://tripvia.net/terms` — Terms of Service
- `https://tripvia.net/delete-account` — Account & data deletion

**Requirements:**
1. Public, no login, no cookie wall blocking the content; crawlable/indexable
   (no `noindex`). These exact URLs go into Google Play Console.
2. Match tripvia.net's header, footer, styling, and responsive layout — use the
   site's normal page template.
3. Link all three from the site **footer** (labels: "Privacy", "Terms",
   "Delete account").
4. **Content is the three ready HTML files in the repo** — `docs/legal/privacy.html`,
   `docs/legal/terms.html`, `docs/legal/delete-account.html`. Use them as the
   source of truth. If you rebuild in the site template, copy their text
   **verbatim** — do not alter any legal wording, company name, address, or email.
5. The delete-account page must be at least **English + Slovak** (the file already
   is). Keep the operator identity **Weblio s. r. o.** and contact
   **info@weblioapp.com** exactly as written.

**Content source:** the three HTML files listed above. (If you have no repo
access, ask me to paste their contents.)

**Acceptance criteria:**
- Each of the three URLs loads in a private/incognito window (not logged in),
  returns HTTP 200, and is not marked `noindex`.
- All three are linked from the footer.
- The delete-account page shows both English and Slovak.
- Reply with the three final live URLs.

## (end of prompt)

---

## Notes for us (not part of the prompt)

- **Domains:** `tripvia.net` is the product/hosting site for these pages.
  `weblioapp.com` is the operating company's site and `info@weblioapp.com` is the
  working contact mailbox — both stay in the page content (they identify the legal
  operator, Weblio s. r. o.). Do not swap them for tripvia.net.
- Once the pages are live, put the URLs into: Google Play Console → App content →
  **Privacy policy** (`tripvia.net/privacy`) and **Data deletion**
  (`tripvia.net/delete-account`). The in-app legal screens (`app/privacy.tsx`,
  `app/terms.tsx`) already mirror this content and say "available at this URL".
- `delete-account.html` currently describes **email-based** deletion only, which
  matches the shipped app. When the retention plan
  (`docs/superpowers/plans/2026-07-21-account-retention-and-privacy-improvements.md`)
  ships the in-app "Settings → Delete account" screen + the 500-day inactive-account
  auto-deletion, update that page (and the Privacy Policy "Data retention" section)
  to add them. Do **not** add them before those features exist.
- Optional brand polish: if you want the retention feature's warning emails to come
  from the Tripvia brand, verify **tripvia.net** in Resend and set `RESEND_FROM` to
  `noreply@tripvia.net` (the retention plan currently uses `noreply@weblioapp.com`).
