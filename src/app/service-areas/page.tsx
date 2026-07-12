import Link from 'next/link'
import BrochureIcon from '../../components/BrochureIcon'
import { BrochureBand, InteriorHero } from '../../components/site/InteriorPage'
import type { BrochureIconName } from '../../lib/brochure-icons'

const primaryAreas = [
  'Vancouver, Washington',
  'Portland, Oregon',
  'Clark County',
  'Portland metropolitan area',
  'Greater Pacific Northwest by request'
]

const regionalCards = [
  {
    title: 'Vancouver, Washington',
    text: 'Primary mobile Mohs histology coverage for dermatology and Mohs surgery practices in Vancouver.',
    icon: 'regional-support' as const
  },
  {
    title: 'Portland, Oregon',
    text: 'On-site histology support for practices throughout Portland and nearby metropolitan communities.',
    icon: 'regional-support' as const
  },
  {
    title: 'Clark County',
    text: 'Regional support for practices coordinating clinic-day coverage, temporary laboratory support, or workflow assistance.',
    icon: 'regional-support' as const
  },
  {
    title: 'Portland Metropolitan Area',
    text: 'Coverage coordinated around location, schedule, travel needs, and the level of histology support required.',
    icon: 'regional-support' as const
  }
]

const availabilityFactors = [
  { title: 'Requested service date', icon: 'coverage-calendar' as const },
  { title: 'Location', icon: 'regional-support' as const },
  { title: 'Expected case volume', icon: 'case-volume' as const },
  { title: 'Services needed', icon: 'brochure-microscope' as const },
  { title: 'Equipment availability', icon: 'equipment-support' as const },
  { title: 'Travel requirements', icon: 'regional-support' as const },
  { title: 'Recurring or temporary coverage needs', icon: 'coverage-calendar' as const }
]

const regionalReasons = [
  { title: 'Flexible scheduling', icon: 'flexible-coverage' as const },
  { title: 'Travel-ready support', icon: 'regional-support' as const },
  { title: 'Experienced Mohs technicians', icon: 'experienced-professionals' as const },
  { title: 'Consistent laboratory quality', icon: 'quality-consistency' as const },
  { title: 'Responsive communication', icon: 'contact' as const }
]

export const metadata = {
  title: 'Service Areas',
  description: 'Mohs Mobile Pros provides mobile Mohs histology support in Vancouver, Portland, Clark County, and the greater Pacific Northwest by request.'
}

export default function ServiceAreasPage() {
  return (
    <div className="overflow-hidden bg-white">
      <InteriorHero
        eyebrow="Service Areas"
        title="Mobile Mohs histology coverage across the Pacific Northwest"
        text="Mohs Mobile Pros supports dermatology and Mohs surgery practices throughout the Vancouver-Portland metropolitan area and greater Pacific Northwest by request."
        primaryLabel="Request Service"
        primaryHref="/request-service"
        secondaryLabel="View Services"
        heroKey="serviceAreas"
      />

      <BrochureBand tone="white">
        <div className="grid gap-12 py-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:py-8">
          <div>
            <p className="eyebrow">Coverage Overview</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">Regional support for practice teams that need reliable clinic-day coverage</h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Coverage is coordinated around your requested date, clinic location, case volume, equipment availability, and the type of Mohs histology support your practice needs.
            </p>
          </div>

          <article className="premium-card relative overflow-hidden p-7 sm:p-8">
            <span className="absolute left-8 top-0 h-2 w-24 rounded-b-full bg-brand-orange" aria-hidden="true" />
            <p className="eyebrow">Primary Areas</p>
            <h3 className="mt-4 text-2xl font-black leading-tight text-brand-navy">Primary service region</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {primaryAreas.map((area) => (
                <li key={area} className="flex gap-3 text-base font-extrabold text-brand-navy">
                  <BrochureIcon name="check-outline" size="sm" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </BrochureBand>

      <BrochureBand tone="gray">
        <div>
          <div className="max-w-3xl">
            <p className="eyebrow">Primary Service Region</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">Focused coverage for Vancouver, Portland, and surrounding practice communities</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {regionalCards.map((market) => (
              <LocationCard key={market.title} title={market.title} text={market.text} icon={market.icon} />
            ))}
          </div>
        </div>
      </BrochureBand>

      <BrochureBand tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">By-Request Regional Coverage</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">Expanded Regional Coverage</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Practices outside the primary Vancouver-Portland region may request support based on scheduling, travel requirements, and service scope. Our scheduling team reviews each request clearly before confirming coverage.
            </p>
          </div>

          <div className="rounded-lg bg-brand-navy p-6 text-white shadow-[0_24px_65px_rgba(11,35,69,0.18)] sm:p-8">
            <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-brand-orange bg-white text-brand-navy shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
              <BrochureIcon name="regional-support" size="lg" />
            </span>
            <p className="eyebrow text-orange-200">Regional Review</p>
            <h3 className="mt-3 text-2xl font-black leading-tight">Tell us where and when support is needed</h3>
            <p className="mt-4 leading-7 text-white/78">
              Include your clinic address, requested date, case volume, services needed, and equipment details so our team can determine availability.
            </p>
            <Link href="/request-service" className="btn-primary mt-7">Request Service</Link>
          </div>
        </div>
      </BrochureBand>

      <BrochureBand tone="gray">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="eyebrow">What Determines Availability</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">Coverage is confirmed around the realities of your clinic day</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {availabilityFactors.map((factor) => (
              <article key={factor.title} className="flex min-h-[104px] items-center rounded-lg border border-slate-200/80 bg-white p-5 shadow-[0_14px_40px_rgba(11,35,69,0.07)] transition duration-300 ease-out hover:-translate-y-[3px] hover:border-brand-orange/35 hover:shadow-[0_22px_60px_rgba(11,35,69,0.12)]">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-navy">
                    <BrochureIcon name={factor.icon} size="md" />
                  </span>
                  <h3 className="text-base font-black text-brand-navy">{factor.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </BrochureBand>

      <BrochureBand tone="white">
        <div>
          <div className="max-w-3xl">
            <p className="eyebrow">Why Practices Choose Regional Coverage</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">Support that travels with the needs of your Mohs schedule</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {regionalReasons.map((reason) => (
              <article key={reason.title} className="premium-card group flex min-h-[230px] flex-col">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-brand-orange bg-white text-brand-navy shadow-[0_12px_28px_rgba(11,35,69,0.12)] transition duration-300 ease-out group-hover:scale-[1.03]">
                  <BrochureIcon name={reason.icon} size="lg" />
                </span>
                <h3 className="mt-6 text-lg font-black leading-tight text-brand-navy">{reason.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </BrochureBand>

    </div>
  )
}

function LocationCard({ title, text, icon }: { title: string; text: string; icon: BrochureIconName }) {
  return (
    <article className="premium-card group relative flex min-h-[280px] flex-col overflow-hidden">
      <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-brand-orange bg-white text-brand-navy shadow-[0_12px_28px_rgba(11,35,69,0.12)] transition duration-300 ease-out group-hover:scale-[1.03]">
        <BrochureIcon name={icon} size="lg" />
      </span>
      <h2 className="mt-6 text-xl font-extrabold leading-[1.18] text-brand-navy">{title}</h2>
      <p className="mt-4 leading-7 text-slate-600">{text}</p>
      <span className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-orange" aria-hidden="true" />
    </article>
  )
}
