export type Step = {
  n: number;
  title: string;
  body: string;
};

/** The four-step "How it works" flow. */
export const steps: Step[] = [
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
];
