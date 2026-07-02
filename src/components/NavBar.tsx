'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function NavBar(){
  const [open, setOpen] = useState(false)

  // lock body scroll when mobile menu open
  useEffect(()=>{
    if(open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  },[open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b" role="banner">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Mohs Mobile Pros home">
            <img src="/logo.svg" alt="Mohs Mobile Pros" className="h-14 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          <Link href="/" className="text-slate-700 hover:text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] rounded">Home</Link>
          <Link href="/services" className="text-slate-700 hover:text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] rounded">Services</Link>
          <Link href="/request-service" className="text-slate-700 hover:text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] rounded">Schedule Service</Link>
          <Link href="/about" className="text-slate-700 hover:text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] rounded">About</Link>
          <Link href="/faq" className="text-slate-700 hover:text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] rounded">FAQ</Link>
          <Link href="/contact" className="text-slate-700 hover:text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] rounded">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/request-service" aria-label="Request Service">
            <button className="btn-primary">REQUEST SERVICE</button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="p-2 rounded-md inline-flex items-center justify-center text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d={open ? 'M6 18L18 6M6 6l12 12' : 'M3 12h18M3 6h18M3 18h18'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-black/40" onClick={()=>setOpen(false)} aria-hidden />
          <div className="fixed top-16 left-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4">
            <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
              <Link href="/" onClick={()=>setOpen(false)} className="py-2 px-3 rounded hover:bg-[var(--color-light-gray)]">Home</Link>
              <Link href="/services" onClick={()=>setOpen(false)} className="py-2 px-3 rounded hover:bg-[var(--color-light-gray)]">Services</Link>
              <Link href="/request-service" onClick={()=>setOpen(false)} className="py-2 px-3 rounded hover:bg-[var(--color-light-gray)]">Schedule Service</Link>
              <Link href="/about" onClick={()=>setOpen(false)} className="py-2 px-3 rounded hover:bg-[var(--color-light-gray)]">About</Link>
              <Link href="/faq" onClick={()=>setOpen(false)} className="py-2 px-3 rounded hover:bg-[var(--color-light-gray)]">FAQ</Link>
              <Link href="/contact" onClick={()=>setOpen(false)} className="py-2 px-3 rounded hover:bg-[var(--color-light-gray)]">Contact</Link>

              <div className="pt-3 border-t mt-2">
                <Link href="/request-service" onClick={()=>setOpen(false)} className="block btn-primary text-center">REQUEST SERVICE</Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
