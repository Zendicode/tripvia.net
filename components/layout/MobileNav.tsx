'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Locale } from '@/lib/i18n';
import type { SiteCopy } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/graphics/Logo';
import { LanguageSwitcher } from './LanguageSwitcher';

/** Mobile hamburger menu: a slide-in dialog with the nav links and CTA. */
export function MobileNav({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteCopy;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={copy.ui.openMenu}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-primary-tint"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-50">
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/40"
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={copy.ui.menu}
            initial={reduce ? false : { x: '100%' }}
            animate={reduce ? undefined : { x: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col bg-bg p-6 shadow-lift"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                aria-label={copy.ui.closeMenu}
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-primary-tint"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1">
              {copy.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-primary-tint hover:text-primary-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <LanguageSwitcher
              locale={locale}
              label={copy.ui.language}
              className="mt-6"
            />

            <div className="mt-auto pt-6">
              <Button
                href="/#download"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {copy.ui.getApp}
              </Button>
            </div>
          </motion.aside>
        </div>
      )}
    </div>
  );
}
