'use client'

import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section aria-label="Homepage hero" className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: copy */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--color-navy)]">
              Professional On-Site Mohs Histology Services
            </h1>

            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-[var(--color-navy)]">Supporting Dermatology Practices Throughout the Pacific Northwest</h2>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Mohs Mobile Pros provides experienced mobile Mohs histology technicians and laboratory support directly within dermatology practices throughout the Pacific Northwest.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-orange)] text-white rounded-md shadow-md hover:shadow-lg transition">OUR SERVICES</Link>
              <Link href="/request-service" className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-navy)] text-[var(--color-navy)] rounded-md bg-white">SCHEDULE SERVICE</Link>
            </div>
          </div>

          {/* Right: image placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/hero-microscope.jpg" alt="Microscope on laboratory bench" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="pointer-events-none -mt-2">
        <svg viewBox="0 0 1440 80" width="100%" height="80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M0,32 C360,96 720,0 1440,48 L1440,80 L0,80 Z" fill="#F3F4F6" />
        </svg>
      </div>
    </section>
  )
}
