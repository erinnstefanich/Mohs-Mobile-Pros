export const metadata = {
  title: 'Schedule Service — Mohs Mobile Pros',
  description: 'Request scheduling for Mohs Mobile Pros services. Provide practice details and requested services and our scheduling team will respond.'
}

import Section from '../../components/Section'
import ScheduleForm from '../../components/ScheduleForm'

export default function RequestService(){
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-brand-navy mb-4">Schedule Service</h1>
          <p className="text-slate-700 mb-6">Complete the request form below to contact our scheduling team. Submissions are sent to schedule@mohsmobilepros.com. If you prefer, email schedule@mohsmobilepros.com directly.</p>

          <ScheduleForm />
        </div>
      </Section>
    </main>
  )
}
