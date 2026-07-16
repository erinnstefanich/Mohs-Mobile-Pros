import PageHero from '../../components/PageHero'
import { business } from '../../lib/site'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Mohs Mobile Pros describing data collection, use, and security practices.',
  alternates: { canonical: '/privacy' }
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy Policy" text="How Mohs Mobile Pros collects, uses, and protects information provided through this website." />
      <section className="section-pad bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-8 leading-8 text-slate-600">
            <section>
              <h2 className="text-2xl font-bold text-brand-navy">Information We Collect</h2>
              <p className="mt-3">We collect contact information you provide when requesting services, including name, email, phone, practice name, requested service details, and scheduling notes.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-brand-navy">Use Of Information</h2>
              <p className="mt-3">Information is used to respond to inquiries, coordinate scheduling, prepare for service, and improve communication with practice teams. We do not sell personal information.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-brand-navy">Security</h2>
              <p className="mt-3">We use reasonable administrative and technical safeguards. If protected health information is involved, appropriate agreements and secure workflows should be confirmed before service.</p>
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
