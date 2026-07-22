import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { AppBadge } from '@/components/ui/AppBadge';
import { PhoneMockup } from '@/components/graphics/PhoneMockup';
import { site } from '@/content/site';

export function CtaBand() {
  return (
    <section id="download" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-[2.5rem] bg-forest px-6 py-14 sm:px-14">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Start your trip log book today
                </h2>
                <p className="mt-4 text-lg text-white/80">
                  Download Tripvia and turn every drive into an accurate,
                  reimbursement-ready record. Free to start — no credit card
                  needed.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <AppBadge store="ios" href={site.appLinks.ios} />
                  <AppBadge store="android" href={site.appLinks.android} />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
