import Image from 'next/image'
import BrochureIcon from '../BrochureIcon'
import type { BrochureIconName } from '../../lib/brochure-icons'

const histologyServices: Array<{ label: string; icon: BrochureIconName }> = [
  { label: 'Tissue Embedding & Orientation', icon: 'tissue-embedding-orientation' },
  { label: 'Cryosectioning', icon: 'cryosectioning' },
  { label: 'Frozen Section Preparation', icon: 'frozen-section-preparation' },
  { label: 'H&E Staining', icon: 'he-staining' },
  { label: 'Special Stains (as requested)', icon: 'special-stains' }
]

const laboratoryServices: Array<{ label: string; icon: BrochureIconName }> = [
  { label: 'Complete Laboratory Setup & Takedown', icon: 'lab-setup-takedown' },
  { label: 'Full-Day, Half-Day, or As-Needed Coverage', icon: 'coverage-calendar' },
  { label: 'Equipment Support', icon: 'equipment-support' },
  { label: 'Workflow Integration', icon: 'workflow-integration' },
  { label: 'Laboratory Consulting', icon: 'laboratory-consulting' },
  { label: 'Temporary Mohs Histology Support', icon: 'temporary-histology-staffing' }
]

const outsourceReasons = [
  'Reduce laboratory coverage costs',
  'Improve scheduling flexibility',
  'Access experienced Mohs technicians',
  'Scale with fluctuating patient volume',
  'Simplify laboratory coverage planning',
  'Support continuity of patient care',
  'Maintain uninterrupted laboratory workflow',
  'Vacation and leave coverage'
]

const choiceCards = [
  {
    title: 'Experienced Professionals',
    text: 'Experienced Mohs technicians who understand the pace, precision, and coordination required on surgery days.',
    icon: 'experienced-professionals' as const
  },
  {
    title: 'Quality & Consistency',
    text: 'Formal training, documented competencies, standardized procedures, and ongoing quality oversight support reliable laboratory performance.',
    icon: 'quality-consistency' as const
  },
  {
    title: 'Flexible Coverage',
    text: 'Seamless Mohs histology support that integrates with your surgery schedule, providing dependable laboratory coverage for recurring clinic days, planned support, or temporary needs.',
    icon: 'flexible-coverage' as const
  },
  {
    title: 'Practice Integration',
    text: 'Our experienced Mohs technicians work as an extension of your laboratory team, supporting efficient workflow, clear communication, and uninterrupted patient care.',
    icon: 'practice-integration' as const
  }
]

const processSteps = [
  {
    title: 'Request Service',
    text: 'Complete the online Request Service form or contact our scheduling team.'
  },
  {
    title: 'We Coordinate',
    text: 'We review your needs, confirm availability, and prepare for your clinic.'
  },
  {
    title: 'On-Site Support',
    text: 'Your Mohs technician provides scalable surgery-day support through complete laboratory setup, equipment integration, and flexible clinic-day support.'
  },
  {
    title: 'Patient Care Continues',
    text: 'Your laboratory operations remain efficient while your patients receive uninterrupted care.'
  }
]

function ServiceItem({ label, icon }: { label: string; icon: BrochureIconName }) {
  return (
    <li className="flex items-start gap-3 text-[9.8px] font-extrabold leading-[1.3] text-brand-navy xl:text-[12px]">
      <span className="relative mt-0.5 grid h-[14px] w-[14px] shrink-0 place-items-center">
        <BrochureIcon name={icon} size={20} className="absolute max-w-none" />
      </span>
      <span>{label}</span>
    </li>
  )
}

function OutsourceItem({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2 text-[8.4px] font-extrabold leading-[1.22] text-brand-navy xl:text-[10.5px]">
      <span className="mt-px grid h-[12px] w-[12px] shrink-0 place-items-center">
        <BrochureIcon name="check-solid" size={12} />
      </span>
      <span>{label}</span>
    </li>
  )
}

export default function ServicesOverview() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f8fa] pb-0 pt-[15px]">
      <div className="absolute right-[6%] top-[36px] hidden h-[150px] w-[96px] rounded-l-full border-[22px] border-brand-orange/8 border-r-0 min-[900px]:block" aria-hidden="true" />
      <div className="absolute right-[11%] top-[268px] hidden h-[150px] w-[96px] rounded-l-full border-[22px] border-brand-navy/5 border-r-0 min-[900px]:block" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-x-[38px] gap-y-8 min-[900px]:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[350px_minmax(0,1fr)] xl:gap-x-16">
          <aside>
            <div className="grid h-[38px] w-[38px] place-items-center rounded-full bg-brand-navy text-white shadow-sm">
              <BrochureIcon name="brochure-microscope" size={38} />
            </div>
            <p className="eyebrow mt-4 text-[11px] tracking-[0.12em]">Our Services</p>
            <h2 className="mt-2 max-w-[270px] text-[22px] font-black leading-[1.04] text-brand-navy xl:max-w-[340px] xl:text-[32px]">
              Flexible Mohs histology solutions tailored to your practice
            </h2>
            <div className="mt-4 h-1 w-[47px] bg-brand-orange" />

            <div className="mt-4">
              <h3 className="text-[11px] font-black uppercase tracking-[0.04em] text-brand-navy xl:text-[13px]">Histology Services</h3>
              <ul className="mt-3 grid gap-1.5">
                {histologyServices.map((service) => (
                  <ServiceItem key={service.label} label={service.label} icon={service.icon} />
                ))}
              </ul>
            </div>

            <div className="mt-3 border-t border-brand-orange pt-3">
              <h3 className="text-[11px] font-black uppercase tracking-[0.04em] text-brand-navy xl:text-[13px]">Laboratory Support Services</h3>
              <ul className="mt-3 grid gap-1.5">
                {laboratoryServices.map((service) => (
                  <ServiceItem key={service.label} label={service.label} icon={service.icon} />
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded border border-brand-orange bg-white/70 p-3.5 shadow-[0_10px_25px_rgba(11,35,69,0.04)]">
              <h3 className="text-[15px] font-black uppercase leading-[1.05] text-brand-navy xl:text-[19px]">Why Outsource to Mohs Mobile Pros?</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {outsourceReasons.map((reason) => (
                  <OutsourceItem key={reason} label={reason} />
                ))}
              </ul>
            </div>
          </aside>

          <div>
            <div className="relative h-[470px] xl:h-[560px]">
              <div className="absolute left-[8px] top-[22px] h-[295px] w-[390px] overflow-hidden rounded border-[7px] border-white bg-white shadow-[0_15px_40px_rgba(11,35,69,0.12)] xl:h-[360px] xl:w-[480px]">
                <Image src="/images/hero/leica-cm1860-technician.jpg" alt="Asian female technician working at a Leica cryostat" fill sizes="390px" className="object-cover object-[44%_50%]" />
              </div>
              <div className="absolute right-[8px] top-[170px] h-[145px] w-[218px] rotate-[2deg] overflow-hidden rounded border-[7px] border-white bg-white shadow-[0_13px_32px_rgba(11,35,69,0.13)] xl:top-[205px] xl:h-[180px] xl:w-[270px]">
                <Image src="/images/services-slide-handling.png" alt="Gloved hand handling a histology slide" fill sizes="218px" className="object-cover object-[62%_50%]" />
              </div>
              <div className="absolute left-[98px] top-[296px] h-[167px] w-[255px] -rotate-[1deg] overflow-hidden rounded border-[7px] border-white bg-white shadow-[0_13px_32px_rgba(11,35,69,0.12)] xl:left-[120px] xl:top-[355px] xl:h-[195px] xl:w-[315px]">
                <Image src="/images/services-he-stain.png" alt="H&E stained tissue image" fill sizes="255px" className="object-cover object-center" />
              </div>
            </div>

            <div className="mt-1">
              <p className="eyebrow text-[11px] tracking-[0.08em]">Why Practices Choose Mohs Mobile Pros</p>
              <h2 className="mt-2 max-w-[560px] text-[22px] font-black leading-[1.04] text-brand-navy sm:text-[26px] xl:max-w-3xl xl:text-[32px]">
                Dependable support for modern Mohs practices
              </h2>
              <div className="mt-6 grid items-stretch gap-4 sm:grid-cols-2 min-[900px]:grid-cols-4">
                {choiceCards.map((card) => (
                  <article key={card.title} className="h-full rounded border border-slate-100 bg-white p-4 shadow-[0_14px_32px_rgba(11,35,69,0.06)] xl:p-5">
                    <span className="relative grid h-[36px] w-[36px] place-items-center">
                      <BrochureIcon name={card.icon} size="md" className="absolute max-w-none" />
                    </span>
                    <h3 className="mt-4 text-[11px] font-black leading-tight text-brand-navy xl:text-[13px]">{card.title}</h3>
                    <p className="mt-3 text-[7.8px] font-medium leading-[1.35] text-brand-navy/80 xl:text-[10px] xl:leading-[1.45]">{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="min-[900px]:col-span-2">
            <p className="eyebrow mt-1 text-[11px] tracking-[0.08em]">How We Work</p>
            <h2 className="mt-1 text-[24px] font-black leading-tight text-brand-navy sm:text-[27px] xl:text-[32px]">
              A clear process from request to clinic-day support
            </h2>
            <div className="mt-4 grid gap-6 min-[900px]:grid-cols-4 min-[900px]:gap-[42px]">
              {processSteps.map((step, index) => (
                <article key={step.title} className="relative min-h-[92px] bg-white px-5 py-4 shadow-[0_11px_24px_rgba(11,35,69,0.05)] xl:min-h-[118px] xl:px-6 xl:py-5">
                  <span className="absolute -left-2 top-3 grid h-[30px] w-[30px] place-items-center rounded-full bg-brand-navy text-[15px] font-black text-white">{index + 1}</span>
                  {index < processSteps.length - 1 && (
                    <span className="absolute -right-[32px] top-[33px] hidden text-[38px] font-black leading-none text-brand-orange min-[900px]:block" aria-hidden="true">&rarr;</span>
                  )}
                  <div className="pl-5">
                    <h3 className="text-[12px] font-black leading-tight text-brand-navy xl:text-sm">{step.title}</h3>
                    <p className="mt-2 text-[9px] font-medium leading-[1.7] text-brand-navy/80 xl:text-[11px]">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
