import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Centered content column with responsive gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-content px-6 sm:px-8', className)}>
      {children}
    </div>
  );
}
