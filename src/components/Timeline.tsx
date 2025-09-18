import React from 'react'
import SectionHeader from './SectionHeader'
import { useInView } from '../hooks/useInView'
import { journey } from '../data/journey'

const Timeline: React.FC = () => {
  return (
    <section id="journey" className="section">
      <div className="container-max">
  <SectionHeader title="Journey" subtitle="From testing → development → leadership → architecture" />
        <ol className="mt-8 relative pl-4">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-red-deep/70 via-white/20 to-transparent" aria-hidden />
          {journey.map((j) => {
            const { ref, inView } = useInView<HTMLLIElement>({ threshold: 0.2 })
            return (
            <li ref={ref} key={j.company} className={`mb-10 ml-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-deep shadow-glow" />
              <div className="card p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl text-offwhite font-medium">{j.role} @ {j.company}</h3>
                  <span className="text-xs text-beige/70">{j.period}</span>
                </div>
                <p className="mt-2 text-sm text-beige/90">{j.summary}</p>
                {j.highlights?.length ? (
                  <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-beige/90">
                    {j.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          )})}
        </ol>
      </div>
    </section>
  )
}

export default Timeline
