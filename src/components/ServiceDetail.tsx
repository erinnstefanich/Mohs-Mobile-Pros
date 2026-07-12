import Link from 'next/link'
import PageHero from './PageHero'
import RequestCTA from './RequestCTA'
import { getService, services } from '../lib/site'

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = getService(slug) || services[0]

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} text={service.summary} ctaLabel="Schedule Service" ctaHref="/request-service" />
      <section className="section-pad bg-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_.45fr]">
          <article className="max-w-3xl">
            <p className="eyebrow">Overview</p>
            <h2 className="section-heading mt-3">Dependable support tailored to your Mohs workflow</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{service.detail}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {['Prepared arrival', 'Protocol alignment', 'Clear follow-up'].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-brand-gray p-5 font-bold text-brand-navy">{item}</div>
              ))}
            </div>
          </article>
          <aside className="rounded-lg border border-slate-200 bg-brand-gray p-6">
            <h2 className="text-xl font-bold text-brand-navy">Related services</h2>
            <div className="mt-5 grid gap-3">
              {services.filter((item) => item.slug !== slug).slice(0, 5).map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`} className="rounded-md bg-white p-4 text-sm font-bold text-brand-navy transition hover:text-brand-orange">
                  {item.title}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <RequestCTA />
    </>
  )
}
