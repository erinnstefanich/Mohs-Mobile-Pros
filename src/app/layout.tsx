import './globals.css'
import { ReactNode } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
  metadataBase: new URL('https://mohsmobilepros.com'),
  title: {
    default: 'Mohs Mobile Pros | Mobile Mohs Histology Support',
    template: '%s | Mohs Mobile Pros'
  },
  description: 'Premium mobile Mohs histology services, on-site laboratory support, and laboratory workflow support for dermatology practices across the Pacific Northwest.',
  keywords: ['Mohs histology', 'experienced Mohs technicians', 'Mohs lab support', 'cryosectioning', 'H&E staining', 'Pacific Northwest'],
  openGraph: {
    title: 'Mohs Mobile Pros',
    description: 'Mobile Mohs histology support and on-site laboratory support for dermatology practices.',
    url: 'https://mohsmobilepros.com',
    siteName: 'Mohs Mobile Pros',
    type: 'website'
  },
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white antialiased">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
