// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fa', 'en'],
  defaultLocale: 'fa',
  localePrefix: 'always' 
});

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api).*)']
};