'use client'

import Link from 'next/link'
import { useState } from 'react'
import TopBar from './TopBar'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/request-service', label: 'Schedule Service' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' }
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <TopBar />

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <img src="/images/logo.svg" alt="Mohs Mobile Pros" className="h-8 w-auto" />
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-700 hover:text-[var(--color-navy)]">{link.label}</Link>
              ))}

              <Link href="/request-service" className="inline-flex items-center px-4 py-2 bg-[var(--color-orange)] text-white rounded-md text-sm font-semibold">SCHEDULE SERVICE</Link>
            </div>

            <div className="md:hidden">
              <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="p-2 rounded-md inline-flex items-center justify-center text-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-navy)]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block text-base text-slate-800 py-2">{link.label}</Link>
              ))}

              <Link href="/request-service" onClick={() => setOpen(false)} className="block text-base text-white py-2 px-4 bg-[var(--color-orange)] rounded">SCHEDULE SERVICE</Link>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
