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

export type Feature = {
  id: string;
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
};

/** The seven product feature highlights shown on the home page. */
export const features: Feature[] = [
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
];
