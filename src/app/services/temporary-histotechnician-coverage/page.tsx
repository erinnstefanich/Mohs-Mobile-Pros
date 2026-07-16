import ServiceDetail from '../../../components/ServiceDetail'

export const metadata = {
  title: 'Temporary Mohs Histology Support',
  description: 'Temporary Mohs histology support for vacations, laboratory coverage gaps, and high-volume clinic days.',
  alternates: { canonical: '/services/temporary-histotechnician-coverage' }
}

export default function Page() {
  return <ServiceDetail slug="temporary-histotechnician-coverage" />
}
