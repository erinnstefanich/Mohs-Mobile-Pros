import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  asLink?: boolean
}

export default function Button({ variant = 'primary', className = '', children, asLink = false, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-5 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants: Record<string, string> = {
    primary: 'bg-brand-orange text-white hover:bg-orange-600',
    secondary: 'bg-transparent border border-brand-navy text-brand-navy hover:bg-brand-navy/5',
    ghost: 'text-brand-navy'
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (asLink) {
    // Render as an anchor-styled button (still a button element for simplicity)
    return (
      <button {...props} className={classes}>
        {children}
      </button>
    )
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}
