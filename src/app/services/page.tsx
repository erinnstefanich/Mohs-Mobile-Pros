export const metadata = {
  title: 'Services — Mohs Mobile Pros',
  description: 'Overview of Mohs Mobile Pros services including Mohs Sectioning, H&E staining, special stains, staffing, cryostat setup, and laboratory support.'
}

import Section from '../../components/Section'
import Card from '../../components/Card'
import Link from 'next/link'

const SERVICES = [
  { slug: 'mohs-sectioning', title: 'Mohs Sectioning' },
  { slug: 'h-and-e-staining', title: 'H&E Staining' },
  { slug: 'special-stains', title: 'Special Stains' },
  { slug: 'temporary-staffing', title: 'Temporary Staffing' },
  { slug: 'vacation-coverage', title: 'Vacation Coverage' },
  { slug: 'maternity-coverage', title: 'Maternity Coverage' },
  { slug: 'weekly-coverage', title: 'Weekly Coverage' },
  { slug: 'cryostat-setup', title: 'Cryostat Setup' },
  { slug: 'laboratory-workflow-support', title: 'Laboratory Workflow Support' }
]

export default function Services() {
  return (
    <main>
      <Section>
        <div>
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Our Services</h1>
          <p className="text-slate-700 mb-6">Mohs Mobile Pros provides an integrated suite of onsite histology services designed to support Mohs surgery and intraoperative decision-making. Click a service to view details and scheduling guidance.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <Card key={s.slug}>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">{s.title}</h3>
                <p className="text-slate-600 mb-4">Expert onsite support tailored to clinical workflows and surgical timelines.</p>
                <Link href={`/services/${s.slug}`} className="text-brand-navy font-medium underline">Learn more</Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}
