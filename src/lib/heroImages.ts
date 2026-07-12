export const HERO_IMAGES = {
  services: '/images/hero/leica-cm1860-technician.jpg',
  serviceAreas: '/images/hero/leica-cm1860-technician.jpg',
  practiceManagers: '/images/hero/leica-cm1860-technician.jpg',
  about: '/images/hero/leica-cm1860-technician.jpg',
  contact: '/images/hero/leica-cm1860-technician.jpg',
  requestService: '/images/hero/leica-cm1860-technician.jpg'
} as const

export const heroObjectPositions = {
  services: '58% center',
  serviceAreas: '50% center',
  practiceManagers: '45% center',
  about: '52% center',
  contact: '62% center',
  requestService: '48% center'
} as const

export type HeroImageKey = keyof typeof heroObjectPositions
