import Link from 'next/link'
import Button from './Button'

export default function NavBar(){
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Mohs Mobile Pros" className="h-10 w-auto" />
          <span className="font-semibold text-xl text-brand-navy">Mohs Mobile Pros</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-slate-700 hover:text-brand-navy">Services</Link>
          <Link href="#about" className="text-slate-700 hover:text-brand-navy">About</Link>
          <Button variant="primary" asLink href="#contact">Contact</Button>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="text-brand-navy">Menu</button>
        </div>
      </div>
    </header>
  )
}
