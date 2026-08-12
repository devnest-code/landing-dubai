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
    title: t('termsTitle'),
    robots: { index: false, follow: true },
    alternates: localizedAlternates('/legal/terms', locale),
  }
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const isAr = locale === 'ar'
  return (
    <LegalDoc
      title={isAr ? 'شروط الخدمة' : 'Terms of Service'}
      intro={isAr ? 'تحكم هذه الشروط استخدامك لهذا الموقع والخدمات الموضحة فيه.' : 'These terms govern your use of this website and the services described on it.'}
      sections={isAr ? [
        { heading: 'استخدام الموقع', body: 'توافق على استخدام الموقع بصورة قانونية وعدم إساءة استخدام النماذج أو المحتوى أو الخدمات المقدمة.' },
        { heading: 'الخدمات وعروض الأسعار', body: 'الأسعار المعروضة نقاط بداية تقديرية وليست عروضاً ثابتة. يُتفق على النطاق والمخرجات والسعر النهائي في عرض مكتوب.' },
        { heading: 'الملكية الفكرية', body: 'جميع محتويات هذا الموقع مملوكة لنا أو للجهات المرخصة ما لم يُذكر خلاف ذلك.' },
        { heading: 'حدود المسؤولية', body: 'يُقدم الموقع كما هو، ولا نتحمل ضمن الحدود التي يسمح بها القانون الخسائر غير المباشرة أو التبعية الناتجة عن استخدامه.' },
        { heading: 'القانون الحاكم', body: '[تُستكمل الولاية القضائية الحاكمة قبل الإطلاق الرسمي.]' },
      ] : [
        { heading: 'Use of the website', body: 'You agree to use this website lawfully and not to misuse the forms, content or services provided.' },
        { heading: 'Services & quotes', body: 'Prices shown are indicative starting points, not fixed quotes. Final scope, deliverables and pricing are agreed in a written proposal.' },
        { heading: 'Intellectual property', body: 'All content on this website is owned by us or our licensors unless otherwise stated.' },
        { heading: 'Limitation of liability', body: 'The website is provided “as is”. To the extent permitted by law, we are not liable for indirect or consequential losses arising from its use.' },
        { heading: 'Governing law', body: '[Governing jurisdiction to be completed before production.]' },
      ]}
    />
  )
}
