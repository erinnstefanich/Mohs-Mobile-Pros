import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  light?: boolean
  compact?: boolean
}

export default function Logo({ light = false, compact = false }: LogoProps) {
  return (
    <Link href="/" prefetch={false} className="inline-flex min-w-0 shrink items-center gap-2 sm:shrink-0 sm:gap-4">
      <span className={light ? 'relative block h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full bg-white' : compact ? 'relative block h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full bg-white' : 'relative block h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full bg-white sm:h-[86px] sm:w-[86px] lg:h-[96px] lg:w-[96px]'}>
        <Image src="/images/approved-logo.png?v=dusty-coral" alt="" fill priority sizes={light ? '58px' : compact ? '50px' : '(max-width: 640px) 50px, (max-width: 1024px) 86px, 96px'} className="object-contain" />
      </span>
      <span className="block min-w-0">
        <span className={light ? 'block text-xl font-extrabold leading-tight text-white' : compact ? 'block text-[25px] font-extrabold leading-none text-brand-navy' : 'block whitespace-nowrap text-[18px] font-extrabold leading-tight text-brand-navy sm:text-3xl lg:text-4xl'}>
          Mohs Mobile <span className="text-brand-orange">PROS</span>
        </span>
        <span className={light ? 'mt-1 block text-xs font-semibold leading-snug text-white/75' : compact ? 'mt-2 block text-[11px] font-semibold leading-none text-slate-600' : 'mt-1 block max-w-[150px] text-[10px] font-semibold leading-snug text-slate-600 sm:max-w-none sm:text-sm lg:text-base'}>
          Professional On-Site Mohs Histology Services
        </span>
      </span>
    </Link>
  )
}
