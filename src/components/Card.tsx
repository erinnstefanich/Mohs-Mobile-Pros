import React from 'react'

type Props = React.PropsWithChildren<{ className?: string }>

export default function Card({ children, className = '' }: Props) {
  return <div className={`bg-white rounded-lg shadow card p-4 ${className}`}>{children}</div>
}
