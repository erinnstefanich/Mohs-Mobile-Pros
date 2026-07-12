import Image from 'next/image'
import Link from 'next/link'
import BrochureIcon from '../../components/BrochureIcon'
import { BrochureBand, InteriorHero } from '../../components/site/InteriorPage'
import type { BrochureIconName } from '../../lib/brochure-icons'

type ServiceNavItem = { label: string; detail?: string; href: string; icon: BrochureIconName }

const histologyServices: ServiceNavItem[] = [
  { label: 'Tissue Embedding & Orientation', href: '/services/tissue-embedding', icon: 'tissue-embedding-orientation' },
  { label: 'Cryosectioning', href: '/services/cryosectioning', icon: 'cryosectioning' },
  { label: 'Frozen Section Preparation', href: '/services/frozen-section-preparation', icon: 'frozen-section-preparation' },
  { label: 'H&E Staining', href: '/services/h-and-e-staining', icon: 'he-staining' },
  { label: 'Special Stains (as requested)', href: '/services/special-stains', icon: 'special-stains' }
]

const practiceSupport: ServiceNavItem[] = [
  { label: 'Complete Laboratory Setup & Takedown', href: '/services/laboratory-workflow-support', icon: 'lab-setup-takedown' },
  { label: 'Equipment Support', href: '/services/laboratory-workflow-support', icon: 'equipment-support' },
  { label: 'Temporary Mohs Histology Support', href: '/services/temporary-histotechnician-coverage', icon: 'temporary-histology-staffing' },
  { label: 'Full-Day, Half-Day, or As-Needed Coverage', href: '/request-service', icon: 'coverage-calendar' },
  { label: 'Workflow Integration', href: '/services/mobile-mohs-histology', icon: 'workflow-integration' },
  { label: 'Laboratory Consulting', href: '/services/laboratory-workflow-support', icon: 'laboratory-consulting' }
]

const outsourceBenefits = [
  'Reduce laboratory coverage costs',
  'Simplify laboratory coverage planning',
  'Vacation and leave coverage',
  'Scale with fluctuating patient volume',
  'Access experienced Mohs technicians',
  'Maintain uninterrupted laboratory workflow',
  'Improve scheduling flexibility',
  'Support continuity of patient care'
]

const choiceCards = [
  {
    title: 'Experienced Professionals',
    text: 'Over 20 years of clinical histopathology experience supporting Mohs surgery practices.',
    icon: 'experienced-professionals' as const
  },
  {
    title: 'Quality & Consistency',
    text: 'Formal technician training, documented competencies, standardized procedures, and ongoing quality monitoring.',
    icon: 'quality-consistency' as const
  },
  {
    title: 'Flexible Coverage',
    text: 'Vacation coverage, laboratory coverage gaps, recurring clinic support, and same-day scheduling when available.',
    icon: 'flexible-coverage' as const
  },
  {
    title: 'Practice Integration',
    text: 'Our experienced Mohs technicians work as an extension of your laboratory team while supporting efficient workflow and patient care.',
    icon: 'practice-integration' as const
  }
]

const workSteps = [
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
    text: 'An experienced Mohs technician arrives ready to integrate seamlessly into your workflow.'
  },
  {
    title: 'Patient Care Continues',
    text: 'Your laboratory operations remain efficient while your patients receive uninterrupted care.'
  }
]

export const metadata = {
  title: 'Services',
  description: 'Mobile Mohs histology services including cryosectioning, H&E staining, tissue embedding, and on-site laboratory support.'
}

export default function ServicesPage() {
  return (
    <div className="overflow-hidden bg-white">
      <InteriorHero
        eyebrow="Mobile Mohs Histology Services"
        title="Professional Mobile Mohs Histology Services"
        text="Experienced on-site Mohs histology support designed to integrate seamlessly into your laboratory workflow while maintaining precise, prompt, and professional patient care."
        primaryLabel="Request Service"
        primaryHref="/request-service"
        secondaryLabel="Our Services"
        heroKey="services"
      />

      <BrochureBand tone="white">
        <div className="grid gap-14 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">
          <div>
            <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-brand-orange bg-brand-navy text-white shadow-[0_14px_32px_rgba(11,35,69,0.18)]">
              <BrochureIcon name="brochure-microscope" size="xl" />
            </div>
            <p className="eyebrow mt-4">Our Services</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy">Flexible Mohs histology solutions tailored to your practice</h2>
            <div className="mt-8 space-y-8">
              <ServiceGroup title="Histology Services" items={histologyServices} />
              <div className="h-px w-full bg-brand-orange" aria-hidden="true" />
              <ServiceGroup title="Laboratory Support Services" items={practiceSupport} />
            </div>

            <article className="mt-9 rounded-lg border-2 border-brand-orange bg-white p-6 shadow-[0_16px_45px_rgba(11,35,69,0.08)]">
              <h2 className="text-xl font-black uppercase tracking-[0.08em] text-brand-navy">Why Outsource to Mohs Mobile Pros?</h2>
              <ul className="mt-5 grid gap-3 text-sm font-bold leading-6 text-brand-navy sm:grid-cols-2">
                {outsourceBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center">
                      <BrochureIcon name="check-solid" size={20} />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="relative min-h-[620px] overflow-hidden lg:min-h-[660px] lg:overflow-visible">
            <div className="absolute left-0 top-8 h-[320px] w-[72%] overflow-hidden rounded-lg border-8 border-white bg-brand-gray shadow-[0_24px_70px_rgba(11,35,69,0.16)] rotate-[-2deg]">
              <Image src="/images/hero/leica-cm1860-technician.jpg" alt="Histotechnician working at a Leica CM1860 cryostat" fill sizes="(max-width: 1024px) 80vw, 48vw" className="object-cover" />
            </div>
            <div className="absolute right-2 top-56 h-[260px] w-[52%] overflow-hidden rounded-lg border-8 border-white bg-brand-gray shadow-[0_22px_65px_rgba(11,35,69,0.16)] rotate-[3deg]">
              <Image src="/images/services-slide-handling.png" alt="Frozen section slide preparation" fill sizes="(max-width: 1024px) 55vw, 32vw" className="object-cover" />
            </div>
            <div className="absolute bottom-2 left-[14%] h-[260px] w-[48%] overflow-hidden rounded-lg border-8 border-white bg-brand-gray shadow-[0_22px_65px_rgba(88,28,135,0.16)] rotate-[-4deg]">
              <Image src="/images/services-he-stain.png" alt="H&E stained tissue slide detail" fill sizes="(max-width: 1024px) 52vw, 30vw" className="object-cover" />
            </div>
            <div className="absolute -right-8 bottom-16 hidden h-44 w-44 rounded-full border-[24px] border-brand-orange/12 lg:block" aria-hidden="true" />
          </div>
        </div>
      </BrochureBand>

      <BrochureBand tone="gray">
        <div>
          <div className="max-w-3xl">
            <p className="eyebrow">Why Practices Choose Mohs Mobile Pros</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">Dependable support for modern Mohs practices</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {choiceCards.map((card) => (
              <article key={card.title} className="premium-card group flex min-h-[300px] flex-col">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-brand-orange bg-white text-brand-navy shadow-[0_12px_28px_rgba(11,35,69,0.12)] transition duration-300 ease-out group-hover:scale-[1.03]">
                  <BrochureIcon name={card.icon} size="lg" />
                </span>
                <h3 className="mt-6 text-xl font-black leading-tight text-brand-navy">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </BrochureBand>

      <BrochureBand tone="white">
        <div>
          <div className="max-w-3xl">
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">A clear process from request to clinic-day support</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {workSteps.map((step, index) => (
              <article key={step.title} className="relative rounded-lg border border-slate-200/80 bg-white p-7 shadow-[0_16px_45px_rgba(11,35,69,0.08)] transition duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_24px_65px_rgba(11,35,69,0.13)]">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-navy text-lg font-black text-white">{index + 1}</span>
                <h3 className="mt-6 text-xl font-black leading-tight text-brand-navy">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
                {index < workSteps.length - 1 && (
                  <span className="absolute -right-4 top-12 hidden h-8 w-8 place-items-center rounded-full border border-brand-orange/20 bg-white text-brand-orange shadow-sm lg:grid" aria-hidden="true">
                    <svg className="h-4 w-4 rotate-[-90deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </BrochureBand>

      <BrochureBand tone="navy">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-orange-200">Schedule coverage</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">Ready to Schedule Mohs Histology Coverage?</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/82">Whether you need temporary coverage, recurring support, or a complete mobile laboratory solution, Mohs Mobile Pros is ready to help.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/request-service" className="btn-primary">Request Service</Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition duration-300 ease-out hover:-translate-y-[3px] hover:bg-white hover:text-brand-navy">
              Contact Us
            </Link>
          </div>
        </div>
      </BrochureBand>
    </div>
  )
}

function ServiceGroup({
  title,
  items
}: {
  title: string
  items: Array<{ label: string; detail?: string; href: string; icon: BrochureIconName }>
}) {
  return (
    <div>
      <h2 className="text-sm font-black uppercase tracking-[0.14em] text-brand-navy">{title}</h2>
      <ul className="mt-4 grid gap-3.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="group flex items-center gap-3 rounded-md p-1.5 transition duration-300 ease-out hover:-translate-y-[2px] hover:bg-brand-gray">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-navy bg-brand-navy text-white shadow-[0_8px_18px_rgba(11,35,69,0.16)] transition duration-300 group-hover:border-brand-orange group-hover:bg-brand-orange">
                <BrochureIcon name={item.icon} size="md" />
              </span>
              <span>
                <span className="block text-base font-extrabold leading-tight text-brand-navy group-hover:text-brand-orange">{item.label}</span>
                {item.detail && <span className="mt-1 block text-sm font-semibold leading-5 text-slate-500">{item.detail}</span>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
