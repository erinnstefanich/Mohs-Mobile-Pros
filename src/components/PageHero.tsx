import Link from 'next/link'

type PageHeroProps = {
  eyebrow?: string
  title: string
  text: string
  ctaLabel?: string
  ctaHref?: string
}

export default function PageHero({ eyebrow, title, text, ctaLabel, ctaHref }: PageHeroProps) {
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
    </section>
  )
}
