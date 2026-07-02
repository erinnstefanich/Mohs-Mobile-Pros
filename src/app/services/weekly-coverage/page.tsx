export const metadata = {
  title: 'Weekly Coverage — Mohs Mobile Pros',
  description: 'Scheduled weekly coverage to support recurring procedural blocks with consistent onsite histology staffing.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function WeeklyCoverage(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Weekly Coverage</h1>
          <p className="text-slate-700 mb-4">Our weekly coverage option provides consistent, scheduled histotechnician presence for recurring Mohs clinic days or procedural blocks, improving efficiency and continuity of care.</p>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
