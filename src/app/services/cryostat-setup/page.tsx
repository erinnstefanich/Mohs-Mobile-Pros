export const metadata = {
  title: 'Cryostat Setup — Mohs Mobile Pros',
  description: 'Portable cryostat setup and onsite equipment support to enable immediate frozen section processing in the operating suite.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function CryostatSetup(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Cryostat Setup</h1>
          <p className="text-slate-700 mb-4">We provide portable cryostat setup, maintenance checks, and supplies to enable onsite frozen section processing. Our technicians ensure the cryostat is calibrated and integrated into the sterile workflow.</p>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
