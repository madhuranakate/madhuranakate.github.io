import React from 'react'
import SectionHeader from './SectionHeader'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container-max">
        <SectionHeader title="Projects & Ideas" subtitle="A growing space for experiments, case studies, and talks." />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <article className="card overflow-hidden hover-lift">
            <div className="h-32 bg-gradient-to-br from-red-deep/30 to-white/5" />
            <div className="p-6">
              <h3 className="text-lg text-offwhite font-medium">Pensions Online Digital Service (HMRC)</h3>
              <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-beige/90">
                <li>Led a team of 9 developers + 5 testers.</li>
                <li>Delivered a GDS-compliant service used by millions.</li>
                <li>Built an in-house concurrency locking system from scratch.</li>
                <li>Oversaw iterative releases with &lt;24h turnaround for production issues.</li>
              </ul>
            </div>
          </article>

          <article className="card overflow-hidden hover-lift">
            <div className="h-32 bg-gradient-to-br from-red-deep/30 to-white/5" />
            <div className="p-6">
              <h3 className="text-lg text-offwhite font-medium">Automation Framework Development</h3>
              <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-beige/90">
                <li>Built automation frameworks from scratch at multiple organizations.</li>
                <li>Reduced testing and release effort by months.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
