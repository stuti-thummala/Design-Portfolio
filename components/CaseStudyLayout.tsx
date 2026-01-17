'use client'
import React from 'react'
import {projects} from '../lib/projects'

export default function CaseStudyLayout({children, slug, toc}:{children: React.ReactNode, slug?: string, toc: React.ReactNode}){
  const currentIndex = slug ? projects.findIndex(p => p.slug === slug) : -1
  const nextProject = currentIndex !== -1 && currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="relative flex gap-8">
      <aside className="hidden lg:block sticky top-28 w-60 h-fit text-sm text-offwhite/80">
        <div className="bg-navy-800 p-4 rounded-xl">
          <div className="font-semibold mb-3">On This Page</div>
          {toc}
        </div>
      </aside>
      <div className="flex-1">
        {children}
        {nextProject && (
          <div className="mt-16 pt-8 border-t border-offwhite/10">
            <a href={`/work/${nextProject.slug}`} className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Next: {nextProject.title}
              <span>→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
