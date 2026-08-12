'use client'

/**
 * Thin analytics layer. Wraps GA4 (gtag) and is the single place where
 * future providers (Meta, LinkedIn, etc.) can be attached. Safe no-op
 * when no provider is configured or during SSR.
 */

type Params = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export type AnalyticsEvent =
  | 'cta_click'
  | 'whatsapp_click'
  | 'form_submit'
  | 'form_success'
  | 'booking_click'
  | 'audit_submit'
  | 'roi_calculated'

export function track(event: AnalyticsEvent, params: Params = {}): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params)
  }
  // Extension point: mirror to other pixels here when configured.
}

/** Read UTM params from the current URL (client-side). */
export function readUtm(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const p = new URLSearchParams(window.location.search)
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  const out: Record<string, string> = {}
  for (const k of keys) {
    const v = p.get(k)
    if (v) out[k] = v
  }
  return out
}
