import { NextRequest, NextResponse } from 'next/server';

import { match } from '@formatjs/intl-localematcher';

import Negotiator from 'negotiator';

const locales = ['en', 'fa'];
const defaultLocale = 'en';

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const acceptLang = request.headers.get('Accept-Language');
  if (!acceptLang) return defaultLocale;
  const headers = { 'accept-language': acceptLang };
  const languages = new Negotiator({ headers }).languages(locales);
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Redirect if there is no locale
    const locale = getLocale(request);
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
