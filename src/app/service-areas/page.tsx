export const metadata = {
  title: 'Service Areas — Mohs Mobile Pros',
  description: 'Mohs Mobile Pros serves Washington, Oregon, and Idaho with mobile histology services and temporary histotechnician coverage.'
}

import Section from '../components/Section'

export default function ServiceAreasPage(){
  return (
    <main>
      <Section>
        <div>
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Service Areas</h1>
          <p className="text-slate-700 mb-6">Mohs Mobile Pros provides scheduled and on‑demand mobile histology services throughout the Pacific Northwest. Our current service footprint includes:</p>

          <ul className="list-disc list-inside text-slate-700 mb-6">
            <li>Washington</li>
            <li>Oregon</li>
            <li>Idaho</li>
          </ul>

          <p className="text-slate-700">If your facility is outside these areas, contact us at <a href="mailto:info@mohsmobilepros.com" className="underline">info@mohsmobilepros.com</a> to discuss potential coverage or scheduled outreach.</p>
        </div>
      </Section>
    </main>
  )
}
