import React from 'react'

export default function PageHeader({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <header className="py-8">
      {title && <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]">{title}</h1>}
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </header>
  )
}
