import Button from './Button'

export default function RequestCTA(){
  return (
    <div className="rounded-lg p-8" style={{backgroundColor: 'rgba(255,255,255,0.04)'}}>
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Request Mohs Mobile Services</h2>
          <p className="text-slate-100 mt-2">Schedule onsite histology, request temporary coverage, or arrange laboratory workflow support. Our team is ready to coordinate with your surgical staff.</p>
        </div>

        <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3">
          <a href="mailto:schedule@mohsmobilepros.com" className="btn-primary">Request Scheduling</a>
          <a href="tel:3606061030" className="btn-outline text-white">Call 360‑606‑1030</a>
        </div>
      </div>

      <p className="text-sm text-slate-200 mt-4">Email: <a href="mailto:info@mohsmobilepros.com" className="underline">info@mohsmobilepros.com</a> • Scheduling: <a href="mailto:schedule@mohsmobilepros.com" className="underline">schedule@mohsmobilepros.com</a></p>
    </div>
  )
}
