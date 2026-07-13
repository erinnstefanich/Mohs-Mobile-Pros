'use client'

import { ReactNode, useState } from 'react'

type FAQItem = {
  q: string
  a: ReactNode
}

const approvedFaqSections: { title: string; items: FAQItem[] }[] = [
  {
    title: 'Services and Workflow',
    items: [
      {
        q: 'What services does Mohs Mobile Pros provide?',
        a: 'Mohs Mobile Pros provides mobile Mohs histology services including tissue embedding and orientation, cryosectioning, frozen section preparation, H&E staining, special stains as requested, and technical laboratory support directly within your dermatology practice.'
      },
      {
        q: 'Who interprets the slides?',
        a: 'The Mohs surgeon interprets the stained slides and determines whether additional stages are required. Our role is to provide high-quality histologic preparation that supports accurate surgical decision-making.'
      },
      {
        q: 'Do you bring your own equipment and supplies?',
        a: 'Yes. We can provide a cryostat, staining equipment, laboratory supplies, and experienced Mohs technicians, or work with equipment and supplies already available in your practice. The service model is tailored to your laboratory needs.'
      },
      {
        q: 'How quickly are slides prepared?',
        a: 'Turnaround times depend on specimen complexity, case volume, and surgeon preferences. Our workflow is designed to provide prompt, efficient processing while maintaining high standards of tissue quality.'
      },
      {
        q: 'Why is specimen handling so important?',
        a: 'Every tissue specimen comes from an individual patient and is irreplaceable. Proper orientation, embedding, cryosectioning, and staining are essential to producing high-quality slides that surgeons can confidently interpret.'
      },
      {
        q: 'How do you ensure tissue quality?',
        a: 'Every specimen is treated as irreplaceable. Our process emphasizes careful orientation, precise embedding, meticulous cryosectioning, consistent H&E staining, standardized operating procedures, documented competency assessments, and ongoing quality oversight. High-quality slide preparation supports the surgeon’s ability to evaluate surgical margins with confidence.'
      }
    ]
  },
  {
    title: 'Training and Compliance',
    items: [
      {
        q: 'Are your technicians professionally trained?',
        a: 'Yes. Mohs technicians complete a formal training program supported by standardized operating procedures, documented competency assessments, and an ongoing quality assurance plan. Training and oversight are provided by experienced ASCP-certified Histotechnicians (HT) and Histotechnologists (HTL).'
      },
      {
        q: 'Do you work under our CLIA certification?',
        a: 'When appropriate, services may be performed under the clinic’s existing CLIA certificate and laboratory policies. Specific regulatory and operational requirements are reviewed with each practice before services begin.'
      },
      {
        q: 'What experience does Mohs Mobile Pros bring?',
        a: 'Mohs Mobile Pros is locally owned and operated and backed by more than 20 years of clinical pathology laboratory experience, including histopathology techniques, Mohs workflows, quality systems, regulatory compliance, laboratory operations, and leadership.'
      }
    ]
  },
  {
    title: 'Coverage and Scheduling',
    items: [
      {
        q: 'What areas do you serve?',
        a: 'Mohs Mobile Pros serves the Portland Metropolitan Area and provides coverage throughout the Greater Pacific Northwest by request. Regional service is coordinated based on scheduling, travel planning, and clinic logistics.'
      },
      {
        q: 'Can you provide temporary coverage?',
        a: 'Yes. We can provide planned coverage for vacation, leave, temporary laboratory needs, recurring clinic days, and periods of increased surgical volume. Support is coordinated around the practice’s workflow and service requirements.'
      },
      {
        q: 'Why choose Mohs Mobile Pros instead of hiring a full-time technician?',
        a: 'Many Mohs practices perform surgery only one or two days each week. Mobile services provide experienced Mohs histology support when needed without the ongoing expense of maintaining a full-time employee.'
      },
      {
        q: 'How do I get started?',
        a: 'Contact Mohs Mobile Pros to discuss your practice’s workflow, scheduling needs, equipment, and operational requirements. You may also submit the online Request Service form to begin the conversation. We will develop a service plan tailored to your Mohs laboratory needs.'
      }
    ]
  }
]

const approvedFaqs = approvedFaqSections.flatMap((section) => section.items)

type FAQProps = {
  limit?: number
}

export default function FAQ({ limit }: FAQProps) {
  const items = typeof limit === 'number' ? approvedFaqs.slice(0, limit) : approvedFaqs
  const [open, setOpen] = useState(-1)

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
