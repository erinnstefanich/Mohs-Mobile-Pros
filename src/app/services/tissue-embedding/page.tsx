export const metadata = {
  title: 'Tissue Embedding — Mohs Mobile Pros',
  description: 'Accurate tissue embedding services to ensure proper orientation and reproducible sectioning for diagnostic evaluation.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function Embedding(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Tissue Embedding</h1>
          <p className="text-slate-700 mb-4">Proper embedding is essential for reproducible sectioning and accurate interpretation. Our technicians embed tissue using facility-aligned orientation practices and document specimen orientation for downstream correlation.</p>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
