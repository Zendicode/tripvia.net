import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Card } from '@/components/ui/Card';
import type { Locale } from '@/lib/i18n';
import { getPillars } from '@/content/pillars';

export function Pillars({ locale }: { locale: Locale }) {
  const pillars = getPillars(locale);

  return (
    <Section>
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <Card className="h-full">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-tint text-primary-700">
                  <p.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-ink-muted">{p.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
