import { useTranslations } from 'next-intl'
import type { Industry } from '@/types'
import { Icon } from '@/components/ui/Icon'
import { CTAButton } from '@/components/ui/CTAButton'

export function IndustryCard({ industry }: { industry: Industry }) {
  const t = useTranslations('industries')
  return (
    <article className="card" style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          aria-hidden
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            display: 'grid',
            placeItems: 'center',
            background: 'var(--grad-soft)',
            border: '1px solid var(--bd2)',
            color: 'var(--cyan)',
          }}
        >
          <Icon name={industry.icon} size={22} />
        </div>
        <h3 style={{ fontSize: 20 }}>{industry.title}</h3>
      </div>

      <p style={{ color: 'var(--wm)', fontSize: 14.5, marginTop: 14 }}>{industry.intro}</p>

      <p
        style={{
          fontSize: 12,
          letterSpacing: 1,
          textTransform: 'uppercase',
          color: 'var(--wf)',
          marginTop: 20,
        }}
      >
        {t('solutionsLabel')}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'grid', gap: 8 }}>
        {industry.solutions.map((s) => (
          <li key={s} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14.5 }}>
            <span style={{ color: 'var(--cyan)', display: 'inline-flex' }}>
              <Icon name="check" size={16} />
            </span>
            {s}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 24, paddingTop: 4, flex: 1, display: 'flex', alignItems: 'flex-end' }}>
        <CTAButton
          href="/contact"
          variant="ghost"
          withArrow
          event={`industry-${industry.key}`}
          className="btn-sm"
          fullWidth
        >
          {industry.cta}
        </CTAButton>
      </div>
    </article>
  )
}
