import type { Locale } from '@/lib/i18n';

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
};

// Placeholder social-proof numbers — replace with real metrics before launch.
const statsByLocale: Record<Locale, Stat[]> = {
  en: [
    { value: 4.8, decimals: 1, suffix: '★', label: 'Average app rating' },
    { value: 120000, suffix: '+', label: 'Trips logged' },
    { value: 98, suffix: '%', label: 'Less mileage admin' },
  ],
  sk: [
    { value: 4.8, decimals: 1, suffix: '★', label: 'Priemerné hodnotenie aplikácie' },
    { value: 120000, suffix: '+', label: 'Zaznamenaných jázd' },
    { value: 98, suffix: '%', label: 'Menej administratívy okolo jázd' },
  ],
};

export function getStats(locale: Locale) {
  return statsByLocale[locale];
}
