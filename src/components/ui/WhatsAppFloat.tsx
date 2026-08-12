'use client'

import { useEffect, useState } from 'react'
import { site, whatsappLink } from '@/config/site'
import { track } from '@/lib/analytics'
import { WhatsAppGlyph } from './Icon'

/** Floating WhatsApp conversion button. Hidden if no number is configured. */
export function WhatsAppFloat() {
  const [show, setShow] = useState(false)
  const href = whatsappLink(undefined, 'floating-button')

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={site.cta.whatsapp}
      onClick={() => track('whatsapp_click', { label: 'floating' })}
      style={{
        position: 'fixed',
        right: 20,
        bottom: 'calc(20px + env(safe-area-inset-bottom, 0px))',
        zIndex: 60,
        width: 56,
        height: 56,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        background: '#25d366',
        color: '#05130a',
        boxShadow: '0 10px 34px -8px rgba(37,211,102,0.6)',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.9)',
        pointerEvents: show ? 'auto' : 'none',
        transition: 'opacity .3s ease, transform .3s ease',
      }}
    >
      <WhatsAppGlyph size={28} />
    </a>
  )
}
