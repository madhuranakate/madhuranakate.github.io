import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Speaking from './components/Speaking'
import Progress from './components/Progress'
import Footer from './components/Footer'
import { useScrollSpy } from './hooks/useScrollSpy'
import Skills from './components/Skills'
import Recognition from './components/Recognition'
import CallToAction from './components/CallToAction'

function App() {
  const active = useScrollSpy(0.6)
  return (
    <>
      <Nav active={active} />
      <main>
        <Hero />
        <About />
        <Timeline />
  <Skills />
        <Projects />
  <Recognition />
        <Speaking />
  <Progress />
  <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export default App
