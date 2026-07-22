import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Soft, rounded surface used for feature/pillar/pricing cards. */
export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8',
        className,
      )}
    >
      {children}
    </div>
  );
}
