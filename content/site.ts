import type { Locale } from '@/lib/i18n';

export type NavItem = { label: string; href: string };
export type FooterColumn = { title: string; links: NavItem[] };

export const site = {
  name: 'Tripvia',
  url: 'https://tripvia.net',
  email: 'hello@tripvia.net',

  appLinks: {
    // TODO: replace with real store URLs once the apps are published.
    ios: '#',
    android: '#',
  },

  socials: [
    { label: 'X', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ] as NavItem[],
};

const siteCopy = {
  en: {
    tagline: 'Your business miles, logged automatically.',
    description:
      'Tripvia turns every drive into a compliant business trip log book — automatically. Background GPS tracking, Google Maps distances, and one-tap PDF/CSV reports.',
    nav: [
      { label: 'Features', href: '/#features' },
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Support', href: '/support' },
    ] as NavItem[],
    footer: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '/#features' },
          { label: 'How it works', href: '/how-it-works' },
          { label: 'Pricing', href: '/pricing' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Support & FAQ', href: '/support' },
          { label: 'Contact', href: 'mailto:hello@tripvia.net' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '/privacy' },
          { label: 'Terms', href: '/terms' },
          { label: 'Delete account', href: '/delete-account' },
        ],
      },
    ] as FooterColumn[],
    ui: {
      language: 'Language',
      homeAria: 'Tripvia home',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      menu: 'Menu',
      getApp: 'Get the app',
      skipToContent: 'Skip to content',
      allRightsReserved: 'All rights reserved.',
    },
  },
  sk: {
    tagline: 'Vaše služobné kilometre, zaznamenané automaticky.',
    description:
      'Tripvia premení každú jazdu na knihu služobných jázd v súlade s predpismi — automaticky. GPS sledovanie na pozadí, vzdialenosti z Google Maps a export PDF/CSV jedným ťuknutím.',
    nav: [
      { label: 'Funkcie', href: '/#features' },
      { label: 'Ako to funguje', href: '/how-it-works' },
      { label: 'Cenník', href: '/pricing' },
      { label: 'Podpora', href: '/support' },
    ] as NavItem[],
    footer: [
      {
        title: 'Produkt',
        links: [
          { label: 'Funkcie', href: '/#features' },
          { label: 'Ako to funguje', href: '/how-it-works' },
          { label: 'Cenník', href: '/pricing' },
        ],
      },
      {
        title: 'Podpora',
        links: [
          { label: 'Podpora a FAQ', href: '/support' },
          { label: 'Kontakt', href: 'mailto:hello@tripvia.net' },
        ],
      },
      {
        title: 'Právne',
        links: [
          { label: 'Ochrana súkromia', href: '/privacy' },
          { label: 'Podmienky', href: '/terms' },
          { label: 'Zmazanie účtu', href: '/delete-account' },
        ],
      },
    ] as FooterColumn[],
    ui: {
      language: 'Jazyk',
      homeAria: 'Domov Tripvia',
      openMenu: 'Otvoriť menu',
      closeMenu: 'Zavrieť menu',
      menu: 'Menu',
      getApp: 'Získať aplikáciu',
      skipToContent: 'Preskočiť na obsah',
      allRightsReserved: 'Všetky práva vyhradené.',
    },
  },
} as const;

export type SiteCopy = (typeof siteCopy)[Locale];

export function getSiteCopy(locale: Locale) {
  return siteCopy[locale];
}
