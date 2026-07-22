export type FaqItem = { q: string; a: string };

// Placeholder FAQ — refine copy before launch.
export const faq: FaqItem[] = [
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
];
