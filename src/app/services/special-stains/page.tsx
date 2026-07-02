export const metadata = {
  title: 'Special Stains — Mohs Mobile Pros',
  description: 'Onsite special staining options to support diagnostic needs. We offer a select panel of special stains and coordinate referrals for advanced testing.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function SpecialStains(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Special Stains</h1>
          <p className="text-slate-700 mb-4">When indicated, we perform a range of special stains onsite to assist with diagnostic interpretation. For specialized panels or immunohistochemistry beyond the scope of onsite processing, we coordinate referral to partner laboratories.</p>

          <h2 className="text-xl font-semibold text-brand-navy mt-6 mb-2">Available stains</h2>
          <p className="text-slate-700 mb-4">Common special stains are offered on a case-by-case basis; please consult with our scheduling team to confirm availability and turnaround expectations.</p>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
