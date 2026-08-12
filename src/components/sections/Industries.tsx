import { useLocale, useTranslations } from 'next-intl'
import { getLocalizedContent } from '@/config/localized-content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { IndustryCard } from '@/components/cards/IndustryCard'
import { Reveal } from '@/components/ui/Reveal'

export default function Industries({ limit }: { limit?: number }) {
  const t = useTranslations('industries')
  const { industries } = getLocalizedContent(useLocale())
  const list = limit ? industries.slice(0, limit) : industries

  return (
    <section className="section" id="industries" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.012), transparent)' }}>
      <div className="container-x">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {list.map((ind, i) => (
            <Reveal key={ind.key} delay={(i % 3) * 0.05}>
              <IndustryCard industry={ind} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
