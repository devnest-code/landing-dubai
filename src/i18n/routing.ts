import { defineRouting } from 'next-intl/routing'

/** Public locales. English remains the default and Arabic uses RTL. */
export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
})

export type Locale = (typeof routing.locales)[number]

/** Right-to-left locales. Drives the document direction. */
const RTL_LOCALES = new Set<string>(['ar'])

export function dir(locale: string): 'rtl' | 'ltr' {
  return RTL_LOCALES.has(locale) ? 'rtl' : 'ltr'
}
