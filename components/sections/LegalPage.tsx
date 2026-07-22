import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';

/** Shared long-form layout for Privacy / Terms pages. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-muted">Last updated {updated}</p>
          <p className="mt-6 rounded-2xl border border-primary/30 bg-primary-tint/60 px-4 py-3 text-sm text-primary-700">
            This is placeholder text and not legal advice. Replace it with your
            finalized {title.toLowerCase()} before launch.
          </p>
          <div className="mt-8 space-y-8">{children}</div>
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
