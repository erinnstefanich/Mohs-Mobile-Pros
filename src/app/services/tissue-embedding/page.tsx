import ServiceDetail from '../../../components/ServiceDetail'

export const metadata = {
  title: 'Tissue Embedding',
  description: 'Tissue embedding support for orientation, workflow, and Mohs histology preparation.',
  alternates: { canonical: '/services/tissue-embedding' }
}

export default function Page() {
  return <ServiceDetail slug="tissue-embedding" />
}
