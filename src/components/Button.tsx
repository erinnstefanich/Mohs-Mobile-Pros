import React from 'react'

type Props = {
  variant?: 'primary' | 'outline'
  className?: string
  children: React.ReactNode
}

export default function Button({ variant = 'primary', className = '', children }: Props) {
  const base = variant === 'primary' ? 'inline-flex items-center px-4 py-2 bg-[var(--color-orange)] text-white rounded-md' : 'inline-flex items-center px-4 py-2 border border-[var(--color-navy)] text-[var(--color-navy)] rounded-md'
  return <button className={`${base} ${className}`}>{children}</button>
}
