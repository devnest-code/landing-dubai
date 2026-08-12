import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  // This app lives inside another repo; pin the workspace root to itself so
  // Turbopack doesn't infer the parent directory from a sibling lockfile.
  turbopack: { root: __dirname },
}

export default withNextIntl(nextConfig)
