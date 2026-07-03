import React from 'react'

type Props = React.PropsWithChildren<{ className?: string }>

export function Section({ children, className = '' }: Props) {
  return <section className={`py-12 ${className}`}>{children}</section>
}

export default Section
