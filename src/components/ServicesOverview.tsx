import Card from './Card'

const SERVICES = [
  { title: 'Mobile Mohs Histology', desc: 'Comprehensive onsite histology services tailored for Mohs surgery, with pathology-ready frozen sections.', icon: '/icons/mohs.svg' },
  { title: 'Cryosectioning', desc: 'Expert cryosection preparation for rapid intraoperative analysis.', icon: '/icons/cryosection.svg' },
  { title: 'Frozen Section Preparation', desc: 'Timely, standardized frozen section workflows to support surgical margins assessment.', icon: '/icons/cryosection.svg' },
  { title: 'H&E Staining', desc: 'High-quality hematoxylin and eosin staining for clear histologic interpretation.', icon: '/icons/he.svg' },
  { title: 'Special Stains', desc: 'A range of special stains available to assist diagnostic needs when indicated.', icon: '/icons/stains.svg' },
  { title: 'Tissue Embedding', desc: 'Accurate tissue embedding for reliable sectioning and downstream analysis.', icon: '/icons/embedding.svg' },
  { title: 'Temporary Histotechnician Coverage', desc: 'Short-term placements and per-case coverage to maintain continuity of care during staffing gaps.', icon: '/icons/coverage.svg' },
  { title: 'Laboratory Workflow Support', desc: 'Onsite consulting to optimize specimen handling, labeling, and laboratory throughput.', icon: '/icons/workflow.svg' }
]

export default function ServicesOverview(){
  return (
    <section aria-labelledby="services-overview">
      <div className="mb-6">
        <h2 id="services-overview" className="text-3xl font-semibold text-brand-navy">Services Overview</h2>
        <p className="text-slate-700">A full suite of mobile histology services designed specifically to support Mohs surgeons and surgical teams in the operating environment.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((s) => (
          <Card key={s.title}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <img src={s.icon} alt="" className="h-12 w-12" />
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
