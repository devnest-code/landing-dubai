'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { getLocalizedContent } from '@/config/localized-content'
import type { PortfolioCategory } from '@/types'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PortfolioCard } from '@/components/cards/PortfolioCard'
import { Reveal } from '@/components/ui/Reveal'

const filters: (PortfolioCategory | 'all')[] = [
  'all',
  'real-estate',
  'beauty',
  'automotive',
  'restaurants',
  'ecommerce',
  'saas',
  'custom',
]

export default function Portfolio({ showFilters = true, limit }: { showFilters?: boolean; limit?: number }) {
  const t = useTranslations('portfolio')
  const { portfolio } = getLocalizedContent(useLocale())
  const [active, setActive] = useState<PortfolioCategory | 'all'>('all')

  let list = active === 'all' ? portfolio : portfolio.filter((p) => p.category === active)
  if (limit) list = list.slice(0, limit)

  return (
    <section className="section" id="portfolio">
      <div className="container-x">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        {showFilters && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 36 }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="chip"
                style={{
                  cursor: 'pointer',
                  color: active === f ? '#05070d' : 'var(--wm)',
                  background: active === f ? 'var(--grad)' : 'rgba(255,255,255,0.02)',
                  border: active === f ? 'none' : '1px solid var(--bd2)',
                  fontWeight: active === f ? 600 : 400,
                }}
              >
                {t(`filters.${f}`)}
              </button>
            ))}
          </div>
        )}

        <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))' }}>
          {list.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.05}>
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
