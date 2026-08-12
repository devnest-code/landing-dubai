import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteUrl } from '@/config/site'
import { PageHeader } from '@/components/ui/PageHeader'
import Portfolio from '@/components/sections/Portfolio'
import FinalCTA from '@/components/sections/FinalCTA'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.portfolio' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical: `${siteUrl()}/${locale}/portfolio` },
  }
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'portfolio' })

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title="Work & concept projects"
        subtitle="A preview of the systems we build. Concept projects are clearly labelled and shown until real client case studies are published."
      />
      <Portfolio showFilters />
      <FinalCTA />
    </>
  )
}
