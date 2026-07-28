import Image from 'next/image'
import Link from 'next/link'
import { business } from '../../lib/site'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/practice-managers', label: 'Practice Managers' },
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' }
]

type FooterSectionProps = {
  home?: boolean
}

export default function FooterSection({ home = false }: FooterSectionProps) {
  const footerLinkClass = home
    ? 'inline-flex min-h-7 min-w-7 items-center px-1 -mx-1 hover:text-white'
    : 'inline-flex min-h-6 items-center py-[5px] -my-[5px] hover:text-white'

  return (
    <div className="relative z-10">
      <div className={home ? 'mx-auto grid w-full max-w-7xl gap-6 px-5 pb-5 pt-4 sm:px-6 md:grid-cols-[1.25fr_.85fr_1fr_.7fr] md:items-start lg:px-8 xl:gap-10 xl:pb-7 xl:pt-6' : 'container grid gap-8 pb-7 pt-5 md:grid-cols-[1.2fr_1fr_1.1fr_.7fr] md:items-start'}>
        <div>
          <Link href="/" prefetch={false} className="inline-flex items-center gap-3">
            <span className={home ? 'relative h-[38px] w-[38px] shrink-0 overflow-hidden rounded-full bg-white' : 'relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white'}>
              <Image src="/images/approved-logo.png" alt="" fill sizes={home ? '38px' : '56px'} className="object-contain" />
            </span>
            <span>
              <span className={home ? 'block text-[18px] font-extrabold leading-tight text-white xl:text-[22px]' : 'block text-xl font-extrabold leading-tight text-white'}>Mohs Mobile <span className="text-brand-orange">PROS</span></span>
              <span className={home ? 'mt-1 block max-w-[150px] text-[10px] font-semibold leading-snug text-white/78 xl:max-w-[190px] xl:text-xs' : 'mt-1 block max-w-[190px] text-xs font-semibold leading-snug text-white/78'}>Professional On-Site Mohs Histology Services</span>
            </span>
          </Link>
          <p className={home ? 'mt-4 text-[10px] text-white/72 xl:text-xs' : 'mt-5 text-xs text-white/72'}>&copy; 2026 Mohs Mobile Pros. All rights reserved.</p>
        </div>

        <div className={home ? 'md:border-l md:border-white/25 md:pl-6' : 'md:border-l md:border-white/25 md:pl-8'}>
          <h2 className={home ? 'text-[11px] font-bold uppercase tracking-[0.12em] text-brand-orange xl:text-xs' : 'text-xs font-bold uppercase tracking-[0.18em] text-brand-orange'}>Quick Links</h2>
          <ul className={home ? 'mt-2 grid grid-cols-2 gap-x-5 gap-y-1 text-[10px] font-semibold text-white/82 xl:text-xs' : 'mt-3 grid grid-cols-2 gap-x-7 gap-y-2 text-xs font-semibold text-white/82'}>
            {quickLinks.map((link) => (
              <li key={link.href}><Link href={link.href} prefetch={false} className={footerLinkClass}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={home ? 'md:border-l md:border-white/25 md:pl-6' : 'md:border-l md:border-white/25 md:pl-8'}>
          <h2 className={home ? 'text-[11px] font-bold uppercase tracking-[0.12em] text-brand-orange xl:text-xs' : 'text-xs font-bold uppercase tracking-[0.18em] text-brand-orange'}>Contact</h2>
          <div className={home ? 'mt-2 space-y-1 text-[10px] font-semibold text-white/82 xl:text-xs' : 'mt-3 space-y-2 text-xs font-semibold text-white/82'}>
            <p><a href={`mailto:${business.email}`} className={footerLinkClass}>{business.email}</a></p>
            <p><a href={`mailto:${business.schedulingEmail}`} className={footerLinkClass}>{business.schedulingEmail}</a></p>
            <p><a href={business.phoneHref} className={footerLinkClass}>{business.phone}</a></p>
            <p><a href={business.url} className={footerLinkClass}>{business.website}</a></p>
          </div>
        </div>

        <div className={home ? 'md:border-l md:border-white/25 md:pl-6' : 'md:border-l md:border-white/25 md:pl-8'}>
          <h2 className={home ? 'text-[11px] font-bold uppercase tracking-[0.12em] text-brand-orange xl:text-xs' : 'text-xs font-bold uppercase tracking-[0.18em] text-brand-orange'}>Follow Us</h2>
          <a
            href="https://www.linkedin.com/company/mohs-mobile-pros/"
            target="_blank"
            rel="noopener noreferrer"
            className={home
              ? 'mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-sm font-bold text-brand-navy hover:bg-white'
              : 'mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-sm font-bold text-brand-navy hover:bg-white'}
            aria-label="Follow Mohs Mobile Pros on LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={home ? 'h-4 w-4' : 'h-5 w-5'}
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.114 20.452H3.56V9h3.554v11.452Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

