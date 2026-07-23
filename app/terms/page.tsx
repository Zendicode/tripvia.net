import type { Metadata } from 'next';
import Link from 'next/link';
import { getCurrentLocale } from '@/lib/i18n';
import { LegalPage, LegalSection } from '@/components/sections/LegalPage';
import { OperatorFooter } from '@/components/sections/OperatorFooter';
import { getPageCopy } from '@/content/pageCopy';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of the Tripvia app and website.',
};

const link = 'font-medium text-primary-700 underline';

export default async function TermsPage() {
  const locale = await getCurrentLocale();
  const isSk = locale === 'sk';
  const plans = isSk
    ? [
        {
          plan: 'Osobný mesačný',
          price: '€2.99 / mesiac',
          id: 'kj_personal_monthly_299',
        },
        {
          plan: 'Osobný ročný',
          price: '€24.99 / rok',
          id: 'kj_personal_yearly_2499',
        },
        {
          plan: 'Firemný mesačný (do 10 členov)',
          price: '€7.99 / mesiac',
          id: 'kj_company_monthly_799',
        },
        {
          plan: 'Firemný ročný (do 10 členov)',
          price: '€69.99 / rok',
          id: 'kj_company_yearly_6999',
        },
      ]
    : [
        {
          plan: 'Personal Monthly',
          price: '€2.99 / month',
          id: 'kj_personal_monthly_299',
        },
        {
          plan: 'Personal Yearly',
          price: '€24.99 / year',
          id: 'kj_personal_yearly_2499',
        },
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

  return (
    <LegalPage
      title={isSk ? 'Podmienky používania' : 'Terms of Service'}
      updated="July 20, 2026"
      updatedLabel={getPageCopy(locale).ui.lastUpdated}
      footer={<OperatorFooter />}
    >
      <LegalSection heading={isSk ? '1. Prijatie podmienok' : '1. Acceptance of terms'}>
        <p>
          {isSk
            ? 'Vytvorením účtu alebo používaním Tripvia („aplikácia“) súhlasíte s týmito podmienkami používania. Aplikáciu prevádzkuje spoločnosť Weblio s. r. o., Jilemnického 1142/12, 040 01 Košice, Slovakia, IČO 57 696 497 (weblioapp.com). Ak s podmienkami nesúhlasíte, aplikáciu nepoužívajte.'
            : 'By creating an account or using Tripvia (“the app”), you agree to these Terms of Service. The app is operated by Weblio s. r. o., Jilemnického 1142/12, 040 01 Košice, Slovakia, IČO 57 696 497 (weblioapp.com). If you do not agree, do not use the app.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '2. Popis služby' : '2. Description of service'}>
        <p>
          {isSk
            ? 'Tripvia eviduje jazdy vozidiel (ručne, cez automatické GPS rozpoznanie alebo import z Google Timeline) a generuje výkazy jázd určené na podporu daňových podaní. Výkazy majú informatívny charakter — za kontrolu ich správnosti a vlastný súlad s daňovými povinnosťami zodpovedáte vy. Tripvia nie je daňový poradca a nezaručuje, že akýkoľvek výkaz bude akceptovaný daňovým úradom.'
            : 'Tripvia logs vehicle trips (manually, via automatic GPS detection, or via Google Timeline import) and generates trip reports intended to support tax deduction filings. Reports are informational only — you are responsible for reviewing accuracy and for your own tax compliance. Tripvia is not a tax advisor and does not guarantee a report will be accepted by any tax authority.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '3. Skúšobné obdobie zdarma' : '3. Free trial'}>
        <p>
          {isSk
            ? 'Nové účty získajú 14-dňové skúšobné obdobie bez potreby platby pri začiatku. Na jeden účet pripadá jedno skúšobné obdobie. Po jeho skončení sa funkcie vyžadujúce aktívne predplatné uzamknú do režimu len na čítanie, kým sa neprihlásite na odber. Limity skúšobného používania (počet výkazov, rozsah dátumov pri importe) sú popísané priamo v aplikácii.'
            : 'New accounts receive a 14-day free trial with no payment required to start. One trial per account. At the end of the trial, features that require an active subscription are locked to read-only access until you subscribe. Trial usage limits (report count, import date range) are described in-app.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '4. Predplatné a ceny' : '4. Subscription plans and pricing'}>
        <p>
          {isSk
            ? 'Tripvia ponúka tieto automaticky obnovované plány predplatného:'
            : 'Tripvia offers the following auto-renewing subscription plans:'}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-ink">
                <th className="py-2 pr-4 font-bold">{isSk ? 'Plán' : 'Plan'}</th>
                <th className="py-2 pr-4 font-bold">{isSk ? 'Cena' : 'Price'}</th>
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
          {isSk
            ? 'Ceny sa zobrazujú, prípadne lokalizujú, pri platbe v nákupnom okne Google Play alebo App Store; rozhodujúca je cena zobrazená obchodom. Rozdiely vo funkciách medzi plánmi sú popísané na obrazovke výberu plánu v aplikácii.'
            : 'Prices are shown, and may be localized, at checkout in the Google Play or App Store purchase sheet; the store-displayed price is authoritative. Feature differences between plans are described on the in-app plan-selection screen.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '5. Automatické obnovenie a zrušenie' : '5. Auto-renewal and cancellation'}>
        <p>
          {isSk ? (
            <>
              <strong>Predplatné sa obnovuje automaticky</strong> na rovnaké
              obdobie (mesačne alebo ročne) za aktuálnu cenu, pokiaľ ho
              nezrušíte aspoň 24 hodín pred koncom aktuálneho obdobia. Platba
              sa účtuje cez účet Google Play alebo App Store, cez ktorý ste
              nákup uskutočnili — Tripvia vašu platbu nikdy nespracúva priamo.
            </>
          ) : (
            <>
              <strong>Subscriptions automatically renew</strong> for the same
              period (monthly or yearly) at the then-current price, unless
              cancelled at least 24 hours before the end of the current period.
              You are charged through the Google Play or App Store account you
              purchased with — Tripvia never processes your payment directly.
            </>
          )}
        </p>
        <p>{isSk ? 'Ako zrušiť predplatné:' : 'To cancel:'}</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Android:</strong>{' '}
            {isSk
              ? 'aplikácia Google Play → Platby a predplatné → Predplatné → Tripvia → Zrušiť.'
              : 'Google Play app → Payments & subscriptions → Subscriptions → Tripvia → Cancel.'}
          </li>
          <li>
            <strong>iOS:</strong>{' '}
            {isSk
              ? 'Nastavenia → [vaše meno] → Predplatné → Tripvia → Zrušiť.'
              : 'Settings → [your name] → Subscriptions → Tripvia → Cancel.'}
          </li>
        </ul>
        <p>
          {isSk
            ? 'Prístup vám zostane do konca už zaplateného obdobia; potom sa zníži na režim len na čítanie vo free pláne.'
            : 'You keep access until the end of the period you already paid for; access then drops to the free tier’s read-only mode.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '6. Vrátenie peňazí' : '6. Refunds'}>
        <p>
          {isSk ? (
            <>
              Žiadosti o vrátenie peňazí sa riešia podľa štandardných pravidiel
              Google Play alebo App Store — požiadajte cez históriu objednávok
              v obchode alebo nás kontaktujte na{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>{' '}
              a pomôžeme vám. Keďže každý plán zahŕňa 14-dňové skúšobné obdobie
              zdarma ešte pred prvou platbou, po zaúčtovaní platby neposkytujeme
              čiastočné vrátenie za nevyužitú časť fakturačného obdobia, okrem
              prípadov vyžadovaných platným právom.
            </>
          ) : (
            <>
              Refund requests are handled according to Google Play’s or the App
              Store’s standard refund policy — request via the store’s order
              history, or contact us at{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>{' '}
              and we will assist. Because every plan includes a 14-day free
              trial before any charge occurs, we do not provide partial refunds
              for the unused portion of a billing period once a charge has been
              made, except where required by applicable law.
            </>
          )}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '7. Firemný plán a organizácie' : '7. Company plan and organizations'}>
        <p>
          {isSk
            ? 'Vo firemnom pláne môže predplatený účet („vedúci“) pozvať do zdieľanej organizácie členov až do limitu plánu („vodiči“). Vedúci môže vidieť všetky jazdy a výkazy zaznamenané členmi svojej organizácie. Členovia by nemali evidovať osobné, neslužobné jazdy pod organizáciou, ktorú nekontrolujú.'
            : 'On a Company plan, the subscribing account (“leader”) may invite up to the plan’s member limit (“drivers”) into a shared organization. The leader can view all trips and reports logged by members of their organization. Members should not log personal, non-work trips under an organization they don’t control.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '8. Prípustné používanie' : '8. Acceptable use'}>
        <p>
          {isSk
            ? 'Súhlasíte, že aplikáciu nebudete zneužívať: nebudete sa pokúšať o prístup k účtu alebo údajom iného používateľa, nebudete aplikáciu spätne analyzovať ani narúšať jej prevádzku a nebudete službu používať na nezákonné účely. Účty porušujúce tieto podmienky môžeme pozastaviť alebo ukončiť.'
            : 'You agree not to misuse the app: no attempting to access another user’s account or data, no reverse-engineering or interfering with the app’s operation, no using the service for unlawful purposes. We may suspend or terminate accounts that violate these terms.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '9. Vaše údaje' : '9. Your data'}>
        <p>
          {isSk ? (
            <>
              Údaje o jazdách a vozidlách, ktoré zadáte, patria vám. Pozrite si
              naše{' '}
              <Link className={link} href="/privacy">
                Zásady ochrany súkromia
              </Link>{' '}
              pre informácie o tom, ako ich zhromažďujeme, používame a
              uchovávame. Údaje môžete kedykoľvek exportovať alebo zmazať
              kontaktovaním{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>
              .
            </>
          ) : (
            <>
              You own the trip and vehicle data you enter. See our{' '}
              <Link className={link} href="/privacy">
                Privacy Policy
              </Link>{' '}
              for how we collect, use, and store it. You can export or delete
              your data at any time by contacting{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>
              .
            </>
          )}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '10. Vylúčenie zodpovednosti a obmedzenie zodpovednosti' : '10. Disclaimer and limitation of liability'}>
        <p>
          {isSk
            ? 'Aplikácia sa poskytuje „tak ako je“ bez akýchkoľvek záruk. Nezaručujeme nepretržitú alebo bezchybnú prevádzku a nenesieme zodpovednosť za stratu údajov o jazdách, zmeškané odpočty ani daňové dôsledky vyplývajúce z používania aplikácie. Nič v týchto podmienkach neobmedzuje zodpovednosť, ktorú nemožno obmedziť podľa platného práva.'
            : 'The app is provided “as is” without warranties of any kind. We do not guarantee uninterrupted or error-free operation, and are not liable for lost trip data, missed deductions, or tax filing consequences arising from use of the app. Nothing in these terms limits liability that cannot be limited under applicable law.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '11. Rozhodné právo' : '11. Governing law'}>
        <p>
          {isSk
            ? 'Tieto podmienky sa riadia právnym poriadkom Slovenskej republiky bez ohľadu na kolízne normy, pričom tým nie sú dotknuté vaše kogentné práva na ochranu spotrebiteľa podľa práva krajiny vášho pobytu v EÚ/EHP.'
            : 'These terms are governed by the laws of the Slovak Republic, without regard to conflict-of-law principles, without prejudice to any mandatory consumer-protection rights you have under the law of your country of residence within the EU/EEA.'}
        </p>
      </LegalSection>

      <LegalSection heading={isSk ? '12. Zmeny týchto podmienok' : '12. Changes to these terms'}>
        <p>
          {isSk ? (
            <>
              Tieto podmienky môžeme aktualizovať. Aktuálna verzia je vždy
              dostupná v aplikácii v časti Nastavenia → Podmienky používania a
              na tejto URL adrese. Významné zmeny týkajúce sa cien alebo práv na
              zrušenie predplatného budú oznámené cez aplikáciu pred tým, ako
              nadobudnú účinnosť. V prípade otázok kontaktujte{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>
              .
            </>
          ) : (
            <>
              We may update these terms. The current version is always
              available in the app under Settings → Terms of Service, and at
              this URL. Material changes affecting pricing or cancellation
              rights will be communicated via the app before they take effect.
              For questions, contact{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>
              .
            </>
          )}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
