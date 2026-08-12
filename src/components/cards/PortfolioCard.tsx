import { useTranslations } from 'next-intl'
import type { PortfolioItem } from '@/types'
import { Icon } from '@/components/ui/Icon'

const glyphs: Record<string, string> = {
  'real-estate': 'building',
  beauty: 'sparkles',
  automotive: 'car',
  restaurants: 'utensils',
  ecommerce: 'cart',
  saas: 'chart',
  custom: 'layers',
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const t = useTranslations('portfolio')
  return (
    <article className="card" style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Abstract preview panel (no stock photos) */}
      <div
        aria-hidden
        style={{
          position: 'relative',
          height: 160,
          background:
            'radial-gradient(120% 120% at 20% 0%, rgba(79,124,255,0.28), transparent 55%), radial-gradient(120% 120% at 90% 100%, rgba(34,211,238,0.22), transparent 55%), var(--ink2)',
          borderBottom: '1px solid var(--bd)',
          display: 'grid',
          placeItems: 'center',
          color: 'rgba(234,240,255,0.85)',
        }}
      >
        <Icon name={glyphs[item.category] || 'layers'} size={40} />
        {item.concept && (
          <span className="concept-tag" style={{ position: 'absolute', top: 12, right: 12 }}>
            Concept Project
          </span>
        )}
      </div>

      <div style={{ padding: 22, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <span style={{ fontSize: 12, color: 'var(--cyan)', letterSpacing: 1, textTransform: 'uppercase' }}>
          {item.industryLabel}
        </span>
        <h3 style={{ fontSize: 18, marginTop: 8 }}>{item.name}</h3>
        <p style={{ color: 'var(--wm)', fontSize: 14, marginTop: 8 }}>{item.summary}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 12,
                color: 'var(--wm)',
                border: '1px solid var(--bd)',
                borderRadius: 999,
                padding: '4px 10px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {item.concept && (
          <p style={{ color: 'var(--wf)', fontSize: 12, marginTop: 16 }}>{t('conceptNote')}</p>
        )}
      </div>
    </article>
  )
}
