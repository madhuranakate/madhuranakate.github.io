import React from 'react'
import SectionHeader from './SectionHeader'
import { site } from '../data/site'

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="section">
      <div className="container-max">
        <SectionHeader title="Let’s Build What’s Next" />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg text-offwhite font-medium">Looking to collaborate or hire?</h3>
            <p className="mt-2 text-beige/90">Let’s connect.</p>
            <a href={`mailto:${site.email}`} className="mt-4 inline-flex btn btn-primary">Email me</a>
          </div>
          <div className="card p-6">
            <h3 className="text-lg text-offwhite font-medium">Have an idea? Let’s build it together.</h3>
            <p className="mt-2 text-beige/90">I’m open to collaborations and early-stage concepts.</p>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex btn btn-ghost">Let’s talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
