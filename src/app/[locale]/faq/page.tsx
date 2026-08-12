import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteUrl } from '@/config/site'
import { faqs } from '@/config/content'
import { PageHeader } from '@/components/ui/PageHeader'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.faq' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical: `${siteUrl()}/${locale}/faq` },
  }
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'faq' })

  // FAQPage structured data for rich results.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
      <FAQ withHeading={false} />
      <FinalCTA />
    </>
  )
}
