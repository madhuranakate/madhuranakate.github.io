import React from 'react'
import SectionHeader from './SectionHeader'

const skills = [
  {
    title: 'Technical Skills',
    items: [
      'AI', 'OpenAI', 'Agentic AI', 'Azure', 'AWS',
      'Scala', 'Java', 'Play Framework', 'MongoDB', 'Git', 'Jenkins', 'Kibana', 'Grafana', 'Linux', 'CI/CD', 'Automation Frameworks'
    ],
  },
  {
    title: 'Leadership & Delivery',
    items: ['Leading teams of 14+', 'Mentoring', 'Agile/Scrum', 'High-impact gov services', 'Fast problem-solving'],
  },
  {
    title: 'Other Strengths',
    items: ['Self-taught learner', 'Fast study', 'Innovation', 'Storytelling', 'Creative problem-solving'],
  },
  {
    title: 'Certifications',
    items: ['AI-900', 'AZ-900', 'AWS Certified Cloud Practitioner'],
  },
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container-max">
        <SectionHeader title="Skills & What I Offer" />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.title} className="card p-6 hover-lift">
              <h3 className="text-lg text-offwhite font-medium">{s.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="chip">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
