import { NextResponse } from 'next/server';
import { i18nConfig } from './i18nConfig';
import { cookies } from 'next/headers';
import { match as matchLocale } from '@formatjs/intl-localematcher';

function getLocale(request) {
  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value;

  // Collect Accept-Language from headers
  const acceptLanguage = request.headers.get('accept-language') || '';

  // Extract browser-preferred languages
  const preferred = acceptLanguage
    .split(',')
    .map(l => l.split(';')[0].trim());

  const { locales, defaultLocale } = i18nConfig;

  // Match cookie first, fallback to browser, fallback to default
  return matchLocale(
    [lang, ...preferred].filter(Boolean),
    locales,
    defaultLocale
  );
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip paths that already include a locale
  const pathnameIsMissingLocale = i18nConfig.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Redirect to the locale-prefixed path
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
