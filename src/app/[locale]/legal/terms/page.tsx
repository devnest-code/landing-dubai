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
    title: t('termsTitle'),
    robots: { index: false, follow: true },
    alternates: { canonical: `${siteUrl()}/${locale}/legal/terms` },
  }
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <LegalDoc
      title="Terms of Service"
      intro="These terms govern your use of this website and the services described on it."
      sections={[
        { heading: 'Use of the website', body: 'You agree to use this website lawfully and not to misuse the forms, content or services provided.' },
        { heading: 'Services & quotes', body: 'Prices shown are indicative starting points, not fixed quotes. Final scope, deliverables and pricing are agreed in a written proposal.' },
        { heading: 'Intellectual property', body: 'All content on this website is owned by us or our licensors unless otherwise stated.' },
        { heading: 'Limitation of liability', body: 'The website is provided “as is”. To the extent permitted by law, we are not liable for indirect or consequential losses arising from its use.' },
        { heading: 'Governing law', body: '[Governing jurisdiction to be completed before production.]' },
      ]}
    />
  )
}
