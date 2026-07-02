'use client'

import { useState } from 'react'

export default function Accordion({ items }: { items: { q: string, a: string }[] }){
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={i} className="bg-white rounded-lg shadow-sm border">
          <button
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left p-4 flex items-center justify-between"
          >
            <span className="font-semibold text-brand-navy">{it.q}</span>
            <span className="text-slate-500">{open === i ? '−' : '+'}</span>
          </button>

          {open === i && (
            <div className="p-4 pt-0 text-slate-700">
              <p>{it.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
