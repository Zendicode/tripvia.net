import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '@/components/sections/LegalPage';
import { OperatorFooter } from '@/components/sections/OperatorFooter';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Tripvia collects, uses, and protects your location and account data.',
};

const link = 'font-medium text-primary-700 underline';

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 20, 2026"
      footer={<OperatorFooter />}
    >
      <LegalSection heading="1. Who we are">
        <p>
          Tripvia is a mileage tracking mobile application for individuals and
          teams to easily track and report their business trips for tax
          purposes, operated by <strong>Weblio s.&nbsp;r.&nbsp;o.</strong>,
          Jilemnického 1142/12, 040 01 Košice, Slovakia, IČO 57 696 497 (
          <a className={link} href="https://weblioapp.com">
            weblioapp.com
          </a>
          ). For privacy questions contact{' '}
          <a className={link} href="mailto:info@weblioapp.com">
            info@weblioapp.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="2. What data we collect">
        <p>
          We collect only the data you explicitly provide or that is required
          for the app to function:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Email address and password (for authentication via Supabase)</li>
          <li>Full name, company name, Tax ID (optional, for report headers)</li>
          <li>Vehicle details (name, plate number, fuel type, odometer)</li>
          <li>Trip data: start/end addresses, distance, date, purpose</li>
          <li>GPS location data when background tracking is enabled</li>
          <li>
            Subscription and purchase status (plan, billing period, renewal
            date) if you subscribe
          </li>
          <li>
            Crash and performance diagnostics (device type, OS version, app
            errors)
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How we use your data">
        <p>
          Your data is used solely to provide the trip logging, reporting, and
          subscription features of the app. We do not sell, share, or use your
          data for advertising or profiling. Trip data is used to generate tax
          reports at your explicit request.
        </p>
      </LegalSection>

      <LegalSection heading="4. Location data">
        <p>
          Background location tracking is optional and must be explicitly
          enabled in the app settings. While active, a persistent notification
          shows tracking is running (Android foreground service requirement).
          Location data is used only for automatic trip detection. Raw GPS
          coordinates are stored temporarily and then processed into trip
          records. You can disable tracking at any time in Settings.
        </p>
      </LegalSection>

      <LegalSection heading="5. Subscriptions and payment data">
        <p>
          Paid plans are billed and processed entirely by Google Play (Android)
          or the App Store (iOS) — we never see or store your payment card
          details. We use RevenueCat to manage subscription status across
          devices; RevenueCat receives your purchase receipt and a pseudonymous
          account identifier (your Tripvia user ID) from the store, and forwards
          your active plan and renewal date to us so the app can unlock the
          features you paid for.
        </p>
      </LegalSection>

      <LegalSection heading="6. Data storage">
        <p>
          Data is stored securely on Supabase (supabase.com) servers in the EU
          region. All connections are encrypted via HTTPS/TLS. Each user can
          only access their own data (Row Level Security enforced at database
          level).
        </p>
      </LegalSection>

      <LegalSection heading="7. Data retention">
        <p>
          Your data is retained for as long as you have an active account. You
          can delete your account and all associated data at any time by
          contacting{' '}
          <a className={link} href="mailto:info@weblioapp.com">
            info@weblioapp.com
          </a>
          . Generated reports stored in cloud storage are also deleted upon
          account deletion.
        </p>
      </LegalSection>

      <LegalSection heading="8. Your rights (GDPR)">
        <p>
          As a user in the EU/EEA you have the right to: access your personal
          data, correct inaccurate data, request erasure, restrict processing,
          and data portability. To exercise these rights contact{' '}
          <a className={link} href="mailto:info@weblioapp.com">
            info@weblioapp.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="9. Third-party services">
        <ul className="list-disc space-y-1 pl-5">
          <li>Supabase (database, auth, storage) — supabase.com/privacy</li>
          <li>
            Google Maps / Places API (address search, routing) —
            policies.google.com/privacy
          </li>
          <li>
            Google Takeout data processed locally and on our servers only when
            you initiate an import
          </li>
          <li>RevenueCat (subscription management) — revenuecat.com/privacy</li>
          <li>
            Google Play / App Store (payment processing) — respective store
            privacy policies
          </li>
          <li>Sentry (crash and error diagnostics) — sentry.io/privacy</li>
        </ul>
      </LegalSection>

      <LegalSection heading="10. Children">
        <p>
          This app is not intended for children under 16. We do not knowingly
          collect data from children.
        </p>
      </LegalSection>

      <LegalSection heading="11. Changes to this policy">
        <p>
          We may update this policy. The current version is always available in
          the app under Settings → Privacy Policy, and at this URL. Significant
          changes will be communicated via the app.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
