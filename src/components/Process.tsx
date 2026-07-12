import { processSteps } from '../lib/site'

export default function Process() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">Our process</p>
          <h2 className="section-heading mt-3">A clear path from request to clinic-day support</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 grid h-11 w-11 place-items-center rounded-md bg-brand-navy text-sm font-bold text-white">{index + 1}</div>
              <h3 className="text-xl font-bold text-brand-navy">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
