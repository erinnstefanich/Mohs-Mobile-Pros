import { NextResponse } from 'next/server'

type RequestServicePayload = {
  practiceName?: string
  contactName?: string
  contactEmail?: string
  contactPhone?: string
  clinicAddress?: string
  city?: string
  state?: string
  zip?: string
  requestedDate?: string
  backupDate?: string
  mohsSurgeon?: string
  expectedCases?: string
  coverageType?: string
  servicesNeeded?: string[]
  equipmentAvailable?: string[]
  otherEquipment?: string
  arrivalInstructions?: string
  specialInstructions?: string
}

const DESTINATION_EMAIL = 'schedule@mohsmobilepros.com'
const FROM_EMAIL = 'info@mohsmobilepros.com'
const SUBJECT = 'New Mohs Mobile Pros Service Request'

export async function POST(req: Request) {
  const data = (await req.json()) as RequestServicePayload

  const missing = validate(data)
  if (missing.length) {
    return NextResponse.json({ ok: false, message: 'Missing required fields.', missing }, { status: 400 })
  }

  const emailBody = formatRequestEmail(data)
  const confirmationBody = formatConfirmationEmail(data)

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY?.trim()

  if (!SENDGRID_API_KEY) {
    console.error('Request service email delivery is not configured: SENDGRID_API_KEY is missing.')
    return NextResponse.json({ ok: false, message: 'Email delivery is not configured.' }, { status: 503 })
  }

  try {
    const schedulingRes = await sendEmail(SENDGRID_API_KEY, {
      to: DESTINATION_EMAIL,
      replyTo: data.contactEmail,
      replyToName: data.contactName || data.practiceName || 'Service Request',
      subject: SUBJECT,
      body: emailBody
    })

    if (!schedulingRes.ok) {
      console.error('Request service scheduling email error:', await schedulingRes.text())
      return NextResponse.json({ ok: false, message: 'Email delivery failed.' }, { status: 502 })
    }

    const confirmationRes = await sendEmail(SENDGRID_API_KEY, {
      to: data.contactEmail || '',
      subject: 'Mohs Mobile Pros received your service request',
      body: confirmationBody
    })

    if (!confirmationRes.ok) {
      console.error('Request service confirmation email error:', await confirmationRes.text())
      return NextResponse.json({ ok: false, message: 'Email delivery failed.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true, deliveredTo: DESTINATION_EMAIL, confirmationDeliveredTo: data.contactEmail })
  } catch (err) {
    console.error('Request service email exception:', err)
    return NextResponse.json({ ok: false, message: 'Email delivery failed.' }, { status: 500 })
  }
}

function sendEmail(
  apiKey: string,
  message: {
    to: string
    subject: string
    body: string
    replyTo?: string
    replyToName?: string
  }
) {
  return fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
          personalizations: [
            { to: [{ email: message.to }] }
          ],
          from: { email: FROM_EMAIL, name: 'Mohs Mobile Pros Website' },
          reply_to: message.replyTo ? { email: message.replyTo, name: message.replyToName || 'Service Request' } : undefined,
          subject: message.subject,
          content: [{ type: 'text/plain', value: message.body }],
          categories: ['request-service'],
          custom_args: { form: 'request-service' }
        })
    })
}

function validate(data: RequestServicePayload) {
  const required: Array<keyof RequestServicePayload> = [
    'practiceName',
    'contactName',
    'contactEmail',
    'contactPhone',
    'clinicAddress',
    'city',
    'state',
    'zip',
    'requestedDate',
    'mohsSurgeon',
    'expectedCases',
    'coverageType'
  ]

  const missing = required.filter((field) => !String(data[field] || '').trim())
  if (!data.servicesNeeded?.length) {
    missing.push('servicesNeeded')
  }
  return missing
}

function formatRequestEmail(data: RequestServicePayload) {
  return `New Mohs Mobile Pros Service Request

Practice Information
Practice Name: ${data.practiceName}

Primary Contact
Contact Name: ${data.contactName}
Contact Email: ${data.contactEmail}
Contact Phone: ${data.contactPhone}

Clinic / Service Location
Clinic Address: ${data.clinicAddress}
City: ${data.city}
State: ${data.state}
ZIP: ${data.zip}

Requested Coverage Date
Requested Date: ${data.requestedDate}
Backup Date: ${data.backupDate || 'Not provided'}

Mohs Surgeon
Mohs Surgeon: ${data.mohsSurgeon}

Expected Case Volume
Expected Number of Cases: ${data.expectedCases}

Coverage Type
${data.coverageType}

Services Requested
${formatList(data.servicesNeeded)}

Equipment / Room Details
Equipment Available: ${formatList(data.equipmentAvailable)}
Other Equipment: ${data.otherEquipment || 'Not provided'}

Workflow Notes / Special Instructions
Arrival Instructions:
${data.arrivalInstructions || 'Not provided'}

Special Instructions:
${data.specialInstructions || 'Not provided'}`
}

function formatConfirmationEmail(data: RequestServicePayload) {
  return `Thank you. Your request has been received. Our scheduling team will review your request and contact you shortly.

Request Summary
Practice: ${data.practiceName}
Requested Date: ${data.requestedDate}
Coverage Type: ${data.coverageType}
Services Requested: ${formatList(data.servicesNeeded)}

For scheduling questions, contact ${DESTINATION_EMAIL}.`
}

function formatList(items?: string[]) {
  return items?.length ? items.map((item) => `- ${item}`).join('\n') : 'Not provided'
}
