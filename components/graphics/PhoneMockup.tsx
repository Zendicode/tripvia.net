import { cn } from '@/lib/cn';

type TripRow = { from: string; to: string; dist: string; business: boolean };

const TRIPS: TripRow[] = [
  { from: 'Office', to: 'Client site', dist: '18.2 mi', business: true },
  { from: 'Home', to: 'Airport', dist: '24.6 mi', business: true },
  { from: 'Home', to: 'Gym', dist: '6.1 mi', business: false },
];

/**
 * A CSS/SVG phone showing a placeholder Tripvia app screen (map + trip list).
 * Purely decorative; the surrounding sections provide the accessible text.
 */
export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div className={cn('relative mx-auto w-[264px] max-w-full', className)}>
      <div className="rounded-[2.6rem] border-[10px] border-ink bg-ink shadow-lift">
        <div className="relative overflow-hidden rounded-[1.95rem] bg-bg">
          {/* notch */}
          <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />

          <div className="space-y-3 p-4 pt-9">
            {/* app header */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-extrabold tracking-tight text-ink">
                Trip<span className="text-primary-700">via</span>
              </span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-tint text-[10px] font-bold text-primary-700">
                JD
              </span>
            </div>

            {/* mini map */}
            <div className="overflow-hidden rounded-2xl bg-bg-alt">
              <svg viewBox="0 0 240 116" className="h-28 w-full">
                <path
                  d="M22 94 C 74 94 70 46 122 46 S 202 28 220 22"
                  className="stroke-primary"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle
                  cx="22"
                  cy="94"
                  r="6"
                  className="fill-surface stroke-primary-700"
                  strokeWidth="3"
                />
                <circle cx="220" cy="22" r="6" className="fill-primary-700" />
              </svg>
            </div>

            {/* trip list */}
            <div className="space-y-2">
              {TRIPS.map((t) => (
                <div
                  key={`${t.from}-${t.to}`}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-3 py-2"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-semibold text-ink">
                      {t.from} → {t.to}
                    </p>
                    <p className="text-[10px] text-ink-muted">{t.dist}</p>
                  </div>
                  <span
                    className={cn(
                      'rounded-full px-2 py-0.5 text-[9px] font-bold',
                      t.business
                        ? 'bg-primary-tint text-primary-700'
                        : 'bg-bg-alt text-ink-muted',
                    )}
                  >
                    {t.business ? 'Business' : 'Personal'}
                  </span>
                </div>
              ))}
            </div>

            {/* month total */}
            <div className="flex items-center justify-between rounded-2xl bg-primary-700 px-3 py-2.5 text-white">
              <span className="text-[11px] font-medium">July total</span>
              <span className="text-sm font-bold">842 mi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
