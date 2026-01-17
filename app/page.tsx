import React from 'react'
import Link from 'next/link'
import {projects} from '../lib/projects'
import Card from '../components/Card'
import Button from '../components/Button'
import Chip from '../components/Chip'
import Hero from '../components/Hero'

export default function Home(){
  return (
    <>
      <div className="grid gap-12">
        {/* Hero */}
        <section>
          <Hero />
        </section>
        {/* Case Studies */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Case Studies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map(p=> (
              <Card key={p.slug} project={{slug:p.slug,title:p.title,subtitle:p.subtitle,tags:p.tags}} />
            ))}
          </div>
        </section>

        {/* Skills Strip */}
        <section>
          <div className="flex flex-wrap gap-3">
            {['Interaction Design','Systems Thinking','Prototyping','Data Viz','React','D3','Next.js','Java','Python','Research'].map(s=> (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-navy-800 p-6 rounded-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xl font-semibold">Open to Summer 2026 Product Design Internships</div>
              <div className="text-sm text-offwhite/70">Available for hybrid or remote roles.</div>
            </div>
            <div>
              <a href="mailto:sthummala7@gatech.edu" className="btn-gold inline-block px-5 py-2">Contact</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
