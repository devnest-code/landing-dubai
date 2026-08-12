import { NextRequest, NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validations'
import { notifyLead, persistLead } from '@/lib/leads'
import type { Lead } from '@/types'

export async function POST(req: NextRequest) {
  try {
    const json = await req.json()
    const parsed = leadSchema.safeParse(json)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'validation', issues: parsed.error.flatten().fieldErrors },
        { status: 422 },
      )
    }

    const data = parsed.data

    // Honeypot: real users never fill this field.
    if (data.botcheck) {
      return NextResponse.json({ success: true })
    }

    const lead: Lead = {
      name: data.name,
      company: data.company,
      email: data.email,
      whatsapp: data.whatsapp,
      industry: data.industry,
      website: data.website,
      service: data.service,
      budget: data.budget,
      message: data.message,
      source: data.source || 'contact',
      utm: data.utm,
      status: 'new',
    }

    await persistLead(lead)
    await notifyLead(lead)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[api/lead] error', err)
    return NextResponse.json({ error: 'server' }, { status: 500 })
  }
}
