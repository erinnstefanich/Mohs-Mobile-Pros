import { business } from '../lib/site'
import BrochureIcon from './BrochureIcon'

type TopBarProps = {
  compact?: boolean
}

export default function TopBar({ compact = false }: TopBarProps) {
  return (
    <div className={compact ? 'absolute right-[48px] top-0 hidden justify-end min-[900px]:flex' : 'absolute right-5 top-0 hidden justify-end lg:flex xl:right-8'}>
      <div className={compact ? 'rounded-bl-[1.45rem] bg-brand-navy px-6 py-2 text-[12px] font-bold text-white shadow-sm' : 'rounded-bl-[2rem] bg-brand-navy px-7 py-2.5 text-sm font-semibold text-white shadow-sm'}>
        <a href={`mailto:${business.email}`} className="inline-flex items-center gap-1.5 hover:text-orange-200">
          {compact && (
            <BrochureIcon name="email" size="xs" />
          )}
          {business.email}
        </a>
        <span className={compact ? 'mx-3 text-white/40' : 'mx-3 text-white/35'}>|</span>
        <a href={business.phoneHref} className="inline-flex items-center gap-1.5 hover:text-orange-200">
          {compact && (
            <BrochureIcon name="phone" size="xs" />
          )}
          {business.phone}
        </a>
      </div>
    </div>
  )
}
