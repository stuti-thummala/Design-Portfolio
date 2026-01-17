'use client'
import React, {useRef, useState} from 'react'
import Button from './Button'

export default function Hero(){
  const ref = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState({transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)'})

  function handleMove(e: React.MouseEvent){
    if(!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = (x / rect.width) - 0.5
    const py = (y / rect.height) - 0.5
    // moderate intensity
    const rotateY = px * 4
    const rotateX = -py * 4
    setStyle({transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`})
  }

  function handleLeave(){
    setStyle({transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)'});
  }

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className="relative rounded-3xl p-10 md:p-16 overflow-hidden shadow-2xl border border-offwhite/10 mb-8">
      {/* Gradient background with gold accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full blur-3xl"></div>
      
      {/* Decorative border element */}
      <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-transparent"></div>
      
      <div style={style} className="transition-transform duration-500 ease-out relative z-10">
        <div className="flex items-center justify-between gap-12">
          <div className="flex-1 min-w-0">
            <div className="mb-4">
              <p className="text-xs font-semibold tracking-widest text-amber-400/80 uppercase">Product Design Portfolio</p>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 text-offwhite leading-tight">Stuti<br/>Thummala</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-8"></div>
            
            {/* Education and Availability Grid */}
            <div className="grid md:grid-cols-2 gap-12 mb-12 py-8 border-y border-amber-400/20">
              <div>
                <h3 className="text-amber-400 font-semibold text-xs mb-4 uppercase tracking-widest">Education</h3>
                <div className="space-y-2 text-offwhite">
                  <p className="text-lg font-semibold leading-snug">Bachelor of Science in Computational Media</p>
                  <p className="text-base font-medium text-offwhite/90">Georgia Institute of Technology</p>
                  <p className="text-sm text-offwhite/60 mt-3">Graduating May 2027</p>
                  <p className="text-sm text-offwhite/60">Thread in AI + Interaction Design</p>
                  <p className="text-sm text-offwhite/60">Minor in Business Administration</p>
                </div>
              </div>
              <div className="border-l border-amber-400/30 pl-12">
                <h3 className="text-amber-400 font-semibold text-xs mb-4 uppercase tracking-widest">Availability</h3>
                <div className="space-y-3 text-offwhite/90">
                  <p className="font-semibold text-offwhite text-base">Available for Summer 2026</p>
                  <p className="text-sm leading-relaxed">Full-time internships in product design</p>
                  <p className="text-sm text-offwhite/60">In-person, remote, or hybrid</p>
                </div>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-offwhite/60 mb-8 max-w-xl leading-relaxed">I design interaction-heavy, data-driven systems that balance technical constraints with elegant user experiences.</p>
            <div className="flex gap-4">
              <Button href="/about" variant="outline">About</Button>
            </div>
          </div>
          <div className="ml-4 rounded-2xl overflow-hidden w-56 h-56 md:w-64 md:h-64 shrink-0 shadow-2xl relative group">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-blue-500 to-amber-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-transparent to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src="/images/HEADSHOT 2025.jpg" alt="Stuti Thummala" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
