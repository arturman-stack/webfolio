import { NextResponse } from 'next/server';
import { i18nConfig } from './i18nConfig';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip next internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check if pathname already contains a locale
  const pathnameIsMissingLocale = i18nConfig.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Get locale from cookie
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

    // Fallback to default locale if missing
    const locale = i18nConfig.locales.includes(cookieLocale)
      ? cookieLocale
      : i18nConfig.defaultLocale;

    // Redirect to locale-based URL
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`;

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
