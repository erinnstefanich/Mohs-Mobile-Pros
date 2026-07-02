import Card from './Card'

export default function WhyChoose(){
  return (
    <section aria-labelledby="why-choose">
      <h2 id="why-choose" className="text-3xl font-semibold text-brand-navy mb-6">Why Choose Mohs Mobile Pros</h2>
      <p className="text-slate-700 mb-8">We partner with surgical teams to deliver onsite histology and frozen section services with a focus on accuracy, turnaround, and patient-centered care.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-xl font-semibold text-brand-navy mb-2">Specialized Expertise</h3>
          <p className="text-slate-600">Certified histotechnicians experienced in Mohs histology and frozen section techniques ensure diagnostic-quality slides every procedure.</p>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-brand-navy mb-2">Rapid Turnaround</h3>
          <p className="text-slate-600">Onsite processing and efficient workflows minimize patient wait times and support surgical decision-making in real time.</p>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-brand-navy mb-2">Flexible & Reliable</h3>
          <p className="text-slate-600">Short-notice staffing, temporary histotechnician coverage, and scalable services that adapt to your operating room schedule.</p>
        </Card>
      </div>
    </section>
  )
}
