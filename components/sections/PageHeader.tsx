import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

/** Shared centered page header (eyebrow + title + subtitle) for inner pages. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pb-8 pt-16 sm:pb-10 sm:pt-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary-700">
              {eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg text-ink-muted">{subtitle}</p>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
