import ContactForm from '../../components/ContactForm'
import { BrochureBand, FeatureCard, InteriorHero } from '../../components/site/InteriorPage'
import { business } from '../../lib/site'

export const metadata = {
  title: 'Contact',
  description: 'Contact Mohs Mobile Pros for mobile Mohs histology support and on-site laboratory support.'
}

export default function ContactPage() {
  return (
    <div className="overflow-hidden bg-white">
      <InteriorHero
        eyebrow="Contact Mohs Mobile Pros"
        title="Talk with us about mobile Mohs histology support"
        text="Reach out for service questions, practice coverage needs, scheduling details, or general information about on-site Mohs histology support."
        secondaryLabel="View Services"
        heroKey="contact"
      />

      <BrochureBand tone="gray">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="grid gap-6">
            <div className="rounded-lg bg-brand-navy p-8 text-white shadow-[0_20px_55px_rgba(11,35,69,0.18)] transition duration-300 ease-out hover:-translate-y-[3px]">
              <p className="eyebrow">Direct Contact</p>
              <div className="mt-7 space-y-6">
                <p>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/55">Phone</span>
                  <a href={business.phoneHref} className="mt-1 block text-2xl font-extrabold transition hover:text-brand-orange">{business.phone}</a>
                </p>
                <p>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/55">Email</span>
                  <a href={`mailto:${business.email}`} className="mt-1 block text-lg font-extrabold transition hover:text-brand-orange">{business.email}</a>
                </p>
                <p>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/55">Scheduling</span>
                  <a href={`mailto:${business.schedulingEmail}`} className="mt-1 block text-lg font-extrabold transition hover:text-brand-orange">{business.schedulingEmail}</a>
                </p>
              </div>
            </div>
            <FeatureCard title="Pacific Northwest support" text="Service requests are reviewed for Vancouver, Portland, and surrounding Pacific Northwest practices based on availability." icon="map" />
          </div>
          <ContactForm />
        </div>
      </BrochureBand>
    </div>
  )
}
