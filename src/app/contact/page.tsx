export const metadata = {
  title: 'Contact — Mohs Mobile Pros',
  description: 'Contact Mohs Mobile Pros for scheduling, general inquiries, and operational support. Phone and email contact details for our team.'
}

import Section from '../components/Section'

export default function Contact(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Contact</h1>
          <p className="text-slate-700 mb-4">We welcome inquiries about scheduling, services, and partnerships. Contact our team using the details below.</p>

          <dl className="space-y-3">
            <div>
              <dt className="font-semibold">Phone</dt>
              <dd><a href="tel:3606061030" className="underline">360‑606‑1030</a></dd>
            </div>

            <div>
              <dt className="font-semibold">General email</dt>
              <dd><a href="mailto:info@mohsmobilepros.com" className="underline">info@mohsmobilepros.com</a></dd>
            </div>

            <div>
              <dt className="font-semibold">Scheduling</dt>
              <dd><a href="mailto:schedule@mohsmobilepros.com" className="underline">schedule@mohsmobilepros.com</a></dd>
            </div>

            <div>
              <dt className="font-semibold">Location</dt>
              <dd>Vancouver, Washington</dd>
            </div>
          </dl>
        </div>
      </Section>
    </main>
  )
}
