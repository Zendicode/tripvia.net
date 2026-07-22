import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Vertical rhythm wrapper for a page section, with optional tinted background. */
export function Section({
  id,
  alt,
  className,
  children,
}: {
  id?: string;
  alt?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn('py-20 sm:py-28', alt && 'bg-bg-alt', className)}
    >
      {children}
    </section>
  );
}
