import type { Service } from '@/types'
import { Icon } from '@/components/ui/Icon'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card" style={{ padding: 26, height: '100%' }}>
      <div
        aria-hidden
        style={{
          width: 46,
          height: 46,
          borderRadius: 12,
          display: 'grid',
          placeItems: 'center',
          background: 'var(--grad-soft)',
          border: '1px solid var(--bd2)',
          color: 'var(--cyan)',
        }}
      >
        <Icon name={service.icon} size={22} />
      </div>
      <h3 style={{ fontSize: 19, marginTop: 18 }}>{service.title}</h3>
      <p style={{ color: 'var(--blue)', fontSize: 14, marginTop: 6, fontWeight: 500 }}>
        {service.outcome}
      </p>
      <p style={{ color: 'var(--wm)', fontSize: 14.5, marginTop: 10 }}>{service.description}</p>
    </article>
  )
}
