import React from 'react'
import { site } from '../data/site'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container-max">
        <h2 className="text-3xl font-semibold text-offwhite">Contact</h2>
        <p className="mt-3 text-beige/90">Let’s connect.</p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a href={`mailto:${site.email}`} className="btn btn-primary">Email me</a>
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
