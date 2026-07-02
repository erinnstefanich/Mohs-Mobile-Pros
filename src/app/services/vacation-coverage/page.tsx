export const metadata = {
  title: 'Vacation Coverage — Mohs Mobile Pros',
  description: 'Vacation coverage services to provide reliable short-term histotechnician coverage while your staff are away.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function VacationCoverage(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Vacation Coverage</h1>
          <p className="text-slate-700 mb-4">Our vacation coverage service supplies trained histotechnicians to cover planned staff absences. We coordinate schedules and ensure consistent adherence to your facility protocols.</p>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
