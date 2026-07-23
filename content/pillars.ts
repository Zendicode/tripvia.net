import type { LucideIcon } from 'lucide-react';
import { Navigation, ClipboardList, FileDown } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

export type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
};

/** The three top-level value props under the hero: Track / Log / Report. */
const pillarsByLocale: Record<Locale, Pillar[]> = {
  en: [
    {
      icon: Navigation,
      title: 'Track',
      body: 'Automatic background tracking captures every drive — start, route, and distance — without lifting a finger.',
    },
    {
      icon: ClipboardList,
      title: 'Log',
      body: 'Classify trips as business or personal and keep a tidy, compliant log book that is always up to date.',
    },
    {
      icon: FileDown,
      title: 'Report',
      body: 'Export a professional PDF or CSV log book for any period — reimbursement and tax season made effortless.',
    },
  ],
  sk: [
    {
      icon: Navigation,
      title: 'Sledujte',
      body: 'Automatické sledovanie na pozadí zachytí každú jazdu — začiatok, trasu aj vzdialenosť — bez jedinej námahy.',
    },
    {
      icon: ClipboardList,
      title: 'Evidujte',
      body: 'Označte jazdy ako služobné alebo súkromné a udržujte si prehľadnú knihu jázd, ktorá je vždy aktuálna.',
    },
    {
      icon: FileDown,
      title: 'Vykazujte',
      body: 'Exportujte profesionálnu knihu jázd vo formáte PDF alebo CSV za ľubovoľné obdobie — preplatenie aj dane bez starostí.',
    },
  ],
};

export function getPillars(locale: Locale) {
  return pillarsByLocale[locale];
}
