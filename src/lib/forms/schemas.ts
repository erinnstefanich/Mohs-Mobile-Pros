import { z } from 'zod'

export const coverageTypes = ['Full-day', 'Half-day', 'As needed', 'Recurring', 'Urgent / short notice'] as const

export const serviceOptions = [
  'Tissue Embedding & Orientation',
  'Cryosectioning / Frozen Sections',
  'H&E Staining & Slide Preparation',
  'Special Stains',
  'Complete Laboratory Setup & Takedown',
  'Equipment Support',
  'Temporary Mohs Histology Support',
  'Laboratory Workflow Support'
] as const

export const equipmentOptions = ['Cryostat', 'Staining setup', 'Microscope', 'Other'] as const

export const travelOptions = ['Yes', 'No', 'Open to discussion'] as const

export const workArrangementOptions = [
  'Full-time',
  'Part-time',
  'PRN',
  'Recurring clinic-day support',
  'Entry-level training opportunity',
  'Future opportunities'
] as const

const cleanText = (value: string) =>
  value
    .normalize('NFKC')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()

const text = (label: string, min: number, max: number) =>
  z.string().transform(cleanText).pipe(z.string().min(min, `${label} is required.`).max(max, `${label} is too long.`))

const optionalText = (label: string, max: number) =>
  z.string().transform(cleanText).pipe(z.string().max(max, `${label} is too long.`)).default('')

const email = z
  .string()
  .transform((value) => cleanText(value).toLowerCase())
  .pipe(z.string().email('Enter a valid email address.').max(254, 'Email address is too long.'))

const phone = z
  .string()
  .transform(cleanText)
  .pipe(z.string().min(7, 'Enter a valid phone number.').max(30, 'Phone number is too long.'))
  .refine((value) => /^[+()0-9.\-\s]+$/.test(value), 'Enter a valid phone number.')
  .refine((value) => {
    const digits = value.replace(/\D/g, '')
    return digits.length >= 7 && digits.length <= 15
  }, 'Enter a valid phone number.')

const isoDate = (required: boolean) => {
  const base = z.string().transform(cleanText)
  return base.refine((value) => {
    if (!value && !required) return true
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
    const date = new Date(`${value}T00:00:00Z`)
    return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
  }, 'Enter a valid date.')
}

const uniqueEnumArray = <T extends readonly [string, ...string[]]>(values: T, label: string, min = 0) =>
  z
    .array(z.enum(values))
    .min(min, min ? `Select at least one ${label}.` : undefined)
    .max(values.length)
    .refine((items) => new Set(items).size === items.length, `Duplicate ${label} selections are not allowed.`)

const honeypot = z.string().max(200).default('')

export const contactSchema = z
  .object({
    name: text('Name', 2, 100),
    email,
    practice: optionalText('Practice name', 150),
    message: text('Message', 10, 4000),
    website: honeypot
  })
  .strict()

export const requestServiceSchema = z
  .object({
    practiceName: text('Practice name', 2, 150),
    contactName: text('Contact name', 2, 100),
    contactEmail: email,
    contactPhone: phone,
    clinicAddress: text('Clinic address', 5, 200),
    city: text('City', 2, 100),
    state: text('State', 2, 40).refine((value) => /^[A-Za-z .'-]+$/.test(value), 'Enter a valid state.'),
    zip: text('ZIP code', 5, 10).refine((value) => /^\d{5}(?:-\d{4})?$/.test(value), 'Enter a valid ZIP code.'),
    requestedDate: isoDate(true),
    backupDate: isoDate(false).default(''),
    mohsSurgeon: text('Mohs surgeon', 2, 120),
    expectedCases: z
      .string()
      .transform(cleanText)
      .refine((value) => /^\d{1,3}$/.test(value) && Number(value) >= 1 && Number(value) <= 250, 'Expected cases must be between 1 and 250.'),
    coverageType: z.enum(coverageTypes),
    servicesNeeded: uniqueEnumArray(serviceOptions, 'service', 1),
    equipmentAvailable: uniqueEnumArray(equipmentOptions, 'equipment').default([]),
    otherEquipment: optionalText('Other equipment', 300),
    arrivalInstructions: optionalText('Arrival instructions', 2000),
    specialInstructions: optionalText('Special instructions', 4000),
    website: honeypot
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.equipmentAvailable.includes('Other') && !data.otherEquipment) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['otherEquipment'], message: 'Describe the other equipment.' })
    }
  })

export const careersSchema = z
  .object({
    fullName: text('Full name', 2, 100),
    email,
    phone,
    cityState: text('City and state', 2, 120),
    currentRole: text('Current role', 2, 120),
    yearsExperience: text('Years of experience', 1, 80),
    mohsExperience: text('Mohs experience', 2, 500),
    certifications: optionalText('Certifications', 300),
    availability: text('Availability', 2, 500),
    willingnessToTravel: z.enum(travelOptions),
    workArrangements: uniqueEnumArray(workArrangementOptions, 'work arrangement', 1),
    message: optionalText('Message', 4000),
    website: honeypot
  })
  .strict()

export type ContactPayload = z.infer<typeof contactSchema>
export type RequestServicePayload = z.infer<typeof requestServiceSchema>
export type CareersPayload = z.infer<typeof careersSchema>
