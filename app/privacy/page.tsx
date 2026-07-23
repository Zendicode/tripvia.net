import type { Metadata } from 'next';
import { getCurrentLocale } from '@/lib/i18n';
import { LegalPage, LegalSection } from '@/components/sections/LegalPage';
import { OperatorFooter } from '@/components/sections/OperatorFooter';
import { getPageCopy } from '@/content/pageCopy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Tripvia collects, uses, and protects your location and account data.',
};

const link = 'font-medium text-primary-700 underline';

export default async function PrivacyPage() {
  const locale = await getCurrentLocale();
  const isSk = locale === 'sk';

  return (
    <LegalPage
      title={isSk ? 'Zásady ochrany súkromia' : 'Privacy Policy'}
      updated="July 20, 2026"
      updatedLabel={getPageCopy(locale).ui.lastUpdated}
      footer={<OperatorFooter />}
    >
      <LegalSection heading={isSk ? '1. Kto sme' : '1. Who we are'}>
        <p>
          {isSk ? (
            <>
              Tripvia je mobilná aplikácia na sledovanie jázd pre jednotlivcov
              a tímy, ktorá umožňuje jednoducho evidovať a vykazovať služobné
              cesty na daňové účely. Prevádzkuje ju{' '}
              <strong>Weblio s.&nbsp;r.&nbsp;o.</strong>, Jilemnického 1142/12,
              040 01 Košice, Slovakia, IČO 57 696 497 (
              <a className={link} href="https://weblioapp.com">
                weblioapp.com
              </a>
              ). V otázkach ochrany súkromia nás kontaktujte na{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>
              .
            </>
          ) : (
            <>
              Tripvia is a mileage tracking mobile application for individuals
              and teams to easily track and report their business trips for tax
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
            </>
          )}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '2. Aké údaje zhromažďujeme' : '2. What data we collect'}>
        <p>
          {isSk
            ? 'Zhromažďujeme iba údaje, ktoré nám výslovne poskytnete alebo ktoré sú potrebné na fungovanie aplikácie:'
            : 'We collect only the data you explicitly provide or that is required for the app to function:'}
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            {isSk
              ? 'E-mailová adresa a heslo (na autentifikáciu cez Supabase)'
              : 'Email address and password (for authentication via Supabase)'}
          </li>
          <li>
            {isSk
              ? 'Meno a priezvisko, názov firmy, IČO/DIČ (voliteľné, pre hlavičky výkazov)'
              : 'Full name, company name, Tax ID (optional, for report headers)'}
          </li>
          <li>
            {isSk
              ? 'Údaje o vozidle (názov, evidenčné číslo, typ paliva, tachometer)'
              : 'Vehicle details (name, plate number, fuel type, odometer)'}
          </li>
          <li>
            {isSk
              ? 'Údaje o jazde: štartová/cieľová adresa, vzdialenosť, dátum, účel'
              : 'Trip data: start/end addresses, distance, date, purpose'}
          </li>
          <li>
            {isSk
              ? 'GPS údaje o polohe, keď je zapnuté sledovanie na pozadí'
              : 'GPS location data when background tracking is enabled'}
          </li>
          <li>
            {isSk
              ? 'Stav predplatného a nákupu (plán, fakturačné obdobie, dátum obnovenia), ak máte predplatné'
              : 'Subscription and purchase status (plan, billing period, renewal date) if you subscribe'}
          </li>
          <li>
            {isSk
              ? 'Diagnostika pádov a výkonu (typ zariadenia, verzia OS, chyby aplikácie)'
              : 'Crash and performance diagnostics (device type, OS version, app errors)'}
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading={isSk ? '3. Ako používame vaše údaje' : '3. How we use your data'}>
        <p>
          {isSk
            ? 'Vaše údaje používame výlučne na poskytovanie funkcií evidencie jázd, výkazov a predplatného v aplikácii. Vaše údaje nepredávame, nezdieľame ani nepoužívame na reklamu alebo profilovanie. Údaje o jazdách sa používajú na generovanie daňových výkazov iba na vašu výslovnú žiadosť.'
            : 'Your data is used solely to provide the trip logging, reporting, and subscription features of the app. We do not sell, share, or use your data for advertising or profiling. Trip data is used to generate tax reports at your explicit request.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '4. Údaje o polohe' : '4. Location data'}>
        <p>
          {isSk
            ? 'Sledovanie polohy na pozadí je voliteľné a musíte ho výslovne zapnúť v nastaveniach aplikácie. Počas aktívneho sledovania sa zobrazuje trvalé upozornenie, že sledovanie beží (požiadavka foreground služby v Androide). Údaje o polohe sa používajú len na automatické rozpoznanie jázd. Surové GPS súradnice sa ukladajú dočasne a následne sa spracujú do záznamov o jazdách. Sledovanie môžete kedykoľvek vypnúť v Nastaveniach.'
            : 'Background location tracking is optional and must be explicitly enabled in the app settings. While active, a persistent notification shows tracking is running (Android foreground service requirement). Location data is used only for automatic trip detection. Raw GPS coordinates are stored temporarily and then processed into trip records. You can disable tracking at any time in Settings.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '5. Predplatné a platobné údaje' : '5. Subscriptions and payment data'}>
        <p>
          {isSk
            ? 'Platené plány sú účtované a spracované výhradne cez Google Play (Android) alebo App Store (iOS) — údaje o vašej platobnej karte nikdy nevidíme ani neukladáme. Na správu stavu predplatného medzi zariadeniami používame RevenueCat; RevenueCat dostáva z obchodu doklad o nákupe a pseudonymný identifikátor účtu (vaše Tripvia user ID) a následne nám odovzdá váš aktívny plán a dátum obnovenia, aby aplikácia mohla odomknúť funkcie, ktoré ste si zaplatili.'
            : 'Paid plans are billed and processed entirely by Google Play (Android) or the App Store (iOS) — we never see or store your payment card details. We use RevenueCat to manage subscription status across devices; RevenueCat receives your purchase receipt and a pseudonymous account identifier (your Tripvia user ID) from the store, and forwards your active plan and renewal date to us so the app can unlock the features you paid for.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '6. Ukladanie údajov' : '6. Data storage'}>
        <p>
          {isSk
            ? 'Údaje sú bezpečne uložené na serveroch Supabase (supabase.com) v regióne EÚ. Všetky spojenia sú šifrované cez HTTPS/TLS. Každý používateľ má prístup iba k svojim vlastným údajom (Row Level Security je vynucované na úrovni databázy).'
            : 'Data is stored securely on Supabase (supabase.com) servers in the EU region. All connections are encrypted via HTTPS/TLS. Each user can only access their own data (Row Level Security enforced at database level).'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '7. Doba uchovávania údajov' : '7. Data retention'}>
        <p>
          {isSk ? (
            <>
              Vaše údaje uchovávame tak dlho, ako máte aktívny účet. Svoj účet
              a všetky súvisiace údaje môžete kedykoľvek zmazať kontaktovaním{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>
              . Vygenerované výkazy uložené v cloudovom úložisku sa po zmazaní
              účtu tiež odstránia.
            </>
          ) : (
            <>
              Your data is retained for as long as you have an active account.
              You can delete your account and all associated data at any time
              by contacting{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>
              . Generated reports stored in cloud storage are also deleted upon
              account deletion.
            </>
          )}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '8. Vaše práva (GDPR)' : '8. Your rights (GDPR)'}>
        <p>
          {isSk ? (
            <>
              Ako používateľ v EÚ/EHP máte právo na prístup k osobným údajom,
              opravu nepresných údajov, vymazanie, obmedzenie spracúvania a
              prenositeľnosť údajov. Ak si chcete tieto práva uplatniť,
              kontaktujte{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>
              .
            </>
          ) : (
            <>
              As a user in the EU/EEA you have the right to: access your
              personal data, correct inaccurate data, request erasure, restrict
              processing, and data portability. To exercise these rights
              contact{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>
              .
            </>
          )}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '9. Služby tretích strán' : '9. Third-party services'}>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            {isSk
              ? 'Supabase (databáza, autentifikácia, úložisko) — supabase.com/privacy'
              : 'Supabase (database, auth, storage) — supabase.com/privacy'}
          </li>
          <li>
            {isSk
              ? 'Google Maps / Places API (vyhľadávanie adries, trasovanie) — policies.google.com/privacy'
              : 'Google Maps / Places API (address search, routing) — policies.google.com/privacy'}
          </li>
          <li>
            {isSk
              ? 'Dáta z Google Takeout spracúvané lokálne a na našich serveroch len pri spustení importu'
              : 'Google Takeout data processed locally and on our servers only when you initiate an import'}
          </li>
          <li>
            {isSk
              ? 'RevenueCat (správa predplatného) — revenuecat.com/privacy'
              : 'RevenueCat (subscription management) — revenuecat.com/privacy'}
          </li>
          <li>
            {isSk
              ? 'Google Play / App Store (spracovanie platieb) — zásady ochrany súkromia príslušného obchodu'
              : 'Google Play / App Store (payment processing) — respective store privacy policies'}
          </li>
          <li>
            {isSk
              ? 'Sentry (diagnostika pádov a chýb) — sentry.io/privacy'
              : 'Sentry (crash and error diagnostics) — sentry.io/privacy'}
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading={isSk ? '10. Deti' : '10. Children'}>
        <p>
          {isSk
            ? 'Táto aplikácia nie je určená pre deti mladšie ako 16 rokov. Vedome nezhromažďujeme údaje od detí.'
            : 'This app is not intended for children under 16. We do not knowingly collect data from children.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '11. Zmeny týchto zásad' : '11. Changes to this policy'}>
        <p>
          {isSk
            ? 'Tieto zásady môžeme aktualizovať. Aktuálna verzia je vždy dostupná v aplikácii v časti Nastavenia → Zásady ochrany súkromia a na tejto URL adrese. Významné zmeny budeme oznamovať cez aplikáciu.'
            : 'We may update this policy. The current version is always available in the app under Settings → Privacy Policy, and at this URL. Significant changes will be communicated via the app.'}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
