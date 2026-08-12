import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteUrl } from '@/config/site'
import { LegalDoc } from '@/components/ui/LegalDoc'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.legal' })
  return {
    title: t('cookiesTitle'),
    robots: { index: false, follow: true },
    alternates: { canonical: `${siteUrl()}/${locale}/legal/cookies` },
  }
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <LegalDoc
      title="Cookie Policy"
      intro="This Cookie Policy explains how and why we use cookies and similar technologies on this website."
      sections={[
        { heading: 'What are cookies', body: 'Cookies are small text files stored on your device that help websites function and understand usage.' },
        { heading: 'How we use cookies', body: 'We use essential cookies for the site to work and, optionally, analytics cookies to measure performance. No advertising cookies are used unless disclosed here.' },
        { heading: 'Managing cookies', body: 'You can control or delete cookies through your browser settings at any time.' },
        { heading: 'Contact', body: '[Legal company details to be completed before production.]' },
      ]}
    />
  )
}
