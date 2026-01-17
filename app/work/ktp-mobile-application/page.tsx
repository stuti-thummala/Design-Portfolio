'use client'
import React, { useState } from 'react'
import CaseStudyLayout from '../../../components/CaseStudyLayout'
import {projects} from '../../../lib/projects'

const p = projects.find(x=> x.slug === 'ktp-mobile-application')!

const screens = [
  {
    image: "/images/ktp mobile app/home screen.gif",
    title: "Home Screen",
    caption: "Members see a real-time feed of updates and a live leaderboard showing current rankings. Immediate visual confirmation of participation and progress."
  },
  {
    image: "/images/ktp mobile app/About Page.gif",
    title: "Member Profile",
    caption: "Members create professional profiles with personal information, LinkedIn links, and personal websites. Identity and accomplishments are centrally visible to the chapter."
  },
  {
    image: "/images/ktp mobile app/skill log.gif",
    title: "Skill Log & Goal Tracking",
    caption: "Members log goals and track progress in real time. Instant visual confirmation removes ambiguity and eliminates the need for validation questions."
  },
  {
    image: "/images/ktp mobile app/events gif.gif",
    title: "Professional Development Events",
    caption: "Location-based discovery of chapter events and professional development opportunities, integrated directly into the mobile experience."
  },
  {
    image: "/images/ktp mobile app/mental health.gif",
    title: "Mental Health Resources",
    caption: "Centralized access to mental health resources and support, positioning the platform as an everyday utility for member wellbeing."
  }
]

export default function Case(){
  const [currentIdx, setCurrentIdx] = useState(0)

  return (
    <CaseStudyLayout slug="ktp-mobile-application" toc={(
      <ul className="space-y-2 text-sm">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#problem">Problem</a></li>
        <li><a href="#users">Users and Constraints</a></li>
        <li><a href="#research">Research and Insights</a></li>
        <li><a href="#strategy">Design Strategy</a></li>
        <li><a href="#system">System and Interaction Design</a></li>
        <li><a href="#tradeoffs">Tradeoffs</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#future">Future Improvements</a></li>
        <li><a href="#reflection">Reflection</a></li>
      </ul>
    )}>
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">KTP Mobile Application</h1>
          <div className="text-lg text-offwhite/80 mb-2">Designing a Mobile Platform for Progress, Identity, and Community Visibility</div>
          <div className="text-sm text-offwhite/70">Role: Product Designer + Mobile Engineer | Platform: iOS and Android | Context: KTP Chapter Deployment | Team Size: Small cross-functional student team | Users: ~100 active members per chapter</div>
        </header>

        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Overview</h2>
          <p className="text-offwhite/90 leading-relaxed">KTP Mobile is a mobile application designed to make participation, progress, and member identity immediately visible within a collegiate organization. The product enables members to create goals, log progress, and present a professional profile, while giving organizers a reliable, low-friction way to understand engagement without manual reconciliation.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">In addition to goal tracking, the app centralizes mental health resources and location-based professional development events, positioning the platform as an everyday utility rather than a single-purpose tracker.</p>
        </section>

        <section id="problem" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Problem</h2>
          <p className="text-offwhite/90 leading-relaxed">Before this application existed, participation and progress were tracked informally. Members logged effort verbally or through messages and later asked organizers questions like "did this count?" because there was no authoritative confirmation. Organizers manually reconciled points after events, often fielding repeated clarification questions and resolving disputes without a shared source of truth.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">There was also no unified place for members to express identity beyond attendance. Information like LinkedIn profiles, personal websites, interests, and ongoing goals lived outside the organization, limiting visibility and weakening accountability.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">The issues reinforced each other:</p>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90 mt-2">
            <li>Delayed feedback reduced trust</li>
            <li>Invisible progress increased validation requests</li>
            <li>Scattered identity data reduced engagement</li>
            <li>Manual reconciliation increased organizer overhead</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3 font-semibold">The core problem became:</p>
          <p className="text-offwhite/90 leading-relaxed mt-2 italic">How do you design a mobile application where progress and identity are immediately visible, so users do not need to ask for validation and organizers are not forced to manually arbitrate participation?</p>
        </section>

        <section id="users" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Users and Constraints</h2>
          
          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Primary users</h3>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Members tracking goals and contributions</li>
            <li>Organizers monitoring participation at scale</li>
          </ul>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Usage characteristics</h3>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Short, interruptible mobile sessions</li>
            <li>Progress logged immediately after activities</li>
            <li>Frequent context switching</li>
          </ul>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Constraints</h3>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>~100 concurrent users during peak periods</li>
            <li>Cross-platform parity</li>
            <li>Real-time updates without refresh</li>
            <li>Performance on mid-range devices</li>
          </ul>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Success criteria</h3>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Users see confirmation instantly</li>
            <li>Identity and accomplishments are visible</li>
            <li>Organizer intervention decreases</li>
          </ul>
        </section>

        <section id="research" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Research and Insights</h2>
          <p className="text-offwhite/90 leading-relaxed">Research on goal-setting and habit formation consistently shows that immediate feedback increases follow-through, particularly in mobile environments. Social accountability research also indicates that effort is more likely to persist when progress is visible to peers.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">Observed behaviors reinforced these findings:</p>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90 mt-2">
            <li>Users checked current state far more than history</li>
            <li>Missing confirmation triggered clarification questions</li>
            <li>Historical analytics were rarely referenced</li>
            <li>Lightweight profile visibility increased engagement</li>
            <li>Centralized resources reduced drop-off</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3 font-semibold">The key insight was:</p>
          <p className="text-offwhite/90 leading-relaxed mt-2 italic">Visibility matters more than depth. Trust comes from immediacy, not analytics.</p>
        </section>

        <section id="strategy" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Design Strategy</h2>
          <p className="text-offwhite/90 leading-relaxed">The product was designed around a single governing principle:</p>
          <p className="text-offwhite/90 leading-relaxed mt-3 font-semibold italic">Progress and identity must be visible immediately, without explanation.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">Every screen, interaction, and state transition was evaluated against this principle.</p>
        </section>

        <section id="system" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>System and Interaction Design</h2>
          <p className="text-offwhite/90 leading-relaxed">The application prioritizes glanceable, state-driven surfaces.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3 font-semibold">Key decisions:</p>
          <ul className="list-disc ml-6 space-y-2 text-offwhite/90 mt-2">
            <li>Goal cards display current status and recency to confirm action</li>
            <li>Progress inputs trigger immediate visual confirmation</li>
            <li>A profile page allows members to add personal information, link LinkedIn, and share a personal website with the chapter</li>
            <li>Shared discovery surfaces expose member work and accomplishments</li>
            <li>Mental health resources and professional development events surface based on user location</li>
            <li>Reactive state updates propagate changes without manual refresh</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">These choices removed ambiguity while reinforcing accountability and recognition.</p>
        </section>

        <section id="tradeoffs" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Tradeoffs</h2>
          <ul className="list-disc ml-6 space-y-2 text-offwhite/90">
            <li>Deprioritized historical analytics in favor of current state clarity</li>
            <li>Limited customization to preserve consistency and speed</li>
            <li>Accepted eventual consistency in edge cases to maintain responsiveness</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">Each tradeoff favored trust, usability, and organizational clarity over completeness.</p>
        </section>

        <section id="results" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Results</h2>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Fewer validation questions from members</li>
            <li>Reduced organizer reconciliation effort</li>
            <li>Increased frequency of progress updates</li>
            <li>Improved visibility into member growth and engagement</li>
          </ul>
        </section>

        <section id="future" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Future Improvements</h2>
          
          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Visual Polish and Design System Maturity</h3>
          <p className="text-offwhite/90 leading-relaxed">The current UI prioritizes speed of development and functional clarity over visual refinement. While the interaction model and information architecture were validated through use, the visual layer was intentionally lightweight and does not reflect the final design quality I would ship in a production environment.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3 font-semibold">Planned improvements include:</p>
          <ul className="list-disc ml-6 space-y-2 text-offwhite/90 mt-2">
            <li>Consolidating color, typography, spacing, and elevation into a cohesive design system</li>
            <li>Strengthening visual hierarchy to better separate primary actions from secondary content</li>
            <li>Refining card density, layout rhythm, and motion to reduce perceived clutter</li>
            <li>Introducing clearer affordances for progress state, ownership, and completion</li>
            <li>Improving accessibility contrast ratios and touch target consistency across devices</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">These refinements would improve legibility and polish without changing the underlying interaction model, which has already proven effective.</p>
        </section>

        <section id="reflection" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Reflection</h2>
          <p className="text-offwhite/90 leading-relaxed">This project reinforced that strong mobile products remove the need for explanation. When progress and identity are immediately visible, users trust the system and act without prompting. Reducing ambiguity was more impactful than adding features, and clarity consistently outperformed complexity.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Product Screens</h2>
          <div className="space-y-4 flex flex-col items-center">
            <div className="relative max-w-sm">
              <img
                src={screens[currentIdx].image}
                alt={screens[currentIdx].title}
                className="w-full rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%230B2540" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage not found%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentIdx((currentIdx - 1 + screens.length) % screens.length)}
                className="bg-amber-400 hover:bg-amber-500 text-navy-900 font-bold py-3 px-4 rounded-lg transition-colors"
              >
                ←
              </button>
              <div className="flex gap-3">
                {screens.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === currentIdx ? 'bg-amber-400 w-4 h-4' : 'bg-offwhite/30 hover:bg-offwhite/50'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentIdx((currentIdx + 1) % screens.length)}
                className="bg-amber-400 hover:bg-amber-500 text-navy-900 font-bold py-3 px-4 rounded-lg transition-colors"
              >
                →
              </button>
            </div>

            <div className="text-center pt-2">
              <h3 className="text-lg font-semibold text-amber-400">{screens[currentIdx].title}</h3>
              <p className="text-sm text-offwhite/70 mt-2">{screens[currentIdx].caption}</p>
            </div>
          </div>
        </section>
      </article>
    </CaseStudyLayout>
  )
}
