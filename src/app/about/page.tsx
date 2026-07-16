import { BrochureBand, FeatureCard, ImageTriptych, InteriorHero } from '../../components/site/InteriorPage'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Mohs Mobile Pros and our mobile Mohs histology support for dermatology practices.',
  alternates: { canonical: '/about' }
}

// FINAL APPROVED ABOUT PAGE — DO NOT MODIFY WITHOUT EXPLICIT USER APPROVAL
export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white">
      <InteriorHero
        eyebrow="About Mohs Mobile Pros"
        title="About Mohs Mobile Pros"
        text="Mohs Mobile Pros was founded to provide high-quality, on-site Mohs histology services directly to dermatology practices throughout the Pacific Northwest."
        heroKey="about"
      />

      <BrochureBand tone="gray">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow">Our Standard</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">Precise. Prompt. Professional</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Mohs Mobile Pros was founded to provide high-quality, on-site Mohs histology services directly to dermatology practices. With more than 20 years of clinical histopathology experience, we deliver expert Mohs sectioning, tissue preparation, and staining with a commitment to Precise. Prompt. Professional. service.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our technicians complete a formal Mohs histology training program with annual competency assessments supported by standardized operating procedures. Competency is documented prior to independent practice and reassessed annually to ensure continued proficiency, consistency, and quality.
            </p>
          </div>
          <ImageTriptych />
        </div>
      </BrochureBand>

      <BrochureBand tone="white">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Clinical Leadership</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">Experienced histology training and laboratory management</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Our technicians are trained by experienced ASCP-certified Histotechnicians (HT) and Histotechnologists (HTL). Drawing on extensive experience in both clinical and research histology, we understand the critical importance of accurate tissue handling, proper tissue orientation, precise sectioning, and reliable staining to support successful Mohs procedures.
            </p>
            <p>
              Our management team brings extensive healthcare laboratory leadership experience and understands the operational demands of modern Mohs practices. This combination of technical expertise and laboratory management experience allows us to provide dependable technical support, clear communication, and consistent results that surgeons and practice teams can trust.
            </p>
            <p>
              As a locally owned and operated company, Mohs Mobile Pros is committed to responsive service, professional excellence, and strong partnerships with dermatology practices throughout the Pacific Northwest. We strive to be a trusted extension of your clinical team, helping support efficient patient care, reliable laboratory operations, and successful surgical outcomes.
            </p>
          </div>
        </div>
      </BrochureBand>

      <BrochureBand tone="gray">
        <div className="grid gap-5 md:grid-cols-3">
          <FeatureCard title="Documented competency" text="Technicians complete formal Mohs histology training, documented competency before independent practice, and annual reassessments." icon="check" />
          <FeatureCard title="ASCP-certified leadership" text="Training is led by experienced ASCP-certified Histotechnicians (HT) and Histotechnologists (HTL)." icon="scope" />
          <FeatureCard title="Practice partnership" text="Locally owned and operated, we work as a trusted extension of dermatology teams across the Pacific Northwest." icon="team" />
        </div>
      </BrochureBand>
    </div>
  )
}
