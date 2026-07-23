import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import type { Locale } from '@/lib/i18n';
import { getFeatures } from '@/content/features';
import { getPageCopy } from '@/content/pageCopy';
import { FeatureHighlight } from './FeatureHighlight';

export function FeatureList({ locale }: { locale: Locale }) {
  const features = getFeatures(locale);
  const copy = getPageCopy(locale).featureIntro;

  return (
    <Section id="features" alt>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{copy.body}</p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {features.map((f, i) => (
            <FeatureHighlight
              key={f.id}
              feature={f}
              flip={i % 2 === 1}
              locale={locale}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
