import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json(
    { ok: false, message: 'This endpoint is no longer available. Use /api/request-service.' },
    { status: 410 }
  )
}
