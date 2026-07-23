import type { Locale } from '@/lib/i18n';

const pageCopy = {
  en: {
    hero: {
      badge: 'Automatic mileage tracking',
      title: 'Your business miles,',
      titleAccent: 'logged automatically.',
      body:
        'Tripvia turns every drive into a compliant trip log book — tracked by GPS, mapped with Google Maps, and exported to PDF or CSV in a single tap.',
      primaryCta: 'Get the app',
      secondaryCta: 'See how it works',
      rating: '4.8★ average — loved by drivers on the go',
      tripLabel: 'This trip',
      business: 'Business',
      personal: 'Personal',
      autoDetected: 'Trip auto-detected',
    },
    featureIntro: {
      title: 'Everything you need for a compliant log book',
      body:
        'From automatic tracking to one-tap reports — Tripvia handles the busywork so your mileage records are always accurate and audit-ready.',
    },
    ctaBand: {
      title: 'Start your trip log book today',
      body:
        'Download Tripvia and turn every drive into an accurate, reimbursement-ready record. Free to start — no credit card needed.',
    },
    pricingPage: {
      eyebrow: 'Pricing',
      title: 'Simple pricing for every driver',
      subtitle:
        'Start free. Upgrade when you need unlimited trips, cloud sync, and team features.',
    },
    howItWorksPage: {
      eyebrow: 'How it works',
      title: 'From drive to done in four steps',
      subtitle:
        'Tripvia does the tracking, mapping, and paperwork for you — no manual logging required.',
    },
    supportPage: {
      eyebrow: 'Support',
      title: 'How can we help?',
      subtitle:
        'Find quick answers below, or reach out and we will get back to you.',
      cardTitle: 'Still have questions?',
      cardBody: 'Email our team and we will help you get set up.',
      cardCta: 'Email support',
    },
    notFound: {
      title: 'Page not found',
      body:
        'The page you are looking for took a detour. Let us get you back on route.',
      cta: 'Back to home',
    },
    ui: {
      lastUpdated: 'Last updated',
      mostPopular: 'Most popular',
      pricingPlaceholder:
        'Prices shown are placeholders and may change before launch. All paid plans include a free trial.',
    },
  },
  sk: {
    hero: {
      badge: 'Automatické sledovanie jázd',
      title: 'Vaše služobné kilometre,',
      titleAccent: 'zaznamenané automaticky.',
      body:
        'Tripvia premení každú jazdu na knihu jázd v súlade s predpismi — sledovanú cez GPS, zakreslenú cez Google Maps a exportovanú do PDF alebo CSV jedným ťuknutím.',
      primaryCta: 'Získať aplikáciu',
      secondaryCta: 'Pozrieť ako to funguje',
      rating: 'Priemer 4,8★ — obľúbené medzi vodičmi v pohybe',
      tripLabel: 'Táto jazda',
      business: 'Služobná',
      personal: 'Súkromná',
      autoDetected: 'Jazda rozpoznaná automaticky',
    },
    featureIntro: {
      title: 'Všetko, čo potrebujete pre knihu jázd v súlade s predpismi',
      body:
        'Od automatického sledovania po výkazy na jedno ťuknutie — Tripvia vybaví rutinu za vás, aby boli vaše záznamy o jazdách vždy presné a pripravené na kontrolu.',
    },
    ctaBand: {
      title: 'Začnite s knihou jázd ešte dnes',
      body:
        'Stiahnite si Tripvia a premeňte každú jazdu na presný záznam pripravený na preplatenie aj účtovníctvo. Začať môžete zadarmo — bez platobnej karty.',
    },
    pricingPage: {
      eyebrow: 'Cenník',
      title: 'Jednoduché ceny pre každého vodiča',
      subtitle:
        'Začnite zadarmo. Prejdite na vyšší plán, keď budete potrebovať neobmedzené jazdy, cloudovú synchronizáciu a tímové funkcie.',
    },
    howItWorksPage: {
      eyebrow: 'Ako to funguje',
      title: 'Od jazdy po hotový výkaz v štyroch krokoch',
      subtitle:
        'Tripvia za vás vyrieši sledovanie, mapy aj administratívu — bez ručného zapisovania.',
    },
    supportPage: {
      eyebrow: 'Podpora',
      title: 'Ako vám môžeme pomôcť?',
      subtitle:
        'Nižšie nájdete rýchle odpovede, alebo nám napíšte a ozveme sa vám späť.',
      cardTitle: 'Stále máte otázky?',
      cardBody: 'Napíšte nášmu tímu a pomôžeme vám s nastavením.',
      cardCta: 'Napísať podpore',
    },
    notFound: {
      title: 'Stránka sa nenašla',
      body:
        'Stránka, ktorú hľadáte, zišla z trasy. Vráťme vás späť na správnu cestu.',
      cta: 'Späť na domovskú stránku',
    },
    ui: {
      lastUpdated: 'Naposledy aktualizované',
      mostPopular: 'Najobľúbenejší plán',
      pricingPlaceholder:
        'Zobrazené ceny sú dočasné a pred spustením sa môžu zmeniť. Všetky platené plány zahŕňajú skúšobné obdobie zdarma.',
    },
  },
} as const;

export function getPageCopy(locale: Locale) {
  return pageCopy[locale];
}
