import type {
  Service,
  Industry,
  Package,
  RecurringPlan,
  ProcessStep,
  PortfolioItem,
  FaqItem,
} from '@/types'

export const servicesAr: Service[] = [
  { slug: 'website-development', icon: 'globe', title: 'تطوير المواقع الإلكترونية', outcome: 'حوّل الزوار إلى عملاء.', description: 'مواقع عالية الأداء مصممة للسرعة والثقة وزيادة التحويل، وليس للمظهر فقط.' },
  { slug: 'landing-pages', icon: 'target', title: 'صفحات الهبوط', outcome: 'حملات تحقق نتائج فعلية.', description: 'صفحات مركزة للمنتجات والعروض والحملات الإعلانية، مصممة لجذب العملاء المحتملين.' },
  { slug: 'ecommerce', icon: 'cart', title: 'التجارة الإلكترونية', outcome: 'بِع عبر الإنترنت على نطاق واسع.', description: 'متاجر حديثة بدفع آمن وأداء سريع وبنية قابلة للتوسع.' },
  { slug: 'custom-web-apps', icon: 'layers', title: 'تطبيقات ويب مخصصة', outcome: 'برمجيات تناسب سير عملك.', description: 'تطبيقات أعمال مصممة تماماً لطريقة عمل فريقك من دون تنازلات.' },
  { slug: 'crm-lead-management', icon: 'users', title: 'إدارة العملاء المحتملين', outcome: 'لا تفقد أي فرصة جديدة.', description: 'اجمع كل استفسار ونظمه وتابعه ضمن مسار عمل واحد وواضح.' },
  { slug: 'booking-systems', icon: 'calendar', title: 'أنظمة الحجز', outcome: 'حجوزات آلية على مدار الساعة.', description: 'اسمح للعملاء بالحجز في أي وقت مع تذكيرات تقلل حالات عدم الحضور.' },
  { slug: 'whatsapp-automation', icon: 'message', title: 'أتمتة واتساب', outcome: 'بِع حيث يتواجد عملاؤك في الإمارات.', description: 'حوّل واتساب إلى قناة قوية للمبيعات وخدمة العملاء باستخدام الأتمتة الذكية.' },
  { slug: 'ai-automation', icon: 'sparkles', title: 'أتمتة الذكاء الاصطناعي', outcome: 'أنجز أكثر من دون زيادة فريقك.', description: 'أتمت المهام المتكررة واربط الذكاء الاصطناعي بالأدوات التي تدير بها أعمالك.' },
  { slug: 'dashboards', icon: 'chart', title: 'لوحات المعلومات', outcome: 'شاهد أداء أعمالك بوضوح.', description: 'رؤية فورية للأداء والمبيعات والعمليات في مكان واحد.' },
  { slug: 'maintenance', icon: 'shield', title: 'الصيانة والدعم', outcome: 'ابقَ سريعاً وآمناً ومتوفراً.', description: 'تحديثات ومراقبة وأمان ودعم تقني مستمر.' }
]

export const industriesAr: Industry[] = [
  { key: 'real-estate', icon: 'building', title: 'العقارات', intro: 'اجذب مشترين مؤهلين أكثر وأدر كل استفسار.', solutions: ['قوائم العقارات', 'جمع العملاء المحتملين', 'لوحات الوكلاء', 'تكامل واتساب', 'إدارة العملاء', 'جدولة المواعيد'], cta: 'ابنِ نظامي العقاري' },
  { key: 'beauty', icon: 'sparkles', title: 'التجميل والصالونات', intro: 'املأ جدولك وحافظ على عودة عملائك.', solutions: ['الحجز الإلكتروني', 'دليل الخدمات', 'واتساب', 'قاعدة بيانات العملاء', 'العروض', 'جداول الموظفين'], cta: 'ابنِ نظام الصالون' },
  { key: 'barbershops', icon: 'scissors', title: 'صالونات الحلاقة', intro: 'قلل عدم الحضور وكافئ عملاءك الدائمين.', solutions: ['الحجز', 'إدارة الموظفين', 'ملفات العملاء', 'الولاء', 'التذكيرات الآلية'], cta: 'ابنِ نظام الحلاقة' },
  { key: 'automotive', icon: 'car', title: 'السيارات', intro: 'حوّل عروض الأسعار والخدمات إلى أعمال متكررة.', solutions: ['دليل الخدمات', 'الحجز', 'عروض الأسعار', 'إدارة العملاء', 'واتساب'], cta: 'ابنِ نظام السيارات' },
  { key: 'restaurants', icon: 'utensils', title: 'المطاعم', intro: 'حجوزات وطلبات أكثر وتجربة أفضل للضيوف.', solutions: ['قائمة رقمية', 'الحجوزات', 'تكامل التوصيل', 'العروض', 'قاعدة بيانات العملاء'], cta: 'ابنِ نظام المطعم' },
  { key: 'clinics', icon: 'heart', title: 'العيادات', intro: 'جدولة سهلة ومواعيد فائتة أقل.', solutions: ['حجز المواعيد', 'نماذج المرضى', 'الإشعارات', 'جداول الموظفين'], cta: 'ابنِ نظام العيادة' },
  { key: 'construction', icon: 'hardhat', title: 'الإنشاءات', intro: 'اكسب مشاريع أكثر وتابع كل فرصة.', solutions: ['صفحات المشاريع', 'توليد العملاء', 'طلبات الأسعار', 'لوحات المشاريع', 'إدارة العملاء'], cta: 'ابنِ نظام الإنشاءات' }
]

export const packagesAr: Package[] = [
  { slug: 'starter-website', name: 'الموقع الأساسي', from: 2500, audience: 'للشركات الصغيرة التي تحتاج إلى حضور احترافي عبر الإنترنت.', features: ['حتى 5 صفحات', 'تصميم متجاوب', 'نموذج تواصل', 'تكامل واتساب', 'تهيئة SEO أساسية', 'Google Analytics', 'النشر'], cta: 'ابدأ الآن' },
  { slug: 'business-website', name: 'موقع الأعمال', from: 5000, audience: 'للشركات التي تحتاج إلى حضور رقمي أقوى.', features: ['حتى 10 صفحات', 'واجهة مخصصة', 'نظام إدارة محتوى', 'نماذج العملاء', 'واتساب', 'إعداد SEO', 'التحليلات', 'تحسين الأداء', 'النشر'], cta: 'اطلب عرض سعر', featured: true },
  { slug: 'business-growth-system', name: 'نظام نمو الأعمال', from: 7000, audience: 'للشركات التي تحتاج إلى أكثر من موقع.', features: ['موقع مخصص', 'نظام إدارة محتوى', 'إدارة العملاء المحتملين', 'الحجز', 'واتساب', 'تكامل CRM', 'لوحة تحليلات', 'الأتمتة'], cta: 'ناقش مشروعك معنا' },
  { slug: 'custom-software', name: 'برمجيات مخصصة', from: 12000, audience: 'لتطبيقات الأعمال المصممة حسب الطلب.', features: ['بنية مخصصة', 'تسجيل الدخول', 'لوحات المعلومات', 'قاعدة البيانات', 'واجهات API', 'التكاملات', 'سير عمل الأعمال'], cta: 'اطلب استشارة' }
]

export const recurringPlansAr: RecurringPlan[] = [
  { slug: 'care', name: 'العناية', monthly: 299, features: ['الاستضافة', 'المراقبة', 'النسخ الاحتياطية', 'تحديثات الأمان', 'تحديثات بسيطة'] },
  { slug: 'growth', name: 'النمو', monthly: 499, features: ['كل مزايا العناية', 'دعم ذو أولوية', 'تحسينات شهرية', 'تقرير التحليلات', 'مراقبة SEO'], featured: true },
  { slug: 'scale', name: 'التوسع', monthly: 799, features: ['كل مزايا النمو', 'دعم متقدم', 'تحسين الأتمتة', 'اجتماع استراتيجي شهري', 'تطوير ذو أولوية'] }
]

export const processStepsAr: ProcessStep[] = [
  { number: '01', title: 'الاستكشاف', description: 'نفهم أعمالك وعملاءك وأهدافك.' },
  { number: '02', title: 'الاستراتيجية', description: 'نحدد الحل والبنية التقنية المناسبة له.' },
  { number: '03', title: 'التصميم', description: 'نصمم تجربة المستخدم والنظام البصري.' },
  { number: '04', title: 'التطوير', description: 'نبني الحل ونختبره ونربط جميع أجزائه.' },
  { number: '05', title: 'الإطلاق والدعم', description: 'ننشر الحل ونقيس أداءه ونواصل دعمك أثناء النمو.' }
]

export const portfolioAr: PortfolioItem[] = [
  { slug: 'skyline-real-estate', name: 'Skyline Properties', category: 'real-estate', industryLabel: 'العقارات', summary: 'منصة عقارية تصورية تضم قوائم وعملاء محتملين واستفسارات عبر واتساب.', concept: true, tags: ['القوائم', 'العملاء المحتملون', 'واتساب', 'CRM'] },
  { slug: 'glow-beauty-booking', name: 'Glow Beauty Studio', category: 'beauty', industryLabel: 'التجميل والصالونات', summary: 'تجربة حجز تصورية عبر الإنترنت مع دليل خدمات وتذكيرات.', concept: true, tags: ['الحجز', 'التذكيرات', 'العروض'] },
  { slug: 'prestige-auto-detailing', name: 'Prestige Auto Detailing', category: 'automotive', industryLabel: 'السيارات', summary: 'مسار تصوري لطلب السعر والحجز لخدمة عناية فاخرة بالسيارات.', concept: true, tags: ['عروض الأسعار', 'الحجز', 'واتساب'] },
  { slug: 'saffron-restaurant', name: 'Saffron Dining', category: 'restaurants', industryLabel: 'المطاعم', summary: 'موقع مطعم تصوري مع قائمة رقمية وحجوزات.', concept: true, tags: ['قائمة رقمية', 'الحجوزات'] },
  { slug: 'harbor-ecommerce', name: 'Harbor Goods', category: 'ecommerce', industryLabel: 'التجارة الإلكترونية', summary: 'متجر إلكتروني تصوري بدفع آمن ودليل منتجات قابل للتوسع.', concept: true, tags: ['المتجر', 'الدفع', 'المنتجات'] },
  { slug: 'operations-dashboard', name: 'Business OS Dashboard', category: 'saas', industryLabel: 'البرمجيات كخدمة', summary: 'لوحة عمليات تصورية تجمع العملاء والحجوزات والتحليلات.', concept: true, tags: ['لوحة المعلومات', 'التحليلات', 'الأتمتة'] }
]

export const faqsAr: FaqItem[] = [
  { question: 'هل تعملون مع شركات خارج الإكوادور؟', answer: 'نعم. نعمل عن بُعد مع شركات دولية، بما فيها الشركات في دبي والإمارات.' },
  { question: 'كم يستغرق إنشاء الموقع؟', answer: 'عادةً من أسبوع إلى أربعة أسابيع حسب التعقيد. نتفق على جدول واقعي للمشاريع المخصصة خلال مرحلة الاستكشاف.' },
  { question: 'هل يمكنكم دمج واتساب؟', answer: 'نعم. واتساب قناة تحويل أساسية للشركات في الإمارات، ولذلك ندمجه في معظم المشاريع.' },
  { question: 'هل تقدمون خدمات الصيانة؟', answer: 'نعم، عبر خطط العناية والنمو والتوسع الشهرية للحفاظ على سرعة منتجك وأمانه وتحديثه.' },
  { question: 'هل تطورون برمجيات مخصصة؟', answer: 'نعم. إلى جانب المواقع، نبني تطبيقات ويب ولوحات معلومات وأنظمة إدارة عملاء وأتمتة أعمال.' },
  { question: 'هل تعملون مع شركات في الإمارات؟', answer: 'نعم. نركز على مساعدة الشركات الصغيرة والمتوسطة في دبي والإمارات على النمو من خلال أنظمة رقمية أفضل.' },
  { question: 'هل تقدمون مواقع باللغة العربية؟', answer: 'نعم. تدعم منصتنا اللغة العربية والتخطيط من اليمين إلى اليسار بشكل كامل.' }
]
