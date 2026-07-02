import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()

  // If SENDGRID_API_KEY is provided, attempt to send via SendGrid
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  const TO = 'schedule@mohsmobilepros.com'

  const subject = `Service Request - ${data.practiceName || data.contactName || 'New Request'}`
  const body = `Practice Name: ${data.practiceName}\nContact: ${data.contactName}\nPhone: ${data.phone}\nEmail: ${data.email}\nMohs Surgeon: ${data.mohssurgeon}\nRequested Date: ${data.requestedDate}\nRequested Services: ${data.requestedServices}\n\nMessage:\n${data.message}`

  if (SENDGRID_API_KEY) {
    try {
      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: TO }] }],
          from: { email: data.email || 'noreply@mohsmobilepros.com' },
          subject: subject,
          content: [{ type: 'text/plain', value: body }]
        })
      })

      if (!res.ok) {
        const text = await res.text()
        console.error('SendGrid error:', text)
        return NextResponse.json({ ok: false }, { status: 502 })
      }

      return NextResponse.json({ ok: true })
    } catch (err) {
      console.error(err)
      return NextResponse.json({ ok: false }, { status: 500 })
    }
  }

  // If no provider configured, return 204 so client can fallback to mailto
  return NextResponse.json({ ok: false }, { status: 204 })
}
