import ScheduleForm from '../../components/ScheduleForm'
import { BrochureBand, ChecklistCard, InteriorHero } from '../../components/site/InteriorPage'
import { business } from '../../lib/site'

const requestItems = [
  'Practice name and primary contact',
  'Requested service date or date range',
  'Clinic location and arrival needs',
  'Anticipated Mohs case volume',
  'Requested histology services',
  'Important protocol or workflow notes'
]

export const metadata = {
  title: {
    absolute: 'Request Mobile Mohs Histology Coverage | Mohs Mobile Pros'
  },
  description: 'Request mobile Mohs histology coverage, cryosectioning, H&E staining, and lab workflow support for dermatology practices.',
  alternates: {
    canonical: '/request-service'
  }
}

export default function RequestServicePage() {
  return (
    <div className="overflow-hidden bg-white">
      <InteriorHero
        eyebrow="Request Service"
        title="Request mobile Mohs histology coverage"
        text={`Use this secure online request page for coverage requests from brochures, QR codes, and clinic scheduling conversations. Requests are prepared for ${business.schedulingEmail}.`}
        primaryLabel="Start Request"
        primaryHref="/request-service#request-service-form"
        secondaryLabel="View Services"
        heroKey="requestService"
      />

      <BrochureBand tone="gray">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <ChecklistCard eyebrow="What To Include" title="The clearest requests include dates, volume, and workflow needs" items={requestItems} />
          <ScheduleForm />
        </div>
      </BrochureBand>
    </div>
  )
}
