import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

// Next.js 16 renamed "middleware" to "proxy" (same functionality).
// next-intl's handler routes/redirects locale-prefixed paths.
export default createMiddleware(routing)

export const config = {
  // Match the root explicitly (otherwise `/` can 404 instead of redirecting to
  // the default locale), plus every path except API, Next internals, generated
  // metadata routes and any file with an extension.
  matcher: [
    '/',
    '/((?!api|_next|_vercel|icon|apple-icon|opengraph-image|twitter-image|sitemap|robots|manifest|.*\\..*).*)',
  ],
}
