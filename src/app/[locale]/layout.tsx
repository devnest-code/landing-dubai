import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { site, siteUrl } from '@/config/site'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { MobileStickyBar } from '@/components/layout/MobileStickyBar'

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
      languages: { en: `${base}/en`, 'x-default': `${base}/en` },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${base}/${locale}`,
      siteName: site.brand.name,
      locale: 'en_US',
      type: 'website',
      // Generated at src/app/opengraph-image.tsx. Referenced explicitly because a
      // custom openGraph object here otherwise suppresses the file-based image.
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.brand.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/opengraph-image'],
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
      availableLanguage: ['English'],
    },
  }

  return (
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
  )
}
