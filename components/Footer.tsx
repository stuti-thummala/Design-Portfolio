import React from 'react'

export default function Footer(){
  return (
    <footer className="w-full mt-16 py-10">
      <div className="max-w-6xl mx-auto px-6 text-sm text-offwhite/70">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Stuti Thummala. All rights reserved.</div>
          <div className="flex gap-3 items-center">
            <a href="#" className="hover:underline">Email</a>
            <span className="h-4 w-px bg-offwhite/10" />
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
