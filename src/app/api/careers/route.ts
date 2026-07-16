import { NextResponse } from 'next/server'
import { sendEmail } from '../../../lib/email/sendgrid'
import { CareersPayload, careersSchema } from '../../../lib/forms/schemas'
import {
  isHoneypotSubmission,
  parseJsonRequest,
  requestIdentity,
  runProtectedSubmission,
  submissionFingerprint
} from '../../../lib/forms/protection'

const DESTINATION_EMAIL = 'info@mohsmobilepros.com'
const SUBJECT = 'New Careers Inquiry — Mohs Mobile Pros'

export async function POST(request: Request) {
  const parsed = await parseJsonRequest(request, careersSchema, 24 * 1024)
  if (!parsed.ok) return parsed.response

  if (isHoneypotSubmission(parsed.data)) {
    return NextResponse.json({ ok: true })
  }

  const identity = requestIdentity(request)
  const fingerprint = submissionFingerprint('careers', identity, parsed.data)
  const result = await runProtectedSubmission('careers', identity, fingerprint, async () => {
    try {
      await sendEmail({
        to: DESTINATION_EMAIL,
        replyTo: parsed.data.email,
        replyToName: parsed.data.fullName,
        subject: SUBJECT,
        body: formatCareersEmail(parsed.data),
        category: 'careers'
      })
      return { status: 200, body: { ok: true } }
    } catch {
      return {
        status: 502,
        body: { ok: false, message: 'We could not submit your inquiry. Please try again or email info@mohsmobilepros.com.' }
      }
    }
  })

  return NextResponse.json(result.body, { status: result.status })
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
${data.workArrangements.map((item) => `- ${item}`).join('\n')}

Message / Additional Information
${data.message || 'Not provided'}

Résumé
The applicant was instructed to email their résumé separately to ${DESTINATION_EMAIL}.`
}
