import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-navy)]">Mohs Mobile Pros</h3>
          <p className="mt-2 text-sm text-slate-600">Mobile Mohs histology services across WA, OR, ID</p>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-slate-800">Contact</h4>
          <ul className="mt-2 text-sm text-slate-600">
            <li>Phone: <a href="tel:3606061030" className="text-[var(--color-navy)]">360-606-1030</a></li>
            <li>Email: <a href="mailto:info@" className="text-[var(--color-navy)]">info@</a></li>
            <li>Schedule: <a href="mailto:schedule@" className="text-[var(--color-navy)]">schedule@</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-slate-800">Serving</h4>
          <ul className="mt-2 text-sm text-slate-600">
            <li>Washington</li>
            <li>Oregon</li>
            <li>Idaho</li>
          </ul>
        </div>
      </div>

      <div className="bg-[var(--color-light-gray)]">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-slate-600">© {new Date().getFullYear()} Mohs Mobile Pros — All rights reserved.</div>
      </div>
    </footer>
  )
}
