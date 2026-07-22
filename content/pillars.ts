import type { LucideIcon } from 'lucide-react';
import { Navigation, ClipboardList, FileDown } from 'lucide-react';

export type Pillar = {
  icon: LucideIcon;
  title: string;
  body: string;
};

/** The three top-level value props under the hero: Track / Log / Report. */
export const pillars: Pillar[] = [
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
];
