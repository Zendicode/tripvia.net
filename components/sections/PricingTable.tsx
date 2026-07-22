import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { pricing } from '@/content/pricing';
import { cn } from '@/lib/cn';

export function PricingTable() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.06}>
              <div
                className={cn(
                  'flex h-full flex-col rounded-3xl border bg-surface p-8 shadow-soft',
                  tier.highlighted
                    ? 'border-primary-700 ring-2 ring-primary-700'
                    : 'border-border',
                )}
              >
                {tier.highlighted && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary-700 px-3 py-1 text-xs font-bold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-ink">{tier.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{tier.blurb}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-ink">
                    {tier.price}
                  </span>
                  <span className="text-sm text-ink-muted">
                    / {tier.cadence}
                  </span>
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-tint text-primary-700">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-ink">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Button
                    href={tier.ctaHref}
                    variant={tier.highlighted ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-ink-muted">
          Prices shown are placeholders and may change before launch. All paid
          plans include a free trial.
        </p>
      </Container>
    </Section>
  );
}
