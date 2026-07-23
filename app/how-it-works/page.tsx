import type { Metadata } from 'next';
import { getCurrentLocale } from '@/lib/i18n';
import { getPageCopy } from '@/content/pageCopy';
import { PageHeader } from '@/components/sections/PageHeader';
import { Steps } from '@/components/sections/Steps';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'From drive to done: how Tripvia automatically tracks, logs, and reports your business mileage in four simple steps.',
};

export default async function HowItWorksPage() {
  const locale = await getCurrentLocale();
  const copy = getPageCopy(locale).howItWorksPage;

  return (
    <>
      <PageHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
      />
      <Steps locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}
