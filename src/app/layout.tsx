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

import './globals.css'
import { ReactNode } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
