import React from 'react'

export default function ServiceCard({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <article className="p-4 bg-white rounded-lg shadow-sm">
      <h4 className="font-semibold text-[var(--color-navy)]">{title}</h4>
      {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
    </article>
  )
}
