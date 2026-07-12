import Image from 'next/image'
import { brochureIcons, brochureIconSizes, type BrochureIconName, type BrochureIconSize } from '../lib/brochure-icons'

type BrochureIconProps = {
  name: BrochureIconName
  size?: BrochureIconSize | number
  decorative?: boolean
  label?: string
  className?: string
}

export default function BrochureIcon({
  name,
  size = 'md',
  decorative = true,
  label,
  className = ''
}: BrochureIconProps) {
  const icon = brochureIcons[name]
  const pixels = typeof size === 'number' ? size : brochureIconSizes[size]
  const accessibleLabel = label ?? icon.alt

  return (
    <Image
      src={icon.src}
      alt={decorative ? '' : accessibleLabel}
      aria-hidden={decorative ? true : undefined}
      width={pixels}
      height={pixels}
      sizes={`${pixels}px`}
      className={`shrink-0 object-contain ${className}`}
      unoptimized
    />
  )
}
