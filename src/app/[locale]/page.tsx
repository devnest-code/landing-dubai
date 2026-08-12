import { setRequestLocale } from 'next-intl/server'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Services from '@/components/sections/Services'
import Industries from '@/components/sections/Industries'
import Process from '@/components/sections/Process'
import Pricing from '@/components/sections/Pricing'
import RecurringPlans from '@/components/sections/RecurringPlans'
import ROICalculator from '@/components/sections/ROICalculator'
import Portfolio from '@/components/sections/Portfolio'
import AuditCTA from '@/components/sections/AuditCTA'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Contact from '@/components/sections/Contact'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <TrustStrip />
      <Services limit={6} />
      <Industries />
      <Process />
      <Pricing />
      <RecurringPlans />
      <ROICalculator />
      <Portfolio showFilters={false} limit={6} />
      <AuditCTA />
      <FAQ />
      <FinalCTA />
      <Contact />
    </>
  )
}
