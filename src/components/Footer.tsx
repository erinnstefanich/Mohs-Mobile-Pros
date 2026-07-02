import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="bg-brand-navy text-white py-8">
      <div className="container grid md:grid-cols-3 gap-6">
        <div>
          <img src="/logo.svg" alt="Mohs Mobile Pros" className="h-10 mb-4" />
          <p className="text-sm text-brand-gray">Mobile Mohs histology services and temporary histotechnician coverage across the Pacific Northwest.</p>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm">Phone: <a href="tel:3606061030" className="underline">360‑606‑1030</a></p>
          <p className="text-sm">Email: <a href="mailto:info@mohsmobilepros.com" className="underline">info@mohsmobilepros.com</a></p>
          <p className="text-sm">Scheduling: <a href="mailto:schedule@mohsmobilepros.com" className="underline">schedule@mohsmobilepros.com</a></p>
        </div>

        <div>
          <h4 className="font-semibold">Service Area</h4>
          <p className="text-sm">Washington • Oregon • Idaho</p>
        </div>
      </div>

      <div className="container text-center text-sm mt-8 border-t border-white/30 pt-4">© {new Date().getFullYear()} Mohs Mobile Pros. All rights reserved.</div>
    </footer>
  )
}
