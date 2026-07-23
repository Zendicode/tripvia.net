import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import type { Locale } from '@/lib/i18n';
import { getFaq } from '@/content/faq';

export function FaqSection({ locale }: { locale: Locale }) {
  const faq = getFaq(locale);

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Accordion items={faq} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
