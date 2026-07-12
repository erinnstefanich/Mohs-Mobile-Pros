import Link from 'next/link'
import { areas, business } from '../lib/site'

export default function ServiceAreas() {
  return (
    <section className="section-pad relative isolate overflow-hidden bg-brand-gray">
      <div className="absolute inset-x-0 top-0 h-24 bg-white" />
      <div className="absolute inset-x-0 top-16 h-24 bg-brand-orange/10" />
      <div className="container relative grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Pacific Northwest service areas</p>
          <h2 className="section-heading mt-3">Mobile coverage across Washington, Oregon, Idaho, and nearby markets</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{business.name} serves dermatology and Mohs surgery practices throughout the Pacific Northwest based on availability, travel needs, and scheduling requirements.</p>
          <Link href="/service-areas" className="btn-primary mt-8">Explore Areas</Link>
        </div>

        <div className="rounded-lg bg-brand-navy p-5 shadow-2xl shadow-slate-900/15 sm:p-6">
          <div className="mb-5 rounded-md border border-white/10 bg-white/10 p-4 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">Regional support</p>
            <p className="mt-2 text-2xl font-bold">Built for mobile Mohs lab coverage</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {areas.map((area) => (
              <div key={area} className="rounded-md border border-white/10 bg-white p-5 text-lg font-bold text-brand-navy">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
