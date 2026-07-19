'use client'

import { useRef, useState } from 'react'
import { business } from '../../lib/site'
import { workArrangements } from './careersData'

type CareersFormState = {
  fullName: string
  email: string
  phone: string
  cityState: string
  currentRole: string
  yearsExperience: string
  mohsExperience: string
  certifications: string
  availability: string
  willingnessToTravel: string
  workArrangements: string[]
  message: string
  website: string
}

const initialForm: CareersFormState = {
  fullName: '',
  email: '',
  phone: '',
  cityState: '',
  currentRole: '',
  yearsExperience: '',
  mohsExperience: '',
  certifications: '',
  availability: '',
  willingnessToTravel: '',
  workArrangements: [],
  message: '',
  website: ''
}

export default function CareersForm() {
  const [form, setForm] = useState<CareersFormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')
  const submitting = useRef(false)

  function update(field: keyof CareersFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function toggleWorkArrangement(value: string) {
    setForm((current) => ({
      ...current,
      workArrangements: current.workArrangements.includes(value)
        ? current.workArrangements.filter((item) => item !== value)
        : [...current.workArrangements, value]
    }))
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current) return
    submitting.current = true
    setError('')

    if (!form.workArrangements.length) {
      setStatus('error')
      setError('Please select at least one desired work arrangement.')
      submitting.current = false
      return
    }

    setStatus('sending')

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const result = (await response.json().catch(() => null)) as { message?: string } | null
      if (!response.ok) throw new Error(result?.message || 'Careers inquiry delivery failed')

      setStatus('sent')
      setForm(initialForm)
    } catch (submissionError) {
      setStatus('error')
      setError(submissionError instanceof Error ? submissionError.message : `We could not submit your inquiry online. Please email your résumé and information to ${business.email}.`)
    } finally {
      submitting.current = false
    }
  }

  if (status === 'sent') {
    return (
      <section id="careers-inquiry-form" className="rounded-lg border border-green-200 bg-white p-8 shadow-[0_18px_55px_rgba(11,35,69,0.09)] sm:p-10" aria-live="polite">
        <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-green-200 bg-green-50 text-green-700">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m20 6-11 11-5-5" />
          </svg>
        </div>
        <h2 className="mt-6 text-3xl font-black leading-tight text-brand-navy">Thank you for your interest</h2>
        <p className="mt-4 text-lg font-semibold leading-8 text-slate-700">Your careers inquiry has been delivered to Mohs Mobile Pros. Our team will review your information and follow up when an opportunity may be a fit.</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-secondary mt-8">Submit Another Inquiry</button>
      </section>
    )
  }

  return (
    <form id="careers-inquiry-form" onSubmit={onSubmit} className="grid gap-8 rounded-lg border border-slate-200/80 bg-white p-7 shadow-[0_18px_55px_rgba(11,35,69,0.09)] sm:p-9">
      <div>
        <p className="eyebrow">Join Our Team</p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">Tell us about your experience</h2>
        <p className="mt-4 leading-7 text-slate-600">Share your background, availability, and the type of opportunity that interests you.</p>
      </div>

      <FormSection title="Contact Information">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Full Name" id="fullName" value={form.fullName} onChange={(value) => update('fullName', value)} required autoComplete="name" />
          <Field label="Email" id="email" type="email" value={form.email} onChange={(value) => update('email', value)} required autoComplete="email" />
          <Field label="Phone" id="phone" type="tel" value={form.phone} onChange={(value) => update('phone', value)} required autoComplete="tel" />
          <Field label="City and State" id="cityState" value={form.cityState} onChange={(value) => update('cityState', value)} required autoComplete="address-level2" />
        </div>
      </FormSection>

      <FormSection title="Professional Experience">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Current Role" id="currentRole" value={form.currentRole} onChange={(value) => update('currentRole', value)} required />
          <Field label="Years of Histology Experience" id="yearsExperience" value={form.yearsExperience} onChange={(value) => update('yearsExperience', value)} required placeholder="Example: 8 years" />
          <Field label="Mohs Experience" id="mohsExperience" value={form.mohsExperience} onChange={(value) => update('mohsExperience', value)} required placeholder="Describe your Mohs experience" />
          <Field label="Certifications" id="certifications" value={form.certifications} onChange={(value) => update('certifications', value)} placeholder="HT, HTL, or other credentials" />
        </div>
      </FormSection>

      <FormSection title="Availability and Travel">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Availability" id="availability" value={form.availability} onChange={(value) => update('availability', value)} required placeholder="Days, timing, or start date" />
          <SelectField label="Willingness to Travel" id="willingnessToTravel" value={form.willingnessToTravel} onChange={(value) => update('willingnessToTravel', value)} options={['Yes', 'No', 'Open to discussion']} required />
        </div>
      </FormSection>

      <FormSection title="Desired Work Arrangement">
        <div className="grid gap-3 sm:grid-cols-2">
          {workArrangements.map((option) => (
            <label key={option} className="group flex min-h-14 cursor-pointer items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold leading-5 text-brand-navy shadow-sm transition duration-200 ease-out hover:-translate-y-[2px] hover:border-brand-orange/45 hover:shadow-md">
              <input type="checkbox" checked={form.workArrangements.includes(option)} onChange={() => toggleWorkArrangement(option)} className="h-5 w-5 shrink-0 rounded border-slate-300 text-brand-orange focus:ring-brand-orange" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </FormSection>

      <FormSection title="Résumé and Additional Information">
        <p className="rounded-md border border-brand-orange/25 bg-brand-orange/10 p-4 text-sm font-semibold leading-6 text-slate-700">After submitting this form, you may email your résumé to <a href={`mailto:${business.email}`} className="font-black text-brand-navy transition hover:text-brand-orange">{business.email}</a>.</p>
        <div className="mt-6">
          <TextArea label="Message / Additional Information" id="message" value={form.message} onChange={(value) => update('message', value)} placeholder="Tell us about your laboratory background, professional goals, or anything else you would like us to know." />
        </div>
      </FormSection>

      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="careers-website">Website</label>
        <input id="careers-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => update('website', event.target.value)} />
      </div>

      <div aria-live="assertive" aria-atomic="true">
        {status === 'error' && <p className="rounded-md border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700" role="alert">{error}</p>}
      </div>

      <div className="flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-500">Careers inquiries are delivered to <span className="font-bold text-brand-navy">{business.email}</span>.</p>
        <button type="submit" className="btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Submitting...' : 'Submit Careers Inquiry'}</button>
      </div>
    </form>
  )
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="rounded-lg border border-slate-200 bg-slate-50/45 p-5 sm:p-6">
      <legend className="px-2 text-sm font-black uppercase tracking-[0.14em] text-brand-navy">{title}</legend>
      <div className="mt-2">{children}</div>
    </fieldset>
  )
}

function Field({ label, id, value, onChange, type = 'text', required = false, autoComplete, placeholder }: { label: string; id: string; value: string; onChange: (value: string) => void; type?: string; required?: boolean; autoComplete?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-bold text-brand-navy" htmlFor={id}>{label}{required && <span className="text-brand-orange"> *</span>}</label>
      <input id={id} name={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} required={required} autoComplete={autoComplete} placeholder={placeholder} className="form-field" />
    </div>
  )
}

function SelectField({ label, id, value, onChange, options, required = false }: { label: string; id: string; value: string; onChange: (value: string) => void; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-bold text-brand-navy" htmlFor={id}>{label}{required && <span className="text-brand-orange"> *</span>}</label>
      <select id={id} name={id} value={value} onChange={(event) => onChange(event.target.value)} required={required} className="form-field">
        <option value="">Select an option</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  )
}

function TextArea({ label, id, value, onChange, placeholder }: { label: string; id: string; value: string; onChange: (value: string) => void; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-bold text-brand-navy" htmlFor={id}>{label}</label>
      <textarea id={id} name={id} value={value} onChange={(event) => onChange(event.target.value)} rows={6} className="form-field min-h-36" placeholder={placeholder} />
    </div>
  )
}
