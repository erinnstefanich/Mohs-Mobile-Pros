export default function Services(){
  return (
    <section id="services">
      <h2 className="text-2xl font-semibold text-mohs-navy mb-4">Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <article className="p-6 border rounded">
          <h3 className="font-semibold mb-2">Mohs Micrographic Surgery</h3>
          <p className="text-slate-600">Precision skin cancer removal with tissue-sparing technique and pathology-informed margins.</p>
        </article>
        <article className="p-6 border rounded">
          <h3 className="font-semibold mb-2">Reconstruction & Wound Care</h3>
          <p className="text-slate-600">Immediate reconstruction options and post-operative wound management tailored to each patient.</p>
        </article>
        <article className="p-6 border rounded">
          <h3 className="font-semibold mb-2">Consulting & Onsite Support</h3>
          <p className="text-slate-600">Operational coordination and staff training to ensure seamless onsite procedures.</p>
        </article>
      </div>
    </section>
  )
}
