import Link from 'next/link'
import Button from './Button'

export default function NavBar(){
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Mohs Mobile Pros home">
            <img src="/logo.svg" alt="Mohs Mobile Pros" className="h-10 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          <Link href="/" className="text-slate-700 hover:text-brand-navy">Home</Link>
          <Link href="/services" className="text-slate-700 hover:text-brand-navy">Services</Link>
          <Link href="/request-service" className="text-slate-700 hover:text-brand-navy">Schedule Service</Link>
          <Link href="/about" className="text-slate-700 hover:text-brand-navy">About</Link>
          <Link href="/faq" className="text-slate-700 hover:text-brand-navy">FAQ</Link>
          <Link href="/contact" className="text-slate-700 hover:text-brand-navy">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/request-service" aria-label="Request Service">
            <button className="btn-primary">REQUEST SERVICE</button>
          </Link>
        </div>

        <div className="md:hidden">
          <button aria-label="Open menu" className="text-brand-navy">Menu</button>
        </div>
      </div>
    </header>
  )
}
