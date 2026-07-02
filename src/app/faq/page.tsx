export const metadata = {
  title: 'FAQ — Mohs Mobile Pros',
  description: 'Frequently asked questions about Mohs Mobile Pros services, scheduling, and clinical workflows.'
}

import Section from '../components/Section'
import Accordion from '../components/Accordion'

const FAQS = [
  { q: 'What turnaround time can we expect for frozen sections?', a: 'Typical onsite frozen section turnaround is 15–30 minutes from specimen receipt to slide return, depending on case complexity and clinic logistics. We design workflows to support efficient intraoperative decision-making.' },
  { q: 'Do you provide staffing for single cases or multi-day engagements?', a: 'We provide flexible coverage — single-case support, per-day scheduling, and multi-day or ongoing engagements. Temporary histotechnician placements are available to cover staffing gaps.' },
  { q: 'What supplies do we need to provide?', a: 'Mohs Mobile Pros brings core processing equipment and consumables. Facilities typically provide workspace, access to utilities, and specimen labeling per our checklist. We coordinate details during scheduling.' },
  { q: 'Can you perform special stains onsite?', a: 'Yes. We offer a selection of special stains when clinically indicated. For advanced or panel testing, we coordinate referral to partner labs as needed.' },
  { q: 'How do you handle quality assurance?', a: 'We follow validated SOPs, run controls on staining, and maintain documentation of reagent changes and equipment maintenance. Our staff are trained to follow strict chain-of-custody and labeling protocols.' },
  { q: 'Do you handle patient records or PHI?', a: 'We do not retain health records in the website; clinical PHI handled during service delivery follows agreed SOPs and secure transfer methods. For PHI handling, we will discuss appropriate agreements and secure workflows.' }
]

export default function FAQPage(){
  return (
    <main>
      <Section>
        <div>
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-700 mb-6">Answers to common questions about our services and operations.</p>

          <Accordion items={FAQS} />
        </div>
      </Section>
    </main>
  )
}
