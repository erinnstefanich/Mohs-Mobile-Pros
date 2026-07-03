'use client'

import { useState } from 'react'

export default function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={i} className="border rounded-md bg-white">
          <button
            aria-expanded={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left px-4 py-3 flex items-center justify-between">
            <span className="font-medium text-slate-800">{it.q}</span>
            <span className="text-slate-500">{openIndex === i ? '−' : '+'}</span>
          </button>
          {openIndex === i && <div className="px-4 pb-4 text-sm text-slate-600">{it.a}</div>}
        </div>
      ))}
    </div>
  )
}
