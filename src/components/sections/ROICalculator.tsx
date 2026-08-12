'use client'

import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import { bookingHref, formatPrice } from '@/config/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTAButton } from '@/components/ui/CTAButton'

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  suffix?: string
  onChange: (v: number) => void
}) {
  return (
    <label style={{ display: 'block' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 14, color: 'var(--wm)' }}>{label}</span>
        <span className="font-display" style={{ fontWeight: 600 }}>
          {value.toLocaleString('en-US')}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: '100%', accentColor: 'var(--blue)' }}
        aria-label={label}
      />
    </label>
  )
}

export default function ROICalculator() {
  const t = useTranslations('roi')

  const [visitors, setVisitors] = useState(3000)
  const [conversion, setConversion] = useState(1.5)
  const [target, setTarget] = useState(3.5)
  const [value, setValue] = useState(1200)

  const result = useMemo(() => {
    const currentLeads = Math.round((visitors * conversion) / 100)
    const potentialLeads = Math.round((visitors * target) / 100)
    const additionalCustomers = Math.max(0, potentialLeads - currentLeads)
    const additionalRevenue = additionalCustomers * value
    return { currentLeads, potentialLeads, additionalCustomers, additionalRevenue }
  }, [visitors, conversion, target, value])

  const stats = [
    { label: t('currentLeads'), value: result.currentLeads.toLocaleString('en-US') },
    { label: t('potentialLeads'), value: result.potentialLeads.toLocaleString('en-US') },
    { label: t('additionalCustomers'), value: `+${result.additionalCustomers.toLocaleString('en-US')}` },
    { label: t('additionalRevenue'), value: formatPrice(result.additionalRevenue), highlight: true },
  ]

  return (
    <section className="section" id="roi">
      <div className="container-x">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div
          className="roi-grid"
          style={{ display: 'grid', gap: 20, gridTemplateColumns: '1fr', alignItems: 'stretch' }}
        >
          {/* Inputs */}
          <div className="card" style={{ padding: 28, display: 'grid', gap: 22, alignContent: 'start' }}>
            <Slider label={t('visitors')} value={visitors} min={200} max={50000} step={100} onChange={setVisitors} />
            <Slider label={t('conversion')} value={conversion} min={0.1} max={10} step={0.1} suffix="%" onChange={setConversion} />
            <Slider label={t('targetConversion')} value={target} min={0.5} max={12} step={0.1} suffix="%" onChange={setTarget} />
            <Slider label={t('value')} value={value} min={100} max={20000} step={100} onChange={setValue} />
          </div>

          {/* Results */}
          <div
            className="glass"
            style={{ borderRadius: 'var(--r)', padding: 28, display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ display: 'grid', gap: 14, gridTemplateColumns: '1fr 1fr' }}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    border: '1px solid var(--bd)',
                    borderRadius: 14,
                    padding: 18,
                    gridColumn: s.highlight ? '1 / -1' : undefined,
                    background: s.highlight ? 'var(--grad-soft)' : undefined,
                  }}
                >
                  <div
                    className="font-display"
                    style={{ fontSize: s.highlight ? 30 : 24, fontWeight: 700, color: s.highlight ? 'var(--gold)' : 'var(--w)' }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--wf)', marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p style={{ color: 'var(--wf)', fontSize: 12.5, marginTop: 18 }}>{t('disclaimer')}</p>

            <div style={{ marginTop: 'auto', paddingTop: 20 }}>
              <CTAButton
                href={bookingHref()}
                eventKind="booking_click"
                event="roi-cta"
                withArrow
                fullWidth
              >
                {t('cta')}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) { .roi-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  )
}
