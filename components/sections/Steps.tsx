import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { steps } from '@/content/steps';

export function Steps() {
  return (
    <Section alt>
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-border bg-surface p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-700 text-lg font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
