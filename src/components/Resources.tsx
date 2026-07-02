export default function Resources(){
  return (
    <section aria-labelledby="resources">
      <h2 id="resources" className="text-3xl font-semibold text-brand-navy mb-6">Resources</h2>
      <p className="text-slate-700 mb-6">Operational guides and contact points to help your team prepare for onsite Mohs histology.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="font-semibold text-brand-navy mb-2">Scheduling & Logistics</h3>
          <p className="text-slate-600">To schedule services or request temporary coverage, email <a href="mailto:schedule@mohsmobilepros.com" className="underline">schedule@mohsmobilepros.com</a> or call 360‑606‑1030. Provide procedure date, facility, and expected case volume.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="font-semibold text-brand-navy mb-2">Specimen Handling Guidelines</h3>
          <p className="text-slate-600">We provide facility-specific specimen labeling and handling protocols to ensure chain-of-custody and diagnostic integrity. Contact us to receive your checklist.</p>
        </div>
      </div>
    </section>
  )
}
