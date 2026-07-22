export type NavItem = { label: string; href: string };
export type FooterColumn = { title: string; links: NavItem[] };

/** Global site metadata, navigation, and links shared across every page. */
export const site = {
  name: 'Tripvia',
  tagline: 'Your business miles, logged automatically.',
  description:
    'Tripvia turns every drive into a compliant business trip log book — automatically. Background GPS tracking, Google Maps distances, and one-tap PDF/CSV reports.',
  url: 'https://tripvia.net',
  email: 'hello@tripvia.net',

  appLinks: {
    // TODO: replace with real store URLs once the apps are published.
    ios: '#',
    android: '#',
  },

  nav: [
    { label: 'Features', href: '/#features' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Support', href: '/support' },
  ] as NavItem[],

  socials: [
    { label: 'X', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
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
      ],
    },
  ] as FooterColumn[],
};
