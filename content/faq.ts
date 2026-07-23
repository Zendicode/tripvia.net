import type { Locale } from '@/lib/i18n';

export type FaqItem = { q: string; a: string };

// Placeholder FAQ — refine copy before launch.
const faqByLocale: Record<Locale, FaqItem[]> = {
  en: [
    {
      q: 'How does automatic trip detection work?',
      a: 'Tripvia uses battery-efficient background location tracking to detect when a drive begins and ends. Each trip is recorded with its route and distance, so you never have to remember to start or stop a timer.',
    },
    {
      q: 'Will background tracking drain my battery?',
      a: 'No. Tripvia is designed to be light on battery, using motion and location signals efficiently so tracking runs all day without a noticeable impact.',
    },
    {
      q: 'Can I import my past trips?',
      a: 'Yes. You can import your Google Timeline history and turn months of previous drives into log book entries, then review and classify them in a few taps.',
    },
    {
      q: 'What formats can I export?',
      a: 'You can export a professional trip log book as a PDF or a CSV file for any date range, filtered by vehicle or purpose — ready for reimbursement or tax reporting.',
    },
    {
      q: 'Does Tripvia work offline?',
      a: 'Absolutely. Tripvia is offline-first, so trips are tracked even without a signal and sync securely to the cloud once you are back online.',
    },
    {
      q: 'Can I track more than one vehicle?',
      a: 'Yes. Tripvia supports multiple vehicles with per-vehicle odometer tracking and reports, so households and businesses can keep everything separate and accurate.',
    },
    {
      q: 'Is my location data private?',
      a: 'Your trip data belongs to you. It is stored securely, synced privately to your account, and never sold. You can export or delete it at any time.',
    },
  ],
  sk: [
    {
      q: 'Ako funguje automatické rozpoznanie jázd?',
      a: 'Tripvia používa úsporné sledovanie polohy na pozadí, aby rozpoznala začiatok a koniec jazdy. Každá jazda sa uloží s trasou a vzdialenosťou, takže nemusíte myslieť na spustenie ani zastavenie časovača.',
    },
    {
      q: 'Vybíja sledovanie na pozadí batériu?',
      a: 'Nie. Tripvia je navrhnutá tak, aby bola šetrná k batérii a efektívne využívala pohybové a lokalizačné signály, takže môže fungovať celý deň bez citeľného dopadu.',
    },
    {
      q: 'Môžem importovať svoje staršie jazdy?',
      a: 'Áno. Môžete importovať históriu z Google Timeline a premeniť mesiace starších jázd na záznamy knihy jázd, ktoré potom skontrolujete a zaradíte niekoľkými ťuknutiami.',
    },
    {
      q: 'Do akých formátov môžem exportovať?',
      a: 'Profesionálnu knihu jázd môžete exportovať ako PDF alebo CSV za ľubovoľné obdobie, filtrovanú podľa vozidla alebo účelu — pripravenú na preplatenie alebo daňové podklady.',
    },
    {
      q: 'Funguje Tripvia offline?',
      a: 'Áno. Tripvia je navrhnutá ako offline-first, takže jazdy sleduje aj bez signálu a po návrate online ich bezpečne synchronizuje do cloudu.',
    },
    {
      q: 'Môžem sledovať viac ako jedno vozidlo?',
      a: 'Áno. Tripvia podporuje viac vozidiel, evidenciu tachometra pre každé z nich aj samostatné výkazy, takže domácnosti aj firmy môžu mať všetko prehľadne oddelené.',
    },
    {
      q: 'Sú moje lokalizačné údaje súkromné?',
      a: 'Vaše údaje o jazdách patria vám. Sú bezpečne uložené, súkromne synchronizované k vášmu účtu a nikdy sa nepredávajú. Kedykoľvek ich môžete exportovať alebo zmazať.',
    },
  ],
};

export function getFaq(locale: Locale) {
  return faqByLocale[locale];
}
