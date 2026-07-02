import Hero from '../components/Hero'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container py-12">
        <Services />
      </section>

      <section className="bg-mohs-light py-12">
        <div className="container">
          <h2 className="text-2xl font-semibold text-mohs-navy mb-4">Why choose Mohs Mobile Pros</h2>
          <p className="text-slate-700 mb-6">We provide expert Mohs micrographic surgery delivered with a focus on patient safety, dignity, and efficiency — right at your site.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold text-mohs-navy mb-2">Experienced Team</h3>
              <p className="text-slate-600">Board-certified surgeons and trained staff with years of Mohs experience.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold text-mohs-navy mb-2">Patient-Focused</h3>
              <p className="text-slate-600">Comfort and communication prioritized during every step of care.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold text-mohs-navy mb-2">Streamlined Logistics</h3>
              <p className="text-slate-600">Coordinated scheduling and efficient onsite procedures to minimize disruption.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <ContactForm />
      </section>
    </>
  )
}
