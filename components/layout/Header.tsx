'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import type { SiteCopy } from '@/content/site';
import { Logo } from '@/components/graphics/Logo';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from './MobileNav';
import { cn } from '@/lib/cn';

/** Sticky site header: transparent over the hero, solid once scrolled. */
export function Header({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteCopy;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-bg/85 backdrop-blur'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" aria-label={copy.ui.homeAria} className="rounded-lg">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {copy.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-ink/80 transition-colors hover:text-primary-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher locale={locale} label={copy.ui.language} />
            <Button href="/#download">{copy.ui.getApp}</Button>
          </div>

          <MobileNav locale={locale} copy={copy} />
        </div>
      </Container>
    </header>
  );
}
