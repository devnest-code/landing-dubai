import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface Props {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className }: Props) {
  const isCenter = align === 'center'
  return (
    <Reveal
      className={className}
      // spacing + alignment handled inline to keep it framework-agnostic
    >
      <div
        style={{
          textAlign: isCenter ? 'center' : 'left',
          maxWidth: isCenter ? 720 : undefined,
          marginInline: isCenter ? 'auto' : undefined,
          marginBottom: 'clamp(36px, 5vw, 56px)',
        }}
      >
        {eyebrow && (
          <div className="eyebrow" style={{ justifyContent: isCenter ? 'center' : 'flex-start' }}>
            {eyebrow}
          </div>
        )}
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            marginTop: 16,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p style={{ color: 'var(--wm)', marginTop: 16, fontSize: 'clamp(15px, 1.6vw, 18px)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  )
}
