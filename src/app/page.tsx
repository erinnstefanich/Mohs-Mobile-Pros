import Hero from '../components/Hero'
import WhyChoose from '../components/WhyChoose'
import ServicesOverview from '../components/ServicesOverview'
import Process from '../components/Process'
import ServiceAreas from '../components/ServiceAreas'
import Resources from '../components/Resources'
import FAQ from '../components/FAQ'
import RequestCTA from '../components/RequestCTA'

export default function Home() {
  return (
    <>
      <Hero />

      <main>
        <section className="py-12">
          <div className="container">
            <WhyChoose />
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container">
            <ServicesOverview />
          </div>
        </section>

        <section className="py-12 section-gray">
          <div className="container">
            <Process />
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container">
            <ServiceAreas />
          </div>
        </section>

        <section className="py-12 section-gray">
          <div className="container">
            <Resources />
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container">
            <FAQ />
          </div>
        </section>

        <section className="py-16 bg-brand-navy text-white">
          <div className="container">
            <RequestCTA />
          </div>
        </section>
      </main>
    </>
  )
}
