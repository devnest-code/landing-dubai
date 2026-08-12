import type { SVGProps } from 'react'

/**
 * Lightweight inline icon set (stroke-based, 24×24, currentColor).
 * Avoids shipping an icon library — better performance & full control.
 */

const paths: Record<string, string> = {
  globe: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18',
  target: 'M12 3a9 9 0 100 18 9 9 0 000-18zm0 4a5 5 0 100 10 5 5 0 000-10zm0 4a1 1 0 100 2 1 1 0 000-2z',
  cart: 'M3 4h2l2.4 12.3a1 1 0 001 .7h8.5a1 1 0 001-.8L21 8H6M9 20a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z',
  layers: 'M12 3l9 5-9 5-9-5 9-5zm9 9l-9 5-9-5m18 4l-9 5-9-5',
  users: 'M16 19v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1M9.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM21 19v-1a4 4 0 00-3-3.8M16 4.2a4 4 0 010 7.6',
  calendar: 'M7 3v3M17 3v3M4 8h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1zM9 13h.01M13 13h2M9 17h2',
  message: 'M4 5h16a1 1 0 011 1v9a1 1 0 01-1 1H9l-4 4v-4H4a1 1 0 01-1-1V6a1 1 0 011-1zm4 5h.01M12 10h.01M16 10h.01',
  sparkles: 'M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3zM18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z',
  chart: 'M4 4v16h16M8 16v-4M12 16V8M16 16v-6',
  shield: 'M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9.5 12l1.8 1.8L15 10',
  building: 'M4 21h16M6 21V5a1 1 0 011-1h10a1 1 0 011 1v16M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01M10 21v-4h4v4',
  scissors: 'M6 9a3 3 0 100-6 3 3 0 000 6zm0 12a3 3 0 100-6 3 3 0 000 6zM8.5 8.5L20 20M8.5 15.5L20 4M14 12l6-3',
  car: 'M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13m-14 0h14m-14 0v4h2v-2m10 2h2v-4m-2 4v-2m-8 2H5m0-2H4a1 1 0 01-1-1v-1m2 2v-2m8 2a1 1 0 100-2 1 1 0 000 2zM8 15a1 1 0 100-2 1 1 0 000 2z',
  utensils: 'M4 3v7a2 2 0 002 2v9M6 3v6M8 3v6m10-6c-1.5 0-3 1.5-3 4s1.5 3 3 3v10',
  heart: 'M12 20s-7-4.3-9.3-8.2C1 8.5 2.4 5 5.8 5 8 5 12 8 12 8s4-3 6.2-3c3.4 0 4.8 3.5 3.1 6.8C19 15.7 12 20 12 20z',
  hardhat: 'M4 15a8 8 0 0116 0M3 15h18v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM10 8V5a1 1 0 011-1h2a1 1 0 011 1v3',
  check: 'M20 6L9 17l-5-5',
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  'arrow-up-right': 'M7 17L17 7M8 7h9v9',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  mail: 'M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm0 2l8 6 8-6',
  phone: 'M4 5a2 2 0 012-2h2l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5V19a2 2 0 01-2 2A16 16 0 014 5z',
  clock: 'M12 3a9 9 0 100 18 9 9 0 000-18zm0 4v5l3.5 2',
  star: 'M12 3l2.6 5.6 6.1.7-4.5 4.1 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.3l6.1-.7L12 3z',
  bolt: 'M13 3L4 14h6l-1 7 9-11h-6l1-7z',
  rocket: 'M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5M9 11a4 4 0 014-4c3-3 7-3 7-3s0 4-3 7a4 4 0 01-4 4l-2 2-4-4 2-2zM15 9h.01',
  compass: 'M12 3a9 9 0 100 18 9 9 0 000-18zm3.5 5.5l-2 5-5 2 2-5 5-2z',
  whatsapp: 'M20 12a8 8 0 01-11.9 7L4 20l1.1-4A8 8 0 1120 12z',
}

interface Props extends SVGProps<SVGSVGElement> {
  name: string
  size?: number
}

export function Icon({ name, size = 24, ...rest }: Props) {
  const d = paths[name] || paths.bolt
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <path d={d} />
    </svg>
  )
}

/** Solid WhatsApp glyph for the floating button. */
export function WhatsAppGlyph({ size = 24, ...rest }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M17.5 14.4c-.3-.15-1.7-.85-2-.95-.26-.1-.45-.15-.64.15-.19.28-.73.94-.9 1.13-.16.19-.33.21-.62.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.08-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.15.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 21.5a9.5 9.5 0 01-4.84-1.32l-.35-.2-3.6.94.96-3.5-.23-.36A9.5 9.5 0 1112 21.5zm0-21C6.2.5 1.5 5.2 1.5 11c0 1.85.49 3.66 1.41 5.26L1 23l6.9-1.81A10.5 10.5 0 1012 .5z" />
    </svg>
  )
}
