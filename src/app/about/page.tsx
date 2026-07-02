export const metadata = {
  title: 'About — Mohs Mobile Pros',
  description: 'Mohs Mobile Pros provides mobile Mohs histology and intraoperative frozen section services across Washington, Oregon, and Idaho. Learn about our team, mission, and commitment to clinical excellence.'
}

import Section from '../../components/Section'

export default function About() {
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">About Mohs Mobile Pros</h1>
          <p className="text-slate-700 mb-4">Mohs Mobile Pros is dedicated to delivering reliable, high‑quality mobile histology services that integrate seamlessly with surgical workflows. We partner with dermatologic surgeons, ambulatory surgery centers, and regional hospitals to provide onsite frozen section preparation, H&amp;E staining, special stains, tissue embedding, and temporary histotechnician coverage.</p>
          <p className="text-slate-700 mb-4">Our team is composed of certified histotechnicians and laboratory professionals who follow standardized, audited protocols to ensure diagnostic integrity and rapid turnaround. We prioritize patient safety, clear communication with clinical teams, and operational reliability.</p>
          <p className="text-slate-700">For inquiries about partnerships, staffing, or service design, contact us at <a href="mailto:info@mohsmobilepros.com" className="underline">info@mohsmobilepros.com</a> or call <a href="tel:3606061030" className="underline">360‑606‑1030</a>.</p>
        </div>
      </Section>
    </main>
  )
}
