import { Resend } from 'resend'
import { site } from '@/config/site'
import type { Lead } from '@/types'

/**
 * Lead handling layer.
 *
 * Phase 1: notify by email (Resend) + send the visitor a confirmation.
 * Phase 2 extension point: `persistLead()` is where a database / CRM write
 * (Postgres, HubSpot, etc.) plugs in without touching the API routes.
 */

const FROM = process.env.LEAD_FROM_EMAIL || `${site.brand.name} <onboarding@resend.dev>`
const TO = process.env.LEAD_TO_EMAIL || 'devnest.code@gmail.com'

function esc(v: unknown): string {
  return String(v ?? '—').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]!))
}

/** Phase 2 hook — persist to DB/CRM. Currently a no-op that logs. */
export async function persistLead(lead: Lead): Promise<void> {
  // TODO(phase-2): write to database / forward to CRM (HubSpot, etc.)
  console.info('[lead] captured', { source: lead.source, email: lead.email })
}

/** Notify the team and confirm to the visitor. Returns true on success. */
export async function notifyLead(lead: Lead): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    // Fail soft in local/dev without a key so the UX still completes.
    console.warn('[lead] RESEND_API_KEY missing — skipping email send')
    return true
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const rows = [
    ['Nombre', lead.name],
    ['Empresa', lead.company],
    ['Correo electrónico', lead.email],
    ['WhatsApp', lead.whatsapp],
    ['Sector', lead.industry],
    ['Sitio web actual', lead.website],
    ['Servicio solicitado', lead.service],
    ['Presupuesto', lead.budget],
    ['Origen', lead.source],
    ['UTM', lead.utm ? JSON.stringify(lead.utm) : '—'],
    ['Mensaje', lead.message],
  ]
    .map(([k, v]) => `<tr><td style="padding:4px 10px"><strong>${esc(k)}</strong></td><td style="padding:4px 10px">${esc(v)}</td></tr>`)
    .join('')

  await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: lead.email,
    subject: `Nueva solicitud de proyecto en Dubái — ${lead.company || lead.name}`,
    html: `<h2>Nueva solicitud recibida desde ${esc(site.brand.name)}</h2><table cellpadding="0" cellspacing="0">${rows}</table>`,
  })

  await resend.emails.send({
    from: FROM,
    to: [lead.email],
    subject: 'Hemos recibido tu solicitud de proyecto',
    html: `
      <p>Hola ${esc(lead.name)},</p>
      <p>Gracias por comunicarte con ${esc(site.brand.name)}. Hemos recibido tu solicitud y un especialista se pondrá en contacto contigo pronto.</p>
      <p>Mientras tanto, puedes responder a este correo con cualquier información adicional sobre tu proyecto.</p>
      <p>— El equipo de ${esc(site.brand.name)}</p>
    `,
  })

  return true
}
