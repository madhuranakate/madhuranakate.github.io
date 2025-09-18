import React from 'react'
import SectionHeader from './SectionHeader'

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container-max grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <SectionHeader title="About Me" />
          <div className="mt-6 space-y-6 text-beige/90 leading-relaxed">
            <p>
              I like to joke that getting bored easily is my superpower — because it keeps me moving. Every time I’ve felt done with one thing, I’ve pushed myself to learn the next. That’s how I went from testing, to building frameworks from scratch, to development, to leading teams, and now to architecture.
            </p>
            <p>
              Along the way I’ve led large-scale government digital services, built tools used by millions, mentored developers, and learned how to tell the story behind the code so it actually lands with people. I’m fast, resourceful, and obsessed with turning big ideas into something real.
            </p>
            <p>
              Outside work, I’m a reader, aspiring novelist, amateur photographer, and lifelong dancer. At home in Newcastle, I share life with my husband, our pre-schooler, and three cats who run the house. Born and raised in Pune, India, I carry my roots with me — but I’m always chasing what’s next.
            </p>
          </div>
        </div>
        <aside className="md:col-span-2">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-offwhite">Highlights</h3>
            <ul className="mt-4 space-y-3 text-sm list-disc pl-5">
              <li>Solutions Architect at Capgemini</li>
              <li>Led HMRC pensions service team of 14</li>
              <li>Self-taught fast learner: testing → development → leadership → architecture</li>
              <li>Innovation awards and All-India Rank achievements</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default About
