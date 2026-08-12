import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { localizedAlternates } from '@/config/site'
import { PageHeader } from '@/components/ui/PageHeader'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import FinalCTA from '@/components/sections/FinalCTA'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.services' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: localizedAlternates('/services', locale),
  }
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'services' })

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('pageTitle')}
        subtitle={t('pageSubtitle')}
      />
      <Services />
      <Process />
      <FinalCTA />
    </>
  )
}
