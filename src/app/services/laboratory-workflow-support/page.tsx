export const metadata = {
  title: 'Laboratory Workflow Support — Mohs Mobile Pros',
  description: 'Operational consulting and laboratory workflow support to optimize specimen handling, labeling, and throughput for onsite histology services.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function Workflow(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Laboratory Workflow Support</h1>
          <p className="text-slate-700 mb-4">We provide onsite consulting to optimize specimen flow, labeling practices, and laboratory throughput. Our team helps design processes that reduce errors, improve turnaround, and align with regulatory expectations.</p>

          <h2 className="text-xl font-semibold text-brand-navy mt-4 mb-2">Consulting engagements</h2>
          <p className="text-slate-700 mb-4">Engagements include in-person workflow assessments, staff training, reagent/supply recommendations, and SOP documentation tailored to your facility.</p>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
