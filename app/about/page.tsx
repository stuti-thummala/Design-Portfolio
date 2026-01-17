import React from 'react'

export default function About(){
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-widest text-amber-400/80 uppercase">About</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-4 text-offwhite leading-tight">Stuti Thummala</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-8"></div>
          
          <div className="space-y-5 text-lg text-offwhite/80 leading-relaxed max-w-3xl">
            <p>I'm a product design student with a strong technical background in software engineering. Learning to build systems before designing for them has shaped how I think about products. I naturally consider things like state, performance, data flow, and edge cases while I'm designing, which helps me create interfaces that are realistic to build and resilient in real use.</p>
            <p>Because I've worked hands-on with code, I'm comfortable designing alongside constraints instead of around them. I think about how interactions will be implemented, how data moves through a system, and what happens when inputs are messy or incomplete. That perspective helps me collaborate closely with engineers and make design decisions that hold up beyond the ideal case.</p>
            <p>I'm especially interested in products where complexity needs to be surfaced thoughtfully, whether that's through data visualization, real-time interaction, or tools that help people make sense of noisy information. I enjoy the challenge of turning technically dense systems into experiences that feel clear and usable.</p>
            <p>Outside of design and development, I like hiking, running, and playing pickleball. I'm drawn to activities that reward iteration and steady improvement, which tends to mirror how I approach learning and building products.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mb-16 relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-blue-500/5 to-navy-900/50"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative z-10 p-10 md:p-12 border border-amber-400/20">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-blue-500 to-amber-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur -z-10"></div>
                <div className="rounded-2xl overflow-hidden w-48 h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-transparent to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img src="/images/HEADSHOT 2025.jpg" alt="Stuti Thummala" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-semibold mb-2 text-offwhite">Let's connect</h2>
              <p className="text-offwhite/70 mb-6 text-sm">I'm always interested in discussing product design, systems thinking, and interesting problems.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:sthummala7@gatech.edu" 
                  className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-3 text-navy-900 font-semibold text-sm rounded-full whitespace-nowrap"
                >
                  <span className="text-lg leading-none">📧</span>
                  Email me
                </a>
                <a 
                  href="https://www.linkedin.com/in/stuti-thummala/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-3 text-navy-900 font-semibold text-sm rounded-full whitespace-nowrap"
                >
                  <span className="text-lg leading-none">💼</span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold mb-2 text-offwhite">Skills & Approach</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-10"></div>
          
          <div className="grid md:grid-cols-2 gap-5">
            <div className="group p-8 bg-gradient-to-br from-navy-800/60 to-navy-900/40 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 hover:from-navy-800 hover:to-navy-800/60 transition-all duration-300">
              <h4 className="font-semibold text-lg text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">Mobile app development (iOS & Android)</h4>
              <p className="text-sm text-offwhite/80">Building real-time, cross-platform apps with Flutter + Firebase.</p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-navy-800/60 to-navy-900/40 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 hover:from-navy-800 hover:to-navy-800/60 transition-all duration-300">
              <h4 className="font-semibold text-lg text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">Systems-aware product design</h4>
              <p className="text-sm text-offwhite/80">Designing interfaces that reflect real system behavior, not idealized flows.</p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-navy-800/60 to-navy-900/40 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 hover:from-navy-800 hover:to-navy-800/60 transition-all duration-300">
              <h4 className="font-semibold text-lg text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">Interaction design for complex data</h4>
              <p className="text-sm text-offwhite/80">Turning dense, time-based or noisy data into clear, usable interactions.</p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-navy-800/60 to-navy-900/40 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 hover:from-navy-800 hover:to-navy-800/60 transition-all duration-300">
              <h4 className="font-semibold text-lg text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">Data visualization & visual reasoning</h4>
              <p className="text-sm text-offwhite/80">Helping users see patterns, relationships, and change over time.</p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-navy-800/60 to-navy-900/40 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 hover:from-navy-800 hover:to-navy-800/60 transition-all duration-300">
              <h4 className="font-semibold text-lg text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">Edge-case and failure-state design</h4>
              <p className="text-sm text-offwhite/80">Designing for incomplete data, latency, and unexpected system states.</p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-navy-800/60 to-navy-900/40 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 hover:from-navy-800 hover:to-navy-800/60 transition-all duration-300">
              <h4 className="font-semibold text-lg text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">Design–engineering collaboration</h4>
              <p className="text-sm text-offwhite/80">Translating between product intent and technical execution.</p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-navy-800/60 to-navy-900/40 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 hover:from-navy-800 hover:to-navy-800/60 transition-all duration-300">
              <h4 className="font-semibold text-lg text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">AI-assisted design workflows</h4>
              <p className="text-sm text-offwhite/80">Leveraging AI tools to accelerate design iteration and exploration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
