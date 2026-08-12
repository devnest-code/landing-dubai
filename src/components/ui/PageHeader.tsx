import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface Props {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
}

/** Consistent top-of-page header for interior pages. */
export function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section style={{ paddingTop: 'clamp(48px, 7vw, 96px)', paddingBottom: 'clamp(8px, 2vw, 24px)' }}>
      <div className="container-x" style={{ maxWidth: 780, textAlign: 'center' }}>
        <Reveal>
          {eyebrow && (
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              {eyebrow}
            </div>
          )}
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', marginTop: 16 }}>{title}</h1>
          {subtitle && (
            <p style={{ color: 'var(--wm)', marginTop: 18, fontSize: 'clamp(16px, 1.8vw, 19px)' }}>
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
