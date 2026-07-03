'use client'

import Link from 'next/link'

export default function TopBar() {
  return (
    <div className="bg-[var(--color-navy)] text-white text-sm">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="font-medium">Professional On-Site Mohs Histology Services</div>
        <div className="flex items-center gap-6">
          <a href="mailto:info@mohsmobilepros.com" className="hover:underline" aria-label="Email info at Mohs Mobile Pros">info@mohsmobilepros.com</a>
          <a href="tel:3606061030" className="hover:underline" aria-label="Call Mohs Mobile Pros">360-606-1030</a>
        </div>
      </div>
    </div>
  )
}
