'use client'

import { useState } from 'react'
import { business } from '../lib/site'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    practice: '',
    message: ''
  })

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Website Inquiry - ${form.practice || form.name || 'Mohs Mobile Pros'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPractice: ${form.practice}\n\nMessage:\n${form.message}`
    )

    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`
    setStatus('sent')
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
      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary">Send Message</button>
        <p className="text-sm text-slate-500">Prefer email? {business.email}</p>
      </div>
      {status === 'sent' && <p className="rounded-md bg-green-50 p-4 text-sm font-semibold text-green-700">Your email client has been opened with the message prepared for {business.email}.</p>}
    </form>
  )
}
