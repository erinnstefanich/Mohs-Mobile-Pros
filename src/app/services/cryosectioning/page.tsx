export const metadata = {
  title: 'Cryosectioning — Mohs Mobile Pros',
  description: 'Expert cryosectioning services for intraoperative analysis. Precision tissue sectioning and quality control to support rapid diagnoses.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function Cryosectioning(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Cryosectioning</h1>
          <p className="text-slate-700 mb-4">Cryosectioning requires technical skill, high-quality equipment, and strict temperature control. Our technicians perform rapid, reproducible cryosections to provide pathologists with interpretable tissue morphology for intraoperative decisions.</p>

          <h2 className="text-xl font-semibold text-brand-navy mt-6 mb-2">Key capabilities</h2>
          <ul className="list-disc list-inside text-slate-700 mb-4">
            <li>Experienced cryostat operation and maintenance</li>
            <li>Optimized section thickness and orientation for Mohs specimens</li>
            <li>Temperature and reagent controls to preserve morphology</li>
          </ul>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
