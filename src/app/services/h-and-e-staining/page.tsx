export const metadata = {
  title: 'H&E Staining — Mohs Mobile Pros',
  description: 'High-quality hematoxylin and eosin (H&E) staining performed onsite to ensure clear nuclear and cytoplasmic detail for intraoperative interpretation.'
}

import Section from '../../../components/Section'
import Button from '../../../components/Button'

export default function HAndE(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">H&amp;E Staining</h1>
          <p className="text-slate-700 mb-4">Our H&amp;E staining protocol is optimized for frozen sections to maximize contrast and preserve diagnostic features. We apply rigorous quality checks to ensure stain consistency across cases.</p>

          <h2 className="text-xl font-semibold text-brand-navy mt-6 mb-2">Quality control</h2>
          <p className="text-slate-700 mb-4">Technicians monitor staining runs and replace reagents according to validated schedules. Slides are reviewed for staining quality before release to the surgical team.</p>

          <Button asLink className="btn-primary">
            <a href="mailto:schedule@mohsmobilepros.com" className="text-white">Request Scheduling</a>
          </Button>
        </div>
      </Section>
    </main>
  )
}
