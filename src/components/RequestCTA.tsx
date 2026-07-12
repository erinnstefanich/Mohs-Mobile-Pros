import Link from 'next/link'
import { business } from '../lib/site'

export default function RequestCTA() {
  return (
    <section className="bg-white">
      <div className="container py-16 sm:py-24">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-brand-navy p-8 text-white shadow-2xl shadow-slate-900/20 sm:p-10 lg:p-14">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[34px] border-brand-orange/25" />
          <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-brand-orange/20" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-orange-200">Schedule service</p>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Ready to Schedule Service?</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">Request one-time, urgent, or recurring mobile histology support. Our scheduling team will respond with next steps.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/request-service" className="btn-primary">Schedule Service</Link>
              <a href={business.phoneHref} className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-brand-navy">
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
