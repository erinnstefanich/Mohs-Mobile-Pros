import './globals.css'
import { ReactNode } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Mohs Mobile Pros',
  description: 'Professional mobile Mohs surgery services — compassionate, convenient, and specialized skin cancer care. We bring expert Mohs surgery to your facility.',
  openGraph: {
    title: 'Mohs Mobile Pros',
    description: 'Professional mobile Mohs surgery services — compassionate, convenient, and specialized skin cancer care.',
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
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
