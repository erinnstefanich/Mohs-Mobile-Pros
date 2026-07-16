import { createHash } from 'crypto'
import { NextResponse } from 'next/server'
import { z } from 'zod'

type SubmissionResult = {
  status: number
  body: Record<string, unknown>
}

type RateEntry = {
  count: number
  resetAt: number
}

type ReplayEntry = {
  expiresAt: number
  promise: Promise<SubmissionResult>
}

const rateEntries = new Map<string, RateEntry>()
const replayEntries = new Map<string, ReplayEntry>()
const WINDOW_MS = 15 * 60 * 1000
const REPLAY_MS = 15 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5

export async function parseJsonRequest<T extends z.ZodTypeAny>(request: Request, schema: T, maxBytes: number) {
  const contentType = request.headers.get('content-type') || ''
  if (!contentType.toLowerCase().includes('application/json')) {
    return {
      ok: false as const,
      response: NextResponse.json({ ok: false, message: 'Submit the form using JSON.' }, { status: 415 })
    }
  }

  const contentLength = Number(request.headers.get('content-length') || 0)
  if (contentLength > maxBytes) {
    return {
      ok: false as const,
      response: NextResponse.json({ ok: false, message: 'The submission is too large.' }, { status: 413 })
    }
  }

  let raw = ''
  try {
    raw = await request.text()
  } catch {
    return {
      ok: false as const,
      response: NextResponse.json({ ok: false, message: 'The submission could not be read.' }, { status: 400 })
    }
  }

  if (Buffer.byteLength(raw, 'utf8') > maxBytes) {
    return {
      ok: false as const,
      response: NextResponse.json({ ok: false, message: 'The submission is too large.' }, { status: 413 })
    }
  }

  let json: unknown
  try {
    json = JSON.parse(raw)
  } catch {
    return {
      ok: false as const,
      response: NextResponse.json({ ok: false, message: 'The submission is not valid JSON.' }, { status: 400 })
    }
  }

  const parsed = schema.safeParse(json)
  if (!parsed.success) {
    const fields = parsed.error.issues.slice(0, 12).map((issue) => ({
      field: issue.path.join('.') || 'form',
      message: issue.message
    }))
    return {
      ok: false as const,
      response: NextResponse.json({ ok: false, message: 'Please correct the highlighted form information.', fields }, { status: 400 })
    }
  }

  return { ok: true as const, data: parsed.data as z.infer<T> }
}

export function isHoneypotSubmission(data: { website?: string }) {
  return Boolean(data.website?.trim())
}

export function requestIdentity(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  return forwarded || request.headers.get('x-real-ip')?.trim() || 'unknown'
}

export function submissionFingerprint(scope: string, identity: string, data: unknown) {
  return createHash('sha256').update(`${scope}\n${identity}\n${JSON.stringify(data)}`).digest('hex')
}

export async function runProtectedSubmission(
  scope: string,
  identity: string,
  fingerprint: string,
  operation: () => Promise<SubmissionResult>
) {
  const now = Date.now()
  prune(now)
  const replayKey = `${scope}:${fingerprint}`
  const existing = replayEntries.get(replayKey)
  if (existing && existing.expiresAt > now) {
    const result = await existing.promise
    return { ...result, body: { ...result.body, duplicate: true } }
  }

  const rateKey = `${scope}:${identity}`
  const current = rateEntries.get(rateKey)
  if (current && current.resetAt > now && current.count >= MAX_REQUESTS_PER_WINDOW) {
    return {
      status: 429,
      body: { ok: false, message: 'Too many submissions. Please wait and try again.' }
    }
  }

  rateEntries.set(rateKey, {
    count: current && current.resetAt > now ? current.count + 1 : 1,
    resetAt: current && current.resetAt > now ? current.resetAt : now + WINDOW_MS
  })

  const promise = operation()
  replayEntries.set(replayKey, { expiresAt: now + REPLAY_MS, promise })

  const result = await promise
  if (result.status >= 400) replayEntries.delete(replayKey)
  return result
}

function prune(now: number) {
  if (rateEntries.size > 500) {
    for (const [key, value] of rateEntries) if (value.resetAt <= now) rateEntries.delete(key)
  }
  if (replayEntries.size > 500) {
    for (const [key, value] of replayEntries) if (value.expiresAt <= now) replayEntries.delete(key)
  }
}
