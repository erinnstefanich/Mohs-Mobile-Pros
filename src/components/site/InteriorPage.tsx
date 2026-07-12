import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import BrochureIcon from '../BrochureIcon'
import { HERO_IMAGES, HeroImageKey, heroObjectPositions } from '../../lib/heroImages'

type InteriorHeroProps = {
  eyebrow: string
  title: string
  text: string
  heroKey?: HeroImageKey
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function InteriorHero({
  eyebrow,
  title,
  text,
  heroKey = 'about',
  primaryLabel = 'Request Service',
  primaryHref = '/request-service',
  secondaryLabel = 'Our Services',
  secondaryHref = '/services'
}: InteriorHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <Image
          src={HERO_IMAGES[heroKey]}
          alt=""
          fill
          priority
          sizes="58vw"
          className="h-full w-full object-cover brightness-[.98] contrast-110 saturate-110"
          style={{ objectPosition: heroObjectPositions[heroKey] }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.82)_38%,rgba(255,255,255,0.12)_68%,rgba(255,255,255,0)_100%)]" />
      </div>
      <div className="container relative z-10 grid min-h-[460px] items-center py-16 lg:grid-cols-[0.72fr_0.28fr] lg:py-24">
        <div className="max-w-3xl premium-reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 text-4xl font-black leading-[1.08] text-brand-navy sm:text-5xl lg:text-6xl">{title}</h1>
          <span className="mt-6 block h-1.5 w-24 rounded-full bg-brand-orange" aria-hidden="true" />
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">{text}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href={secondaryHref} className="btn-secondary bg-brand-navy text-white hover:border-brand-navy hover:bg-brand-navy hover:text-white">
              {secondaryLabel}
            </Link>
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
          </div>
        </div>
      </div>
      <svg className="absolute bottom-0 left-0 h-20 w-full text-brand-navy" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 70L120 66C240 62 480 52 720 56C960 60 1200 78 1320 70L1440 62V90H0V70Z" />
      </svg>
      <svg className="absolute bottom-0 left-0 h-14 w-full text-brand-orange" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 62L160 56C320 50 520 42 720 46C920 50 1120 66 1280 58L1440 50V70H0V62Z" />
      </svg>
    </section>
  )
}

export function BrochureBand({ children, tone = 'gray' }: { children: ReactNode; tone?: 'white' | 'gray' | 'navy' }) {
  const toneClass = tone === 'navy' ? 'navy-brochure-bg text-white' : tone === 'gray' ? 'bg-brand-gray text-brand-ink' : 'bg-white text-brand-ink'

  return (
    <section className={`relative isolate overflow-hidden py-16 lg:py-20 ${toneClass}`}>
      {tone !== 'navy' && <div className="absolute -right-28 top-8 h-64 w-64 rounded-full border-[30px] border-brand-orange/10" aria-hidden="true" />}
      {tone === 'navy' && (
        <div className="absolute inset-y-0 right-0 hidden w-[36%] opacity-80 lg:block" aria-hidden="true">
          <Image src="/images/footer-he-background.png" alt="" fill sizes="36vw" className="object-cover object-right" />
          <div className="absolute inset-0 bg-brand-navy/25" />
        </div>
      )}
      <div className="container relative z-10">{children}</div>
    </section>
  )
}

export function FeatureCard({ title, text, icon = 'check' }: { title: string; text: string; icon?: 'check' | 'scope' | 'calendar' | 'map' | 'team' }) {
  return (
    <article className="premium-card group relative flex min-h-[280px] flex-col overflow-hidden">
      <IconBadge icon={icon} />
      <h2 className="mt-6 text-xl font-extrabold leading-[1.18] text-brand-navy">{title}</h2>
      <p className="mt-4 leading-7 text-slate-600">{text}</p>
      <span className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-orange" aria-hidden="true" />
    </article>
  )
}

export function ChecklistCard({ eyebrow, title, items }: { eyebrow: string; title: string; items: string[] }) {
  return (
    <article className="premium-card relative overflow-hidden p-7 sm:p-9">
      <span className="absolute left-8 top-0 h-2 w-24 rounded-b-full bg-brand-orange" aria-hidden="true" />
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-[1.12] text-brand-navy sm:text-4xl">{title}</h2>
      <ul className="mt-7 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3.5 text-base font-extrabold text-brand-navy">
            <span className="grid h-7 w-7 shrink-0 place-items-center">
              <BrochureIcon name="check-outline" size="sm" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function ImageTriptych() {
  return (
    <div className="grid min-h-[330px] gap-4 sm:grid-cols-3">
      {[
        ['/images/services-microscope.png', 'Microscope prepared for Mohs histology work'],
        ['/images/services-slide-handling.png', 'Gloved hand preparing a histology slide'],
        ['/images/services-he-stain.png', 'H&E stained tissue detail']
      ].map(([src, alt], index) => (
        <div key={src} className={`relative min-h-[230px] overflow-hidden rounded-lg border-8 border-white shadow-[0_22px_70px_rgba(11,35,69,0.18)] sm:-skew-x-6 ${index === 0 ? 'sm:translate-y-6' : index === 2 ? 'sm:-translate-y-6' : ''}`}>
          <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 22vw" className="object-cover sm:skew-x-6" />
        </div>
      ))}
    </div>
  )
}

export function IconBadge({ icon }: { icon: 'check' | 'scope' | 'calendar' | 'map' | 'team' }) {
  const brochureIcon = {
    check: 'check-outline',
    scope: 'brochure-microscope',
    calendar: 'coverage-calendar',
    map: 'regional-support',
    team: 'experienced-professionals'
  } as const

  return (
    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-brand-orange bg-white text-brand-navy shadow-[0_12px_28px_rgba(11,35,69,0.12)] transition duration-300 ease-out group-hover:scale-[1.03]">
      <BrochureIcon name={brochureIcon[icon]} size="lg" />
    </span>
  )
}
