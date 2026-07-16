const SENDGRID_ENDPOINT = 'https://api.sendgrid.com/v3/mail/send'
const FROM_EMAIL = 'info@mohsmobilepros.com'

export type EmailMessage = {
  to: string
  subject: string
  body: string
  category: 'contact' | 'request-service' | 'request-confirmation' | 'careers'
  replyTo?: string
  replyToName?: string
}

export class EmailDeliveryError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EmailDeliveryError'
  }
}

export async function sendEmail(message: EmailMessage) {
  const apiKey = process.env.SENDGRID_API_KEY?.trim()
  if (!apiKey) {
    console.error(`[forms:${message.category}] Email delivery is not configured.`)
    throw new EmailDeliveryError('Email delivery is not configured.')
  }

  let response: Response
  try {
    response = await fetch(SENDGRID_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: message.to }] }],
        from: { email: FROM_EMAIL, name: 'Mohs Mobile Pros Website' },
        reply_to: message.replyTo
          ? { email: message.replyTo, name: message.replyToName || 'Website Visitor' }
          : undefined,
        subject: message.subject,
        content: [{ type: 'text/plain', value: message.body }],
        categories: [message.category],
        custom_args: { form: message.category }
      })
    })
  } catch (error) {
    console.error(`[forms:${message.category}] SendGrid request failed.`, error instanceof Error ? error.message : 'Unknown network error')
    throw new EmailDeliveryError('Email delivery failed.')
  }

  if (!response.ok) {
    console.error(`[forms:${message.category}] SendGrid rejected the message with status ${response.status}.`)
    throw new EmailDeliveryError('Email delivery failed.')
  }
}
