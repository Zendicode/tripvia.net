import { cookies } from 'next/headers';

export const locales = ['en', 'sk'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';
export const localeCookieName = 'tripvia-lang';

export function isLocale(value: string | undefined | null): value is Locale {
  return value === 'en' || value === 'sk';
}

export async function getCurrentLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(localeCookieName)?.value;
  return isLocale(value) ? value : defaultLocale;
}
