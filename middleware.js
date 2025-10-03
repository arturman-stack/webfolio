import {NextResponse} from 'next/server';
import {i18nConfig} from './i18nConfig';
import {cookies} from 'next/headers';
import {match as matchLocale} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export async function getLocale(request) {
  // Negotiator expects plain object, so we need to transform headers
  const negotiatorHeaders = {};

  const cookieStore = await cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value;

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const { locales } = i18nConfig;

  // Use negotiator and intl-localeMatcher to get best locale
  new Negotiator({ headers: negotiatorHeaders }).languages(locales);
  return matchLocale(lang || 'en', locales, i18nConfig.defaultLocale)
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18nConfig.locales.every(
      (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = await getLocale(request); // Ensure `getLocale` is awaited

    if (locale === i18nConfig.defaultLocale) {
      return NextResponse.rewrite(
          new URL(
              `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
              request.url
          )
      );
    }

    // Redirect to the correct locale-based URL
    return NextResponse.redirect(
        new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)', '/((?!api|_next|_vercel|.*\\..*).*)',],
};
