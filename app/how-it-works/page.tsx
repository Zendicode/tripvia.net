import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { Steps } from '@/components/sections/Steps';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'From drive to done: how Tripvia automatically tracks, logs, and reports your business mileage in four simple steps.',
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From drive to done in four steps"
        subtitle="Tripvia does the tracking, mapping, and paperwork for you — no manual logging required."
      />
      <Steps />
      <CtaBand />
    </>
  );
}
