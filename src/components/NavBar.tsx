import Link from 'next/link'

export default function NavBar(){
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Mohs Mobile Pros" className="h-10 w-auto" />
          <span className="font-semibold text-xl text-mohs-navy">Mohs Mobile Pros</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-slate-700 hover:text-mohs-navy">Services</Link>
          <Link href="#about" className="text-slate-700 hover:text-mohs-navy">About</Link>
          <Link href="#contact" className="px-4 py-2 bg-mohs-orange text-white rounded-md">Contact</Link>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="text-mohs-navy">Menu</button>
        </div>
      </div>
    </header>
  )
}
