import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  light?: boolean
  compact?: boolean
}

export default function Logo({ light = false, compact = false }: LogoProps) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-3 sm:gap-4" aria-label="Mohs Mobile Pros home">
      <span className={light ? 'relative block h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full bg-white' : compact ? 'relative block h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full bg-white' : 'relative block h-[74px] w-[74px] shrink-0 overflow-hidden rounded-full bg-white sm:h-[86px] sm:w-[86px] lg:h-[96px] lg:w-[96px]'}>
        <Image src="/images/approved-logo.png" alt="" fill priority sizes={light ? '58px' : compact ? '50px' : '(max-width: 640px) 74px, (max-width: 1024px) 86px, 96px'} className="object-contain" />
      </span>
      <span className="block min-w-0">
        <span className={light ? 'block text-xl font-extrabold leading-tight text-white' : compact ? 'block text-[25px] font-extrabold leading-none text-brand-navy' : 'block text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl lg:text-4xl'}>
          Mohs Mobile <span className={light ? 'text-orange-200' : 'text-brand-orange'}>PROS</span>
        </span>
        <span className={light ? 'mt-1 block text-xs font-semibold leading-snug text-white/75' : compact ? 'mt-2 block text-[11px] font-semibold leading-none text-slate-600' : 'mt-1 block max-w-[240px] text-xs font-semibold leading-snug text-slate-600 sm:max-w-none sm:text-sm lg:text-base'}>
          Professional On-Site Mohs Histology Services
        </span>
      </span>
    </Link>
  )
}
