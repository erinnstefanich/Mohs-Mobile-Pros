export const metadata = {
  title: 'Privacy Policy — Mohs Mobile Pros',
  description: 'Privacy Policy for Mohs Mobile Pros describing data collection, use, and security practices.'
}

import Section from '../components/Section'

export default function Privacy(){
  return (
    <main>
      <Section>
        <div className="prose max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Privacy Policy</h1>
          <p>This Privacy Policy explains how Mohs Mobile Pros collects, uses, and protects information obtained through this website and in the course of providing services.</p>

          <h2 className="mt-6">Information we collect</h2>
          <p>We collect contact information you provide when you request services (name, email, phone, facility), and limited technical data from website interactions (cookies, analytics) used to improve site performance.</p>

          <h2 className="mt-6">Use of information</h2>
          <p>Contact information is used to respond to inquiries, schedule services, and coordinate operational logistics. We do not sell or share personal data with third parties for marketing purposes.</p>

          <h2 className="mt-6">Security</h2>
          <p>We implement administrative and technical safeguards aimed at protecting information. If handling protected health information (PHI) is required, we will discuss appropriate agreements and secure workflows with clients.</p>

          <h2 className="mt-6">Contact</h2>
          <p>Questions about this policy may be directed to <a href="mailto:info@mohsmobilepros.com" className="underline">info@mohsmobilepros.com</a>.</p>
        </div>
      </Section>
    </main>
  )
}
