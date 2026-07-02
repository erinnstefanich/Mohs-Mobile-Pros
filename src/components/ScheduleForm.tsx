'use client'

import { useState } from 'react'

export default function ScheduleForm(){
  const [form, setForm] = useState({
    practiceName: '',
    contactName: '',
    phone: '',
    email: '',
    mohssurgeon: '',
    requestedDate: '',
    requestedServices: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  function update(field: string, value: string){
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    setStatus('sending')

    // Attempt server-side send if API configured, otherwise fallback to mailto
    try {
      const res = await fetch('/api/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (res.ok) {
        setStatus('sent')
        return
      }
    } catch (err) {
      // fall through to mailto
    }

    // Fallback: open mail client with prefilled message addressed to schedule@mohsmobilepros.com
    const to = 'schedule@mohsmobilepros.com'
    const subject = encodeURIComponent(`Service Request - ${form.practiceName || form.contactName || 'New Request'}`)
    const body = encodeURIComponent(
      `Practice Name: ${form.practiceName}\nContact: ${form.contactName}\nPhone: ${form.phone}\nEmail: ${form.email}\nMohs Surgeon: ${form.mohssurgeon}\nRequested Date: ${form.requestedDate}\nRequested Services: ${form.requestedServices}\n\nMessage:\n${form.message}`
    )

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Practice Name</label>
          <input required value={form.practiceName} onChange={e => update('practiceName', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Contact Name</label>
          <input required value={form.contactName} onChange={e => update('contactName', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Phone</label>
          <input required value={form.phone} onChange={e => update('phone', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input required type="email" value={form.email} onChange={e => update('email', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Mohs Surgeon</label>
          <input value={form.mohssurgeon} onChange={e => update('mohssurgeon', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Requested Date</label>
          <input type="date" value={form.requestedDate} onChange={e => update('requestedDate', e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Requested Services</label>
        <input value={form.requestedServices} onChange={e => update('requestedServices', e.target.value)} placeholder="e.g., Frozen sections, H&E staining" className="mt-1 block w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Message</label>
        <textarea value={form.message} onChange={e => update('message', e.target.value)} rows={5} className="mt-1 block w-full border rounded px-3 py-2" />
      </div>

      <div>
        <button type="submit" className="btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Submit Request'}</button>
      </div>

      {status === 'sent' && <p className="text-sm text-green-600">Thank you — your request has been prepared. If your mail client opened, finish sending the email to schedule@mohsmobilepros.com; otherwise the request was submitted via our server.</p>}
      {status === 'error' && <p className="text-sm text-red-600">There was an error submitting your request. Please email schedule@mohsmobilepros.com directly.</p>}
    </form>
  )
}
