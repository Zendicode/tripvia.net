import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import { faq } from '@/content/faq';

export function FaqSection() {
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
