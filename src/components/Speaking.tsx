import React from 'react'
import SectionHeader from './SectionHeader'

const Speaking: React.FC = () => {
  return (
    <section id="speaking" className="section">
      <div className="container-max">
  <SectionHeader title="Speaking & Storytelling" />
        <div className="mt-6 space-y-6 text-beige/90 leading-relaxed">
          <p>
            Stories are how I make sense of complexity — and how I connect with people. Whether presenting to stakeholders, mentoring my team, or sharing ideas for the future of tech, I turn challenges into narratives that inspire action.
          </p>
          <p>
            My talks and writing focus on technology, leadership, and the art of turning curiosity (and a short attention span) into lasting achievements.
          </p>
          <p>
            I also tell stories beyond technology: in writing, in dance, and in the everyday adventures of parenting and cat-herding. For me, storytelling is a way to bring clarity, warmth, and vision to whatever stage I stand on — whether it’s a team meeting or, one day, a TED stage.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Speaking
