import './globals.css'
import { ReactNode } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import FooterContent from '../components/FooterContent'

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
    canonical: 'https://mohsmobilepros.com/'
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    google: 'oCI0TX2rhTTrwV8kj7IUU1CGrQGjaVqFCwZV4YvQHic'
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-brand-navy focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-brand-orange/30">
          Skip to Main Content
        </a>
        <NavBar />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <Footer homeFooter={<FooterContent home />} interiorFooter={<FooterContent />} />
      </body>
    </html>
  )
}
