import { useTranslations } from 'next-intl'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'

const pillars = [
  { icon: 'target', label: 'More leads' },
  { icon: 'heart', label: 'Better customer experience' },
  { icon: 'bolt', label: 'Smarter operations' },
  { icon: 'chart', label: 'Measurable growth' },
]

export default function TrustStrip() {
  const t = useTranslations('trust')
  return (
    <section style={{ paddingBlock: 'clamp(40px, 5vw, 64px)', borderBlock: '1px solid var(--bd)' }}>
      <div className="container-x">
        <Reveal>
          <p
            className="font-display"
            style={{ textAlign: 'center', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 600, maxWidth: 760, marginInline: 'auto' }}
          >
            {t('title')}
          </p>
          <p style={{ textAlign: 'center', color: 'var(--wm)', marginTop: 12 }}>{t('subtitle')}</p>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            marginTop: 34,
          }}
        >
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06}>
              <div
                className="glass"
                style={{ borderRadius: 14, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 12 }}
              >
                <span style={{ color: 'var(--cyan)', display: 'inline-flex' }}>
                  <Icon name={p.icon} size={22} />
                </span>
                <span style={{ fontWeight: 500 }}>{p.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
