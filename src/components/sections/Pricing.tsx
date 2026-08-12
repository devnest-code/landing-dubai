import { useTranslations } from 'next-intl'
import { packages } from '@/config/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PricingCard } from '@/components/cards/PricingCard'
import { Reveal } from '@/components/ui/Reveal'

export default function Pricing() {
  const t = useTranslations('pricing')
  return (
    <section className="section" id="pricing">
      <div className="container-x">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(258px, 1fr))' }}>
          {packages.map((pkg, i) => (
            <Reveal key={pkg.slug} delay={(i % 4) * 0.05}>
              <PricingCard pkg={pkg} />
            </Reveal>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: 'var(--wf)', fontSize: 13.5, marginTop: 28, maxWidth: 640, marginInline: 'auto' }}>
          {t('note')}
        </p>
      </div>
    </section>
  )
}
