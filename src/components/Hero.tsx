import Image from 'next/image'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="bg-white">
        <div className="container grid md:grid-cols-2 gap-8 items-center py-20">
          <div>
            <img src="/logo.svg" alt="Mohs Mobile Pros" className="h-12 mb-6" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">Onsite Mohs Histology & Frozen Section Services — Fast, Accurate, Compassionate</h1>
            <p className="mt-6 text-slate-700 max-w-2xl">Mohs Mobile Pros delivers comprehensive mobile histology services to surgical centers and clinics across Washington, Oregon, and Idaho. Our experienced histotechnicians and streamlined workflows provide rapid frozen section preparation, H&E staining, special stains, and tissue embedding—supporting surgical teams with reliable, high-quality pathology-ready slides.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:3606061030" className="btn-primary">Call 360‑606‑1030</a>
              <a href="mailto:schedule@mohsmobilepros.com" className="btn-outline">Request Scheduling</a>
            </div>

            <p className="mt-4 text-sm text-slate-600">Phone: 360‑606‑1030 • Email: <a href="mailto:info@mohsmobilepros.com" className="underline">info@mohsmobilepros.com</a></p>
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-md">
              <img src="/hero-illustration.svg" alt="Mohs Mobile Pros onsite histology" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* subtle wave graphic */}
      <svg className="absolute left-0 right-0 bottom-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C240,120 480,0 720,40 C960,80 1200,20 1440,40 L1440,120 L0,120 Z" fill="#F3F4F6" opacity="0.9" />
      </svg>
    </section>
  )
}
