import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { localizedAlternates } from '@/config/site'
import { LegalDoc } from '@/components/ui/LegalDoc'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.legal' })
  return {
    title: t('cookiesTitle'),
    robots: { index: false, follow: true },
    alternates: localizedAlternates('/legal/cookies', locale),
  }
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const isAr = locale === 'ar'
  return (
    <LegalDoc
      title={isAr ? 'سياسة ملفات تعريف الارتباط' : 'Cookie Policy'}
      intro={isAr ? 'توضح هذه السياسة كيف ولماذا نستخدم ملفات تعريف الارتباط والتقنيات المشابهة على الموقع.' : 'This Cookie Policy explains how and why we use cookies and similar technologies on this website.'}
      sections={isAr ? [
        { heading: 'ما ملفات تعريف الارتباط؟', body: 'هي ملفات نصية صغيرة تُحفظ على جهازك لمساعدة المواقع على العمل وفهم طريقة الاستخدام.' },
        { heading: 'كيف نستخدمها', body: 'نستخدم الملفات الضرورية لتشغيل الموقع، وقد نستخدم ملفات تحليل اختيارية لقياس الأداء. لا نستخدم ملفات إعلانية ما لم نوضح ذلك هنا.' },
        { heading: 'إدارة الملفات', body: 'يمكنك التحكم في ملفات تعريف الارتباط أو حذفها من إعدادات متصفحك في أي وقت.' },
        { heading: 'التواصل', body: '[تُستكمل بيانات الشركة القانونية قبل الإطلاق الرسمي.]' },
      ] : [
        { heading: 'What are cookies', body: 'Cookies are small text files stored on your device that help websites function and understand usage.' },
        { heading: 'How we use cookies', body: 'We use essential cookies for the site to work and, optionally, analytics cookies to measure performance. No advertising cookies are used unless disclosed here.' },
        { heading: 'Managing cookies', body: 'You can control or delete cookies through your browser settings at any time.' },
        { heading: 'Contact', body: '[Legal company details to be completed before production.]' },
      ]}
    />
  )
}
