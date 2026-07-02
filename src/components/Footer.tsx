import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="bg-brand-navy text-white py-10">
      <div className="container grid md:grid-cols-3 gap-6 items-start">
        <div>
          <img src="/logo.svg" alt="Mohs Mobile Pros" className="h-10 mb-4" />
          <p className="text-sm text-brand-gray">Mobile Mohs histology services and temporary histotechnician coverage across the Pacific Northwest.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm">Phone: <a href="tel:3606061030" className="underline">360‑606‑1030</a></p>
          <p className="text-sm">Email: <a href="mailto:info@mohsmobilepros.com" className="underline">info@mohsmobilepros.com</a></p>
          <p className="text-sm">Scheduling: <a href="mailto:schedule@mohsmobilepros.com" className="underline">schedule@mohsmobilepros.com</a></p>
          <p className="text-sm mt-3">Vancouver, Washington</p>
          <p className="text-sm mt-2">Serving Washington • Oregon • Idaho</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/service-areas">Service Areas</Link></li>
            <li><Link href="/request-service">Request Service</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="container text-center text-sm mt-8 border-t border-white/20 pt-4">© {new Date().getFullYear()} Mohs Mobile Pros. All rights reserved.</div>
    </footer>
  )
}
