import Image from 'next/image'
import { site } from '@/config/site'

interface Props {
  className?: string
  showWordmark?: boolean
  size?: number
}

/** Brand mark — official DevNest logo + configurable wordmark. */
export function Logo({ className, showWordmark = true, size = 34 }: Props) {
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <Image
        src="/logo-wbg.png"
        alt={`${site.brand.name} logo`}
        width={size}
        height={size}
        priority
        style={{ objectFit: 'contain', width: size, height: size }}
      />
      {showWordmark && (
        <span
          className="font-display"
          style={{ fontWeight: 700, fontSize: 19, letterSpacing: '-0.02em', color: 'var(--w)' }}
        >
          {site.brand.name}
        </span>
      )}
    </span>
  )
}
