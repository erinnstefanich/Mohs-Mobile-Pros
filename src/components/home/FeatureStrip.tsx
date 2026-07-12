import BrochureIcon from '../BrochureIcon'
import { features } from './homeData'

const featureIcons = ['experienced-professionals', 'quality-consistency', 'flexible-coverage', 'practice-integration'] as const

export default function FeatureStrip() {
  return (
    <section className="relative z-20 -mt-28 bg-transparent pb-12 lg:-mt-32">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map(([title, text], index) => (
            <article key={title} className="relative flex min-h-[156px] gap-4 overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/18">
              <span className="absolute left-5 top-0 h-1.5 w-16 rounded-b-full bg-brand-orange" aria-hidden="true" />
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-brand-navy bg-white text-brand-navy shadow-sm">
                <BrochureIcon name={featureIcons[index]} size="lg" />
              </span>
              <span>
                <h2 className="text-base font-extrabold text-brand-navy">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
