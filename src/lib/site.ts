export const business = {
  name: 'Mohs Mobile Pros',
  phone: '360-606-1030',
  phoneHref: 'tel:3606061030',
  email: 'info@mohsmobilepros.com',
  schedulingEmail: 'schedule@mohsmobilepros.com',
  website: 'mohsmobilepros.com',
  url: 'https://mohsmobilepros.com',
  region: 'Vancouver, Portland, and surrounding Pacific Northwest markets based on availability'
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/practice-managers', label: 'Practice Managers' },
  { href: '/about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' }
]

export const services = [
  {
    slug: 'mobile-mohs-histology',
    title: 'Mobile Mohs Histology',
    summary: 'Experienced on-site histology support for practices that need dependable Mohs lab coverage.',
    detail:
      'We support Mohs surgeons with focused technical assistance for same-day tissue processing, slide preparation, and laboratory flow during surgical clinic days.'
  },
  {
    slug: 'tissue-embedding',
    title: 'Tissue Embedding',
    summary: 'Thoughtful embedding assistance to preserve tissue orientation and support confident reads.',
    detail:
      'We help embed tissue with the orientation, flattening, and handling required for efficient Mohs review and predictable lab output.'
  },
  {
    slug: 'cryosectioning',
    title: 'Cryosectioning',
    summary: 'Precise frozen section cutting with attention to orientation, tissue integrity, and readable margins.',
    detail:
      'Our experienced Mohs technicians help produce consistent frozen sections for Mohs cases, balancing speed with careful technique so your clinical team can keep the day moving.'
  },
  {
    slug: 'frozen-section-preparation',
    title: 'Frozen Section Preparation',
    summary: 'Reliable preparation support for fresh tissue specimens and intraoperative workflows.',
    detail:
      'From accession support through slide readiness, we help practices maintain a clean, orderly, and efficient frozen section process.'
  },
  {
    slug: 'h-and-e-staining',
    title: 'H&E Staining',
    summary: 'Clean hematoxylin and eosin staining for crisp, practical microscopic review.',
    detail:
      'We support staining workflows with an emphasis on consistency, contrast, and usability for Mohs and dermatopathology-adjacent teams.'
  },
  {
    slug: 'special-stains',
    title: 'Special Stains',
    summary: 'Additional staining support coordinated around your practice protocols and case needs.',
    detail:
      'When specialized staining is needed, we coordinate with your existing procedures and expectations to provide careful technical support.'
  },
  {
    slug: 'temporary-histotechnician-coverage',
    title: 'Temporary Mohs Histology Support',
    summary: 'Short-term or recurring laboratory support for vacations, coverage gaps, and high-volume clinic days.',
    detail:
      'Practices use our support to protect clinic schedules, reduce cancellations, and keep surgical days supported when internal coverage needs change.'
  },
  {
    slug: 'laboratory-workflow-support',
    title: 'Laboratory Workflow Support',
    summary: 'Practical help tightening lab setup, communication, case movement, and room readiness.',
    detail:
      'We work alongside managers and clinical teams to improve the handoffs, equipment readiness, and day-of-service rhythm that affect Mohs throughput.'
  }
]

export const processSteps = [
  {
    title: 'Request coverage',
    text: 'Share your location, dates, anticipated volume, and the level of lab support your surgical day requires.'
  },
  {
    title: 'Confirm the workflow',
    text: 'We align on arrival time, equipment, staining expectations, and practice-specific lab protocols before service day.'
  },
  {
    title: 'Support the clinic day',
    text: 'Your experienced Mohs technician works on site with a calm, organized approach that keeps cases moving.'
  },
  {
    title: 'Follow up clearly',
    text: 'After service, we stay available for scheduling updates, recurring coverage needs, and process improvements.'
  }
]

export const faqs = [
  {
    q: 'What practices do you support?',
    a: 'We support dermatology and Mohs surgery practices that need mobile histology, temporary Mohs histology support, or lab workflow assistance.'
  },
  {
    q: 'Where do you provide service?',
    a: 'Mohs Mobile Pros focuses on Vancouver, Portland, and surrounding Pacific Northwest practices depending on scheduling, availability, and travel needs.'
  },
  {
    q: 'Can we request recurring coverage?',
    a: 'Yes. Practices can request one-time coverage, recurring clinic-day support, or help during laboratory coverage transitions.'
  },
  {
    q: 'How soon should we schedule?',
    a: 'As early as possible is best, especially for recurring coverage. Urgent requests are reviewed quickly when availability allows.'
  },
  {
    q: 'Do you bring all lab equipment?',
    a: 'Service details vary by practice. We confirm equipment, supplies, protocols, and room setup during scheduling so the day is clear before arrival.'
  }
]

export const areas = [
  'Vancouver',
  'Portland',
  'Surrounding Pacific Northwest'
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
