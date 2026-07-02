export const metadata = {
  title: 'Practice Managers — Mohs Mobile Pros',
  description: 'Resources and services tailored for practice managers, including scheduling, temporary coverage, and workflow optimization for Mohs histology.'
}

import Section from '../../components/Section'
import Card from '../../components/Card'

export default function PracticeManagers(){
  const items = [
    { title: 'Scheduling & Coordination', desc: 'A single scheduling point of contact and clear case confirmations to reduce administrative burden.' },
    { title: 'Staffing Flexibility', desc: 'Short‑term and per‑case staffing options to maintain service continuity.' },
    { title: 'Operational Guidance', desc: 'Workflow review and SOP development to align onsite histology with your practice operations.' }
  ]

  return (
    <main>
      <Section>
        <div>
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Practice Managers</h1>
          <p className="text-slate-700 mb-6">We understand the operational demands of running a surgical practice. Our services are structured to reduce burden on practice staff while maintaining high clinical standards.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {items.map(i => (
              <Card key={i.title}>
                <h3 className="font-semibold text-brand-navy mb-2">{i.title}</h3>
                <p className="text-slate-600">{i.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}
