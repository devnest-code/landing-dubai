/**
 * ────────────────────────────────────────────────────────────────
 *  DevNest — Central commercial configuration (single source of truth)
 * ────────────────────────────────────────────────────────────────
 *  Change brand, contact, WhatsApp, pricing, currency, booking, etc.
 *  HERE ONLY. No commercial data should be hardcoded in components.
 *
 *  "DevNest" is a working brand name for the MVP — rename it in one
 *  place (brand.name) and it propagates across the whole site.
 * ────────────────────────────────────────────────────────────────
 */

export const site = {
  brand: {
    name: 'DevNest',
    legalName: '[LEGAL COMPANY NAME — complete before production]',
    tagline: 'Digital systems built for ambitious businesses in Dubai.',
    domain: 'example.com',
  },

  /** Primary market — used for copy, SEO and structured data. */
  market: {
    primary: 'Dubai, UAE',
    servingLabel: 'Serving businesses across Dubai & UAE',
    baseLabel: 'Remote development team based in Ecuador, serving UAE businesses.',
  },

  /**
   * Currency shown to users. AED is primary; USD is optional/secondary.
   * All prices in this file are expressed as `starting from` amounts.
   */
  currency: {
    code: 'AED',
    symbol: 'AED',
    /** Approximate AED→USD for optional secondary display (internal). */
    usdRate: 0.2723,
    showUsd: false,
  },

  contact: {
    email: 'hello@example.com',
    phoneDisplay: '+971 00 000 0000',
    businessHours: 'Sun–Thu, 9:00–18:00 (GST)',
  },

  /** Reusable WhatsApp configuration (see WhatsAppButton / floating CTA). */
  whatsapp: {
    /** Digits only, international format, NO + or spaces. Empty = hidden. */
    number: '',
    defaultMessage:
      "Hi, I found your website and I'd like to discuss a digital project.",
  },

  /** Configurable booking provider (Calendly / Google / MS Bookings). */
  booking: {
    enabled: true,
    /** Full URL to the scheduling page. Empty falls back to /contact. */
    url: '',
    label: 'Book a Free Consultation',
  },

  social: {
    instagram: 'https://www.instagram.com/devnestcode/',
    linkedin: 'https://www.tiktok.com/@devnest04',
    x: '',
    facebook: 'https://www.facebook.com/devnestcode/',
  },

  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  },

  cta: {
    primary: 'Book a Free Consultation',
    secondary: 'Get a Free Website Audit',
    whatsapp: 'WhatsApp Us',
    quote: 'Request a Quote',
    start: 'Start Your Project',
    work: 'See Our Work',
  },
} as const

/** Absolute site URL, safe on server & client. */
export function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || `https://${site.brand.domain}`
}

/** Build a wa.me link with an optional campaign/source tag. */
export function whatsappLink(message?: string, source?: string): string | null {
  if (!site.whatsapp.number) return null
  const base = message || site.whatsapp.defaultMessage
  const text = source ? `${base} (via ${source})` : base
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`
}

/**
 * Resolve the booking destination.
 * - External provider (Calendly/Google/…) → full URL (render with a plain <a>).
 * - Otherwise → the internal contact page as a LOCALE-RELATIVE path ('/contact'),
 *   because next-intl's <Link> adds the locale prefix itself. Returning
 *   '/en/contact' here would double it to '/en/en/contact'.
 */
export function bookingHref(): string {
  if (site.booking.enabled && site.booking.url) return site.booking.url
  return '/contact'
}

/** True when booking points to an external scheduling provider. */
export function isBookingExternal(): boolean {
  return Boolean(site.booking.enabled && site.booking.url)
}

/** Format a price in the primary currency, e.g. "AED 2,500". */
export function formatPrice(amount: number): string {
  return `${site.currency.symbol} ${amount.toLocaleString('en-US')}`
}
