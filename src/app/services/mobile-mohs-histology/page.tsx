export const metadata = {
  title: 'Mobile Mohs Histology — Mohs Mobile Pros',
  description: 'Comprehensive mobile Mohs histology services: onsite frozen sections, specimen handling, and diagnostic-quality slide preparation to support Mohs surgery.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function MobileMohs(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Mobile Mohs Histology</h1>
          <p className="text-slate-700 mb-4">Mohs Mobile Pros provides end-to-end onsite histology services designed specifically for Mohs micrographic surgery. Our histotechnicians are experienced in rapid frozen section workflows and deliver pathology-ready slides that enable timely intraoperative margin assessment.</p>

          <h2 className="text-xl font-semibold text-brand-navy mt-6 mb-2">What we provide</h2>
          <ul className="list-disc list-inside text-slate-700 mb-4">
            <li>Portable cryostat setup and sterile workflow integration</li>
            <li>Specimen accessioning and labeling per facility protocols</li>
            <li>Rapid frozen sectioning and H&amp;E staining</li>
            <li>Clear communication with surgical teams and pathologists</li>
          </ul>

          <h2 className="text-xl font-semibold text-brand-navy mt-4 mb-2">Clinical benefits</h2>
          <p className="text-slate-700 mb-6">Our mobile Mohs histology services reduce patient transfers, shorten case times, and support precise margin control. We tailor procedures to the surgeon’s preferences and maintain rigorous quality controls.</p>

          <Button asLink className="btn-primary" onClick={() => { /* noop for server-side */ }}>
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
