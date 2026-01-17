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
        <li><a href="#users">Users and Constraints</a></li>
        <li><a href="#research">Research and Insights</a></li>
        <li><a href="#strategy">Design Strategy</a></li>
        <li><a href="#system">System and Interaction Design</a></li>
        <li><a href="#tradeoffs">Tradeoffs</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#reflection">Reflection</a></li>
      </ul>
    )}>
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Healthcare Accessibility Application</h1>
          <div className="text-lg text-offwhite/80 mb-2">Designing a System for Fast, Trustworthy Provider Discovery from Messy Data</div>
          <div className="text-sm text-offwhite/70">Role: Product Designer + Full-Stack Engineer | Platform: Desktop Application (JavaFX) with API-driven backend | Users: Individuals searching for healthcare providers and costs | Context: Independent product build</div>
        </header>

        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Overview</h2>
          <p className="text-offwhite/90 leading-relaxed">This application helps users find healthcare providers and estimate costs quickly, even when public data is incomplete, inconsistent, or malformed. The system ingests data from multiple government and third-party APIs, normalizes it, and presents results in a way that prioritizes speed, trust, and interpretability over raw completeness.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">The product is designed for users who need answers immediately and cannot afford to manually reconcile conflicting provider information across websites.</p>
        </section>

        <section id="problem" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Problem</h2>
          <p className="text-offwhite/90 leading-relaxed">Healthcare provider data is technically public but practically unusable.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">Users searching for care are forced to navigate fragmented systems where:</p>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90 mt-2">
            <li>Provider names, addresses, and specialties are inconsistent</li>
            <li>Cost data is missing, outdated, or poorly structured</li>
            <li>APIs return malformed or partial responses</li>
            <li>Identical providers appear as separate entities across sources</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">This creates a high-friction experience where users must mentally resolve discrepancies while making time-sensitive decisions.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3 font-semibold">The problem is not access to data.</p>
          <p className="text-offwhite/90 leading-relaxed mt-2 italic">The problem is trusting the data quickly enough to act.</p>
        </section>

        <section id="users" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Users and Constraints</h2>
          
          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Primary users</h3>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Individuals comparing providers and costs</li>
            <li>Users without technical or healthcare system expertise</li>
          </ul>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Usage characteristics</h3>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Short, goal-oriented sessions</li>
            <li>Low tolerance for ambiguity or delay</li>
            <li>High sensitivity to incorrect or misleading results</li>
          </ul>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Constraints</h3>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Data from multiple external APIs with no shared schema</li>
            <li>High variance in data quality</li>
            <li>Rate limits and response latency</li>
            <li>Need to support hundreds of queries without blocking</li>
          </ul>
        </section>

        <section id="research" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Research and Insights</h2>
          <p className="text-offwhite/90 leading-relaxed">Industry research consistently shows that users abandon healthcare search tools when results feel incomplete or unreliable. In usability studies of healthcare platforms, perceived accuracy and response speed matter more than exhaustive coverage.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">Early exploration revealed:</p>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90 mt-2">
            <li>Users rarely questioned missing data, but reacted strongly to contradictions</li>
            <li>Slight delays undermined confidence more than sparse results</li>
            <li>Raw API responses were visually overwhelming and misleading</li>
            <li>Normalization mattered more than precision in early decision-making</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3 font-semibold">The key insight became:</p>
          <p className="text-offwhite/90 leading-relaxed mt-2 italic">Reducing cognitive reconciliation is more valuable than increasing data volume.</p>
        </section>

        <section id="strategy" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Design Strategy</h2>
          <p className="text-offwhite/90 leading-relaxed">The product was designed around a single principle:</p>
          <p className="text-offwhite/90 leading-relaxed mt-3 font-semibold italic">The system should absorb ambiguity so the user does not have to.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">This shifted design focus away from exposing raw data and toward building a preprocessing and normalization layer that produces consistent, interpretable outputs.</p>
        </section>

        <section id="system" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>System and Interaction Design</h2>
          
          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">Data Normalization Pipeline</h3>
          <p className="text-offwhite/90 leading-relaxed">The backend applies an AI-assisted preprocessing pipeline before any data reaches the UI:</p>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90 mt-2">
            <li>Transformer models infer missing provider attributes</li>
            <li>Feature transformers normalize naming, location, and specialty fields</li>
            <li>Conflicting records are resolved into a single canonical representation</li>
            <li>Invalid or malformed responses are classified and filtered</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">This ensures users never see raw inconsistencies.</p>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">High-Throughput Query Handling</h3>
          <p className="text-offwhite/90 leading-relaxed">To support real-time exploration:</p>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90 mt-2">
            <li>Requests are batched and normalized server-side</li>
            <li>Multithreaded processing prevents UI blocking</li>
            <li>Adaptive throttling respects external API limits</li>
            <li>Cached responses reduce repeated fetch latency</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">This reduced average provider search time by approximately 40 percent.</p>

          <h3 className="text-lg font-semibold text-offwhite mb-3 mt-4">UI and Interaction Design</h3>
          <p className="text-offwhite/90 leading-relaxed">The JavaFX interface emphasizes clarity and momentum:</p>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90 mt-2">
            <li>Results are presented progressively rather than all at once</li>
            <li>Visual grouping reinforces provider identity consistency</li>
            <li>Cost estimates are framed as ranges when certainty is low</li>
            <li>Error states are handled silently through fallback logic, not alerts</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">Users can move forward without understanding how the system resolved uncertainty.</p>
        </section>

        <section id="tradeoffs" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Tradeoffs</h2>
          <ul className="list-disc ml-6 space-y-2 text-offwhite/90">
            <li>Accepted probabilistic inference instead of strict validation</li>
            <li>Prioritized responsiveness over exhaustive accuracy</li>
            <li>Limited transparency into backend logic to preserve trust</li>
            <li>Avoided exposing confidence scores to prevent misinterpretation</li>
          </ul>
          <p className="text-offwhite/90 leading-relaxed mt-3">Each tradeoff favored user confidence and decisiveness over explainability.</p>
        </section>

        <section id="results" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Results</h2>
          <ul className="list-disc ml-6 space-y-1 text-offwhite/90">
            <li>Provider search time reduced by ~40 percent</li>
            <li>Fewer contradictory results surfaced to users</li>
            <li>Improved completion rate for provider selection</li>
            <li>System scaled to 500+ unique queries without degradation</li>
          </ul>
        </section>

        <section id="reflection" className="mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{color: '#D4AF37'}}>Reflection</h2>
          <p className="text-offwhite/90 leading-relaxed">This project reinforced that in high-stakes domains like healthcare, clarity is a product feature. Users do not want to evaluate data quality; they want the system to do that work for them. Designing the preprocessing layer was as important as designing the interface itself.</p>
          <p className="text-offwhite/90 leading-relaxed mt-3">By treating normalization and inference as core design concerns rather than backend details, the product reduced friction where it mattered most.</p>
        </section>
      </article>
    </CaseStudyLayout>
  )
}
