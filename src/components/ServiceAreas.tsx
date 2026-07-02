export default function ServiceAreas(){
  const areas = [
    { name: 'Washington', desc: 'Full-service coverage across western and eastern Washington. We support ambulatory surgery centers, hospitals, and clinic-based Mohs programs.' },
    { name: 'Oregon', desc: 'Serving major metro areas and regional surgical centers with scheduled and on-demand histology services.' },
    { name: 'Idaho', desc: 'Coverage in population centers and coordinated outreach to rural surgical sites to ensure access to Mohs histology.' }
  ]

  return (
    <section aria-labelledby="service-areas">
      <h2 id="service-areas" className="text-3xl font-semibold text-brand-navy mb-6">Service Areas</h2>
      <p className="text-slate-700 mb-8">We operate throughout the Pacific Northwest with a focus on timely, local support for surgical teams.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {areas.map(a => (
          <div key={a.name} className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-brand-navy mb-2">{a.name}</h3>
            <p className="text-slate-600">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
