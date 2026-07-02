export default function FAQ(){
  const faqs = [
    { q: 'What turnaround time can we expect for frozen sections?', a: 'Typical onsite frozen section turnaround is 15–30 minutes from specimen receipt to slide return, depending on case complexity and clinic logistics. We design workflows to support efficient intraoperative decision-making.' },
    { q: 'Do you provide staffing for single cases or multi-day engagements?', a: 'We provide flexible coverage — single-case support, per-day scheduling, and multi-day or ongoing engagements. Temporary histotechnician placements are available to cover staffing gaps.' },
    { q: 'What supplies do we need to provide?', a: 'Mohs Mobile Pros brings core processing equipment and consumables. Facilities typically provide workspace, access to utilities, and specimen labeling per our checklist. We coordinate details during scheduling.' },
    { q: 'Can you perform special stains onsite?', a: 'Yes. We offer a selection of special stains when clinically indicated. For advanced or panel testing, we coordinate referral to partner labs as needed.' }
  ]

  return (
    <section aria-labelledby="faq">
      <h2 id="faq" className="text-3xl font-semibold text-brand-navy mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="p-4 bg-white rounded-lg shadow-sm border">
            <h3 className="font-semibold text-brand-navy">{f.q}</h3>
            <p className="text-slate-600 mt-2">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
