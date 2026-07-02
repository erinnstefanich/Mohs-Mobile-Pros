export const metadata = {
  title: 'Request Service — Mohs Mobile Pros',
  description: 'Request scheduling or service information from Mohs Mobile Pros. Provide basic case and facility details and our scheduling team will respond promptly.'
}

import Section from '../components/Section'

export default function RequestService(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Request Service</h1>
          <p className="text-slate-700 mb-6">To request onsite Mohs histology, temporary coverage, or workflow consulting, email our scheduling team at <a href="mailto:schedule@mohsmobilepros.com" className="underline">schedule@mohsmobilepros.com</a> or call <a href="tel:3606061030" className="underline">360‑606‑1030</a>.</p>

          <p className="text-slate-700 mb-4">Please include proposed dates, facility name and location, expected case volume, and a brief description of the services requested. A scheduler will confirm availability and provide next steps.</p>
        </div>
      </Section>
    </main>
  )
}
