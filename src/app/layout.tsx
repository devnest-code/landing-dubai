import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Sora, Inter } from 'next/font/google'
import { routing, dir } from '@/i18n/routing'
import { site } from '@/config/site'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || `https://${site.brand.domain}`),
  verification: {
    google: 'hyLciLL6OpBKGtgGcSXS-211NtuvyfT2E27Vg5p-qH0',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const gaId = site.analytics.gaId
  // Single-locale v1: set the document language statically so every page can be
  // prerendered. When a second locale (e.g. Arabic) is added, move <html> into
  // app/[locale]/layout.tsx (or read the locale here) and `dir()` handles RTL.
  const locale = routing.defaultLocale

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning>
        {children}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  )
}
