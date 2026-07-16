import ServiceDetail from '../../../components/ServiceDetail'

export const metadata = {
  title: 'Special Stains',
  description: 'Special stain support coordinated around Mohs practice protocols and case needs.',
  alternates: { canonical: '/services/special-stains' }
}

export default function Page() {
  return <ServiceDetail slug="special-stains" />
}
