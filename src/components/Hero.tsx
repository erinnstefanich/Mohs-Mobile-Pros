import Button from './Button'
import Image from 'next/image'

export default function Hero(){
  return (
    <section className="bg-gradient-to-b from-white to-brand-gray py-16">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">Bringing Expert Mohs Surgery To Your Facility</h1>
          <p className="mt-6 text-slate-700 max-w-xl">Mohs Mobile Pros delivers specialized skin cancer care with skilled surgeons and a compassionate team—minimizing travel and disruption for your patients.</p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="btn-primary">Request Consultation</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </div>

        <div className="flex justify-center">
          {/* Use a simple img so it works with the existing public SVG */}
          <img src="/hero-illustration.svg" alt="Mobile Mohs service" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  )
}
