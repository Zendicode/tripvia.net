import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { PageHeader } from '@/components/sections/PageHeader';
import { FaqSection } from '@/components/sections/FaqSection';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Answers to common questions about Tripvia, plus how to get in touch with our team.',
};

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="How can we help?"
        subtitle="Find quick answers below, or reach out and we will get back to you."
      />
      <FaqSection />
      <Section alt>
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-border bg-surface p-10 text-center shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-tint text-primary-700">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-ink">
                Still have questions?
              </h2>
              <p className="mt-2 text-ink-muted">
                Email our team and we will help you get set up.
              </p>
              <div className="mt-6">
                <Button href={`mailto:${site.email}`}>Email support</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
