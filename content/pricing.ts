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
export const pricing: PricingTier[] = [
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
    ctaHref: '#download',
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
    ctaHref: '#download',
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
];
