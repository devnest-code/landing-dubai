import { useTranslations } from 'next-intl'
import { recurringPlans } from '@/config/content'
import { formatPrice, site } from '@/config/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTAButton } from '@/components/ui/CTAButton'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'

export default function RecurringPlans() {
  const t = useTranslations('pricing')
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container-x">
        <SectionHeading
          eyebrow={t('recurringEyebrow')}
          title={t('recurringTitle')}
          subtitle={t('recurringSubtitle')}
        />

        <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(258px, 1fr))' }}>
          {recurringPlans.map((plan, i) => (
            <Reveal key={plan.slug} delay={i * 0.05}>
              <article
                className="card"
                style={{
                  padding: 28,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderColor: plan.featured ? 'rgba(34,211,238,0.4)' : undefined,
                  background: plan.featured
                    ? 'linear-gradient(180deg, rgba(34,211,238,0.08), rgba(255,255,255,0))'
                    : undefined,
                }}
              >
                <h3 style={{ fontSize: 20 }}>{plan.name}</h3>
                <div style={{ marginTop: 12, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span className="font-display price-gold" style={{ fontSize: 30, fontWeight: 700 }}>
                    {formatPrice(plan.monthly)}
                  </span>
                  <span style={{ color: 'var(--wf)', fontSize: 14 }}>{t('perMonth')}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 26px', display: 'grid', gap: 11 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5 }}>
                      <span style={{ color: 'var(--cyan)', display: 'inline-flex', marginTop: 2 }}>
                        <Icon name="check" size={16} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 'auto' }}>
                  <CTAButton href="/contact" variant={plan.featured ? 'primary' : 'ghost'} event={`plan-${plan.slug}`} fullWidth>
                    {site.cta.start}
                  </CTAButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
