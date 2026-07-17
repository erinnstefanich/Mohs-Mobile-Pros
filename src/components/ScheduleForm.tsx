'use client'

import { useRef, useState } from 'react'
import { business } from '../lib/site'

type FormState = {
  practiceName: string
  contactName: string
  contactEmail: string
  contactPhone: string
  clinicAddress: string
  city: string
  state: string
  zip: string
  requestedDate: string
  backupDate: string
  mohsSurgeon: string
  expectedCases: string
  coverageType: string
  servicesNeeded: string[]
  equipmentAvailable: string[]
  otherEquipment: string
  arrivalInstructions: string
  specialInstructions: string
  website: string
}

const initialForm: FormState = {
  practiceName: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  clinicAddress: '',
  city: '',
  state: '',
  zip: '',
  requestedDate: '',
  backupDate: '',
  mohsSurgeon: '',
  expectedCases: '',
  coverageType: '',
  servicesNeeded: [],
  equipmentAvailable: [],
  otherEquipment: '',
  arrivalInstructions: '',
  specialInstructions: '',
  website: ''
}

const coverageTypes = ['Full-day', 'Half-day', 'As needed', 'Recurring', 'Urgent / short notice']

const servicesNeeded = [
  'Tissue Embedding & Orientation',
  'Cryosectioning / Frozen Sections',
  'H&E Staining & Slide Preparation',
  'Special Stains',
  'Complete Laboratory Setup & Takedown',
  'Equipment Support',
  'Temporary Mohs Histology Support',
  'Laboratory Workflow Support'
]

const equipmentAvailable = ['Cryostat', 'Staining setup', 'Microscope', 'Other']

export default function ScheduleForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')
  const submitting = useRef(false)

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function toggleList(field: 'servicesNeeded' | 'equipmentAvailable', value: string) {
    setForm((prev) => {
      const current = prev[field]
      const next = current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
      return { ...prev, [field]: next }
    })
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting.current) return
    submitting.current = true
    setStatus('sending')
    setError('')

    if (!form.servicesNeeded.length) {
      setStatus('error')
      setError('Please select at least one service requested.')
      submitting.current = false
      return
    }

    try {
      const res = await fetch('/api/request-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const result = (await res.json().catch(() => null)) as { message?: string } | null
      if (!res.ok) throw new Error(result?.message || 'Request failed')

      setStatus('sent')
      setForm(initialForm)
    } catch (submissionError) {
      setStatus('error')
      setError(submissionError instanceof Error ? submissionError.message : `We could not submit the request online. Please email ${business.schedulingEmail} and our scheduling team will help.`)
    } finally {
      submitting.current = false
    }
  }

  if (status === 'sent') {
    return (
      <section id="request-service-form" className="rounded-lg border border-green-200 bg-white p-8 shadow-[0_18px_55px_rgba(11,35,69,0.09)] sm:p-10" aria-live="polite">
        <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-green-200 bg-green-50 text-green-700">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m20 6-11 11-5-5" />
          </svg>
        </div>
        <h2 className="mt-6 text-3xl font-black leading-tight text-brand-navy">Thank you</h2>
        <p className="mt-4 text-lg font-semibold leading-8 text-slate-700">Your request has been received. Our scheduling team will review your request and contact you shortly.</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-secondary mt-8">Submit Another Request</button>
      </section>
    )
  }

  return (
    <form id="request-service-form" onSubmit={onSubmit} className="grid gap-8 rounded-lg border border-slate-200/80 bg-white p-7 shadow-[0_18px_55px_rgba(11,35,69,0.09)] sm:p-9">
      <div>
        <p className="eyebrow">Online Service Request</p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy">Request mobile Mohs histology coverage</h2>
        <p className="mt-4 leading-7 text-slate-600">Scanning from a brochure? You&apos;re in the right place. Complete the form below and our scheduling team will follow up.</p>
        <p className="mt-3 text-sm font-bold leading-6 text-slate-500">Scheduling: <a href={`mailto:${business.schedulingEmail}`} className="text-brand-navy transition hover:text-brand-orange">{business.schedulingEmail}</a></p>
      </div>

      <FormSection title="Practice Information">
        <Field label="Practice Name" id="practiceName" value={form.practiceName} onChange={(value) => update('practiceName', value)} required autoComplete="organization" />
      </FormSection>

      <FormSection title="Primary Contact">
        <div className="grid gap-6 md:grid-cols-3">
          <Field label="Contact Name" id="contactName" value={form.contactName} onChange={(value) => update('contactName', value)} required autoComplete="name" />
          <Field label="Contact Email" id="contactEmail" type="email" value={form.contactEmail} onChange={(value) => update('contactEmail', value)} required autoComplete="email" />
          <Field label="Contact Phone" id="contactPhone" type="tel" value={form.contactPhone} onChange={(value) => update('contactPhone', value)} required autoComplete="tel" />
        </div>
      </FormSection>

      <FormSection title="Clinic / Service Location">
        <Field label="Clinic Address" id="clinicAddress" value={form.clinicAddress} onChange={(value) => update('clinicAddress', value)} required autoComplete="street-address" />
        <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_120px_140px]">
          <Field label="City" id="city" value={form.city} onChange={(value) => update('city', value)} required autoComplete="address-level2" />
          <Field label="State" id="state" value={form.state} onChange={(value) => update('state', value)} required autoComplete="address-level1" />
          <Field label="ZIP" id="zip" value={form.zip} onChange={(value) => update('zip', value)} required autoComplete="postal-code" />
        </div>
      </FormSection>

      <FormSection title="Coverage Details">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Requested Coverage Date" id="requestedDate" type="date" value={form.requestedDate} onChange={(value) => update('requestedDate', value)} required />
          <Field label="Backup Date if available" id="backupDate" type="date" value={form.backupDate} onChange={(value) => update('backupDate', value)} />
          <Field label="Mohs Surgeon" id="mohsSurgeon" value={form.mohsSurgeon} onChange={(value) => update('mohsSurgeon', value)} required />
          <Field label="Expected Number of Cases" id="expectedCases" type="number" value={form.expectedCases} onChange={(value) => update('expectedCases', value)} required min="1" placeholder="Example: 8" />
        </div>
        <div className="mt-6">
          <label className="text-sm font-bold text-brand-navy" htmlFor="coverageType">Coverage Type</label>
          <select id="coverageType" value={form.coverageType} onChange={(e) => update('coverageType', e.target.value)} required className="form-field">
            <option value="">Select coverage type</option>
            {coverageTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </FormSection>

      <FormSection title="Services Requested">
        <CheckboxGrid options={servicesNeeded} selected={form.servicesNeeded} onToggle={(value) => toggleList('servicesNeeded', value)} />
      </FormSection>

      <FormSection title="Equipment / Room Details">
        <CheckboxGrid options={equipmentAvailable} selected={form.equipmentAvailable} onToggle={(value) => toggleList('equipmentAvailable', value)} />
        {form.equipmentAvailable.includes('Other') && (
          <div className="mt-6">
            <Field label="Other Equipment" id="otherEquipment" value={form.otherEquipment} onChange={(value) => update('otherEquipment', value)} />
          </div>
        )}
      </FormSection>

      <FormSection title="Workflow Notes / Special Instructions">
        <TextArea label="Arrival Instructions" id="arrivalInstructions" value={form.arrivalInstructions} onChange={(value) => update('arrivalInstructions', value)} placeholder="Parking, suite access, room location, check-in contact, or arrival timing." />
        <div className="mt-6">
          <TextArea label="Special Instructions" id="specialInstructions" value={form.specialInstructions} onChange={(value) => update('specialInstructions', value)} placeholder="Protocols, staining preferences, equipment notes, recurring needs, or other scheduling details." />
        </div>
      </FormSection>

      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="request-website">Website</label>
        <input id="request-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update('website', e.target.value)} />
      </div>

      <div aria-live="assertive" aria-atomic="true">
        {status === 'error' && <p className="rounded-md border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700" role="alert">{error}</p>}
      </div>

      <div className="flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-500">Requests are prepared for delivery to <span className="font-bold text-brand-navy">{business.schedulingEmail}</span>.</p>
        <button type="submit" className="btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Submitting...' : 'Submit Request'}</button>
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

function Field({
  label,
  id,
  value,
  onChange,
  type = 'text',
  required = false,
  autoComplete,
  placeholder,
  min
}: {
  label: string
  id: string
  value: string
  onChange: (value: string) => void
  type?: string
  required?: boolean
  autoComplete?: string
  placeholder?: string
  min?: string
}) {
  return (
    <div>
      <label className="text-sm font-bold text-brand-navy" htmlFor={id}>{label}{required && <span className="text-brand-orange"> *</span>}</label>
      <input id={id} name={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} autoComplete={autoComplete} placeholder={placeholder} min={min} className="form-field" />
    </div>
  )
}

function TextArea({
  label,
  id,
  value,
  onChange,
  placeholder
}: {
  label: string
  id: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
}) {
  return (
    <div>
      <label className="text-sm font-bold text-brand-navy" htmlFor={id}>{label}</label>
      <textarea id={id} name={id} value={value} onChange={(e) => onChange(e.target.value)} rows={5} className="form-field min-h-36" placeholder={placeholder} />
    </div>
  )
}

function CheckboxGrid({
  options,
  selected,
  onToggle
}: {
  options: string[]
  selected: string[]
  onToggle: (value: string) => void
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => (
        <label key={option} className="group flex min-h-14 cursor-pointer items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold leading-5 text-brand-navy shadow-sm transition duration-200 ease-out hover:-translate-y-[2px] hover:border-brand-orange/45 hover:shadow-md">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onToggle(option)}
            className="h-5 w-5 shrink-0 rounded border-slate-300 text-brand-orange focus:ring-brand-orange"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  )
}
