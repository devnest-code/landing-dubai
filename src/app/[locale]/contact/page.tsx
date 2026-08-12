import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { localizedAlternates } from '@/config/site'
import Contact from '@/components/sections/Contact'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.contact' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: localizedAlternates('/contact', locale),
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <div style={{ paddingTop: 'clamp(24px, 4vw, 48px)' }}>
      <Contact />
    </div>
  )
}
