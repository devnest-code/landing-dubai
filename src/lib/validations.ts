import { z } from 'zod'

/** UTM params captured from the URL and forwarded with every lead. */
export const utmSchema = z
  .object({
    utm_source: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_campaign: z.string().optional(),
    utm_term: z.string().optional(),
    utm_content: z.string().optional(),
  })
  .partial()
  .optional()

/**
 * Main lead / consultation form.
 * `website` is coerced-optional so an empty field doesn't fail URL validation.
 * `botcheck` is a honeypot — must stay empty (spam protection).
 */
export const leadSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().max(120).optional().or(z.literal('')),
  email: z.string().email('Enter a valid email address'),
  whatsapp: z.string().max(30).optional().or(z.literal('')),
  industry: z.string().max(60).optional().or(z.literal('')),
  website: z.string().max(200).optional().or(z.literal('')),
  service: z.string().max(80).optional().or(z.literal('')),
  budget: z.string().max(40).optional().or(z.literal('')),
  message: z.string().min(10, 'Tell us a little about your project'),
  source: z.string().max(60).optional(),
  utm: utmSchema,
  botcheck: z.string().max(0).optional().or(z.literal('')),
})

export type LeadFormData = z.infer<typeof leadSchema>

/** Free website audit — lighter form, same spam protection. */
export const auditSchema = z.object({
  website: z.string().min(3, 'Enter your website URL'),
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().max(120).optional().or(z.literal('')),
  email: z.string().email('Enter a valid email address'),
  whatsapp: z.string().max(30).optional().or(z.literal('')),
  source: z.string().max(60).optional(),
  utm: utmSchema,
  botcheck: z.string().max(0).optional().or(z.literal('')),
})

export type AuditFormData = z.infer<typeof auditSchema>
