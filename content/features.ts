import type { LucideIcon } from 'lucide-react';
import {
  Radar,
  MapPin,
  Route,
  History,
  FileText,
  RefreshCw,
  Car,
} from 'lucide-react';
import type { Locale } from '@/lib/i18n';

export type Feature = {
  id: string;
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
};

/** The seven product feature highlights shown on the home page. */
const featuresByLocale: Record<Locale, Feature[]> = {
  en: [
    {
      id: 'auto-detection',
      icon: Radar,
      title: 'Automatic trip detection',
      body: 'Tripvia runs quietly in the background and detects when a drive starts and ends — no button to press, no trip forgotten.',
      bullets: [
        'Battery-friendly background GPS',
        'Start, stop, and route captured automatically',
        'Nothing to remember at the end of the day',
      ],
    },
    {
      id: 'manual-entry',
      icon: MapPin,
      title: 'Manual entry with autocomplete',
      body: 'Need to add a trip by hand? Type an address and Tripvia autocompletes it, then calculates the distance for you.',
      bullets: [
        'Address autocomplete as you type',
        'Automatic distance between start and destination',
        'Add purpose, notes, and passengers',
      ],
    },
    {
      id: 'google-maps',
      icon: Route,
      title: 'Google Maps route visualization',
      body: 'Every trip is drawn on a real map with the exact route taken, so distances are accurate and easy to verify.',
      bullets: [
        'True driven route, not just point-to-point',
        'Accurate Google Maps distances',
        'Tap any trip to see it on the map',
      ],
    },
    {
      id: 'timeline-import',
      icon: History,
      title: 'Google Timeline import',
      body: 'Just getting started? Import your Google Timeline history and turn months of past drives into log book entries in minutes.',
      bullets: [
        'Backfill historical trips',
        'Review and classify imported drives',
        'Never lose a reimbursable mile again',
      ],
    },
    {
      id: 'reports',
      icon: FileText,
      title: 'PDF & CSV reports',
      body: 'Generate a clean, official-format trip log book for any period — ready for reimbursement, accounting, or the tax office.',
      bullets: [
        'Official trip log book layout',
        'Export to PDF or CSV in one tap',
        'Filter by date range, vehicle, or purpose',
      ],
    },
    {
      id: 'offline-sync',
      icon: RefreshCw,
      title: 'Offline-first with cloud sync',
      body: 'Track anywhere, even without signal. Your trips sync securely to the cloud the moment you are back online.',
      bullets: [
        'Works fully offline',
        'Secure cloud sync across devices',
        'Your data, backed up and portable',
      ],
    },
    {
      id: 'multi-vehicle',
      icon: Car,
      title: 'Multi-vehicle & odometer',
      body: 'Manage several cars in one place and keep odometer readings up to date for accurate, audit-ready records.',
      bullets: [
        'Switch between multiple vehicles',
        'Track odometer readings over time',
        'Per-vehicle reports and totals',
      ],
    },
  ],
  sk: [
    {
      id: 'auto-detection',
      icon: Radar,
      title: 'Automatické rozpoznanie jázd',
      body: 'Tripvia beží potichu na pozadí a rozpozná začiatok aj koniec jazdy — bez stláčania tlačidiel a bez zabudnutých ciest.',
      bullets: [
        'Úsporné GPS sledovanie na pozadí',
        'Štart, koniec aj trasa zaznamenané automaticky',
        'Na konci dňa si nemusíte nič pamätať',
      ],
    },
    {
      id: 'manual-entry',
      icon: MapPin,
      title: 'Ručné zadanie s automatickým dopĺňaním',
      body: 'Potrebujete doplniť jazdu ručne? Napíšte adresu a Tripvia ju automaticky doplní, potom za vás vypočíta vzdialenosť.',
      bullets: [
        'Automatické dopĺňanie adries počas písania',
        'Automatický výpočet vzdialenosti medzi štartom a cieľom',
        'Doplnenie účelu, poznámky a spolujazdcov',
      ],
    },
    {
      id: 'google-maps',
      icon: Route,
      title: 'Vizualizácia trasy v Google Maps',
      body: 'Každá jazda sa zakreslí na reálnej mape s presnou trasou, takže vzdialenosti sú presné a ľahko overiteľné.',
      bullets: [
        'Skutočne prejdená trasa, nielen body A až B',
        'Presné vzdialenosti z Google Maps',
        'Ťuknutím otvoríte jazdu priamo na mape',
      ],
    },
    {
      id: 'timeline-import',
      icon: History,
      title: 'Import z Google Timeline',
      body: 'Len začínate? Importujte si históriu z Google Timeline a premeňte mesiace starých jázd na záznamy knihy jázd v priebehu pár minút.',
      bullets: [
        'Doplnenie historických jázd',
        'Kontrola a klasifikácia importovaných jázd',
        'Už nikdy neprídete o preplatiteľný kilometer',
      ],
    },
    {
      id: 'reports',
      icon: FileText,
      title: 'PDF a CSV výkazy',
      body: 'Vygenerujte čistú knihu jázd v oficiálnom formáte za ľubovoľné obdobie — pripravenú pre preplatenie, účtovníctvo alebo daňový úrad.',
      bullets: [
        'Oficiálne rozloženie knihy jázd',
        'Export do PDF alebo CSV jedným ťuknutím',
        'Filtrovanie podľa dátumu, vozidla alebo účelu',
      ],
    },
    {
      id: 'offline-sync',
      icon: RefreshCw,
      title: 'Offline režim s cloudovou synchronizáciou',
      body: 'Sledujte jazdy kdekoľvek, aj bez signálu. Hneď ako ste znova online, vaše jazdy sa bezpečne zosynchronizujú do cloudu.',
      bullets: [
        'Plnohodnotné fungovanie offline',
        'Bezpečná cloudová synchronizácia medzi zariadeniami',
        'Vaše dáta zálohované a prenosné',
      ],
    },
    {
      id: 'multi-vehicle',
      icon: Car,
      title: 'Viac vozidiel a tachometer',
      body: 'Spravujte viac áut na jednom mieste a udržujte stavy tachometra aktuálne pre presné záznamy pripravené na kontrolu.',
      bullets: [
        'Prepínanie medzi viacerými vozidlami',
        'Sledovanie stavu tachometra v čase',
        'Výkazy a súčty pre každé vozidlo zvlášť',
      ],
    },
  ],
};

export function getFeatures(locale: Locale) {
  return featuresByLocale[locale];
}
