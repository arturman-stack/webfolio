import { NextResponse } from 'next/server';
import { i18nConfig } from './i18nConfig';

export function middleware(request) {
	const { pathname } = request.nextUrl;

	// Only redirect `/` root
	if (pathname === '/') {
		return NextResponse.redirect(new URL(`/${i18nConfig.defaultLocale}`, request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/'],
};
