import React from 'react'
import SectionHeader from './SectionHeader'

const Personal: React.FC = () => {
  return (
    <section id="personal" className="section">
      <div className="container-max">
        <SectionHeader title="A Human Touch" />
        <p className="mt-6 text-beige/90 max-w-3xl">
          Mum of one, three cats, lifelong dancer, aspiring novelist, amateur photographer. Based in Newcastle, born in Pune. Always chasing the next idea.
        </p>
      </div>
    </section>
  )
}

export default Personal
