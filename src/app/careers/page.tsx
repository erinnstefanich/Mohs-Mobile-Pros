import Image from 'next/image'
import Link from 'next/link'
import BrochureIcon from '../../components/BrochureIcon'
import CareersForm from '../../components/careers/CareersForm'
import { candidateQualities, careerBenefits, careerOpportunities, hiringSteps } from '../../components/careers/careersData'
import { BrochureBand, FeatureCard, InteriorHero } from '../../components/site/InteriorPage'
import { business } from '../../lib/site'

export const metadata = {
  title: 'Careers in Mobile Mohs Histology',
  description: 'Explore flexible careers and professional opportunities in mobile Mohs histology with Mohs Mobile Pros across the Pacific Northwest.',
  alternates: { canonical: '/careers' }
}

// FINAL APPROVED CAREERS PAGE — DO NOT MODIFY WITHOUT EXPLICIT USER APPROVAL
export default function CareersPage() {
  return (
    <div className="overflow-hidden bg-white">
      <InteriorHero
        eyebrow="Careers"
        title="Build Your Career in Mobile Mohs Histology"
        text="Join a growing team committed to precise laboratory work, professional collaboration, and dependable support for dermatology practices throughout the Pacific Northwest."
        heroKey="about"
        primaryLabel="View Opportunities"
        primaryHref="/careers#current-opportunities"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />

      <BrochureBand tone="gray">
        <div className="max-w-4xl">
          <p className="eyebrow">Why Join Mohs Mobile Pros</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">Meaningful work with flexibility, professionalism, and purpose</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Mohs Mobile Pros provides experienced laboratory professionals the opportunity to support dermatology practices during Mohs surgery days while maintaining high standards of specimen care, workflow integration, and patient-focused service.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {careerBenefits.map((benefit) => <FeatureCard key={benefit.title} title={benefit.title} text={benefit.text} icon={benefit.icon} />)}
        </div>
      </BrochureBand>

      <BrochureBand tone="white">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">Who We Are Looking For</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">Experienced professionals who value precision and collaboration</h2>
            <p className="mt-6 leading-8 text-slate-600">Certification is valued but is not required for every position. Training, competency, and experience requirements will depend on the role. Mohs technicians may be trained and supported by experienced ASCP-certified Histotechnicians and Histotechnologists.</p>
          </div>
          <article className="premium-card relative overflow-hidden p-7 sm:p-9">
            <span className="absolute left-8 top-0 h-2 w-24 rounded-b-full bg-brand-orange" aria-hidden="true" />
            <ul className="grid gap-4 sm:grid-cols-2">
              {candidateQualities.map((quality) => (
                <li key={quality} className="flex items-start gap-3.5 font-extrabold leading-6 text-brand-navy">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center"><BrochureIcon name="check-outline" size="sm" /></span>
                  <span>{quality}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </BrochureBand>

      <BrochureBand tone="gray">
        <div id="current-opportunities" className="scroll-mt-40">
          <div className="max-w-3xl">
            <p className="eyebrow">Current Opportunities</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">Explore opportunities with Mohs Mobile Pros</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {careerOpportunities.map((opportunity) => (
              <article key={opportunity.title} className="premium-card group flex min-h-[330px] flex-col">
                <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-brand-orange bg-white shadow-[0_12px_28px_rgba(11,35,69,0.12)]${opportunity.title === 'Entry-Level Mohs Technician Trainee' ? ' self-center' : ''}`}><BrochureIcon name={opportunity.icon} size="lg" /></span>
                <h3 className="mt-6 text-xl font-black leading-tight text-brand-navy">{opportunity.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{opportunity.text}</p>
                <Link href="/careers#careers-inquiry-form" className="btn-primary mt-7 self-start">{opportunity.button}</Link>
              </article>
            ))}
          </div>
        </div>
      </BrochureBand>

      <BrochureBand tone="white">
        <div>
          <div className="max-w-3xl">
            <p className="eyebrow">What To Expect</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">A clear and professional hiring process</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {hiringSteps.map((step, index) => (
              <article key={step.title} className="relative rounded-lg border border-slate-200/80 bg-white p-7 shadow-[0_16px_45px_rgba(11,35,69,0.08)]">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-navy text-lg font-black text-white">{index + 1}</span>
                <h3 className="mt-6 text-xl font-black leading-tight text-brand-navy">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </BrochureBand>

      <BrochureBand tone="gray">
        <div className="mx-auto max-w-5xl"><CareersForm /></div>
      </BrochureBand>

      <section className="relative isolate overflow-hidden bg-white py-8">
        <div className="absolute inset-y-0 right-0 w-full sm:w-[72%] lg:w-[62%]" aria-hidden="true">
          <Image src="/images/footer-he-background-clean.png" alt="" fill sizes="(max-width: 640px) 100vw, 62vw" className="object-cover object-right opacity-85 saturate-110" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.98)_20%,rgba(255,255,255,0.82)_45%,rgba(255,255,255,0.18)_78%,rgba(255,255,255,0)_100%)]" />
        </div>
        <div className="container relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Grow With Us</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight text-brand-navy sm:text-4xl">Interested in supporting exceptional Mohs surgery care?</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-700">Whether you are an experienced Mohs technician, histotechnician, histotechnologist, or laboratory professional interested in future opportunities, we would be glad to hear from you.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/careers#careers-inquiry-form" className="btn-primary">Submit Your Interest</Link>
            <a href={`mailto:${business.email}`} className="btn-secondary bg-white/95">Email Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}
