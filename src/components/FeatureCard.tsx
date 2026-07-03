import React from 'react'

export default function FeatureCard({ title, copy }: { title: string; copy?: string }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h3 className="font-semibold text-[var(--color-navy)]">{title}</h3>
      {copy && <p className="mt-2 text-sm text-slate-600">{copy}</p>}
    </div>
  )
}
