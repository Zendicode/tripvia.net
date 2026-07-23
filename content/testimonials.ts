import type { Locale } from '@/lib/i18n';

export type Testimonial = { quote: string; name: string; role: string };

// Placeholder testimonials — swap for real quotes before launch.
const testimonialsByLocale: Record<Locale, Testimonial[]> = {
  en: [
    {
      quote:
        'I used to lose hours every month reconstructing my mileage. Now it is just there, ready to export. Tripvia paid for itself the first week.',
      name: 'Sarah M.',
      role: 'Independent consultant',
    },
    {
      quote:
        'Our field team stopped arguing about expense claims. The reports are clean, accurate, and the tax office accepts them without question.',
      name: 'David R.',
      role: 'Operations manager',
    },
    {
      quote:
        'The Google Timeline import backfilled six months of trips in one go. That alone was worth switching for.',
      name: 'Petra K.',
      role: 'Freelance photographer',
    },
  ],
  sk: [
    {
      quote:
        'Každý mesiac som strácala hodiny spätným skladaním jázd. Teraz sú jednoducho hotové a pripravené na export. Tripvia sa mi vrátila už počas prvého týždňa.',
      name: 'Sarah M.',
      role: 'Nezávislá konzultantka',
    },
    {
      quote:
        'Náš terénny tím sa prestal hádať o výdavkoch. Výkazy sú čisté, presné a daňový úrad ich prijíma bez otázok.',
      name: 'David R.',
      role: 'Prevádzkový manažér',
    },
    {
      quote:
        'Import z Google Timeline doplnil šesť mesiacov jázd naraz. Už len to samo o sebe stálo za prechod.',
      name: 'Petra K.',
      role: 'Fotografka na voľnej nohe',
    },
  ],
};

export function getTestimonials(locale: Locale) {
  return testimonialsByLocale[locale];
}
