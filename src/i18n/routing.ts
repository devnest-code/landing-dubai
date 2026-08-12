import { defineRouting } from 'next-intl/routing'

/**
 * v1 ships English only. Arabic is intentionally one line away:
 * add 'ar' to `locales` and provide src/messages/ar.json — the `dir`
 * helper below already flips the layout to RTL for it.
 */
export const routing = defineRouting({
  locales: ['en'],
  defaultLocale: 'en',
})

export type Locale = (typeof routing.locales)[number]

/** Right-to-left locales. Drives <html dir> for future Arabic support. */
const RTL_LOCALES = new Set<string>(['ar'])

export function dir(locale: string): 'rtl' | 'ltr' {
  return RTL_LOCALES.has(locale) ? 'rtl' : 'ltr'
}
