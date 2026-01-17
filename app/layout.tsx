import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Stuti Thummala — Product Designer + Developer',
  description: 'Portfolio — Interaction-heavy, data-driven systems.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-navy-900 text-offwhite antialiased">
        <div className="relative overflow-hidden">
          <Navbar />
          <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
