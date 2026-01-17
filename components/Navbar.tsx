'use client'
import Link from 'next/link'
import React from 'react'

export default function Navbar(){
  return (
    <header className="w-full py-4 bg-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <Link href="/" className="text-sm font-medium btn-gold px-4 py-2 inline-block">Home</Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/about" className="text-sm text-offwhite/80 hover:text-offwhite">About</Link>
          <Link href="/resume" className="text-sm text-offwhite/80 hover:text-offwhite">Resume</Link>
          <Link href="/work" className="ml-4 px-4 py-2 btn-gold text-sm">View Case Studies</Link>
        </nav>
        <div className="md:hidden">
          <Link href="/work" className="px-3 py-2 btn-gold text-sm">Case Studies</Link>
        </div>
      </div>
    </header>
  )
}
