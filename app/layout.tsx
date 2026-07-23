import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { getCurrentLocale } from '@/lib/i18n';
import { getSiteCopy, site } from '@/content/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${getSiteCopy('en').tagline}`,
    template: `%s — ${site.name}`,
  },
  description: getSiteCopy('en').description,
  applicationName: site.name,
  keywords: [
    'mileage tracker',
    'trip log book',
    'business mileage',
    'GPS mileage tracking',
    'mileage report',
    'mileage log app',
  ],
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${getSiteCopy('en').tagline}`,
    description: getSiteCopy('en').description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${getSiteCopy('en').tagline}`,
    description: getSiteCopy('en').description,
  },
};

export const viewport: Viewport = {
  themeColor: '#22C481',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getCurrentLocale();
  const copy = getSiteCopy(locale);

  return (
    <html lang={locale} className={jakarta.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          {copy.ui.skipToContent}
        </a>
        <Header locale={locale} copy={copy} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
