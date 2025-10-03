import { NextResponse } from 'next/server';
import { i18nConfig } from './i18nConfig';
import { cookies } from 'next/headers';

function getLocale(request) {
  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value;

  const { locales, defaultLocale } = i18nConfig;

  if (lang && locales.includes(lang)) return lang;

  const acceptLang = request.headers.get('accept-language') || '';
  const browserLang = acceptLang.split(',')[0].split('-')[0];

  if (locales.includes(browserLang)) return browserLang;

  return defaultLocale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip if already has locale
  const missingLocale = i18nConfig.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (missingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
