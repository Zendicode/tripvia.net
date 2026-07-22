import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { PricingTable } from '@/components/sections/PricingTable';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple pricing for individuals, professionals, and teams. Start free and upgrade when you need unlimited trips and reports.',
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple pricing for every driver"
        subtitle="Start free. Upgrade when you need unlimited trips, cloud sync, and team features."
      />
      <PricingTable />
      <CtaBand />
    </>
  );
}
