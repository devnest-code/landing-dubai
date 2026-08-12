'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { bookingHref, isBookingExternal, site } from '@/config/site'
import { track } from '@/lib/analytics'
import { Logo } from '@/components/ui/Logo'
import { Icon } from '@/components/ui/Icon'

/**
 * Booking link that respects internal (locale-relative, via next-intl <Link>)
 * vs external (plain <a>) destinations — never double-prefixes the locale.
 */
function BookingLink({
  className,
  style,
  label,
  onClick,
  children,
}: {
  className?: string
  style?: React.CSSProperties
  label: string
  onClick?: () => void
  children: React.ReactNode
}) {
  const href = bookingHref()
  const handle = () => {
    track('booking_click', { label })
    onClick?.()
  }
  if (isBookingExternal()) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style} onClick={handle}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className} style={style} onClick={handle}>
      {children}
    </Link>
  )
}

const links = [
  { href: '/services', key: 'services' },
  { href: '/industries', key: 'industries' },
  { href: '/pricing', key: 'pricing' },
  { href: '/portfolio', key: 'portfolio' },
  { href: '/about', key: 'about' },
] as const

export default function Navbar() {
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: `1px solid ${scrolled ? 'var(--bd)' : 'transparent'}`,
        background: scrolled ? 'rgba(7,10,18,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition: 'background .3s ease, border-color .3s ease',
      }}
    >
      <nav
        className="container-x"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}
      >
        <Link href="/" aria-label={site.brand.name} style={{ display: 'inline-flex' }}>
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{ display: 'none', gap: 30, listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                style={{ color: 'var(--wm)', fontSize: 15, fontWeight: 500, transition: 'color .2s' }}
                className="nav-link"
              >
                {t(l.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <BookingLink
            label="nav-primary"
            className="btn btn-primary nav-cta"
            style={{ display: 'none', padding: '11px 20px', fontSize: 14 }}
          >
            {site.cta.primary}
          </BookingLink>

          {/* Mobile toggle */}
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              display: 'inline-flex',
              background: 'transparent',
              border: `1px solid var(--bd2)`,
              borderRadius: 10,
              padding: 9,
              color: 'var(--w)',
              cursor: 'pointer',
            }}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="glass"
          style={{
            position: 'fixed',
            inset: '72px 0 0 0',
            zIndex: 49,
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: 'var(--w)',
                fontSize: 20,
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                padding: '14px 4px',
                borderBottom: '1px solid var(--bd)',
              }}
            >
              {t(l.key)}
            </Link>
          ))}
          <BookingLink
            label="nav-mobile-primary"
            className="btn btn-primary"
            style={{ marginTop: 18 }}
            onClick={() => setOpen(false)}
          >
            {site.cta.primary}
          </BookingLink>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .nav-desktop { display: flex !important; }
          .nav-cta { display: inline-flex !important; }
          .nav-toggle { display: none !important; }
        }
        .nav-link:hover { color: var(--w) !important; }
      `}</style>
    </header>
  )
}
