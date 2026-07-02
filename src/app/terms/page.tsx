export const metadata = {
  title: 'Terms of Use — Mohs Mobile Pros',
  description: 'Terms of Use for Mohs Mobile Pros website describing permitted site use, disclaimers, and limitations of liability.'
}

import Section from '../components/Section'

export default function Terms(){
  return (
    <main>
      <Section>
        <div className="prose max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Terms of Use</h1>
          <p>By accessing and using this website you agree to these Terms of Use. The site provides information about Mohs Mobile Pros services and is not a substitute for professional medical advice.</p>

          <h2 className="mt-6">Disclaimer</h2>
          <p>Services described on this site are provided subject to agreement and scheduling. Mohs Mobile Pros is not responsible for third-party content or links to external sites.</p>

          <h2 className="mt-6">Limitation of liability</h2>
          <p>To the extent permitted by law, Mohs Mobile Pros disclaims liability for indirect or consequential damages arising from use of this site or reliance on its content.</p>

          <h2 className="mt-6">Contact</h2>
          <p>For questions regarding these terms, please email <a href="mailto:info@mohsmobilepros.com" className="underline">info@mohsmobilepros.com</a>.</p>
        </div>
      </Section>
    </main>
  )
}
