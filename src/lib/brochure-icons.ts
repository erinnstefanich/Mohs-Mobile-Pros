const assetRoot = '/images/icons/brochure'

export const brochureIcons = {
  'tissue-embedding-orientation': { src: `${assetRoot}/tissue-embedding-orientation.png`, alt: 'Tissue embedding and orientation' },
  cryosectioning: { src: `${assetRoot}/cryosectioning.png`, alt: 'Cryosectioning' },
  'frozen-section-preparation': { src: `${assetRoot}/frozen-section-preparation.png`, alt: 'Frozen section preparation' },
  'he-staining': { src: `${assetRoot}/he-staining.png`, alt: 'H&E staining' },
  'special-stains': { src: `${assetRoot}/special-stains.png`, alt: 'Special stains' },
  'lab-setup-takedown': { src: `${assetRoot}/lab-setup-takedown.png`, alt: 'Laboratory setup and takedown' },
  'coverage-calendar': { src: `${assetRoot}/coverage-calendar.png`, alt: 'Coverage calendar' },
  'equipment-support': { src: `${assetRoot}/equipment-support.png`, alt: 'Equipment support' },
  'workflow-integration': { src: `${assetRoot}/workflow-integration.png`, alt: 'Workflow integration' },
  'laboratory-consulting': { src: `${assetRoot}/laboratory-consulting.png`, alt: 'Laboratory consulting' },
  'temporary-histology-staffing': { src: `${assetRoot}/temporary-histology-staffing.png`, alt: 'Temporary Mohs histology support' },
  'experienced-professionals': { src: `${assetRoot}/temporary-histology-staffing.png`, alt: 'Experienced professionals' },
  'quality-consistency': { src: `${assetRoot}/quality-consistency.png`, alt: 'Quality and consistency' },
  'flexible-coverage': { src: `${assetRoot}/coverage-calendar.png`, alt: 'Flexible coverage' },
  'practice-integration': { src: `${assetRoot}/workflow-integration.png`, alt: 'Practice integration' },
  'regional-support': { src: `${assetRoot}/location.png`, alt: 'Regional support' },
  'request-service': { src: `${assetRoot}/coverage-calendar.png`, alt: 'Request service' },
  contact: { src: `${assetRoot}/email.png`, alt: 'Contact Mohs Mobile Pros' },
  phone: { src: `${assetRoot}/phone.png`, alt: 'Phone' },
  email: { src: `${assetRoot}/email.png`, alt: 'Email' },
  scheduling: { src: `${assetRoot}/scheduling.png`, alt: 'Scheduling' },
  website: { src: `${assetRoot}/website.png`, alt: 'Website' },
  location: { src: `${assetRoot}/location.png`, alt: 'Location' },
  'case-volume': { src: `${assetRoot}/case-volume.png`, alt: 'Case volume' },
  'brochure-microscope': { src: `${assetRoot}/brochure-microscope.png`, alt: 'Mohs histology services' },
  'check-outline': { src: `${assetRoot}/check-outline.png`, alt: 'Included' },
  'check-solid': { src: `${assetRoot}/check-solid.png`, alt: 'Included' }
} as const

export type BrochureIconName = keyof typeof brochureIcons

export const brochureIconSizes = {
  xs: 14,
  compact: 18,
  sm: 24,
  md: 40,
  lg: 48,
  xl: 64
} as const

export type BrochureIconSize = keyof typeof brochureIconSizes
