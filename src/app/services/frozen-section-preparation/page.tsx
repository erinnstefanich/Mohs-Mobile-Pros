export const metadata = {
  title: 'Frozen Section Preparation — Mohs Mobile Pros',
  description: 'Timely frozen section preparation to support intraoperative pathology review. Reliable slide preparation and handling for Mohs surgery.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function FrozenSection(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Frozen Section Preparation</h1>
          <p className="text-slate-700 mb-4">Our frozen section preparation includes standardized specimen orientation, rapid sectioning, mounting, and staining to provide pathologists with diagnostic-quality slides during operative care.</p>

          <h2 className="text-xl font-semibold text-brand-navy mt-6 mb-2">Turnaround & quality</h2>
          <p className="text-slate-700 mb-4">We design workflows to deliver consistent turnaround times while preserving tissue architecture for diagnostic interpretation. Communication between our technician and the surgical team is prioritized to streamline case flow.</p>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
