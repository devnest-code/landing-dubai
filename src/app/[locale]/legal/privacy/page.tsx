import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteUrl } from '@/config/site'
import { LegalDoc } from '@/components/ui/LegalDoc'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.legal' })
  return {
    title: t('privacyTitle'),
    robots: { index: false, follow: true },
    alternates: { canonical: `${siteUrl()}/${locale}/legal/privacy` },
  }
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <LegalDoc
      title="Privacy Policy"
      intro="This Privacy Policy explains how we collect, use and protect the information you share with us through this website."
      sections={[
        { heading: 'Information we collect', body: 'We collect the details you submit through our forms — such as your name, company, email, phone/WhatsApp and project information — so we can respond to your enquiry.' },
        { heading: 'How we use your information', body: 'We use your information solely to respond to your request, provide our services and communicate with you about your project. We do not sell your data.' },
        { heading: 'Analytics & cookies', body: 'We may use privacy-respecting analytics to understand how the site is used. See our Cookie Policy for details.' },
        { heading: 'Data retention', body: 'We retain enquiry data only as long as necessary for the purposes described here or as required by law.' },
        { heading: 'Your rights', body: 'You may request access to, correction of, or deletion of your personal data at any time by contacting us.' },
        { heading: 'Contact', body: '[Legal company name and address to be completed before production.]' },
      ]}
    />
  )
}
