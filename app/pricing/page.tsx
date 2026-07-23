import type { Metadata } from 'next';
import { getCurrentLocale } from '@/lib/i18n';
import { getPageCopy } from '@/content/pageCopy';
import { PageHeader } from '@/components/sections/PageHeader';
import { PricingTable } from '@/components/sections/PricingTable';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple pricing for individuals, professionals, and teams. Start free and upgrade when you need unlimited trips and reports.',
};

export default async function PricingPage() {
  const locale = await getCurrentLocale();
  const copy = getPageCopy(locale).pricingPage;

  return (
    <>
      <PageHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
      />
      <PricingTable locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}
