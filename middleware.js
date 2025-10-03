import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { i18nConfig } from './i18nConfig';

function getLocale(request) {
	const cookieStore = cookies(); // sync in Edge
	const lang = cookieStore.get('NEXT_LOCALE')?.value;

	const { locales, defaultLocale } = i18nConfig;

	// 1️⃣ Cookie check
	if (lang && locales.includes(lang)) return lang;

	// 2️⃣ Browser Accept-Language
	const acceptLang = request.headers.get('accept-language') || '';
	const browserLang = acceptLang.split(',')[0].split('-')[0];
	if (locales.includes(browserLang)) return browserLang;

	// 3️⃣ Fallback
	return defaultLocale;
}

export function middleware(request) {
	try {
		const { pathname } = request.nextUrl;

		// Skip paths that already have a locale
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
	} catch (err) {
		// Return error message so Vercel shows the real crash
		return new NextResponse("Middleware crash: " + err.message, { status: 500 });
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
