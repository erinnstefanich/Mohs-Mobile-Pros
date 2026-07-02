import Card from './Card'

const SERVICES = [
  { title: 'Mobile Mohs Histology', desc: 'Comprehensive onsite histology services tailored for Mohs surgery, with pathology-ready frozen sections.' },
  { title: 'Cryosectioning', desc: 'Expert cryosection preparation for rapid intraoperative analysis.' },
  { title: 'Frozen Section Preparation', desc: 'Timely, standardized frozen section workflows to support surgical margins assessment.' },
  { title: 'H&E Staining', desc: 'High-quality hematoxylin and eosin staining for clear histologic interpretation.' },
  { title: 'Special Stains', desc: 'A range of special stains available to assist diagnostic needs when indicated.' },
  { title: 'Tissue Embedding', desc: 'Accurate tissue embedding for reliable sectioning and downstream analysis.' },
  { title: 'Temporary Histotechnician Coverage', desc: 'Short-term placements and per-case coverage to maintain continuity of care during staffing gaps.' },
  { title: 'Laboratory Workflow Support', desc: 'Onsite consulting to optimize specimen handling, labeling, and laboratory throughput.' }
]

export default function ServicesOverview(){
  return (
    <section aria-labelledby="services-overview">
      <h2 id="services-overview" className="text-3xl font-semibold text-brand-navy mb-6">Services Overview</h2>
      <p className="text-slate-700 mb-8">A full suite of mobile histology services designed specifically to support Mohs surgeons and surgical teams in the operating environment.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((s) => (
          <Card key={s.title}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {/* circular icon in brochure style */}
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-brand-navy text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2v20" stroke="#F47A20" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M2 12h20" stroke="#F47A20" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-navy">{s.title}</h3>
                <p className="text-slate-600 mt-1">{s.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
