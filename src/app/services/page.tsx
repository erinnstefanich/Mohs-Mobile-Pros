export const metadata = {
  title: 'Services — Mohs Mobile Pros',
  description: 'Overview of mobile histology services offered by Mohs Mobile Pros, including cryosectioning, H&E staining, tissue embedding, and laboratory workflow support.'
}

import Section from '../../components/Section'
import Card from '../../components/Card'
import Link from 'next/link'

const SERVICES = [
  { slug: 'mobile-mohs-histology', title: 'Mobile Mohs Histology' },
  { slug: 'cryosectioning', title: 'Cryosectioning' },
  { slug: 'frozen-section-preparation', title: 'Frozen Section Preparation' },
  { slug: 'h-and-e-staining', title: 'H&E Staining' },
  { slug: 'special-stains', title: 'Special Stains' },
  { slug: 'tissue-embedding', title: 'Tissue Embedding' },
  { slug: 'temporary-histotechnician-coverage', title: 'Temporary Histotechnician Coverage' },
  { slug: 'laboratory-workflow-support', title: 'Laboratory Workflow Support' }
]

export default function Services() {
  return (
    <main>
      <Section>
        <div>
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Our Services</h1>
          <p className="text-slate-700 mb-6">Mohs Mobile Pros provides a comprehensive suite of onsite histology services optimized for Mohs surgery and intraoperative needs. Click a service to read detailed capabilities and clinical considerations.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(s => (
              <Card key={s.slug}>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">{s.title}</h3>
                <p className="text-slate-600 mb-4">Professional onsite support tailored to surgical workflows.</p>
                <Link href={`/services/${s.slug}`} className="text-brand-navy font-medium underline">Learn more</Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}
