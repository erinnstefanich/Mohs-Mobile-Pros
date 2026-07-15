import { NextResponse } from 'next/server'

type CareersPayload = {
  fullName?: string
  email?: string
  phone?: string
  cityState?: string
  currentRole?: string
  yearsExperience?: string
  mohsExperience?: string
  certifications?: string
  availability?: string
  willingnessToTravel?: string
  workArrangements?: string[]
  message?: string
}

const DESTINATION_EMAIL = 'info@mohsmobilepros.com'
const FROM_EMAIL = 'info@mohsmobilepros.com'
const SUBJECT = 'New Careers Inquiry — Mohs Mobile Pros'

export async function POST(request: Request) {
  const data = (await request.json()) as CareersPayload
  const missing = validate(data)

  if (missing.length) {
    return NextResponse.json({ ok: false, message: 'Missing required fields.', missing }, { status: 400 })
  }

  const apiKey = process.env.SENDGRID_API_KEY?.trim()
  if (!apiKey) {
    console.error('Careers email delivery is not configured: SENDGRID_API_KEY is missing.')
    return NextResponse.json({ ok: false, message: 'Email delivery is not configured.' }, { status: 503 })
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: DESTINATION_EMAIL }] }],
        from: { email: FROM_EMAIL, name: 'Mohs Mobile Pros Website' },
        reply_to: { email: data.email, name: data.fullName || 'Careers Applicant' },
        subject: SUBJECT,
        content: [{ type: 'text/plain', value: formatCareersEmail(data) }],
        categories: ['careers'],
        custom_args: { form: 'careers' }
      })
    })

    if (!response.ok) {
      console.error('Careers email delivery error:', await response.text())
      return NextResponse.json({ ok: false, message: 'Email delivery failed.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true, deliveredTo: DESTINATION_EMAIL })
  } catch (error) {
    console.error('Careers email delivery exception:', error)
    return NextResponse.json({ ok: false, message: 'Email delivery failed.' }, { status: 500 })
  }
}

function validate(data: CareersPayload) {
  const required: Array<keyof CareersPayload> = [
    'fullName',
    'email',
    'phone',
    'cityState',
    'currentRole',
    'yearsExperience',
    'mohsExperience',
    'availability',
    'willingnessToTravel'
  ]
  const missing = required.filter((field) => !String(data[field] || '').trim())
  if (!data.workArrangements?.length) missing.push('workArrangements')
  return missing
}

function formatCareersEmail(data: CareersPayload) {
  return `New Careers Inquiry — Mohs Mobile Pros

Applicant Information
Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
City and State: ${data.cityState}

Professional Experience
Current Role: ${data.currentRole}
Years of Histology Experience: ${data.yearsExperience}
Mohs Experience: ${data.mohsExperience}
Certifications: ${data.certifications || 'Not provided'}

Availability and Travel
Availability: ${data.availability}
Willingness to Travel: ${data.willingnessToTravel}

Desired Work Arrangement
${data.workArrangements?.map((item) => `- ${item}`).join('\n')}

Message / Additional Information
${data.message || 'Not provided'}

Résumé
The applicant was instructed to email their résumé separately to ${DESTINATION_EMAIL}.`
}
