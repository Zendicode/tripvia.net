import { Check } from 'lucide-react';
import type { Feature } from '@/content/features';
import { Reveal } from '@/components/ui/Reveal';
import { RouteMap } from '@/components/graphics/RouteMap';
import { cn } from '@/lib/cn';
import type { Locale } from '@/lib/i18n';
import { getPageCopy } from '@/content/pageCopy';

/** The visual panel beside a feature: the real route map for the maps
 *  feature, otherwise a consistent placeholder "app screen" card. */
function FeatureVisual({
  feature,
  locale,
}: {
  feature: Feature;
  locale: Locale;
}) {
  const Icon = feature.icon;
  const copy = getPageCopy(locale).hero;

  if (feature.id === 'google-maps') {
    return (
      <div className="rounded-[2rem] border border-border bg-surface p-3 shadow-lift">
        <RouteMap />
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-border bg-gradient-to-br from-surface to-bg-alt p-6 shadow-lift sm:p-8">
      <div className="rounded-2xl bg-surface p-5 shadow-soft">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-700 text-white">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="space-y-1.5">
            <div className="h-2.5 w-28 rounded-full bg-ink/10" />
            <div className="h-2.5 w-20 rounded-full bg-ink/10" />
          </div>
        </div>
        <div className="mt-5 space-y-2.5">
          <div className="h-3 w-full rounded-full bg-bg-alt" />
          <div className="h-3 w-5/6 rounded-full bg-bg-alt" />
          <div className="h-3 w-2/3 rounded-full bg-bg-alt" />
        </div>
        <div className="mt-5 flex gap-2">
          <span className="rounded-full bg-primary-tint px-3 py-1 text-xs font-bold text-primary-700">
            {copy.business}
          </span>
          <span className="rounded-full bg-bg-alt px-3 py-1 text-xs font-medium text-ink-muted">
            {copy.personal}
          </span>
        </div>
      </div>
    </div>
  );
}

export function FeatureHighlight({
  feature,
  flip,
  locale,
}: {
  feature: Feature;
  flip?: boolean;
  locale: Locale;
}) {
  const Icon = feature.icon;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={cn(flip && 'lg:order-2')}>
        <div className="max-w-lg">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-tint text-primary-700">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">
            {feature.title}
          </h3>
          <p className="mt-3 text-lg text-ink-muted">{feature.body}</p>
          <ul className="mt-6 space-y-3">
            {feature.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-tint text-primary-700">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-ink">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.08} className={cn(flip && 'lg:order-1')}>
        <FeatureVisual feature={feature} locale={locale} />
      </Reveal>
    </div>
  );
}
