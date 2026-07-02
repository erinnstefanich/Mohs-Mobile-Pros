export default function Hero(){
  return (
    <section className="bg-gradient-to-b from-white to-mohs-light py-16">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-mohs-navy leading-tight">Bringing Expert Mohs Surgery To Your Facility</h1>
          <p className="mt-6 text-slate-700 max-w-xl">Mohs Mobile Pros delivers specialized skin cancer care with skilled surgeons and a compassionate team—minimizing travel and disruption for your patients.</p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="inline-block bg-mohs-orange text-white px-6 py-3 rounded-md">Request Consultation</a>
            <a href="#services" className="inline-block border border-mohs-navy text-mohs-navy px-6 py-3 rounded-md">Our Services</a>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/hero-illustration.svg" alt="Mobile Mohs service" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  )
}
