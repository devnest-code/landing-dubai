import type { ReactNode } from 'react'
import { site } from '@/config/site'
import { PageHeader } from './PageHeader'

interface Section {
  heading: string
  body: ReactNode
}

interface Props {
  title: string
  intro: string
  sections: Section[]
}

/** Reusable legal document shell. Content uses placeholders that must be
 *  completed with real legal information before production. */
export function LegalDoc({ title, intro, sections }: Props) {
  return (
    <>
      <PageHeader title={title} />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-x" style={{ maxWidth: 760 }}>
          <div
            className="glass"
            style={{ borderRadius: 12, padding: '14px 18px', marginBottom: 28, borderColor: 'rgba(232,193,122,0.3)' }}
          >
            <p className="price-gold" style={{ fontSize: 13, fontWeight: 600 }}>
              Placeholder document
            </p>
            <p style={{ color: 'var(--wm)', fontSize: 13.5, marginTop: 6 }}>
              This is template text for {site.brand.name}. Legal entity name, address, registration and tax
              information must be completed and reviewed by a qualified professional before publishing.
            </p>
          </div>

          <p style={{ color: 'var(--wm)', fontSize: 16 }}>{intro}</p>

          {sections.map((s) => (
            <div key={s.heading} style={{ marginTop: 32 }}>
              <h2 style={{ fontSize: 20 }}>{s.heading}</h2>
              <div style={{ color: 'var(--wm)', fontSize: 15.5, marginTop: 10, lineHeight: 1.7 }}>{s.body}</div>
            </div>
          ))}

          <p style={{ color: 'var(--wf)', fontSize: 13, marginTop: 40 }}>
            Contact: {site.contact.email}
          </p>
        </div>
      </section>
    </>
  )
}
