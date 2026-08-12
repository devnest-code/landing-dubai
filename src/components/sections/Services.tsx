import { useTranslations } from 'next-intl'
import { services } from '@/config/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'

export default function Services({ limit }: { limit?: number }) {
  const t = useTranslations('services')
  const list = limit ? services.slice(0, limit) : services

  return (
    <section className="section" id="services">
      <div className="container-x">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fill, minmax(272px, 1fr))' }}>
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>

        {limit && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <CTAButton href="/services" variant="ghost" withArrow event="services-see-all">
              {t('cta')}
            </CTAButton>
          </div>
        )}
      </div>
    </section>
  )
}
