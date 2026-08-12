'use client'

import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { track } from '@/lib/analytics'
import { Icon } from './Icon'

type Variant = 'primary' | 'ghost' | 'whatsapp'

interface Props {
  children: ReactNode
  href: string
  variant?: Variant
  /** Force a plain anchor. Auto-detected for http(s), protocol-relative and mailto/tel/wa.me links. */
  external?: boolean
  withArrow?: boolean
  /** Analytics label, e.g. "hero-primary". */
  event?: string
  eventKind?: 'cta_click' | 'whatsapp_click' | 'booking_click'
  className?: string
  fullWidth?: boolean
  style?: React.CSSProperties
}

/** URLs that must NOT be handled by next-intl's <Link> (which prefixes a locale). */
function looksExternal(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || /^(mailto:|tel:)/.test(href)
}

export function CTAButton({
  children,
  href,
  variant = 'primary',
  external = false,
  withArrow = false,
  event,
  eventKind = 'cta_click',
  className = '',
  fullWidth = false,
  style: styleProp,
}: Props) {
  const cls = `btn btn-${variant} ${className}`.trim()
  const isExternal = external || looksExternal(href)
  const style = fullWidth ? { width: '100%', ...styleProp } : styleProp

  function onClick() {
    track(eventKind, { label: event ?? href })
  }

  const inner = (
    <>
      {variant === 'whatsapp' && <Icon name="whatsapp" size={18} />}
      {children}
      {withArrow && <Icon name="arrow-right" size={18} />}
    </>
  )

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style} onClick={onClick}>
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className={cls} style={style} onClick={onClick}>
      {inner}
    </Link>
  )
}
