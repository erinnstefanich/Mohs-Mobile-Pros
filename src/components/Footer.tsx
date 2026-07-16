'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type FooterProps = {
  homeFooter: ReactNode
  interiorFooter: ReactNode
}

export default function Footer({ homeFooter, interiorFooter }: FooterProps) {
  const pathname = usePathname()

  return pathname === '/' ? homeFooter : interiorFooter
}
