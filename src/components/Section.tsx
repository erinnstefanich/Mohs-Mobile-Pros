import React from 'react'

type SectionProps = {
  children: React.ReactNode,
  variant?: 'white' | 'gray',
  className?: string
}

export default function Section({ children, variant = 'white', className = '' }: SectionProps){
  const base = 'py-12'
  const bg = variant === 'gray' ? 'section-gray' : 'bg-white'

  return (
    <section className={`${base} ${bg} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}
