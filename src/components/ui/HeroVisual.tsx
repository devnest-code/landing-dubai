import { Icon } from './Icon'
import { useTranslations } from 'next-intl'

/**
 * Abstract "business dashboard" visual — pure CSS/SVG, no stock imagery.
 * Communicates leads / analytics / automation at a glance.
 */
export function HeroVisual() {
  const t = useTranslations('hero.visual')
  const bars = [42, 68, 55, 88, 74, 96]
  return (
    <div
      className="hero-visual"
      aria-hidden
      style={{ position: 'relative', width: '100%', maxWidth: 520, padding: '14px 18px 30px' }}
    >
      {/* Main panel */}
      <div
        className="glass float-y"
        style={{ borderRadius: 20, padding: 22, position: 'relative', zIndex: 2 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, color: 'var(--wf)', letterSpacing: 1, textTransform: 'uppercase' }}>
              {t('leads')}
            </div>
            <div className="font-display" style={{ fontSize: 32, fontWeight: 700, marginTop: 4 }}>
              1,284
            </div>
          </div>
          <span className="chip" style={{ color: 'var(--cyan)' }}>
            <span className="badge-live" /> {t('live')}
          </span>
        </div>

        {/* Bar chart */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 96, marginTop: 20 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: 6,
                background: i === bars.length - 1 ? 'var(--grad)' : 'rgba(79,124,255,0.22)',
              }}
            />
          ))}
        </div>

        <div className="divider" style={{ marginBlock: 16 }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { icon: 'target', label: t('conversion'), value: '+38%' },
            { icon: 'calendar', label: t('bookings'), value: '312' },
          ].map((s) => (
            <div key={s.label} style={{ border: '1px solid var(--bd)', borderRadius: 12, padding: 12 }}>
              <span style={{ color: 'var(--cyan)', display: 'inline-flex' }}>
                <Icon name={s.icon} size={18} />
              </span>
              <div className="font-display" style={{ fontSize: 20, fontWeight: 700, marginTop: 8 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: 'var(--wf)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp lead card — bottom-right, clear of the panel body */}
      <div
        className="glass"
        style={{
          position: 'absolute',
          right: 0,
          bottom: 2,
          zIndex: 3,
          borderRadius: 14,
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          boxShadow: '0 20px 50px -20px rgba(0,0,0,0.7)',
        }}
      >
        <span
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: '#25d366',
            color: '#05130a',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Icon name="whatsapp" size={18} />
        </span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>{t('newLead')}</div>
          <div style={{ fontSize: 12, color: 'var(--wf)' }}>{t('captured')}</div>
        </div>
      </div>

      {/* Floating automation chip — left edge, vertically centered (never over the header) */}
      <div
        className="glass"
        style={{
          position: 'absolute',
          left: 0,
          top: '2%',
          zIndex: 3,
          borderRadius: 12,
          padding: '10px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ color: 'var(--violet)', display: 'inline-flex' }}>
          <Icon name="sparkles" size={16} />
        </span>
        <span style={{ fontSize: 12.5 }}>{t('automation')}</span>
      </div>

      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          inset: '-10% -10% -30% -10%',
          zIndex: 1,
          background: 'radial-gradient(60% 60% at 60% 30%, rgba(79,124,255,0.25), transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
    </div>
  )
}
