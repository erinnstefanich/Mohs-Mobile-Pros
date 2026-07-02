export const metadata = {
  title: 'Temporary Staffing — Mohs Mobile Pros',
  description: 'Flexible temporary staffing solutions including per-case coverage, short-term placements, and scheduled weekly coverage for histotechnicians.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function TemporaryStaffing(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Temporary Staffing</h1>
          <p className="text-slate-700 mb-4">Mohs Mobile Pros provides certified histotechnicians for short-term engagements to maintain continuity of onsite histology services. Our staffing options are customizable to your facility’s schedule and case volume.</p>

          <h2 className="text-xl font-semibold text-brand-navy mt-6 mb-2">Engagement options</h2>
          <ul className="list-disc list-inside text-slate-700 mb-4">
            <li>Per-case coverage</li>
            <li>Daily or multi-day placements</li>
            <li>Weekly scheduled coverage</li>
          </ul>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
