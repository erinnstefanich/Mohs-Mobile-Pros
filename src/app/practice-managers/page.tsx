import { BrochureBand, ChecklistCard, FeatureCard, InteriorHero } from '../../components/site/InteriorPage'

const managerChecklist = [
  'Requested coverage date and location',
  'Anticipated Mohs case volume',
  'Equipment and supply expectations',
  'Practice-specific staining protocols',
  'Arrival time and room access details',
  'Recurring or temporary coverage needs'
]

export const metadata = {
  title: 'Practice Managers',
  description: 'Scheduling and coverage information for dermatology practice managers coordinating Mohs histology support.'
}

export default function PracticeManagersPage() {
  return (
    <div className="overflow-hidden bg-white">
      <InteriorHero
        eyebrow="Practice Managers"
        title="Protect the schedule, reduce coverage stress, and keep clinic days moving"
        text="Mohs Mobile Pros helps practice managers coordinate dependable mobile histology support with clear preparation, responsive scheduling, and practical day-of communication."
        heroKey="practiceManagers"
      />

      <BrochureBand tone="gray">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ChecklistCard eyebrow="Scheduling Details" title="The clearest requests include dates, volume, and workflow needs" items={managerChecklist} />
          <div className="grid gap-5 md:grid-cols-2">
            <FeatureCard title="Coverage gaps" text="Vacation, illness, turnover, hiring delays, and high-volume clinic days do not have to derail the schedule." icon="calendar" />
            <FeatureCard title="Recurring support" text="Coordinate dependable coverage for planned clinic days, temporary laboratory support needs, or transitional periods." icon="check" />
            <FeatureCard title="Workflow clarity" text="Confirm protocols, supplies, equipment, arrival timing, and communication expectations before service day." icon="scope" />
            <FeatureCard title="Regional coordination" text="Requests are reviewed around location, travel needs, service scope, and availability." icon="map" />
          </div>
        </div>
      </BrochureBand>

      <BrochureBand tone="white">
        <div className="max-w-3xl">
          <p className="eyebrow">What To Expect</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">A straightforward process from request through service day</h2>
          <p className="mt-5 leading-8 text-slate-600">
            After you submit a request, scheduling details are reviewed and any missing workflow information is clarified. The goal is a calm, prepared service day that supports your surgeon, clinical team, and lab process.
          </p>
        </div>
      </BrochureBand>
    </div>
  )
}
