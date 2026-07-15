'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'
import TopBar from './TopBar'
import { business } from '../lib/site'

const headerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/practice-managers', label: 'Practice Managers' },
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' }
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className={isHome ? 'relative z-40 border-b border-slate-100 bg-white shadow-[0_8px_24px_rgba(11,35,69,0.05)]' : 'sticky top-0 z-40 border-b border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(11,35,69,0.06)]'}>
      <div className={isHome ? 'relative mx-auto w-full max-w-[995px] px-5 min-[900px]:px-[62px]' : 'container relative'}>
        <TopBar compact={isHome} />
        <nav className={isHome ? 'flex min-h-[88px] items-center justify-between gap-2 py-1 sm:gap-4 min-[900px]:min-h-[87px] min-[900px]:items-end min-[900px]:gap-5 min-[900px]:pb-[14px]' : 'flex min-h-[112px] items-center justify-between gap-2 py-1 sm:gap-4 lg:min-h-[124px] lg:items-end lg:gap-5 lg:pb-3'}>
          <Logo compact={isHome} />

          <div className={isHome ? 'hidden min-w-0 flex-1 items-center justify-end gap-[13px] pb-[1px] min-[900px]:flex' : 'hidden min-w-0 flex-1 items-center justify-end gap-2 pb-2 lg:flex xl:gap-3'}>
            {headerLinks.map((link) => (
              <Link key={link.href} href={link.href} className={isHome ? 'group relative whitespace-nowrap py-2 text-[11px] font-extrabold text-brand-navy transition duration-200 hover:text-brand-orange' : 'group relative py-2 text-xs font-extrabold text-brand-navy transition duration-200 hover:text-brand-orange xl:text-sm'}>
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-brand-orange transition-transform duration-300 ease-out group-hover:scale-x-100" aria-hidden="true" />
              </Link>
            ))}
            <Link href="/request-service" className={isHome ? 'btn-primary min-h-[36px] min-w-[103px] whitespace-nowrap rounded px-3 py-2 text-[10px]' : 'btn-primary min-h-10 px-4 py-2 text-xs xl:px-5'}>Request Service</Link>
          </div>

          <div className={isHome ? 'min-[900px]:hidden' : 'lg:hidden'}>
            <button aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-orange/20">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <div className={isHome ? 'border-t border-slate-100 bg-brand-navy px-5 py-2 text-sm font-semibold text-white min-[900px]:hidden' : 'border-t border-slate-100 bg-brand-navy px-5 py-2 text-sm font-semibold text-white lg:hidden'}>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <a href={`mailto:${business.email}`}>{business.email}</a>
          <a href={business.phoneHref}>{business.phone}</a>
        </div>
      </div>

      {open && (
        <div className={isHome ? 'border-t border-slate-200 bg-white min-[900px]:hidden' : 'border-t border-slate-200 bg-white lg:hidden'}>
          <div className="container grid gap-2 py-5">
            {headerLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-brand-orange">
                {link.label}
              </Link>
            ))}
            <Link href="/request-service" onClick={() => setOpen(false)} className="btn-primary mt-1">Request Service</Link>
          </div>
        </div>
      )}
    </header>
  )
}
