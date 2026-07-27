import FAQ from '../../components/FAQ'
import PageHero from '../../components/PageHero'
import RequestCTA from '../../components/RequestCTA'

export const metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about Mohs Mobile Pros services, service areas, scheduling, and lab coverage.',
  alternates: { canonical: '/faq' }
}

// FINAL APPROVED FAQ PAGE — DO NOT MODIFY WITHOUT EXPLICIT USER APPROVAL
export default function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Common questions about mobile Mohs histology coverage" text="Find answers about services, scheduling, coverage areas, and how we prepare for your surgical day." showDivider />
      <FAQ />
      <RequestCTA />
    </>
  )
}
