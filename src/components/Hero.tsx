'use client'

import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section aria-label="Homepage hero" className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--color-navy)]">
              Mobile Mohs Histology, Delivered with Precision
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl">
              Onsite frozen sections, H&amp;E staining, and laboratory workflow support for dermatology practices across Washington, Oregon, and Idaho — a modern, reliable service tailored to your schedule.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <Link href="/request-service" className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-orange)] text-white rounded-md shadow-md hover:shadow-lg transition">
                Request Service
              </Link>

              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-navy)] text-[var(--color-navy)] rounded-md bg-white">
                Contact Us
              </Link>
            </div>

            <ul className="mt-8 text-sm text-slate-600 space-y-2">
              <li><strong className="text-slate-800">Phone:</strong> <a href="tel:3606061030" className="text-[var(--color-navy)]">360-606-1030</a></li>
              <li><strong className="text-slate-800">Serving:</strong> Washington · Oregon · Idaho</li>
              <li className="sr-only md:not-sr-only">Focused, on-site laboratory-grade Mohs support.</li>
            </ul>
          </div>

          {/* Right: decorative card with abstract lab illustration */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border p-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-tr from-[var(--color-navy)] to-[var(--color-orange)] flex items-center justify-center text-white shadow-md">
                  {/* Simple lab icon (microscope-like) */}
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                    <path d="M11 17h2l3-6-4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
                    <circle cx="17" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" opacity="0.95" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-navy)]">Onsite Laboratory-Grade Support</h3>
                  <p className="mt-1 text-sm text-slate-600">Rapid frozen sections and H&amp;E staining performed with precision and care.</p>
                </div>
              </div>

              <div className="mt-6">
                <dl className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                  <div>
                    <dt className="font-medium text-slate-800">Turnaround</dt>
                    <dd>Fast, same-day results</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-800">Coverage</dt>
                    <dd>WA · OR · ID</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave divider */}
      <div className="pointer-events-none -mt-2">
        <svg viewBox="0 0 1440 80" width="100%" height="80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M0,32 C360,96 720,0 1440,48 L1440,80 L0,80 Z" fill="#F3F4F6" />
        </svg>
      </div>
    </section>
  )
}
