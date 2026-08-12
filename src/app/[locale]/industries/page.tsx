import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteUrl } from '@/config/site'
import { PageHeader } from '@/components/ui/PageHeader'
import Industries from '@/components/sections/Industries'
import FinalCTA from '@/components/sections/FinalCTA'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.industries' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical: `${siteUrl()}/${locale}/industries` },
  }
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'industries' })

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title="Built around your industry"
        subtitle="Every business is different. We tailor the same premium engineering to the way your industry actually works."
      />
      <Industries />
      <FinalCTA />
    </>
  )
}
