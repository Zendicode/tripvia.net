import type { Locale } from '@/lib/i18n';

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
};

// NOTE: prices are placeholders — update before launch.
const pricingByLocale: Record<Locale, PricingTier[]> = {
  en: [
    {
      name: 'Free',
      price: '$0',
      cadence: 'forever',
      blurb: 'For occasional trips and trying things out.',
      features: [
        'Up to 40 trips per month',
        'Manual & automatic tracking',
        'Google Maps distances',
        'PDF export',
      ],
      cta: 'Get started',
      ctaHref: '/#download',
    },
    {
      name: 'Pro',
      price: '$6',
      cadence: 'per month',
      blurb: 'For freelancers and professionals on the road.',
      features: [
        'Unlimited trips',
        'Background auto-tracking',
        'PDF & CSV reports',
        'Google Timeline import',
        'Offline-first cloud sync',
      ],
      cta: 'Start free trial',
      ctaHref: '/#download',
      highlighted: true,
    },
    {
      name: 'Business',
      price: '$12',
      cadence: 'per user / month',
      blurb: 'For teams and fleets that need control.',
      features: [
        'Everything in Pro',
        'Multi-vehicle & odometer tracking',
        'Team management',
        'Priority support',
      ],
      cta: 'Contact sales',
      ctaHref: 'mailto:hello@tripvia.net',
    },
  ],
  sk: [
    {
      name: 'Zadarmo',
      price: '$0',
      cadence: 'navždy',
      blurb: 'Na občasné jazdy a vyskúšanie aplikácie.',
      features: [
        'Do 40 jázd mesačne',
        'Ručné aj automatické sledovanie',
        'Vzdialenosti z Google Maps',
        'Export do PDF',
      ],
      cta: 'Začať',
      ctaHref: '/#download',
    },
    {
      name: 'Pro',
      price: '$6',
      cadence: 'mesačne',
      blurb: 'Pre freelancerov a profesionálov na cestách.',
      features: [
        'Neobmedzený počet jázd',
        'Automatické sledovanie na pozadí',
        'PDF a CSV výkazy',
        'Import z Google Timeline',
        'Cloudová synchronizácia s offline režimom',
      ],
      cta: 'Spustiť skúšobné obdobie',
      ctaHref: '/#download',
      highlighted: true,
    },
    {
      name: 'Business',
      price: '$12',
      cadence: 'za používateľa / mesiac',
      blurb: 'Pre tímy a vozové parky, ktoré potrebujú kontrolu.',
      features: [
        'Všetko z plánu Pro',
        'Viac vozidiel a evidencia tachometra',
        'Správa tímu',
        'Prednostná podpora',
      ],
      cta: 'Kontaktovať obchod',
      ctaHref: 'mailto:hello@tripvia.net',
    },
  ],
};

export function getPricing(locale: Locale) {
  return pricingByLocale[locale];
}
