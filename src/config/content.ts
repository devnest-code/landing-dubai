/**
 * Commercial CONTENT (editable without touching components).
 * Services, industries, pricing, plans, process, portfolio, FAQ.
 * Prices are in the primary currency (AED) and always "starting from".
 */
import type {
  Service,
  Industry,
  Package,
  RecurringPlan,
  ProcessStep,
  PortfolioItem,
  FaqItem,
} from '@/types'

export const services: Service[] = [
  {
    slug: 'website-development',
    icon: 'globe',
    title: 'Website Development',
    outcome: 'Turn visitors into customers.',
    description:
      'High-performance websites engineered for speed, trust and conversion — not just to look good.',
  },
  {
    slug: 'landing-pages',
    icon: 'target',
    title: 'Landing Pages',
    outcome: 'Campaigns that actually convert.',
    description:
      'Focused landing pages for products, promotions and paid campaigns, built to generate leads.',
  },
  {
    slug: 'ecommerce',
    icon: 'cart',
    title: 'E-commerce',
    outcome: 'Sell online, at scale.',
    description:
      'Modern online stores with secure checkout, fast performance and a scalable foundation.',
  },
  {
    slug: 'custom-web-apps',
    icon: 'layers',
    title: 'Custom Web Applications',
    outcome: 'Software shaped to your workflow.',
    description:
      'Business applications tailored to exactly how your team operates — no compromises.',
  },
  {
    slug: 'crm-lead-management',
    icon: 'users',
    title: 'CRM & Lead Management',
    outcome: 'Never lose a lead again.',
    description:
      'Capture, organise and follow up with every enquiry from a single, structured pipeline.',
  },
  {
    slug: 'booking-systems',
    icon: 'calendar',
    title: 'Booking Systems',
    outcome: 'Bookings 24/7, on autopilot.',
    description:
      'Let customers book appointments any time, with reminders that reduce no-shows.',
  },
  {
    slug: 'whatsapp-automation',
    icon: 'message',
    title: 'WhatsApp Automation',
    outcome: 'Sell where UAE customers already are.',
    description:
      'Turn WhatsApp into a powerful sales and customer-service channel with smart automation.',
  },
  {
    slug: 'ai-automation',
    icon: 'sparkles',
    title: 'AI Automation',
    outcome: 'Do more without hiring more.',
    description:
      'Automate repetitive workflows and connect AI to the tools your business runs on.',
  },
  {
    slug: 'dashboards',
    icon: 'chart',
    title: 'Dashboards',
    outcome: 'See your business clearly.',
    description:
      'Real-time visibility into performance, sales and operations — all in one place.',
  },
  {
    slug: 'maintenance',
    icon: 'shield',
    title: 'Maintenance & Support',
    outcome: 'Stay fast, secure and online.',
    description:
      'Continuous updates, monitoring, security and dedicated technical support.',
  },
]

export const industries: Industry[] = [
  {
    key: 'real-estate',
    icon: 'building',
    title: 'Real Estate',
    intro: 'Capture more qualified buyers and manage every enquiry.',
    solutions: [
      'Property listings',
      'Lead capture',
      'Agent dashboards',
      'WhatsApp integration',
      'CRM',
      'Appointment scheduling',
    ],
    cta: 'Build My Real Estate System',
  },
  {
    key: 'beauty',
    icon: 'sparkles',
    title: 'Beauty & Salons',
    intro: 'Fill your calendar and keep clients coming back.',
    solutions: [
      'Online booking',
      'Service catalog',
      'WhatsApp',
      'Customer database',
      'Promotions',
      'Staff schedules',
    ],
    cta: 'Build My Salon System',
  },
  {
    key: 'barbershops',
    icon: 'scissors',
    title: 'Barbershops',
    intro: 'Reduce no-shows and reward your regulars.',
    solutions: [
      'Booking',
      'Staff management',
      'Customer profiles',
      'Loyalty',
      'Automated reminders',
    ],
    cta: 'Build My Barbershop System',
  },
  {
    key: 'automotive',
    icon: 'car',
    title: 'Automotive',
    intro: 'Turn quotes and services into repeat business.',
    solutions: [
      'Service catalog',
      'Booking',
      'Quotes',
      'Customer management',
      'WhatsApp',
    ],
    cta: 'Build My Automotive System',
  },
  {
    key: 'restaurants',
    icon: 'utensils',
    title: 'Restaurants',
    intro: 'More reservations, more orders, happier guests.',
    solutions: [
      'Digital menu',
      'Reservations',
      'Delivery integrations',
      'Promotions',
      'Customer database',
    ],
    cta: 'Build My Restaurant System',
  },
  {
    key: 'clinics',
    icon: 'heart',
    title: 'Clinics',
    intro: 'Smooth scheduling and fewer missed appointments.',
    solutions: [
      'Appointment booking',
      'Patient forms',
      'Notifications',
      'Staff schedules',
    ],
    cta: 'Build My Clinic System',
  },
  {
    key: 'construction',
    icon: 'hardhat',
    title: 'Construction',
    intro: 'Win more projects and track every opportunity.',
    solutions: [
      'Project pages',
      'Lead generation',
      'Quote requests',
      'Project dashboards',
      'CRM',
    ],
    cta: 'Build My Construction System',
  },
]

export const packages: Package[] = [
  {
    slug: 'starter-website',
    name: 'Starter Website',
    from: 2500,
    audience: 'For small businesses that need a professional online presence.',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form',
      'WhatsApp integration',
      'Basic SEO',
      'Google Analytics',
      'Deployment',
    ],
    cta: 'Get Started',
  },
  {
    slug: 'business-website',
    name: 'Business Website',
    from: 5000,
    audience: 'For businesses that need a stronger digital presence.',
    features: [
      'Up to 10 pages',
      'Custom UI',
      'CMS',
      'Lead forms',
      'WhatsApp',
      'SEO setup',
      'Analytics',
      'Performance optimization',
      'Deployment',
    ],
    cta: 'Request a Quote',
    featured: true,
  },
  {
    slug: 'business-growth-system',
    name: 'Business Growth System',
    from: 7000,
    audience: 'For companies that need more than a website.',
    features: [
      'Custom website',
      'CMS',
      'Lead management',
      'Booking',
      'WhatsApp',
      'CRM integration',
      'Analytics dashboard',
      'Automation',
    ],
    cta: 'Discuss Your Project',
  },
  {
    slug: 'custom-software',
    name: 'Custom Software',
    from: 12000,
    audience: 'For custom business applications.',
    features: [
      'Custom architecture',
      'Authentication',
      'Dashboards',
      'Database',
      'APIs',
      'Integrations',
      'Business workflows',
    ],
    cta: 'Request a Consultation',
  },
]

export const recurringPlans: RecurringPlan[] = [
  {
    slug: 'care',
    name: 'Care',
    monthly: 299,
    features: ['Hosting', 'Monitoring', 'Backups', 'Security updates', 'Minor updates'],
  },
  {
    slug: 'growth',
    name: 'Growth',
    monthly: 499,
    features: [
      'Everything in Care',
      'Priority support',
      'Monthly improvements',
      'Analytics report',
      'SEO monitoring',
    ],
    featured: true,
  },
  {
    slug: 'scale',
    name: 'Scale',
    monthly: 799,
    features: [
      'Everything in Growth',
      'Advanced support',
      'Automation improvements',
      'Monthly strategy call',
      'Priority development',
    ],
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We understand your business, your customers and your objectives.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We define the solution and the technical architecture behind it.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We craft the user experience and the visual system.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'We build, test and integrate everything end-to-end.',
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'We deploy, measure and provide ongoing support as you grow.',
  },
]

/**
 * Demo portfolio. Every item is a CONCEPT PROJECT (concept: true) and must
 * be clearly labelled as such until real client work exists. No fabricated
 * clients, metrics or results.
 */
export const portfolio: PortfolioItem[] = [
  {
    slug: 'skyline-real-estate',
    name: 'Skyline Properties',
    category: 'real-estate',
    industryLabel: 'Real Estate',
    summary:
      'Concept property platform with listings, lead capture and WhatsApp enquiries.',
    concept: true,
    tags: ['Listings', 'Lead capture', 'WhatsApp', 'CRM'],
  },
  {
    slug: 'glow-beauty-booking',
    name: 'Glow Beauty Studio',
    category: 'beauty',
    industryLabel: 'Beauty & Salons',
    summary:
      'Concept online booking experience with service catalog and reminders.',
    concept: true,
    tags: ['Booking', 'Reminders', 'Promotions'],
  },
  {
    slug: 'prestige-auto-detailing',
    name: 'Prestige Auto Detailing',
    category: 'automotive',
    industryLabel: 'Automotive',
    summary:
      'Concept quote-and-book flow for a premium car detailing service.',
    concept: true,
    tags: ['Quotes', 'Booking', 'WhatsApp'],
  },
  {
    slug: 'saffron-restaurant',
    name: 'Saffron Dining',
    category: 'restaurants',
    industryLabel: 'Restaurants',
    summary:
      'Concept restaurant site with digital menu and reservations.',
    concept: true,
    tags: ['Digital menu', 'Reservations'],
  },
  {
    slug: 'harbor-ecommerce',
    name: 'Harbor Goods',
    category: 'ecommerce',
    industryLabel: 'E-commerce',
    summary:
      'Concept online store with secure checkout and a scalable catalog.',
    concept: true,
    tags: ['Store', 'Checkout', 'Catalog'],
  },
  {
    slug: 'operations-dashboard',
    name: 'Business OS Dashboard',
    category: 'saas',
    industryLabel: 'SaaS',
    summary:
      'Concept operations dashboard unifying leads, bookings and analytics.',
    concept: true,
    tags: ['Dashboard', 'Analytics', 'Automation'],
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'Do you work with companies outside Ecuador?',
    answer:
      'Yes. We work remotely with businesses internationally, including companies in Dubai and the UAE.',
  },
  {
    question: 'How long does a website take?',
    answer:
      'Depending on complexity, typically 1–4 weeks. For custom projects we agree on a realistic timeline during discovery rather than promising a fixed date upfront.',
  },
  {
    question: 'Can you integrate WhatsApp?',
    answer:
      'Yes. WhatsApp is a core conversion channel for UAE businesses and we build it into most projects.',
  },
  {
    question: 'Do you provide maintenance?',
    answer:
      'Yes, through monthly Care, Growth and Scale plans that keep your product fast, secure and up to date.',
  },
  {
    question: 'Can you build custom software?',
    answer:
      'Yes. Beyond websites, we build custom web applications, dashboards, CRMs and business automation.',
  },
  {
    question: 'Do you work with UAE businesses?',
    answer:
      'Yes. Our work is focused on helping SMEs across Dubai and the UAE grow through better digital systems.',
  },
  {
    question: 'Do you provide Arabic websites?',
    answer:
      'Our platform is built to support Arabic and right-to-left layouts. We scope professional Arabic content on a per-project basis.',
  },
]
