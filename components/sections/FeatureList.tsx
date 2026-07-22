import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { features } from '@/content/features';
import { FeatureHighlight } from './FeatureHighlight';

export function FeatureList() {
  return (
    <Section id="features" alt>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Everything you need for a compliant log book
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              From automatic tracking to one-tap reports — Tripvia handles the
              busywork so your mileage records are always accurate and
              audit-ready.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {features.map((f, i) => (
            <FeatureHighlight key={f.id} feature={f} flip={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
