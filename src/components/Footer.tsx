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

          <div className="mt-4">
            <a href="#" aria-label="Mohs Mobile Pros LinkedIn" className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8H4.76V24H.24V8zM7.5 8H12v2.16h.07c.63-1.2 2.17-2.46 4.46-2.46 4.77 0 5.66 3.14 5.66 7.22V24h-4.5v-6.32c0-1.51-.03-3.45-2.1-3.45-2.11 0-2.44 1.64-2.44 3.34V24H7.5V8z" fill="#FFFFFF"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container text-center text-sm mt-8 border-t border-white/20 pt-4">© {new Date().getFullYear()} Mohs Mobile Pros. All rights reserved.</div>
    </footer>
  )
}
