import Image from 'next/image'

export default function Hero(){
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container grid md:grid-cols-2 gap-10 items-center py-20">
        <div className="z-10">
          <img src="/logo.svg" alt="Mohs Mobile Pros" className="h-14 mb-6" />

          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-4">On‑site Mohs Histology Support When and Where You Need It.</h1>

          <p className="mt-4 text-slate-700 max-w-2xl">Mohs Mobile Pros provides certified histotechnicians and laboratory support for Mohs micrographic surgery. We deliver timely frozen sections, H&amp;E staining, and workflow assistance to surgical teams across Washington, Oregon, and Idaho.</p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a href="/services" className="btn-primary">Our Services</a>
            <a href="/request-service" className="btn-outline">Request Service</a>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            <span className="mr-4">Phone: <a href="tel:3606061030" className="underline">360‑606‑1030</a></span>
            <span>Email: <a href="mailto:info@mohsmobilepros.com" className="underline">info@mohsmobilepros.com</a></span>
          </div>

          {/* feature badges similar to brochure */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white shadow-sm flex items-start gap-3">
              <img src="/icons/mohs.svg" alt="Expert Technicians" className="h-10 w-10" />
              <div>
                <div className="text-sm font-semibold text-brand-navy">Expert Technicians</div>
                <div className="text-sm text-slate-600">Specialized Mohs histology professionals with extensive experience.</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white shadow-sm flex items-start gap-3">
              <img src="/icons/he.svg" alt="Quality & Accuracy" className="h-10 w-10" />
              <div>
                <div className="text-sm font-semibold text-brand-navy">Quality & Accuracy</div>
                <div className="text-sm text-slate-600">Consistent, high‑quality specimen processing to support accurate outcomes.</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white shadow-sm flex items-start gap-3">
              <img src="/icons/coverage.svg" alt="Reliable & Flexible" className="h-10 w-10" />
              <div>
                <div className="text-sm font-semibold text-brand-navy">Reliable & Flexible</div>
                <div className="text-sm text-slate-600">Adaptable scheduling and dependable on‑site support for your practice.</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white shadow-sm flex items-start gap-3">
              <img src="/icons/workflow.svg" alt="Seamless Integration" className="h-10 w-10" />
              <div>
                <div className="text-sm font-semibold text-brand-navy">Seamless Integration</div>
                <div className="text-sm text-slate-600">We work as an extension of your clinical and laboratory workflow.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-full max-w-lg">
            {/* prefer hero photo if present, fallback to illustration */}
            <img src="/hero-illustration.svg" alt="Professional histology image with wave" className="w-full rounded-xl shadow-xl object-cover" />

            {/* decorative wave overlay */}
            <svg className="mt- -6" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,20 C200,80 400,0 720,40 C1040,80 1240,10 1440,40 L1440,80 L0,80 Z" fill="var(--color-navy)" opacity="0.06" />
              <path d="M0,30 C200,90 400,10 720,50 C1040,90 1240,20 1440,50 L1440,80 L0,80 Z" fill="var(--color-orange)" opacity="0.06" />
            </svg>
          </div>
        </div>
      </div>

      {/* large curved divider to next section */}
      <div className="absolute left-0 right-0 bottom-0">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 md:h-24 block">
          <path d="M0,40 C240,120 480,0 720,40 C960,80 1200,20 1440,40 L1440,120 L0,120 Z" fill="var(--color-light-gray)" />
        </svg>
      </div>
    </section>
  )
}
