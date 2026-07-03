'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section aria-label="Homepage hero" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: logo, headline, copy, CTAs */}
          <div>
            <div className="mb-6">
              <img src="/images/logo.svg" alt="Mohs Mobile Pros logo" className="h-10 w-auto" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[var(--color-navy)]">
              On-Site Mohs Histology Support
              <br />
              When and Where You Need It.
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Mohs Mobile Pros provides experienced mobile Mohs histology technicians and laboratory support for dermatology practices throughout the Pacific Northwest.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-orange)] text-white rounded-md shadow-md hover:shadow-lg transition">
                Our Services
              </Link>

              <Link href="/request-service" className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-navy)] text-[var(--color-navy)] rounded-md bg-white">
                Schedule Service
              </Link>
            </div>
          </div>

          {/* Right column: hero illustration in rounded card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-transparent">
              <div className="bg-white rounded-2xl overflow-hidden">
                <img src="/hero-illustration.svg" alt="Microscope illustration" className="w-full h-80 object-cover md:h-96" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved decorative divider: navy to orange gradient */}
      <div className="pointer-events-none -mt-2">
        <svg viewBox="0 0 1440 120" width="100%" height="120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0B2E59" />
              <stop offset="100%" stopColor="#F47A20" />
            </linearGradient>
          </defs>
          <path d="M0,60 C240,0 480,120 720,80 C960,40 1200,100 1440,60 L1440,120 L0,120 Z" fill="url(#g)" opacity="0.06" />
          <path d="M0,72 C240,12 480,132 720,92 C960,52 1200,112 1440,72 L1440,120 L0,120 Z" fill="url(#g)" opacity="0.12" />
        </svg>
      </div>
    </section>
  )
}
