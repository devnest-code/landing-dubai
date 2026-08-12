import { useTranslations } from 'next-intl'
import type { Package } from '@/types'
import { formatPrice } from '@/config/site'
import { Icon } from '@/components/ui/Icon'
import { CTAButton } from '@/components/ui/CTAButton'

export function PricingCard({ pkg }: { pkg: Package }) {
  const t = useTranslations('pricing')
  return (
    <article
      className="card"
      style={{
        padding: 28,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderColor: pkg.featured ? 'rgba(79,124,255,0.5)' : undefined,
        background: pkg.featured
          ? 'linear-gradient(180deg, rgba(79,124,255,0.10), rgba(255,255,255,0))'
          : undefined,
      }}
    >
      {pkg.featured && (
        <span
          className="chip"
          style={{
            position: 'absolute',
            top: -13,
            left: 24,
            background: 'var(--grad)',
            color: '#05070d',
            border: 'none',
            fontWeight: 600,
            fontSize: 12,
          }}
        >
          {t('popular')}
        </span>
      )}

      <h3 style={{ fontSize: 21 }}>{pkg.name}</h3>
      <p style={{ color: 'var(--wm)', fontSize: 14, marginTop: 8, minHeight: 40 }}>{pkg.audience}</p>

      <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontSize: 12, color: 'var(--wf)', textTransform: 'uppercase', letterSpacing: 1 }}>
          {t('from')}
        </span>
      </div>
      <div className="font-display price-gold" style={{ fontSize: 34, fontWeight: 700, marginTop: 2 }}>
        {formatPrice(pkg.from)}
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0 26px', display: 'grid', gap: 11 }}>
        {pkg.features.map((f) => (
          <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5 }}>
            <span style={{ color: 'var(--cyan)', display: 'inline-flex', marginTop: 2 }}>
              <Icon name="check" size={16} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 'auto' }}>
        <CTAButton
          href="/contact"
          variant={pkg.featured ? 'primary' : 'ghost'}
          event={`pricing-${pkg.slug}`}
          fullWidth
        >
          {pkg.cta}
        </CTAButton>
      </div>
    </article>
  )
}
