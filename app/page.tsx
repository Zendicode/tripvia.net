import { getCurrentLocale } from '@/lib/i18n';
import { Hero } from '@/components/sections/Hero';
import { Pillars } from '@/components/sections/Pillars';
import { FeatureList } from '@/components/sections/FeatureList';
import { SocialProof } from '@/components/sections/SocialProof';
import { CtaBand } from '@/components/sections/CtaBand';

export default async function Home() {
  const locale = await getCurrentLocale();

  return (
    <>
      <Hero locale={locale} />
      <Pillars locale={locale} />
      <FeatureList locale={locale} />
      <SocialProof locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}
