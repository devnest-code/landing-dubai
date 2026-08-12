'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { getLocalizedContent } from '@/config/localized-content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'

export default function FAQ({ withHeading = true }: { withHeading?: boolean }) {
  const t = useTranslations('faq')
  const { faqs } = getLocalizedContent(useLocale())
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section" id="faq">
      <div className="container-x" style={{ maxWidth: 820 }}>
        {withHeading && <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />}

        <div style={{ display: 'grid', gap: 12 }}>
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.question} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    padding: '20px 22px',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--w)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'var(--font-display)',
                    fontSize: 17,
                    fontWeight: 600,
                  }}
                >
                  {item.question}
                  <span
                    style={{
                      color: 'var(--cyan)',
                      display: 'inline-flex',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform .25s ease',
                      flexShrink: 0,
                    }}
                  >
                    <Icon name="close" size={18} />
                  </span>
                </button>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows .3s ease',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{ color: 'var(--wm)', fontSize: 15, padding: '0 22px 22px' }}>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
