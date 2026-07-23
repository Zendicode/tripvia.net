import type { Metadata } from 'next';
import { getCurrentLocale } from '@/lib/i18n';
import { LegalPage } from '@/components/sections/LegalPage';
import { OperatorFooter } from '@/components/sections/OperatorFooter';
import { getPageCopy } from '@/content/pageCopy';

export const metadata: Metadata = {
  title: 'Delete your account',
  description:
    'How to permanently delete your Tripvia account and all associated data.',
};

const link = 'font-medium text-primary-700 underline';

export default async function DeleteAccountPage() {
  const locale = await getCurrentLocale();
  const isSk = locale === 'sk';

  return (
    <LegalPage
      title={isSk ? 'Zmazanie účtu a údajov Tripvia' : 'Delete your Tripvia account and data'}
      updatedLabel={getPageCopy(locale).ui.lastUpdated}
      footer={<OperatorFooter />}
    >
      <section className="space-y-3 text-ink-muted">
        {isSk ? (
          <>
            <p>
              Najrýchlejší spôsob zmazania účtu je priamo v aplikácii: otvorte
              aplikáciu, prejdite na{' '}
              <strong className="text-ink">Nastavenia → Zmazať účet</strong>{' '}
              a potvrďte. Váš účet a údaje sa zmažú okamžite.
            </p>
            <p>
              Ak nemáte prístup k aplikácii, svoj účet môžete zmazať aj tak,
              že napíšete na{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>{' '}
              z e-mailovej adresy vášho účtu a požiadate o jeho zmazanie.
              Zmazanie dokončíme do 30 dní.
            </p>
            <p>
              <strong className="text-ink">Čo sa zmaže:</strong> váš účet a
              profil, vaše vozidlá, vaše jazdy a GPS trasy, vaše vygenerované
              výkazy a záznamy o predplatnom.
            </p>
            <p>
              <strong className="text-ink">Upozornenie:</strong> jazdy, ktoré
              ste zdieľali v organizácii (firma/tím), zostávajú dostupné
              vedúcemu tejto organizácie, ktorý si uchováva vlastnú kópiu pre
              svoje záznamy.
            </p>
          </>
        ) : (
          <>
            <p>
              To delete your account is in the app: open the app, go to{' '}
              <strong className="text-ink">Settings → Delete account</strong>,
              and confirm. Your account and data are deleted immediately.
            </p>
            <p>
              If you don&rsquo;t have access to the app, you can also delete your
              account by emailing{' '}
              <a className={link} href="mailto:info@weblioapp.com">
                info@weblioapp.com
              </a>{' '}
              from the email address on your account and asking us to delete
              it. We complete deletion within 30 days.
            </p>
            <p>
              <strong className="text-ink">What gets deleted:</strong> your
              account and profile, your vehicles, your trips and GPS routes,
              your generated reports, and your subscription records.
            </p>
            <p>
              <strong className="text-ink">Please note:</strong> trips you
              shared into an organization (company/team) remain available to
              that organization&rsquo;s leader, who keeps their own copy for
              their records.
            </p>
          </>
        )}
      </section>
    </LegalPage>
  );
}
