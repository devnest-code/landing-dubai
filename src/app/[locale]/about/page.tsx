import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteUrl, site } from '@/config/site'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import Process from '@/components/sections/Process'
import FinalCTA from '@/components/sections/FinalCTA'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.about' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical: `${siteUrl()}/${locale}/about` },
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'about' })

  const values = [
    { icon: 'layers', label: t('values.engineering') },
    { icon: 'bolt', label: t('values.modern') },
    { icon: 'compass', label: t('values.custom') },
    { icon: 'users', label: t('values.partnership') },
  ]

  return (
    <>
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-x" style={{ maxWidth: 820 }}>
          <Reveal>
            <p style={{ fontSize: 'clamp(19px, 2.4vw, 24px)', color: 'var(--w)', lineHeight: 1.5 }}>{t('lead')}</p>
            <p style={{ color: 'var(--wm)', marginTop: 20, fontSize: 17 }}>{t('body')}</p>
          </Reveal>

          <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', marginTop: 40 }}>
            {values.map((v, i) => (
              <Reveal key={v.label} delay={i * 0.06}>
                <div className="card" style={{ padding: 22, display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ color: 'var(--cyan)', display: 'inline-flex' }}>
                    <Icon name={v.icon} size={22} />
                  </span>
                  <span style={{ fontWeight: 500 }}>{v.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="glass" style={{ borderRadius: 'var(--r)', padding: 24, marginTop: 32, borderColor: 'rgba(232,193,122,0.28)' }}>
              <h3 className="price-gold" style={{ fontSize: 18 }}>{t('disclaimerTitle')}</h3>
              <p style={{ color: 'var(--wm)', marginTop: 10, fontSize: 15 }}>{t('disclaimer')}</p>
              <p style={{ color: 'var(--wf)', marginTop: 14, fontSize: 13 }}>{site.market.baseLabel}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Process />
      <FinalCTA />
    </>
  )
}
