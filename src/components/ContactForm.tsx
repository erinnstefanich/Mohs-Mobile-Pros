'use client'

import { useRef, useState } from 'react'
import { business } from '../lib/site'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')
  const submitting = useRef(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    practice: '',
    message: '',
    website: ''
  })

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (submitting.current) return
    submitting.current = true
    setStatus('sending')
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const result = (await response.json().catch(() => null)) as { message?: string } | null
      if (!response.ok) throw new Error(result?.message || 'Message delivery failed.')

      setStatus('sent')
      setForm({ name: '', email: '', practice: '', message: '', website: '' })
    } catch (submissionError) {
      setStatus('error')
      setError(submissionError instanceof Error ? submissionError.message : `We could not send your message. Please email ${business.email}.`)
    } finally {
      submitting.current = false
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 rounded-lg border border-slate-200/80 bg-white p-7 shadow-[0_18px_55px_rgba(11,35,69,0.09)] sm:p-8" aria-label="Contact form">
      <div>
        <p className="eyebrow">Website Inquiry</p>
        <h2 className="mt-3 text-2xl font-black leading-tight text-brand-navy">Send a message to Mohs Mobile Pros</h2>
        <p className="mt-3 leading-7 text-slate-600">For scheduling requests, email <a href={`mailto:${business.schedulingEmail}`} className="font-bold text-brand-navy hover:text-brand-orange">{business.schedulingEmail}</a>.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-bold text-brand-navy" htmlFor="name">Name</label>
          <input id="name" className="form-field" type="text" name="name" autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} required />
        </div>
        <div>
          <label className="text-sm font-bold text-brand-navy" htmlFor="email">Email</label>
          <input id="email" className="form-field" type="email" name="email" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} required />
        </div>
      </div>
      <div>
        <label className="text-sm font-bold text-brand-navy" htmlFor="practice">Practice Name</label>
        <input id="practice" className="form-field" type="text" name="practice" autoComplete="organization" value={form.practice} onChange={(e) => update('practice', e.target.value)} />
      </div>
      <div>
        <label className="text-sm font-bold text-brand-navy" htmlFor="message">Message</label>
        <textarea id="message" className="form-field min-h-36" name="message" rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} required />
      </div>
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update('website', e.target.value)} />
      </div>
      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
        <p className="text-sm text-slate-500">Prefer email? {business.email}</p>
      </div>
      <div aria-live="polite" aria-atomic="true">
        {status === 'sent' && <p className="rounded-md bg-green-50 p-4 text-sm font-semibold text-green-700">Your message has been sent to {business.email}.</p>}
        {status === 'error' && <p className="rounded-md border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700" role="alert">{error}</p>}
      </div>
    </form>
  )
}
