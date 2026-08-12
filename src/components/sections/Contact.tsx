import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { bookingHref, isBookingExternal, site, whatsappLink } from '@/config/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LeadForm } from '@/components/forms/LeadForm'
import { Icon, WhatsAppGlyph } from '@/components/ui/Icon'

export default function Contact() {
  const t = useTranslations('contact')
  const wa = whatsappLink(undefined, 'contact-section')
  const booking = bookingHref()
  const bookingExternal = isBookingExternal()

  return (
    <section className="section" id="contact">
      <div className="container-x">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="contact-grid" style={{ display: 'grid', gap: 22, gridTemplateColumns: '1fr' }}>
          {/* Channels */}
          <aside style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{ padding: 18, display: 'flex', gap: 14, alignItems: 'center' }}
              >
                <span style={{ width: 40, height: 40, borderRadius: 11, background: '#25d366', color: '#05130a', display: 'grid', placeItems: 'center' }}>
                  <WhatsAppGlyph size={20} />
                </span>
                <span>
                  <span style={{ display: 'block', fontWeight: 600 }}>{t('channels.whatsapp')}</span>
                  <span style={{ color: 'var(--wf)', fontSize: 13 }}>{site.whatsapp.number ? `+${site.whatsapp.number}` : ''}</span>
                </span>
              </a>
            )}

            <a href={`mailto:${site.contact.email}`} className="card" style={{ padding: 18, display: 'flex', gap: 14, alignItems: 'center' }}>
              <ChannelIcon name="mail" />
              <span>
                <span style={{ display: 'block', fontWeight: 600 }}>{t('channels.email')}</span>
                <span style={{ color: 'var(--wf)', fontSize: 13 }}>{site.contact.email}</span>
              </span>
            </a>

            {bookingExternal ? (
              <a href={booking} target="_blank" rel="noopener noreferrer" className="card" style={{ padding: 18, display: 'flex', gap: 14, alignItems: 'center' }}>
                <ChannelIcon name="calendar" />
                <span>
                  <span style={{ display: 'block', fontWeight: 600 }}>{t('channels.book')}</span>
                  <span style={{ color: 'var(--wf)', fontSize: 13 }}>{site.cta.primary}</span>
                </span>
              </a>
            ) : (
              <Link href={booking} className="card" style={{ padding: 18, display: 'flex', gap: 14, alignItems: 'center' }}>
                <ChannelIcon name="calendar" />
                <span>
                  <span style={{ display: 'block', fontWeight: 600 }}>{t('channels.book')}</span>
                  <span style={{ color: 'var(--wf)', fontSize: 13 }}>{site.cta.primary}</span>
                </span>
              </Link>
            )}

            <div className="card" style={{ padding: 18, display: 'flex', gap: 14, alignItems: 'center' }}>
              <ChannelIcon name="clock" />
              <span>
                <span style={{ display: 'block', fontWeight: 600 }}>{t('channels.hours')}</span>
                <span style={{ color: 'var(--wf)', fontSize: 13 }}>{site.contact.businessHours}</span>
              </span>
            </div>
          </aside>

          {/* Form */}
          <div>
            <LeadForm source="contact" />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid { grid-template-columns: 0.8fr 1.2fr !important; }
        }
      `}</style>
    </section>
  )
}

function ChannelIcon({ name }: { name: string }) {
  return (
    <span
      style={{
        width: 40,
        height: 40,
        borderRadius: 11,
        background: 'var(--grad-soft)',
        border: '1px solid var(--bd2)',
        color: 'var(--cyan)',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Icon name={name} size={20} />
    </span>
  )
}
