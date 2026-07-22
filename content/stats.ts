export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
};

// Placeholder social-proof numbers — replace with real metrics before launch.
export const stats: Stat[] = [
  { value: 4.8, decimals: 1, suffix: '★', label: 'Average app rating' },
  { value: 120000, suffix: '+', label: 'Trips logged' },
  { value: 98, suffix: '%', label: 'Less mileage admin' },
];
