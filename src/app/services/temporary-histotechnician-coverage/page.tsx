export const metadata = {
  title: 'Temporary Histotechnician Coverage — Mohs Mobile Pros',
  description: 'Short-term histotechnician staffing and per-case coverage to maintain continuity of onsite histology services for surgical teams.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function Coverage(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Temporary Histotechnician Coverage</h1>
          <p className="text-slate-700 mb-4">Mohs Mobile Pros offers flexible staffing solutions to cover leaves, recruitment gaps, or unexpected staffing shortages. We supply certified histotechnicians who integrate with your workflows and maintain documentation and quality controls.</p>

          <h2 className="text-xl font-semibold text-brand-navy mt-4 mb-2">Engagement models</h2>
          <ul className="list-disc list-inside text-slate-700 mb-4">
            <li>Per-case coverage for single procedures</li>
            <li>Daily coverage for scheduled blocks</li>
            <li>Multi-day or recurring placements for program continuity</li>
          </ul>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
