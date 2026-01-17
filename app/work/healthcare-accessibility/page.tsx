import React from 'react'
import CaseStudyLayout from '../../../components/CaseStudyLayout'
import {projects} from '../../../lib/projects'

const p = projects.find(x=> x.slug === 'healthcare-accessibility')!

export default function Case(){
  return (
    <CaseStudyLayout slug="healthcare-accessibility" toc={(
      <ul className="space-y-2 text-sm">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#problem">Problem</a></li>
        <li><a href="#context">Context & Constraints</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#exploration">Design Exploration</a></li>
        <li><a href="#system">System & Interaction Design</a></li>
        <li><a href="#tradeoffs">Tradeoffs</a></li>
        <li><a href="#reflection">Reflection</a></li>
      </ul>
    )}>
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Healthcare Accessibility: Fast Provider Discovery from Messy Data</h1>
          <div className="text-lg text-offwhite/80 mb-2">Role: Designer + Developer</div>
        </header>

        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Overview</h2>
          <p className="text-offwhite/90 leading-relaxed">This application helps users find and compare healthcare providers by normalizing inconsistent public data sources and presenting results through a fast, reliable search experience.</p>
        </section>

        <section id="problem" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Problem</h2>
          <p className="text-offwhite/90 leading-relaxed">Public healthcare provider data is fragmented, inconsistently structured, and often incomplete. APIs return malformed responses, missing fields, and conflicting schemas, which breaks traditional filtering and comparison interfaces.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">Users faced slow searches, unreliable results, and unclear information. The problem was not a lack of data, but the inability to present unreliable data in a way users could trust and act on.</p>
        </section>

        <section id="context" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Context & Constraints</h2>
          <ul className="list-disc ml-6 space-y-2 text-offwhite/90">
            <li><span className="font-semibold">Users:</span> Individuals searching for affordable healthcare options</li>
            <li><span className="font-semibold">Environment:</span> High-volume query scenarios</li>
            <li><span className="font-semibold">Constraints:</span>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Inconsistent upstream data quality</li>
                <li>Need for low-latency responses</li>
                <li>Real-time filtering and comparison</li>
                <li>Clear communication of data uncertainty</li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="research" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Research</h2>
          <ul className="list-disc ml-6 space-y-2 text-offwhite/90">
            <li>Users interpret missing data as system failure, not data limitation.</li>
            <li>Interfaces must explicitly signal confidence and uncertainty.</li>
            <li>Preprocessing data improves UX more than attempting to fix issues at render time.</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">This reframed data cleaning as a design responsibility, not just a backend task.</p>
        </section>

        <section id="exploration" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Design Exploration</h2>
          <p className="text-offwhite/90 leading-relaxed">Initial designs attempted to surface raw provider fields directly, but this led to broken layouts and misleading comparisons.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">I rejected designs that hid missing data silently, since this reduced trust.</p>
        </section>

        <section id="system" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>System & Interaction Design</h2>
          <p className="text-offwhite/90 leading-relaxed">Key design decisions:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2 text-offwhite/90">
            <li>Normalized disparate API responses into a unified schema before rendering.</li>
            <li>Applied ML-based inference to fill missing attributes where appropriate.</li>
            <li>Designed filter interactions that remain responsive under high query load.</li>
            <li>Added visual indicators to distinguish inferred data from authoritative values.</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">These decisions made the interface resilient to data inconsistency.</p>
        </section>

        <section id="tradeoffs" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Tradeoffs</h2>
          <ul className="list-disc ml-6 space-y-2 text-offwhite/90">
            <li>Accepted preprocessing overhead to reduce UI error states.</li>
            <li>Limited filter granularity to preserve performance.</li>
            <li>Chose clarity over completeness when data confidence was low.</li>
          </ul>
        </section>

        <section id="reflection" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Reflection</h2>
          <p className="text-offwhite/90 leading-relaxed">This project reinforced that data reliability directly shapes user trust. Treating messy data as a design constraint produced a more honest and usable product.</p>
        </section>
      </article>
    </CaseStudyLayout>
  )
}
