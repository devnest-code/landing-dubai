import { useTranslations } from 'next-intl'
import { bookingHref, whatsappLink } from '@/config/site'
import { CTAButton } from '@/components/ui/CTAButton'
import { Reveal } from '@/components/ui/Reveal'

export default function FinalCTA() {
  const t = useTranslations('finalCta')
  const wa = whatsappLink(undefined, 'final-cta')

  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 'clamp(20px, 3vw, 30px)',
              border: '1px solid var(--bd2)',
              padding: 'clamp(40px, 6vw, 80px) clamp(24px, 4vw, 60px)',
              textAlign: 'center',
              background:
                'radial-gradient(70% 120% at 50% 0%, rgba(79,124,255,0.18), transparent 60%), var(--panel)',
            }}
          >
            <h2 style={{ fontSize: 'clamp(28px, 4.4vw, 48px)', maxWidth: 720, marginInline: 'auto' }}>
              {t('title')}
            </h2>
            <p style={{ color: 'var(--wm)', marginTop: 18, fontSize: 'clamp(15px, 1.8vw, 18px)', maxWidth: 560, marginInline: 'auto' }}>
              {t('subtitle')}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 32 }}>
              <CTAButton href={bookingHref()} eventKind="booking_click" event="final-primary" withArrow>
                {t('primary')}
              </CTAButton>
              {wa && (
                <CTAButton href={wa} variant="whatsapp" external eventKind="whatsapp_click" event="final-whatsapp">
                  {t('secondary')}
                </CTAButton>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
