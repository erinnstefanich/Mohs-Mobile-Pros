const reasons = [
  {
    title: 'Mohs-focused experience',
    text: 'Support designed for the pace, precision, and communication style of Mohs surgery clinic days.'
  },
  {
    title: 'Responsive coverage',
    text: 'Flexible scheduling for vacations, recurring clinic days, and changing laboratory coverage needs.'
  },
  {
    title: 'Calm lab execution',
    text: 'Organized on-site support that helps preserve tissue quality, case flow, and confidence.'
  },
  {
    title: 'Practice-minded service',
    text: 'Clear communication with surgeons, managers, and clinical teams before, during, and after coverage.'
  }
]

export default function WhyChoose() {
  return (
    <section className="-mt-32 bg-transparent pb-16 sm:pb-20 lg:-mt-40">
      <div className="container">
        <div className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-md bg-brand-navy text-sm font-bold text-white">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h2 className="text-xl font-bold text-brand-navy">{reason.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
