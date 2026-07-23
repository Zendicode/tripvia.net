import { Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Counter } from '@/components/ui/Counter';
import type { Locale } from '@/lib/i18n';
import { getStats } from '@/content/stats';
import { getTestimonials } from '@/content/testimonials';

export function SocialProof({ locale }: { locale: Locale }) {
  const stats = getStats(locale);
  const testimonials = getTestimonials(locale);

  return (
    <Section>
      <Container>
        <div className="grid gap-8 rounded-[2rem] border border-border bg-surface px-6 py-10 shadow-soft sm:grid-cols-3">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <p className="text-4xl font-extrabold text-primary-700 sm:text-5xl">
                <Counter
                  value={s.value}
                  decimals={s.decimals}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-ink-muted">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 shadow-soft">
                <div
                  className="flex gap-0.5 text-primary-700"
                  aria-hidden="true"
                >
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-primary-700 stroke-primary-700"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-bold text-ink">{t.name}</span>
                  <span className="block text-ink-muted">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
