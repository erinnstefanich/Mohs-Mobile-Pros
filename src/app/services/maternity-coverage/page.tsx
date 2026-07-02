export const metadata = {
  title: 'Maternity Coverage — Mohs Mobile Pros',
  description: 'Maternity coverage solutions that ensure uninterrupted histology services during staff parental leave periods.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function MaternityCoverage(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Maternity Coverage</h1>
          <p className="text-slate-700 mb-4">We provide reliable maternity coverage with vetted technologists who follow your SOPs and maintain documentation to ensure seamless transitions before, during, and after leave periods.</p>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
