import { NextRequest, NextResponse } from 'next/server'
import { auditSchema } from '@/lib/validations'
import { notifyLead, persistLead } from '@/lib/leads'
import type { Lead } from '@/types'

export async function POST(req: NextRequest) {
  try {
    const json = await req.json()
    const parsed = auditSchema.safeParse(json)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'validation', issues: parsed.error.flatten().fieldErrors },
        { status: 422 },
      )
    }

    const data = parsed.data

    if (data.botcheck) {
      return NextResponse.json({ success: true })
    }

    const lead: Lead = {
      name: data.name,
      company: data.company,
      email: data.email,
      whatsapp: data.whatsapp,
      website: data.website,
      message: `Free website audit requested for: ${data.website}`,
      source: data.source || 'website-audit',
      utm: data.utm,
      status: 'new',
    }

    await persistLead(lead)
    await notifyLead(lead)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[api/audit] error', err)
    return NextResponse.json({ error: 'server' }, { status: 500 })
  }
}
