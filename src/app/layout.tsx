import './globals.css'
import { ReactNode } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Mohs Mobile Pros',
  description: 'Mohs Mobile Pros provides professional mobile Mohs histology services — onsite frozen sections, H&E staining, and laboratory support for dermatology practices across Washington, Oregon, and Idaho.',
  openGraph: {
    title: 'Mohs Mobile Pros',
    description: 'Onsite Mohs histology services: frozen sections, H&E staining, and laboratory workflow support across the Pacific Northwest.',
    url: 'https://mohsmobilepros.com',
    siteName: 'Mohs Mobile Pros'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        {/* skip link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-16 focus:left-6 focus:bg-white focus:text-[var(--color-navy)] focus:px-3 focus:py-2 focus:rounded">Skip to content</a>

        <NavBar />
        <main id="main-content" className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
