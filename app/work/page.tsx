import React from 'react'
import {projects} from '../../lib/projects'
import Card from '../../components/Card'

export default function WorkPage(){
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Case Studies</h1>
        <div className="flex gap-2 mt-3">
          {['All','Systems','Data Viz','AI','Mobile'].map(c=> (
            <button key={c} className="px-3 py-1 bg-navy-800 text-offwhite rounded-full text-sm">{c}</button>
          ))}
        </div>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p=> (
          <Card key={p.slug} project={{slug:p.slug,title:p.title,subtitle:p.subtitle,tags:p.tags}} />
        ))}
      </div>
    </div>
  )
}
