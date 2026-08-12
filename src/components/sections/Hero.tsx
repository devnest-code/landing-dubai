import { useTranslations } from 'next-intl'
import { bookingHref } from '@/config/site'
import { CTAButton } from '@/components/ui/CTAButton'
import { HeroVisual } from '@/components/ui/HeroVisual'
import { Icon } from '@/components/ui/Icon'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="section" style={{ paddingTop: 'clamp(48px, 8vw, 90px)', overflow: 'hidden' }}>
      <div
        className="container-x hero-grid"
        style={{ display: 'grid', gap: 'clamp(40px, 6vw, 72px)', alignItems: 'center' }}
      >
        {/* Copy */}
        <div>
          <span className="chip">
            <span className="badge-live" />
            {t('badge')}
          </span>

          <h1
            style={{
              fontSize: 'clamp(34px, 6vw, 62px)',
              marginTop: 22,
              maxWidth: 620,
            }}
          >
            {t('titleStart')}{' '}
            <span className="text-gradient-animate">{t('titleHighlight')}</span>{' '}
            {t('titleEnd')}
          </h1>

          <p style={{ color: 'var(--wm)', fontSize: 'clamp(16px, 1.8vw, 19px)', marginTop: 22, maxWidth: 540 }}>
            {t('subtitle')}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32 }}>
            <CTAButton href={bookingHref()} event="hero-primary" eventKind="booking_click" withArrow>
              {t('primaryCta')}
            </CTAButton>
            <CTAButton href="/services" variant="ghost" event="hero-secondary">
              {t('secondaryCta')}
            </CTAButton>
          </div>

          {/* Value strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 34 }}>
            {[t('stat1'), t('stat2'), t('stat3')].map((s) => (
              <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--wm)', fontSize: 14 }}>
                <span style={{ color: 'var(--cyan)', display: 'inline-flex' }}>
                  <Icon name="check" size={16} />
                </span>
                {s}
              </span>
            ))}
          </div>

          <p style={{ marginTop: 26, color: 'var(--gold)', fontSize: 14, fontStyle: 'italic' }}>
            “{t('value')}”
          </p>
        </div>

        {/* Visual */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HeroVisual />
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid { grid-template-columns: 1.05fr 0.95fr; }
        }
      `}</style>
    </section>
  )
}
