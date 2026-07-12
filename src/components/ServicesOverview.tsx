import Link from 'next/link'
import BrochureIcon from './BrochureIcon'
import { services } from '../lib/site'

const checklist = [
  'Mobile Mohs histology support for scheduled clinic days',
  'Cryosectioning, frozen section preparation, and slide readiness',
  'H&E staining, tissue embedding, and special stain coordination',
  'Temporary Mohs histology support for vacations and laboratory coverage gaps',
  'Lab workflow support for communication, setup, and throughput'
]

export default function ServicesOverview() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="section-heading mt-3">Complete mobile histology services built around your Mohs workflow</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">From one-day coverage to recurring support, Mohs Mobile Pros helps practices keep lab operations prepared, focused, and moving.</p>
            <Link href="/services" className="btn-primary mt-8">View All Services</Link>
          </div>

          <div className="rounded-lg bg-brand-navy p-6 text-white shadow-2xl shadow-slate-900/15 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">Service checklist</p>
            <ul className="mt-6 grid gap-4">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 rounded-md border border-white/10 bg-white/10 p-4">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center"><BrochureIcon name="check-solid" size="sm" /></span>
                  <span className="leading-7 text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="card-premium group">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">Service</span>
              <h3 className="mt-3 text-xl font-bold text-brand-navy group-hover:text-brand-orange">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
