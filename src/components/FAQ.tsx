'use client'

import { ReactNode, useState } from 'react'
import BrochureIcon from './BrochureIcon'
import { business } from '../lib/site'

type FAQItem = {
  q: string
  a: ReactNode
}

const approvedFaqs: FAQItem[] = [
  {
    q: 'What areas do you serve?',
    a: (
      <div className="space-y-4">
        <p>Mohs Mobile Pros proudly serves dermatology practices throughout:</p>
        <BulletList items={['Vancouver-Portland metropolitan area', 'Greater Pacific Northwest (coverage available by request)']} />
      </div>
    )
  },
  {
    q: 'What Mohs histology services do you provide?',
    a: (
      <div className="space-y-4">
        <p>Mohs Mobile Pros provides experienced, on-site histology support designed to integrate seamlessly into your existing laboratory workflow.</p>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.12em] text-brand-navy">Our services include:</h3>
          <BulletList
            items={[
              'Tissue Embedding & Orientation',
              'Cryosectioning / Frozen Sections',
              'H&E Staining & Slide Preparation',
              'Special Stains (as needed)',
              'Laboratory Workflow Support',
              'Temporary Mohs Histology Support'
            ]}
          />
        </div>
      </div>
    )
  },
  {
    q: 'What service options are available?',
    a: (
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-5">
          <h3 className="text-base font-black text-brand-navy">Complete Mobile Mohs Histology Laboratory</h3>
          <p className="mt-3">Mohs Mobile Pros provides:</p>
          <BulletList items={['Leica CM1860 Cryostat', 'Staining equipment', 'Laboratory supplies', 'Experienced Mohs technician']} />
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-5">
          <h3 className="text-base font-black text-brand-navy">On-Site Mohs Technician Support</h3>
          <p className="mt-3">Your practice provides:</p>
          <BulletList items={['Cryostat', 'Staining equipment', 'Laboratory supplies']} />
          <p className="mt-5">Mohs Mobile Pros provides:</p>
          <BulletList items={['Experienced Mohs technician', 'Professional laboratory support', 'Workflow integration with your clinical team']} />
        </div>
      </div>
    )
  },
  {
    q: 'How do you ensure technician competency and quality?',
    a: (
      <div className="space-y-4">
        <p>Every Mohs Mobile Pros technician:</p>
        <BulletList
          items={[
            'Completes a formal Mohs histology training program',
            'Demonstrates documented competency before independent practice',
            'Completes annual competency assessments',
            'Follows standardized operating procedures',
            'Participates in ongoing quality monitoring'
          ]}
        />
        <p>Senior Mohs histology leadership includes experienced ASCP-certified Histotechnicians (HT) and Histotechnologists (HTL) with extensive clinical and research histology experience.</p>
      </div>
    )
  },
  {
    q: 'Can you provide temporary or recurring coverage?',
    a: (
      <div className="space-y-4">
        <p>Yes.</p>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.12em] text-brand-navy">Coverage includes:</h3>
          <BulletList items={['Vacation coverage', 'Laboratory coverage gaps', 'Increased surgical volume', 'Temporary transitions', 'Recurring clinic support']} />
        </div>
        <p>Our goal is to maintain uninterrupted laboratory operations while supporting continuity of patient care.</p>
      </div>
    )
  },
  {
    q: 'How do we request service?',
    a: (
      <div className="space-y-4">
        <p>Complete the online <a href="/request-service" className="font-bold text-brand-navy transition hover:text-brand-orange">Request Service form</a> or contact our scheduling team directly at <a href={`mailto:${business.schedulingEmail}`} className="font-bold text-brand-navy transition hover:text-brand-orange">{business.schedulingEmail}</a>.</p>
        <p>After submission, our team reviews your request, confirms availability, and coordinates service details with your practice.</p>
      </div>
    )
  },
  {
    q: 'What information should we have ready?',
    a: (
      <div className="space-y-4">
        <p>To help us schedule coverage efficiently, please provide:</p>
        <BulletList
          items={[
            'Practice name',
            'Practice location',
            'Requested service date(s)',
            'Estimated Mohs case volume',
            'Requested services',
            'Equipment availability',
            'Workflow requirements',
            'Practice-specific protocols or special instructions'
          ]}
        />
      </div>
    )
  }
]

type FAQProps = {
  limit?: number
}

export default function FAQ({ limit }: FAQProps) {
  const items = typeof limit === 'number' ? approvedFaqs.slice(0, limit) : approvedFaqs
  const [open, setOpen] = useState(0)

  return (
    <section className="section-pad bg-white">
      <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-heading mt-3">Answers for practice leaders and clinical teams</h2>
          <p className="mt-5 leading-8 text-slate-600">Clear details before service day help every clinic run with less friction.</p>
        </div>
        <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white shadow-[0_16px_45px_rgba(11,35,69,0.08)]">
          {items.map((item, index) => (
            <div key={item.q}>
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold text-brand-navy transition hover:bg-brand-gray sm:px-7">
                <span>{item.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-orange/10 text-brand-orange">{open === index ? '-' : '+'}</span>
              </button>
              {open === index && <div className="px-5 pb-6 leading-7 text-slate-600 sm:px-7">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 grid gap-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="relative mt-1.5 grid h-4 w-4 shrink-0 place-items-center">
            <BrochureIcon name="check-outline" size="compact" className="absolute max-w-none" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
