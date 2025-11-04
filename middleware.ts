import createMiddleware from 'next-intl/middleware';
import { routing } from './app/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

// Redirect mappings for tw.vaio.com
const redirectMap: Record<string, string> = {
  '/tc': 'https://shopvaio.cyberbiz.co/',
  '/product/new_sx14/overview': 'https://shopvaio.cyberbiz.co/',
  '/product/se2021/overview': 'https://shopvaio.cyberbiz.co/',
  '/product/sx12/overview': 'https://shopvaio.cyberbiz.co/',
  '/product/a12/overview': 'https://shopvaio.cyberbiz.co/',
  '/product/s11-s13/overview': 'https://shopvaio.cyberbiz.co/',
  '/support/repair-tnc':
    'https://shopvaio.cyberbiz.co/pages/%E7%B6%AD%E4%BF%AE%E6%A2%9D%E6%AC%BE%E5%8F%8A%E7%B4%B0%E5%89%87',
  '/support':
    'https://shopvaio.cyberbiz.co/pages/%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91',
  '/about-us': 'https://shopvaio.cyberbiz.co/pages/about-us',
  '/contact-us':
    'https://shopvaio.cyberbiz.co/pages/%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91',
};

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Check if we need to redirect for tw.vaio.com
  if (host === 'tw.vaio.com') {
    const url = request.nextUrl.clone();
    const pathname = url.pathname;

    // Remove locale prefix if present (e.g., /tc or /en)
    let cleanPath = pathname;
    if (pathname.startsWith('/tc/') || pathname.startsWith('/en/')) {
      cleanPath = pathname.replace(/^\/(tc|en)/, '') || '/';
    }

    // Check for exact path matches
    if (redirectMap[cleanPath]) {
      return NextResponse.redirect(redirectMap[cleanPath], 301);
    }

    // Also check the original pathname with locale prefix
    if (redirectMap[pathname]) {
      return NextResponse.redirect(redirectMap[pathname], 301);
    }
  }

  // Handle i18n routing and cookies
  const parsedHost = host?.split('.');
  let country = 'hk';
  if (parsedHost && parsedHost.length > 0) {
    country = parsedHost[0];
  }

  const res = intlMiddleware(request);

  if (parsedHost && parsedHost.length > 0) {
    if (country === 'tw') {
      res.cookies.set('NEXT_LOCALE', 'tc', { path: '/' });
    } else {
      res.cookies.set('NEXT_LOCALE', 'en', { path: '/' });
    }
    res.cookies.set('VAIO_COUNTRY', country, { path: '/' });
  }

  return res;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|tc)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
