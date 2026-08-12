import { useTranslations } from 'next-intl'
import { processSteps } from '@/config/content'
import { bookingHref, site } from '@/config/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'

export default function Process() {
  const t = useTranslations('process')

  return (
    <section className="section" id="process">
      <div className="container-x">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06}>
              <div className="card" style={{ padding: 24, height: '100%' }}>
                <span
                  className="font-display text-gradient"
                  style={{ fontSize: 40, fontWeight: 800, lineHeight: 1 }}
                >
                  {step.number}
                </span>
                <h3 style={{ fontSize: 18, marginTop: 14 }}>{step.title}</h3>
                <p style={{ color: 'var(--wm)', fontSize: 14, marginTop: 8 }}>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 44 }}>
          <CTAButton href={bookingHref()} eventKind="booking_click" event="process-cta" withArrow>
            {site.cta.start}
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
