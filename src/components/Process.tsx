import Card from './Card'

export default function Process(){
  const steps = [
    { title: '1. Contact & Schedule', desc: 'Call or email our scheduling team to arrange onsite Mohs histology support. We confirm scope, location, and staffing needs.' },
    { title: '2. Onsite Setup', desc: 'Our certified histotechnician arrives with portable cryostats and supplies, sets up a sterile workflow, and coordinates with the OR team.' },
    { title: '3. Specimen Processing', desc: 'Tissue is cryosectioned, stained (H&E and special stains as needed), and prepared promptly for pathologist review.' },
    { title: '4. Real-time Reporting', desc: 'Processed slides are returned to the surgeon for immediate margin assessment—supporting clinical decisions during the procedure.' },
    { title: '5. Follow-up & Documentation', desc: 'Detailed specimen logs and digital records are provided to support charting and pathology correlation.' }
  ]

  return (
    <section aria-labelledby="our-process">
      <h2 id="our-process" className="text-3xl font-semibold text-brand-navy mb-6">Our Process</h2>
      <p className="text-slate-700 mb-8">A predictable, audited workflow engineered to deliver consistent slide quality and dependable turnaround in the operating suite.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <Card key={s.title}>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">{s.title}</h3>
            <p className="text-slate-600">{s.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
