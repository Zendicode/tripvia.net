import { Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { RouteMap } from '@/components/graphics/RouteMap';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background flourishes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-24 top-52 h-72 w-72 rounded-full bg-primary-tint/50 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 py-14 lg:grid-cols-2 lg:gap-10 lg:py-24">
          <div className="max-w-xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary-700">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-700" />
                Automatic mileage tracking
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
                Your business miles,{' '}
                <span className="text-primary-700">logged automatically.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-ink-muted">
                Tripvia turns every drive into a compliant trip log book —
                tracked by GPS, mapped with Google Maps, and exported to PDF or
                CSV in a single tap.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/#download" size="lg">
                  Get the app
                </Button>
                <Button href="/how-it-works" variant="secondary" size="lg">
                  See how it works
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary-700 stroke-primary-700"
                    />
                  ))}
                </span>
                <span className="text-sm text-ink-muted">
                  4.8★ average — loved by drivers on the go
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-[2rem] border border-border bg-surface p-3 shadow-lift">
                <RouteMap />
              </div>
              <div className="absolute right-3 top-5 rounded-2xl border border-border bg-surface px-4 py-3 shadow-soft">
                <p className="text-[11px] font-medium text-ink-muted">
                  This trip
                </p>
                <p className="text-base font-bold text-ink">
                  18.2 mi · <span className="text-primary-700">Business</span>
                </p>
              </div>
              <div className="absolute bottom-4 left-3 rounded-2xl border border-border bg-surface px-4 py-2.5 shadow-soft">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Trip auto-detected
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
