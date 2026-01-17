'use client'
import React, { useState } from 'react'
import CaseStudyLayout from '../../../components/CaseStudyLayout'
import {projects} from '../../../lib/projects'

const p = projects.find(x=> x.slug === 'eyewitness')!

const screens = [
  {
    image: "/images/eyewitness/Calibration & Playback.png",
    title: "Calibration & Playback",
    caption: "Users calibrate their gaze using on-screen markers, then watch the video while gaze, fixations, and blinks are recorded in real time."
  },
  {
    image: "/images/eyewitness/Memory Pulse.png",
    title: "Memory Pulse",
    caption: "After viewing the video, users answer a short sequence of recall questions drawn from a randomized question bank to capture what details they believe they remember before seeing their attention data."
  },
  {
    image: "/images/eyewitness/Impact Reveal.png",
    title: "Impact Reveal",
    caption: "The system computes an overall impact score by combining recall accuracy with attention metrics, compares user answers against ground truth, and reports how attention was distributed across key scene elements such as the suspect, environment, and jewels relative to an ideal baseline."
  },
  {
    image: "/images/eyewitness/Bias Lab Replay.png",
    title: "Bias Lab Replay",
    caption: "Users can scrub through the video timeline, toggle attention overlays such as heatmaps, gaze trails, and spotlight regions, and inspect time-stamped fixation and blink events to see exactly how selective attention shifted moment by moment and where recall gaps were likely introduced."
  },
  {
    image: "/images/eyewitness/Insights to Actions.png",
    title: "Insights to Actions",
    caption: "Users enter their name and ZIP code, and the application identifies their local representatives, generates a ready-to-send advocacy email, and surfaces concrete next steps such as signing a state-level petition, volunteering at a local innocence or expungement clinic, or sharing campaign materials."
  }
]

export default function Case(){
  const [currentIdx, setCurrentIdx] = useState(0)

  return (
    <CaseStudyLayout slug="eyewitness" toc={(
      <ul className="space-y-2 text-sm">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#problem">Problem</a></li>
        <li><a href="#users">Users and Constraints</a></li>
        <li><a href="#strategy">Design Strategy</a></li>
        <li><a href="#flow">Experience Flow</a></li>
        <li><a href="#visualization">Visualization and Insight Design</a></li>
        <li><a href="#decisions">Key Design Decisions</a></li>
        <li><a href="#action">From Insight to Action</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#reflection">Reflection</a></li>
      </ul>
    )}>
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Eyewitness: Making Attention Failure Visible</h1>
          <div className="text-lg text-offwhite/80 mb-2">Role: Product Designer + Engineer</div>
          <div className="text-sm text-offwhite/70">Platform: Web application (classroom + solo use) | Audience: General public and students | KTPHacks 2025 — 1st Place</div>
        </header>

        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Overview</h2>
          <p className="text-offwhite/90 leading-relaxed">Eyewitness is an interactive web experience that reveals how selective attention shapes memory and confidence. Users watch a short simulated museum heist video, unaware that their gaze and blink behavior are being tracked. Afterward, the product visualizes how their attention actually unfolded and connects those patterns to research on eyewitness unreliability, then offers immediate, state-specific civic actions.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">The goal is not to test users or judge them, but to change beliefs by making attention failure personally observable.</p>
        </section>

        <section id="problem" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Problem</h2>
          <p className="text-offwhite/90 leading-relaxed">People trust eyewitness testimony because it feels reliable. When we watch an event unfold, we assume that seeing equals noticing and that noticing equals remembering. In reality, human attention is limited and selective. What we fail to attend to is often never encoded, even when we feel confident afterward.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">The challenge is that this gap is invisible to most people. Educational explanations rely on statistics or expert authority, which rarely change intuition. Users may accept that memory is flawed in theory, but still believe they would notice the important details.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">From a product design perspective, the problem was clear:</p>
          <p className="text-offwhite/90 leading-relaxed mt-3 italic">How do you help non-expert users recognize the limits of their own attention without instruction, testing, or moral judgment, and then translate that realization into informed action?</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">This required designing an experience where insight comes from direct observation of one's own behavior, not explanation.</p>
        </section>

        <section id="users" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Users and Constraints</h2>
          
          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Primary users</h3>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>General public with no background in psychology or UX</li>
            <li>Students in classroom or self-guided learning settings</li>
          </ul>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Key constraints</h3>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>First-time users only</li>
            <li>No instructions or training allowed before the experience</li>
            <li>Webcam-based eye tracking with inherent noise</li>
            <li>Short session length to preserve natural attention</li>
            <li>High risk of misinterpretation if raw data is shown</li>
          </ul>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Success criteria</h3>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Users revise their belief about eyewitness reliability</li>
            <li>Users feel surprised but not judged</li>
            <li>Users take a follow-up civic or educational action</li>
          </ul>
        </section>

        <section id="strategy" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Design Strategy</h2>
          <p className="text-offwhite/90 leading-relaxed">The experience is intentionally staged around misaligned expectations.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">Users believe they are simply watching a video. The product does not frame the task as a test, does not tell users what to look for, and avoids evaluative language. This preserves natural viewing behavior and avoids priming, which research shows can significantly alter attention patterns.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3 font-semibold">Key principles:</p>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Experience before explanation</li>
            <li>Interpretability over precision</li>
            <li>Insight without accusation</li>
          </ul>
        </section>

        <section id="flow" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Experience Flow</h2>
          
          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">1. Uninstructed Viewing</h3>
          <p className="text-offwhite/90 leading-relaxed">Users are dropped directly into a fast-paced 10-second museum heist video. There are no prompts, goals, or warnings. This mirrors real-world witnessing, where attention is untrained and unscripted.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">During playback, the system passively captures:</p>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Gaze direction and fixation duration</li>
            <li>Blink timing and stability</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">All tracking occurs invisibly to preserve ecological validity.</p>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">2. Moment of Truth</h3>
          <p className="text-offwhite/90 leading-relaxed">After the video ends, users see a single prompt that reframes certainty as a question rather than a failure. This moment is critical: it prepares users for reflection without defensiveness.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">Only after this pause are insights revealed.</p>
        </section>

        <section id="visualization" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Visualization and Insight Design</h2>
          <p className="text-offwhite/90 leading-relaxed">The reveal is structured to move from intuitive → analytical, preventing cognitive overload.</p>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Attention Ledger</h3>
          <p className="text-offwhite/90 leading-relaxed">A categorical breakdown shows how attention was distributed across the suspect, environment, and distractors. Values are compared against a trained observer baseline to anchor interpretation and avoid arbitrary scoring.</p>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Narrative Preview</h3>
          <p className="text-offwhite/90 leading-relaxed">Instead of raw metrics, the system translates attention data into plain-language observations, such as attention drift or missed focal elements. This bridges the gap between data and meaning for non-expert users.</p>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Attention Heatmap</h3>
          <p className="text-offwhite/90 leading-relaxed">Aggregated, smoothed heatmaps visualize where attention clustered over time. Gaussian smoothing is applied to emphasize sustained focus rather than noisy gaze jitter, aligning with best practices in attention visualization.</p>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Replay and Inspection</h3>
          <p className="text-offwhite/90 leading-relaxed">Users can scrub through the scene, toggle overlays, and inspect how selective attention shaped what stuck. This supports exploration without framing the experience as a performance review.</p>
        </section>

        <section id="decisions" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Key Design Decisions</h2>
          <ul className="list-disc ml-6 space-y-2 text-offwhite/90">
            <li>Avoided raw gaze traces to prevent overinterpretation and false precision.</li>
            <li>Delayed explanation until after the reveal to avoid priming effects.</li>
            <li>Used comparative baselines to ground insights without shaming.</li>
            <li>Maintained a calm visual tone to keep users receptive rather than defensive.</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">Each decision prioritized comprehension and trust over technical novelty.</p>
        </section>

        <section id="action" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>From Insight to Action</h2>
          <p className="text-offwhite/90 leading-relaxed">After users recognize their own attention gaps, Eyewitness connects those gaps to well-documented risks of eyewitness misidentification. The product then offers immediate, state-specific actions, including:</p>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Generating a tailored outreach email to lawmakers</li>
            <li>Joining educational or reform initiatives</li>
            <li>Sharing research-backed explainers</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">This step reframes bias as a systemic issue that can be addressed, not a personal flaw.</p>
        </section>

        <section id="results" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Results</h2>
          <p className="text-offwhite/90 leading-relaxed">Eyewitness consistently led users to:</p>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Reevaluate confidence in eyewitness memory</li>
            <li>Articulate why attention, not intent, drives error</li>
            <li>Take a concrete follow-up action</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">The product succeeded when users stopped asking "Did I fail?" and started asking "Why do we rely on this at all?"</p>
        </section>

        <section id="reflection" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Reflection</h2>
          <p className="text-offwhite/90 leading-relaxed">This project reinforced that beliefs change fastest when people observe their own behavior, not when they are told what to think. Designing Eyewitness required treating attention as both a data problem and a product design problem, balancing accuracy, interpretability, and emotional impact.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">The most important outcome was not the visualization itself, but the moment when users recognized that certainty can exist without correctness.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Design Screens</h2>
          <div className="space-y-4">
            <div className="relative">
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

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Resources</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://devpost.com/software/eyewitness-0ludrz" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-3 text-navy-900 font-semibold text-sm rounded-full whitespace-nowrap">
              View on Devpost
            </a>
            <a href="https://youtu.be/fdIyGFOo-g8" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-3 text-navy-900 font-semibold text-sm rounded-full whitespace-nowrap">
              🎥 Demo Video
            </a>
          </div>
        </section>
      </article>
    </CaseStudyLayout>
  )
}
