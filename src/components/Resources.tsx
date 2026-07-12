const resources = [
  'Preparing your lab for mobile histology coverage',
  'Questions practice managers should ask before coverage',
  'How to reduce disruption during temporary laboratory coverage gaps'
]

export default function Resources() {
  return (
    <section className="section-pad bg-brand-gray">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">Resources</p>
          <h2 className="section-heading mt-3">Helpful planning notes for smoother surgical days</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {resources.map((resource) => (
            <article key={resource} className="card-premium">
              <p className="eyebrow">Guide</p>
              <h3 className="mt-3 text-xl font-bold text-brand-navy">{resource}</h3>
              <p className="mt-4 leading-7 text-slate-600">A practical resource for improving communication, readiness, and continuity around Mohs lab support.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
