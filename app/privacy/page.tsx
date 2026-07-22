import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '@/components/sections/LegalPage';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Tripvia collects, uses, and protects your location and account data.',
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 22, 2026">
      <LegalSection heading="Overview">
        <p>
          Tripvia (&ldquo;we&rdquo;, &ldquo;us&rdquo;) builds a mileage tracking
          app for individuals and businesses. This policy explains what data we
          collect, why we collect it, and the choices you have. Your trip data
          belongs to you.
        </p>
      </LegalSection>
      <LegalSection heading="Information we collect">
        <p>
          To detect and map trips, the app processes location and motion data on
          your device. You may also provide account details such as your email
          address, vehicles, and trip classifications. We collect basic,
          privacy-respecting usage information to keep the service reliable.
        </p>
      </LegalSection>
      <LegalSection heading="How we use your data">
        <p>
          Location and trip data are used to create your log book, calculate
          distances, and generate the reports you request. We do not sell your
          personal data.
        </p>
      </LegalSection>
      <LegalSection heading="Storage and sync">
        <p>
          Trips are stored on your device and, when sync is enabled, backed up
          securely to your account so you can access them across devices.
        </p>
      </LegalSection>
      <LegalSection heading="Your choices">
        <p>
          You can enable or disable background tracking, export your data at any
          time, and request deletion of your account and associated data.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions about this policy? Email us at{' '}
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
