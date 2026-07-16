import Link from 'next/link'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page Not Found"
        text="The page you requested could not be found. Return to the homepage or contact Mohs Mobile Pros for assistance."
      />
      <section className="section-pad bg-white">
        <div className="container flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link href="/" className="btn-primary">Home</Link>
          <Link href="/contact" className="btn-secondary">Contact</Link>
        </div>
      </section>
    </>
  )
}
