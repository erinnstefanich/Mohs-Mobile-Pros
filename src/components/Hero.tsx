import Link from 'next/link'
import MedicalVisual from './MedicalVisual'
import { business } from '../lib/site'

export default function Hero() {
  return (
    <section aria-label="Homepage hero" className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-x-0 bottom-0 h-44 bg-brand-gray" />
      <svg className="absolute bottom-28 left-0 h-28 w-full text-brand-navy" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 84L80 74.7C160 65 320 47 480 55.7C640 65 800 103 960 102.7C1120 103 1280 65 1360 46.7L1440 28V160H0V84Z" />
      </svg>
      <svg className="absolute bottom-24 left-0 h-20 w-full text-brand-orange" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" fillOpacity=".9" d="M0 70L80 61.7C160 53 320 37 480 44.8C640 53 800 85 960 84.8C1120 85 1280 53 1360 37.2L1440 21V120H0V70Z" />
      </svg>

      <div className="container relative grid gap-12 pb-44 pt-12 sm:pt-16 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:pb-52 lg:pt-20">
        <div className="animate-rise">
          <p className="eyebrow">Mobile Mohs histology support</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-normal text-brand-navy sm:text-5xl lg:text-6xl">
            Expert on-site Mohs histology support for busy dermatology practices.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Mohs Mobile Pros provides experienced Mohs technicians, clinic-day support, and laboratory workflow support across the Pacific Northwest.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/request-service" className="btn-primary">Schedule Service</Link>
            <Link href="/services" className="btn-secondary">View Services</Link>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ['Region', 'Pacific Northwest'],
              ['Phone', business.phone],
              ['Scheduling', business.schedulingEmail]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">{label}</dt>
                <dd className="mt-2 text-sm font-semibold text-brand-navy">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-float-soft">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border-[18px] border-brand-orange/20" />
          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-brand-navy/10" />
          <MedicalVisual />
        </div>
      </div>
    </section>
  )
}
