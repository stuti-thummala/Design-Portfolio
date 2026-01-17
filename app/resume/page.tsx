import React from 'react'
import Link from 'next/link'

export default function Resume(){
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold mb-4">Resume</h1>
      <div className="bg-navy-800 p-6 rounded mb-4">
        <h2 className="text-lg font-semibold">Stuti Thummala</h2>
        <p className="text-sm text-offwhite/80 mt-2">Product Designer + Developer — available for Summer 2026 & Fall 2026 internships (in-person / remote / hybrid)</p>
      </div>
      <div className="flex gap-3">
        <a href="/images/RESUME 2026 Stuti Thummala.pdf" target="_blank" rel="noopener noreferrer" className="btn-gold px-4 py-2">Download PDF</a>
        <a href="mailto:sthummala7@gatech.edu" className="btn-outline px-4 py-2">Email</a>
        <a href="https://www.linkedin.com/in/stuti-thummala/" target="_blank" className="btn-outline px-4 py-2">LinkedIn</a>
      </div>
    </div>
  )
}
