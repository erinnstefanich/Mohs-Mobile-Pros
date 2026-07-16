import ServiceDetail from '../../../components/ServiceDetail'

export const metadata = {
  title: 'H&E Staining',
  description: 'Clean H&E staining support for Mohs histology and frozen section workflows.',
  alternates: { canonical: '/services/h-and-e-staining' }
}

export default function Page() {
  return <ServiceDetail slug="h-and-e-staining" />
}
