import { NextResponse } from 'next/server'
import { sendEmail } from '../../../lib/email/sendgrid'
import { RequestServicePayload, requestServiceSchema } from '../../../lib/forms/schemas'
import {
  isHoneypotSubmission,
  parseJsonRequest,
  requestIdentity,
  runProtectedSubmission,
  submissionFingerprint
} from '../../../lib/forms/protection'

const DESTINATION_EMAIL = 'schedule@mohsmobilepros.com'
const SUBJECT = 'New Mohs Mobile Pros Service Request'

export async function POST(request: Request) {
  const parsed = await parseJsonRequest(request, requestServiceSchema, 32 * 1024)
  if (!parsed.ok) return parsed.response

  if (isHoneypotSubmission(parsed.data)) {
    return NextResponse.json({ ok: true })
  }

  const identity = requestIdentity(request)
  const fingerprint = submissionFingerprint('request-service', identity, parsed.data)
  const result = await runProtectedSubmission('request-service', identity, fingerprint, async () => {
    try {
      await sendEmail({
        to: DESTINATION_EMAIL,
        replyTo: parsed.data.contactEmail,
        replyToName: parsed.data.contactName || parsed.data.practiceName,
        subject: SUBJECT,
        body: formatRequestEmail(parsed.data),
        category: 'request-service'
      })
    } catch {
      return {
        status: 502,
        body: { ok: false, message: 'We could not submit your request. Please try again or email schedule@mohsmobilepros.com.' }
      }
    }

    try {
      await sendEmail({
        to: parsed.data.contactEmail,
        subject: 'Mohs Mobile Pros received your service request',
        body: formatConfirmationEmail(parsed.data),
        category: 'request-confirmation'
      })
    } catch {
      console.error('[forms:request-confirmation] Primary request delivered; customer confirmation was not delivered.')
    }

    return { status: 200, body: { ok: true } }
  })

  return NextResponse.json(result.body, { status: result.status })
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

function formatList(items: readonly string[]) {
  return items.length ? items.map((item) => `- ${item}`).join('\n') : 'Not provided'
}
