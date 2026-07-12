import { regions } from './homeData'
import BrochureIcon from '../BrochureIcon'

export default function CoverageSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-14 lg:py-16">
      <div className="absolute -right-28 top-8 h-64 w-64 rounded-full border-[30px] border-brand-orange/10" />
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Proudly Serving</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">The Pacific Northwest</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Mohs Mobile Pros supports dermatology and Mohs surgery practices in Vancouver, Portland, and surrounding Pacific Northwest communities based on availability and scheduling needs.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {regions.map(([region, text]) => (
              <article key={region} className="relative min-h-[220px] overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/8">
                <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-brand-orange bg-brand-navy text-white">
                  <BrochureIcon name="regional-support" size="lg" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold uppercase leading-tight text-brand-navy">{region}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <span className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-orange" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
