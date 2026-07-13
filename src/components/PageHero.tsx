import Link from 'next/link'

type PageHeroProps = {
  eyebrow?: string
  title: string
  text: string
  ctaLabel?: string
  ctaHref?: string
  showDivider?: boolean
}

export default function PageHero({ eyebrow, title, text, ctaLabel, ctaHref, showDivider = false }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(249,115,22,.24),transparent_26%),linear-gradient(135deg,rgba(255,255,255,.08),transparent_42%)]" />
      <div className="container relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl animate-rise">
          {eyebrow && <p className="eyebrow text-orange-200">{eyebrow}</p>}
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">{text}</p>
          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className="btn-primary mt-8">
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
      {showDivider && (
        <>
          <svg className="absolute bottom-0 left-0 h-20 w-full text-brand-navy" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
            <path fill="currentColor" d="M0 70L120 66C240 62 480 52 720 56C960 60 1200 78 1320 70L1440 62V90H0V70Z" />
          </svg>
          <svg className="absolute bottom-0 left-0 h-14 w-full text-brand-orange" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
            <path fill="currentColor" d="M0 62L160 56C320 50 520 42 720 46C920 50 1120 66 1280 58L1440 50V70H0V62Z" />
          </svg>
        </>
      )}
    </section>
  )
}
