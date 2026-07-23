'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/cn';
import {
  localeCookieName,
  locales,
  type Locale,
} from '@/lib/i18n';

const localeLabels: Record<Locale, string> = {
  en: 'English',
  sk: 'Slovenčina',
};

export function LanguageSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState(locale);
  const [isPending, startTransition] = useTransition();

  return (
    <label
      className={cn(
        'flex items-center gap-2 text-sm font-medium text-ink-muted',
        className,
      )}
    >
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        value={value}
        disabled={isPending}
        onChange={(event) => {
          const nextLocale = event.target.value as Locale;
          setValue(nextLocale);
          document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
          startTransition(() => {
            router.refresh();
          });
        }}
        className="min-w-28 rounded-full border border-border bg-surface px-3 py-2 text-sm font-semibold text-ink outline-none transition-colors hover:border-primary focus:border-primary"
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
