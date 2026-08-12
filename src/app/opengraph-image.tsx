import { readFileSync } from 'fs'
import { join } from 'path'
import { ImageResponse } from 'next/og'
import { site } from '@/config/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${site.brand.name} — Digital systems for Dubai & UAE businesses`

// Embed the real brand logo (read at build time, base64 data URI).
const logoData = readFileSync(join(process.cwd(), 'public', 'logo-wbg.png'))
const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

/** Dynamically generated social share image using the real DevNest brand. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background:
            'radial-gradient(1000px 500px at 85% -10%, rgba(79,124,255,0.45), transparent), radial-gradient(800px 500px at 5% 110%, rgba(34,211,238,0.30), transparent), #070a12',
          color: '#eaf0ff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={64} height={64} alt="" />
          <div style={{ fontSize: 36, fontWeight: 700 }}>{site.brand.name}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
            Digital systems built for ambitious businesses in Dubai.
          </div>
          <div style={{ fontSize: 28, color: 'rgba(234,240,255,0.7)' }}>
            {site.market.servingLabel}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 28, fontSize: 24, color: '#22d3ee' }}>
          <span>Conversion-focused</span>
          <span style={{ color: 'rgba(234,240,255,0.3)' }}>·</span>
          <span>Custom-built</span>
          <span style={{ color: 'rgba(234,240,255,0.3)' }}>·</span>
          <span>Priced in AED</span>
        </div>
      </div>
    ),
    size,
  )
}
