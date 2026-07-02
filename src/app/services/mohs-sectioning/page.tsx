export const metadata = {
  title: 'Mohs Sectioning — Mohs Mobile Pros',
  description: 'Onsite Mohs sectioning services to support intraoperative margin assessment with high-quality frozen sections and specimen handling.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function MohsSectioning(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Mohs Sectioning</h1>
          <p className="text-slate-700 mb-4">Our Mohs sectioning services focus on producing clear, reproducible frozen sections that support immediate intraoperative pathology review. We use standardized orientation and sectioning techniques to ensure diagnostic-quality slides.</p>

          <h2 className="text-xl font-semibold text-brand-navy mt-6 mb-2">Capabilities</h2>
          <ul className="list-disc list-inside text-slate-700 mb-4">
            <li>Specimen orientation and margin mapping</li>
            <li>Precision frozen sectioning optimized for Mohs specimens</li>
            <li>Rapid hand-off of slides to the surgical team</li>
          </ul>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
