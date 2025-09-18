import React from 'react'
import SectionHeader from './SectionHeader'

const Progress: React.FC = () => {
  return (
    <section id="progress" className="section">
      <div className="container-max">
  <SectionHeader title="Now / Next / Future" />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-xl text-offwhite font-medium">Now</h3>
            <p className="mt-2 text-beige/90">Architect at Capgemini, leading digital services and building a leadership profile.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl text-offwhite font-medium">Next</h3>
            <p className="mt-2 text-beige/90">Expanding into product innovation and thought leadership, sharing my journey through writing, speaking, and creative side projects.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl text-offwhite font-medium">Future</h3>
            <p className="mt-2 text-beige/90">TED speaker, CTO/CEO, and global voice for creativity and technology.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progress
