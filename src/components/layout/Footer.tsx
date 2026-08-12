import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { site } from '@/config/site'
import { Logo } from '@/components/ui/Logo'
import { Icon } from '@/components/ui/Icon'

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Work' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const

const solutionLinks = [
  { href: '/services', key: 'services' },
  { href: '/industries', key: 'industries' },
  { href: '/pricing', key: 'pricing' },
] as const

export default function Footer() {
  const t = useTranslations('footer')
  const tn = useTranslations('nav')

  const socials = [
    { key: 'instagram', href: site.social.instagram, icon: 'sparkles' },
    { key: 'linkedin', href: site.social.linkedin, icon: 'users' },
    { key: 'x', href: site.social.x, icon: 'bolt' },
  ].filter((s) => s.href)

  return (
    <footer style={{ borderTop: '1px solid var(--bd)', marginTop: 40 }}>
      <div className="container-x" style={{ paddingBlock: 'clamp(48px, 6vw, 80px)' }}>
        <div
          style={{
            display: 'grid',
            gap: 40,
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          }}
        >
          <div style={{ maxWidth: 320 }}>
            <Logo />
            <p style={{ color: 'var(--wm)', marginTop: 16, fontSize: 15 }}>{t('tagline')}</p>
            <p style={{ color: 'var(--wf)', marginTop: 10, fontSize: 13 }}>{t('based')}</p>
            {socials.length > 0 && (
              <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.key}
                    className="chip"
                    style={{ padding: 9, borderRadius: 10 }}
                  >
                    <Icon name={s.icon} size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4 style={{ fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--wf)' }}>
              {t('columns.company')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: 12 }}>
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: 'var(--wm)', fontSize: 15 }} className="foot-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--wf)' }}>
              {t('columns.solutions')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: 12 }}>
              {solutionLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: 'var(--wm)', fontSize: 15 }} className="foot-link">
                    {tn(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--wf)' }}>
              {t('columns.legal')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: 12 }}>
              <li>
                <Link href="/legal/privacy" style={{ color: 'var(--wm)', fontSize: 15 }} className="foot-link">
                  {t('legal.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" style={{ color: 'var(--wm)', fontSize: 15 }} className="foot-link">
                  {t('legal.terms')}
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" style={{ color: 'var(--wm)', fontSize: 15 }} className="foot-link">
                  {t('legal.cookies')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider" style={{ marginBlock: 32 }} />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ color: 'var(--wf)', fontSize: 13 }}>
            © {new Date().getFullYear()} {site.brand.name}. {t('rights')}
          </p>
          <p style={{ color: 'var(--wf)', fontSize: 12, maxWidth: 460, textAlign: 'right' }}>
            {t('disclaimer')}
          </p>
        </div>
      </div>

      <style>{`.foot-link:hover { color: var(--w) !important; }`}</style>
    </footer>
  )
}
