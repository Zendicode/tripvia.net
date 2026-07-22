import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '@/components/sections/LegalPage';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of the Tripvia app and website.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 22, 2026">
      <LegalSection heading="Acceptance of terms">
        <p>
          By downloading or using Tripvia, you agree to these terms. If you do
          not agree, please do not use the app or this website.
        </p>
      </LegalSection>
      <LegalSection heading="Use of the service">
        <p>
          Tripvia helps you track and report business mileage. You are
          responsible for the accuracy of the trips and classifications you keep
          and for ensuring your records meet your own tax and reimbursement
          requirements.
        </p>
      </LegalSection>
      <LegalSection heading="Accounts">
        <p>
          You are responsible for keeping your account credentials secure and
          for activity that occurs under your account.
        </p>
      </LegalSection>
      <LegalSection heading="Subscriptions">
        <p>
          Paid plans are billed as described at the time of purchase. Prices and
          features may change; we will give reasonable notice of material
          changes.
        </p>
      </LegalSection>
      <LegalSection heading="Disclaimer">
        <p>
          The service is provided &ldquo;as is&rdquo; without warranties of any
          kind. Tripvia is a record-keeping tool and does not provide tax, legal,
          or accounting advice.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions about these terms? Email us at{' '}
          <a
            className="font-medium text-primary-700 underline"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
