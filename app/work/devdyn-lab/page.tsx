import React from 'react'
import CaseStudyLayout from '../../../components/CaseStudyLayout'
import {projects} from '../../../lib/projects'

const p = projects.find(x=> x.slug === 'devdyn-lab')!

export default function Case(){
  return (
    <CaseStudyLayout slug="devdyn-lab" toc={(
      <ul className="space-y-2 text-sm">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#problem">Problem</a></li>
        <li><a href="#context">Context & Constraints</a></li>
        <li><a href="#research">Research & Insights</a></li>
        <li><a href="#exploration">Design Exploration</a></li>
        <li><a href="#system">System & Interaction Design</a></li>
        <li><a href="#tradeoffs">Tradeoffs</a></li>
        <li><a href="#reflection">Reflection</a></li>
      </ul>
    )}>
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{p.title}</h1>
          <p className="text-lg text-offwhite/80 mb-2">Developmental Dynamics Lab, University of Georgia</p>
          <div className="text-sm text-offwhite/70">Role: {p.role}</div>
        </header>

        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Overview</h2>
          <p className="text-offwhite/90 leading-relaxed">Researchers in the Developmental Dynamics Lab study human development by collecting multiple physiological signals alongside video recordings of participants. My work focused on designing and building a system that allows researchers to visually explore synchronized behavioral and physiological data in real time and offline, making it easier to identify meaningful patterns across signals.</p>
        </section>

        <section id="problem" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Problem</h2>
          <p className="text-offwhite/90 leading-relaxed mb-3">Researchers analyze complex experimental sessions that include heart rate, blood pressure, fNIRS brain activity, motion data, and synchronized video footage. Each signal is sampled at different rates and stored separately, which makes it difficult to understand how changes in physiology relate to observable behavior.</p>
          <p className="text-offwhite/90 leading-relaxed mb-3">Existing workflows required researchers to manually align timestamps across tools, scrub video in one interface, and inspect signals in another. This created cognitive overload and made it hard to answer basic questions like when a heart rate spike occurred relative to a behavioral event, or how neural activity changed during specific moments in the video.</p>
          <p className="text-offwhite/90 leading-relaxed">The core problem was not data collection, but the absence of an interactive system that could present high-frequency multimodal data in a single, time-aligned visual space without sacrificing performance or clarity.</p>
        </section>

        <section id="context" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Context & Constraints</h2>
          <p className="text-offwhite/90 mb-2"><strong>Users:</strong> Developmental psychology researchers and lab analysts</p>
          <p className="text-offwhite/90 mb-2"><strong>Environment:</strong> Live experimental sessions and post-hoc analysis</p>
          <p className="text-offwhite/90 mb-2"><strong>Data characteristics:</strong></p>
          <ul className="list-disc ml-6 text-offwhite/90">
            <li>Multiple signals with different sampling rates</li>
            <li>Long session durations</li>
            <li>High-frequency time-series data</li>
          </ul>
          <p className="text-offwhite/90 mt-3 mb-2"><strong>Constraints:</strong></p>
          <ul className="list-disc ml-6 text-offwhite/90">
            <li>Real-time interaction without UI lag</li>
            <li>Offline access for field or review work</li>
            <li>Secure handling of sensitive data</li>
            <li>Scalability across large datasets</li>
          </ul>
        </section>

        <section id="research" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Research & Insights</h2>
          <ul className="list-disc ml-6 text-offwhite/90 space-y-2">
            <li>Researchers frequently lost context when switching between tools for video and signals.</li>
            <li>Manual timestamp alignment increased error risk and slowed analysis.</li>
            <li>Raw physiological signals were too noisy to interpret visually without preprocessing.</li>
            <li>Analysts wanted to explore data dynamically rather than rely on static plots.</li>
          </ul>
          <p className="mt-4 text-offwhite/90 leading-relaxed">One key insight was that temporal alignment itself needed to be an interaction, not a background assumption.</p>
        </section>

        <section id="exploration" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Design Exploration</h2>
          <p className="text-offwhite/90 leading-relaxed mb-3">Early concepts explored static dashboards with synchronized timestamps, but these failed during real-time use because even small delays caused visual drift between signals and video.</p>
          <p className="text-offwhite/90 leading-relaxed">I rejected designs that relied on polling-based updates, since they introduced noticeable latency and broke the sense of continuity during playback and scrubbing.</p>
        </section>

        <section id="system" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>System & Interaction Design</h2>
          <p className="text-offwhite/90 leading-relaxed mb-3">I designed the system around coordinated multiple views, where interactions in one view immediately propagate across all others.</p>
          <p className="text-offwhite/90 mb-2"><strong>Key design decisions:</strong></p>
          <ul className="list-disc ml-6 text-offwhite/90 space-y-2">
            <li>Timeline scrubbing synchronizes video playback with all physiological signals.</li>
            <li>Zooming or brushing a time range highlights corresponding regions across every modality.</li>
            <li>Dense signals render using Canvas for performance, while interactive overlays use SVG for precision and accessibility.</li>
            <li>Event-based streaming ensures updates flow continuously rather than in discrete refresh cycles.</li>
          </ul>
          <p className="mt-4 text-offwhite/90 leading-relaxed">These choices allowed users to explore patterns fluidly without mentally reconstructing relationships across tools.</p>
        </section>

        <section id="tradeoffs" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Tradeoffs</h2>
          <ul className="list-disc ml-6 text-offwhite/90 space-y-2">
            <li>Prioritized perceived responsiveness over perfect real-time accuracy during live playback.</li>
            <li>Accepted slight signal smoothing delays to preserve visual continuity.</li>
            <li>Limited on-screen density to avoid overwhelming users, even when more data was available.</li>
          </ul>
        </section>

        <section id="reflection" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Reflection</h2>
          <p className="text-offwhite/90 leading-relaxed">This project reinforced that temporal coordination is a core product design problem, not just a backend concern. Making time explorable reduced cognitive load more than adding additional analytics ever could.</p>
        </section>
      </article>
    </CaseStudyLayout>
  )
}
