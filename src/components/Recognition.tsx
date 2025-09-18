import React from 'react'
import SectionHeader from './SectionHeader'

const Recognition: React.FC = () => {
  return (
    <section id="recognition" className="section">
      <div className="container-max">
        <SectionHeader title="Recognition & Awards" />
        <ul className="mt-6 text-beige/90 list-disc pl-6 space-y-2">
          <li>All India Rank 9 & 17 in National IT Aptitude Tests.</li>
          <li>Hack Day and Innovation Day wins at Optymyze.</li>
        </ul>
      </div>
    </section>
  )
}

export default Recognition
