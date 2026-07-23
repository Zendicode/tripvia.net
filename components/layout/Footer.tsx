import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Locale } from '@/lib/i18n';
import { getSiteCopy, site } from '@/content/site';
import { Logo } from '@/components/graphics/Logo';
import { Container } from '@/components/ui/Container';
import { AppBadge } from '@/components/ui/AppBadge';

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const cls =
    'text-sm text-ink-muted transition-colors hover:text-primary-700';
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const copy = getSiteCopy(locale);

  return (
    <footer className="border-t border-border bg-bg">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-ink-muted">{copy.description}</p>
            <div className="flex flex-wrap gap-3">
              <AppBadge store="ios" href={site.appLinks.ios} />
              <AppBadge store="android" href={site.appLinks.android} />
            </div>
          </div>

          {copy.footer.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={`${col.title}-${l.href}`}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <p className="text-sm text-ink-muted">
            © {year} Tripvia. {copy.ui.allRightsReserved}
          </p>
          <div className="flex gap-4">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-sm font-medium text-ink-muted hover:text-primary-700"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
