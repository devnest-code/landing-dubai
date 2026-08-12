import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { siteUrl } from '@/config/site'

const paths = [
  '',
  '/services',
  '/industries',
  '/pricing',
  '/portfolio',
  '/about',
  '/contact',
  '/faq',
  '/legal/privacy',
  '/legal/terms',
  '/legal/cookies',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl()
  const now = new Date()

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: now,
      changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : 0.7,
    })),
  )
}
