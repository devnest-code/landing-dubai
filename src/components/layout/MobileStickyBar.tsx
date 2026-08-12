'use client'

import { Link } from '@/i18n/navigation'
import { bookingHref, isBookingExternal, site, whatsappLink } from '@/config/site'
import { track } from '@/lib/analytics'
import { Icon, WhatsAppGlyph } from '@/components/ui/Icon'

/** Sticky bottom bar on mobile: WhatsApp | Book a Call. */
export function MobileStickyBar() {
  const wa = whatsappLink(undefined, 'mobile-bar')
  const booking = bookingHref()
  const bookingLabel = site.cta.primary.replace('Book a Free ', 'Book a ')

  return (
    <div className="mobile-bar glass" role="navigation" aria-label="Quick actions">
      {wa && (
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={{ flex: 1, padding: '13px 12px' }}
          onClick={() => track('whatsapp_click', { label: 'mobile-bar' })}
        >
          <WhatsAppGlyph size={18} /> WhatsApp
        </a>
      )}
      {isBookingExternal() ? (
        <a
          href={booking}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ flex: 1, padding: '13px 12px' }}
          onClick={() => track('booking_click', { label: 'mobile-bar-book' })}
        >
          <Icon name="calendar" size={18} /> {bookingLabel}
        </a>
      ) : (
        <Link
          href={booking}
          className="btn btn-primary"
          style={{ flex: 1, padding: '13px 12px' }}
          onClick={() => track('booking_click', { label: 'mobile-bar-book' })}
        >
          <Icon name="calendar" size={18} /> {bookingLabel}
        </Link>
      )}

      <style>{`
        .mobile-bar {
          position: fixed;
          left: 0; right: 0;
          bottom: 0;
          z-index: 55;
          display: flex;
          gap: 10px;
          padding: 10px 14px calc(10px + env(safe-area-inset-bottom, 0px));
          border-top: 1px solid var(--bd);
        }
        @media (min-width: 900px) { .mobile-bar { display: none; } }
      `}</style>
    </div>
  )
}
