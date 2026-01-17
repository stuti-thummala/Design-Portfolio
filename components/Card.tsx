import React from 'react'
import Link from 'next/link'

type Project = {
  slug: string
  title: string
  subtitle: string
  tags: string[]
}

export default function Card({project}:{project:Project}){
  return (
    <article className="card hover:translate-y-[-12px] transition-transform duration-300">
      <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
      <p className="text-sm text-slate-700 mb-3">{project.subtitle}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(t=> (
          <span key={t} className="px-2 py-1 text-xs bg-navy-800 text-offwhite rounded-full">{t}</span>
        ))}
      </div>
      <div>
        <Link href={`/work/${project.slug}`} className="text-sm text-navy-900 hover:underline">Read case study →</Link>
      </div>
    </article>
  )
}
