import { cn } from '@/lib/cn';

/** Tripvia logo: a route-pin mark plus the wordmark (with "via" in green). */
export function Logo({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="1" y="1" width="30" height="30" rx="9" className="fill-primary-tint" />
        <path
          d="M9 22c4 0 3.5-5 7-5s4-6 8-6"
          className="stroke-primary-700"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="9" cy="22" r="2.6" className="fill-primary-700" />
        <circle cx="24" cy="11" r="3.4" className="fill-primary" />
        <circle cx="24" cy="11" r="1.3" className="fill-white" />
      </svg>
      {withWordmark && (
        <span className="text-lg font-extrabold tracking-tight text-ink">
          Trip<span className="text-primary-700">via</span>
        </span>
      )}
    </span>
  );
}
