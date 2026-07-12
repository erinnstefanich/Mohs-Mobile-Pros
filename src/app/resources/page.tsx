import PageHero from '../../components/PageHero'
import Resources from '../../components/Resources'
import RequestCTA from '../../components/RequestCTA'

export const metadata = {
  title: 'Resources',
  description: 'Planning resources for practices scheduling mobile Mohs histology support and clinic-day laboratory support.'
}

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Planning support for smoother Mohs clinic days" text="Use these resources to prepare your team, lab space, and schedule for mobile histology coverage." />
      <Resources />
      <RequestCTA />
    </>
  )
}
