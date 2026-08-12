/** Domain types shared across the marketing site. */

export type IndustryKey =
  | 'real-estate'
  | 'beauty'
  | 'barbershops'
  | 'automotive'
  | 'restaurants'
  | 'clinics'
  | 'construction'

export interface Service {
  slug: string
  /** Lucide-style icon name rendered by the Icon component. */
  icon: string
  title: string
  /** Outcome-led one-liner (sells the result, not the tech). */
  outcome: string
  description: string
}

export interface Industry {
  key: IndustryKey
  icon: string
  title: string
  intro: string
  solutions: string[]
  cta: string
}

export interface Package {
  slug: string
  name: string
  /** Amount in the primary currency; rendered as "Starting from …". */
  from: number
  audience: string
  features: string[]
  cta: string
  featured?: boolean
}

export interface RecurringPlan {
  slug: string
  name: string
  monthly: number
  features: string[]
  featured?: boolean
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export type PortfolioCategory =
  | 'real-estate'
  | 'beauty'
  | 'automotive'
  | 'restaurants'
  | 'ecommerce'
  | 'saas'
  | 'custom'

export interface PortfolioItem {
  slug: string
  name: string
  category: PortfolioCategory
  industryLabel: string
  summary: string
  /** Every demo item is flagged so it is never presented as a real client. */
  concept: boolean
  tags: string[]
}

export interface FaqItem {
  question: string
  answer: string
}

/** Lead lifecycle statuses — defined now for a clean Phase 2 (admin) handoff. */
export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'proposal_sent'
  | 'negotiation'
  | 'won'
  | 'lost'

/** Shape persisted in Phase 2. Kept here so the API contract is stable. */
export interface Lead {
  name: string
  company?: string
  email: string
  whatsapp?: string
  industry?: string
  website?: string
  service?: string
  budget?: string
  message: string
  source: string
  utm?: Record<string, string | undefined>
  status?: LeadStatus
}
