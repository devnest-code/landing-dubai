import { useTranslations } from 'next-intl'
import { AuditForm } from '@/components/forms/AuditForm'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'

export default function AuditCTA() {
  const t = useTranslations('audit')
  const points = ['Performance & speed', 'SEO & visibility', 'Conversion & UX']

  return (
    <section className="section" id="audit">
      <div className="container-x">
        <Reveal>
          <div
            className="glass"
            style={{
              borderRadius: 'clamp(18px, 3vw, 28px)',
              padding: 'clamp(26px, 4vw, 48px)',
              display: 'grid',
              gap: 'clamp(28px, 4vw, 56px)',
              gridTemplateColumns: '1fr',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(60% 80% at 85% 0%, rgba(79,124,255,0.14), transparent 60%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative' }} className="audit-grid">
              <div>
                <div className="eyebrow">{t('eyebrow')}</div>
                <h2 style={{ fontSize: 'clamp(26px, 3.4vw, 38px)', marginTop: 14 }}>{t('title')}</h2>
                <p style={{ color: 'var(--wm)', marginTop: 14, maxWidth: 440 }}>{t('subtitle')}</p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0 0', display: 'grid', gap: 10 }}>
                  {points.map((p) => (
                    <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 15 }}>
                      <span style={{ color: 'var(--cyan)', display: 'inline-flex' }}>
                        <Icon name="check" size={18} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <AuditForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .audit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
        }
      `}</style>
    </section>
  )
}
