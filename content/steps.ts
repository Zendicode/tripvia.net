import type { Locale } from '@/lib/i18n';

export type Step = {
  n: number;
  title: string;
  body: string;
};

/** The four-step "How it works" flow. */
const stepsByLocale: Record<Locale, Step[]> = {
  en: [
    {
      n: 1,
      title: 'Drive',
      body: 'Just go. Tripvia runs quietly in the background — no need to start or stop anything.',
    },
    {
      n: 2,
      title: 'Auto-detect',
      body: 'Each trip is detected and mapped automatically, with start point, destination, route, and distance.',
    },
    {
      n: 3,
      title: 'Review & classify',
      body: 'Swipe to mark a trip as business or personal, then add a purpose or note. It takes seconds.',
    },
    {
      n: 4,
      title: 'Export report',
      body: 'Generate a PDF or CSV log book for any date range — ready for reimbursement, accounting, or the tax office.',
    },
  ],
  sk: [
    {
      n: 1,
      title: 'Jazdite',
      body: 'Jednoducho vyrazte. Tripvia beží potichu na pozadí — nemusíte nič zapínať ani vypínať.',
    },
    {
      n: 2,
      title: 'Automatické rozpoznanie',
      body: 'Každá jazda sa rozpozná a zakreslí automaticky vrátane štartu, cieľa, trasy a vzdialenosti.',
    },
    {
      n: 3,
      title: 'Skontrolujte a označte',
      body: 'Potiahnutím označte jazdu ako služobnú alebo súkromnú a doplňte účel či poznámku. Zaberie to pár sekúnd.',
    },
    {
      n: 4,
      title: 'Exportujte výkaz',
      body: 'Vygenerujte PDF alebo CSV knihu jázd za ľubovoľný rozsah dátumov — pripravenú pre preplatenie, účtovníctvo alebo daňový úrad.',
    },
  ],
};

export function getSteps(locale: Locale) {
  return stepsByLocale[locale];
}
