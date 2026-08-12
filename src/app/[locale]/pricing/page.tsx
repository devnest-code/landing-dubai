import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteUrl } from '@/config/site'
import { PageHeader } from '@/components/ui/PageHeader'
import Pricing from '@/components/sections/Pricing'
import RecurringPlans from '@/components/sections/RecurringPlans'
import ROICalculator from '@/components/sections/ROICalculator'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.pricing' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical: `${siteUrl()}/${locale}/pricing` },
  }
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'pricing' })

  return (
    <>
      <PageHeader
        eyebrow={t('eyebrow')}
        title="Simple, transparent pricing in AED"
        subtitle="Clear starting prices and monthly plans. Your final scope is agreed together during a free consultation — no pressure, no hidden fees."
      />
      <Pricing />
      <RecurringPlans />
      <ROICalculator />
      <FAQ />
      <FinalCTA />
    </>
  )
}
