import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage, LegalSection } from '@/components/sections/LegalPage';
import { OperatorFooter } from '@/components/sections/OperatorFooter';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of the Tripvia app and website.',
};

const link = 'font-medium text-primary-700 underline';

const plans = [
  { plan: 'Personal Monthly', price: '€2.99 / month', id: 'kj_personal_monthly_299' },
  { plan: 'Personal Yearly', price: '€24.99 / year', id: 'kj_personal_yearly_2499' },
  {
    plan: 'Company Monthly (up to 10 members)',
    price: '€7.99 / month',
    id: 'kj_company_monthly_799',
  },
  {
    plan: 'Company Yearly (up to 10 members)',
    price: '€69.99 / year',
    id: 'kj_company_yearly_6999',
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 20, 2026"
      footer={<OperatorFooter />}
    >
      <LegalSection heading="1. Acceptance of terms">
        <p>
          By creating an account or using Tripvia (&ldquo;the app&rdquo;), you
          agree to these Terms of Service. The app is operated by{' '}
          <strong>Weblio s.&nbsp;r.&nbsp;o.</strong>, Jilemnického 1142/12, 040
          01 Košice, Slovakia, IČO 57 696 497 (weblioapp.com). If you do not
          agree, do not use the app.
        </p>
      </LegalSection>

      <LegalSection heading="2. Description of service">
        <p>
          Tripvia logs vehicle trips (manually, via automatic GPS detection, or
          via Google Timeline import) and generates trip reports intended to
          support tax deduction filings. Reports are informational only — you
          are responsible for reviewing accuracy and for your own tax
          compliance. Tripvia is not a tax advisor and does not guarantee a
          report will be accepted by any tax authority.
        </p>
      </LegalSection>

      <LegalSection heading="3. Free trial">
        <p>
          New accounts receive a 14-day free trial with no payment required to
          start. One trial per account. At the end of the trial, features that
          require an active subscription are locked to read-only access until
          you subscribe. Trial usage limits (report count, import date range)
          are described in-app.
        </p>
      </LegalSection>

      <LegalSection heading="4. Subscription plans and pricing">
        <p>Tripvia offers the following auto-renewing subscription plans:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-ink">
                <th className="py-2 pr-4 font-bold">Plan</th>
                <th className="py-2 pr-4 font-bold">Price</th>
                <th className="py-2 font-bold">Product ID</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((p) => (
                <tr key={p.id} className="border-b border-border">
                  <td className="py-2 pr-4">{p.plan}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">{p.price}</td>
                  <td className="py-2">
                    <code className="rounded bg-bg-alt px-1.5 py-0.5 text-xs text-ink">
                      {p.id}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Prices are shown, and may be localized, at checkout in the Google Play
          or App Store purchase sheet; the store-displayed price is
          authoritative. Feature differences between plans are described on the
          in-app plan-selection screen.
        </p>
      </LegalSection>

      <LegalSection heading="5. Auto-renewal and cancellation">
        <p>
          <strong>Subscriptions automatically renew</strong> for the same period
          (monthly or yearly) at the then-current price, unless cancelled at
          least 24 hours before the end of the current period. You are charged
          through the Google Play or App Store account you purchased with —
          Tripvia never processes your payment directly.
        </p>
        <p>To cancel:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Android:</strong> Google Play app → Payments &amp;
            subscriptions → Subscriptions → Tripvia → Cancel.
          </li>
          <li>
            <strong>iOS:</strong> Settings → [your name] → Subscriptions →
            Tripvia → Cancel.
          </li>
        </ul>
        <p>
          You keep access until the end of the period you already paid for;
          access then drops to the free tier&rsquo;s read-only mode.
        </p>
      </LegalSection>

      <LegalSection heading="6. Refunds">
        <p>
          Refund requests are handled according to Google Play&rsquo;s or the
          App Store&rsquo;s standard refund policy — request via the store&rsquo;s
          order history, or contact us at{' '}
          <a className={link} href="mailto:info@weblioapp.com">
            info@weblioapp.com
          </a>{' '}
          and we will assist. Because every plan includes a 14-day free trial
          before any charge occurs, we do not provide partial refunds for the
          unused portion of a billing period once a charge has been made, except
          where required by applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="7. Company plan and organizations">
        <p>
          On a Company plan, the subscribing account (&ldquo;leader&rdquo;) may
          invite up to the plan&rsquo;s member limit (&ldquo;drivers&rdquo;) into
          a shared organization. The leader can view all trips and reports
          logged by members of their organization. Members should not log
          personal, non-work trips under an organization they don&rsquo;t
          control.
        </p>
      </LegalSection>

      <LegalSection heading="8. Acceptable use">
        <p>
          You agree not to misuse the app: no attempting to access another
          user&rsquo;s account or data, no reverse-engineering or interfering
          with the app&rsquo;s operation, no using the service for unlawful
          purposes. We may suspend or terminate accounts that violate these
          terms.
        </p>
      </LegalSection>

      <LegalSection heading="9. Your data">
        <p>
          You own the trip and vehicle data you enter. See our{' '}
          <Link className={link} href="/privacy">
            Privacy Policy
          </Link>{' '}
          for how we collect, use, and store it. You can export or delete your
          data at any time by contacting{' '}
          <a className={link} href="mailto:info@weblioapp.com">
            info@weblioapp.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="10. Disclaimer and limitation of liability">
        <p>
          The app is provided &ldquo;as is&rdquo; without warranties of any
          kind. We do not guarantee uninterrupted or error-free operation, and
          are not liable for lost trip data, missed deductions, or tax filing
          consequences arising from use of the app. Nothing in these terms
          limits liability that cannot be limited under applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="11. Governing law">
        <p>
          These terms are governed by the laws of the Slovak Republic, without
          regard to conflict-of-law principles, without prejudice to any
          mandatory consumer-protection rights you have under the law of your
          country of residence within the EU/EEA.
        </p>
      </LegalSection>

      <LegalSection heading="12. Changes to these terms">
        <p>
          We may update these terms. The current version is always available in
          the app under Settings → Terms of Service, and at this URL. Material
          changes affecting pricing or cancellation rights will be communicated
          via the app before they take effect. For questions, contact{' '}
          <a className={link} href="mailto:info@weblioapp.com">
            info@weblioapp.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
