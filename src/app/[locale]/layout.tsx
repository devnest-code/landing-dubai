import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Sora, Inter } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing, dir } from '@/i18n/routing'
import { site, siteUrl } from '@/config/site'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { MobileStickyBar } from '@/components/layout/MobileStickyBar'
import '../globals.css'

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

interface Props {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.home' })
  const base = siteUrl()

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || `https://${site.brand.domain}`),
    verification: {
      google: 'hyLciLL6OpBKGtgGcSXS-211NtuvyfT2E27Vg5p-qH0',
    },
    title: {
      default: t('title'),
      template: `%s`,
    },
    description: t('description'),
    keywords: [
      'web development Dubai',
      'website development Dubai',
      'web design Dubai',
      'software development UAE',
      'custom software Dubai',
      'CRM development Dubai',
      'business automation Dubai',
      'web development company Dubai',
    ],
    authors: [{ name: site.brand.name }],
    alternates: {
      canonical: `${base}/${locale}`,
      languages: { en: `${base}/en`, ar: `${base}/ar`, 'x-default': `${base}/en` },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${base}/${locale}`,
      siteName: site.brand.name,
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      type: 'website',
      // Generated at src/app/opengraph-image.tsx. Referenced explicitly because a
      // custom openGraph object here otherwise suppresses the file-based image.
      images: [{ url: `${base}/opengraph-image`, width: 1200, height: 630, alt: site.brand.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${base}/opengraph-image`],
    },
    robots: { index: true, follow: true },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages({ locale })
  const base = siteUrl()
  const gaId = site.analytics.gaId

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.brand.name,
    url: base,
    description:
      'Premium websites, business systems and automation for SMEs across Dubai and the UAE.',
    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    foundingLocation: { '@type': 'Place', name: 'Ecuador' },
    priceRange: 'AED',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.contact.email,
      availableLanguage: ['English', 'Arabic'],
    },
  }

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <MobileStickyBar />
        </NextIntlClientProvider>
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
