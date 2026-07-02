export const metadata = {
  title: 'Resources — Mohs Mobile Pros',
  description: 'Operational guides, specimen handling checklists, and scheduling information to support clinical teams preparing for onsite Mohs histology services.'
}

import Section from '../components/Section'
import Card from '../components/Card'

export default function ResourcesPage(){
  return (
    <main>
      <Section>
        <div>
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Resources</h1>
          <p className="text-slate-700 mb-6">Access practical materials to prepare for Mohs cases, including specimen labeling checklists, room setup guidance, and scheduling forms.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold text-brand-navy mb-2">Specimen Handling Checklist</h3>
              <p className="text-slate-600 mb-2">A brief checklist covering labeling, transport, and documentation recommended for Mohs procedures.</p>
              <a href="/resources/specimen-checklist.pdf" className="text-brand-navy underline">Download</a>
            </Card>

            <Card>
              <h3 className="font-semibold text-brand-navy mb-2">Scheduling Guide</h3>
              <p className="text-slate-600 mb-2">Information on lead times, case volumes, and on-site requirements to streamline booking with our team.</p>
              <a href="mailto:schedule@mohsmobilepros.com" className="text-brand-navy underline">Request guide</a>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  )
}
