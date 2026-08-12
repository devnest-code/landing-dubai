import {
  services,
  industries,
  packages,
  recurringPlans,
  processSteps,
  portfolio,
  faqs,
} from './content'
import {
  servicesAr,
  industriesAr,
  packagesAr,
  recurringPlansAr,
  processStepsAr,
  portfolioAr,
  faqsAr,
} from './content.ar'

export function getLocalizedContent(locale: string) {
  if (locale === 'ar') {
    return {
      services: servicesAr,
      industries: industriesAr,
      packages: packagesAr,
      recurringPlans: recurringPlansAr,
      processSteps: processStepsAr,
      portfolio: portfolioAr,
      faqs: faqsAr,
    }
  }

  return { services, industries, packages, recurringPlans, processSteps, portfolio, faqs }
}
