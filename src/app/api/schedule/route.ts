import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  const TO = 'schedule@mohsmobilepros.com'

  const subject = `Service Request - ${data.practiceName || data.contactName || 'New Request'}`
  const body = `Practice Name: ${data.practiceName}
Contact Name: ${data.contactName}
Email: ${data.email}
Phone: ${data.phone}
Clinic Address: ${data.clinicAddress}
City: ${data.city}
State: ${data.state}
Mohs Surgeon: ${data.surgeon}
Requested Date: ${data.requestedDate}
Coverage Type: ${data.coverageType}
Expected Case Volume: ${data.expectedCaseVolume}
Services Needed: ${data.servicesNeeded}

Special Instructions:
${data.specialInstructions}`

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
          from: { email: 'info@mohsmobilepros.com', name: 'Mohs Mobile Pros Website' },
          reply_to: data.email ? { email: data.email, name: data.contactName || data.practiceName || 'Website Inquiry' } : undefined,
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

  return NextResponse.json({ ok: false, message: 'Email provider is not configured; use client mailto fallback.' }, { status: 500 })
}
