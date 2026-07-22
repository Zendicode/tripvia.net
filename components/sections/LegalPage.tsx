import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';

/** Shared long-form layout for Privacy / Terms / Delete-account pages. */
export function LegalPage({
  title,
  updated,
  children,
  footer,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
  /** Optional operator / legal-entity line rendered under a divider. */
  footer?: ReactNode;
}) {
  return (
    <article className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {updated && (
            <p className="mt-3 text-sm text-ink-muted">Last updated {updated}</p>
          )}
          <div className="mt-8 space-y-8">{children}</div>
          {footer && (
            <div className="mt-12 border-t border-border pt-6 text-sm text-ink-muted">
              {footer}
            </div>
          )}
        </div>
      </Container>
    </article>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-ink">{heading}</h2>
      <div className="space-y-3 text-ink-muted">{children}</div>
    </section>
  );
}
