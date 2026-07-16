import PageHero from '../../components/PageHero'
import { business } from '../../lib/site'

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for the Mohs Mobile Pros website.',
  alternates: { canonical: '/terms' }
}

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms" title="Terms of Use" text="Terms for using the Mohs Mobile Pros website and service information." />
      <section className="section-pad bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-8 leading-8 text-slate-600">
            <section>
              <h2 className="text-2xl font-bold text-brand-navy">Website Use</h2>
              <p className="mt-3">By using this website, you agree to use the information for lawful purposes. Website content is provided for general service information.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-brand-navy">Service Information</h2>
              <p className="mt-3">Services are subject to agreement, availability, scheduling, and practice-specific requirements. Website content does not create a service agreement by itself.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-brand-navy">Limitation Of Liability</h2>
              <p className="mt-3">To the extent permitted by law, Mohs Mobile Pros disclaims liability for indirect damages arising from use of this website or reliance on its content.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-brand-navy">Contact</h2>
              <p className="mt-3">Questions may be directed to <a href={`mailto:${business.email}`} className="font-bold text-brand-orange">{business.email}</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
