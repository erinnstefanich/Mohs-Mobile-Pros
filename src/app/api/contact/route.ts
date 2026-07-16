import { NextResponse } from 'next/server'
import { sendEmail } from '../../../lib/email/sendgrid'
import { ContactPayload, contactSchema } from '../../../lib/forms/schemas'
import {
  isHoneypotSubmission,
  parseJsonRequest,
  requestIdentity,
  runProtectedSubmission,
  submissionFingerprint
} from '../../../lib/forms/protection'

const DESTINATION_EMAIL = 'info@mohsmobilepros.com'
const SUBJECT = 'New Website Inquiry — Mohs Mobile Pros'

export async function POST(request: Request) {
  const parsed = await parseJsonRequest(request, contactSchema, 16 * 1024)
  if (!parsed.ok) return parsed.response

  if (isHoneypotSubmission(parsed.data)) {
    return NextResponse.json({ ok: true })
  }

  const identity = requestIdentity(request)
  const fingerprint = submissionFingerprint('contact', identity, parsed.data)
  const result = await runProtectedSubmission('contact', identity, fingerprint, async () => {
    try {
      await sendEmail({
        to: DESTINATION_EMAIL,
        replyTo: parsed.data.email,
        replyToName: parsed.data.name,
        subject: SUBJECT,
        body: formatContactEmail(parsed.data),
        category: 'contact'
      })
      return { status: 200, body: { ok: true } }
    } catch {
      return {
        status: 502,
        body: { ok: false, message: 'We could not send your message. Please try again or email info@mohsmobilepros.com.' }
      }
    }
  })

  return NextResponse.json(result.body, { status: result.status })
}

function formatContactEmail(data: ContactPayload) {
  return `New Website Inquiry — Mohs Mobile Pros

Name: ${data.name}
Email: ${data.email}
Practice Name: ${data.practice || 'Not provided'}

Message:
${data.message}`
}
