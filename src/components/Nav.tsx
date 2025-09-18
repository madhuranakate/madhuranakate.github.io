import React from 'react'
import type { SectionId } from '../hooks/useScrollSpy'

type Props = { active?: SectionId }

const Nav: React.FC<Props> = ({ active }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-charcoal/80 backdrop-blur border-b border-white/10">
      <nav className="container-max flex items-center justify-between h-16">
        <a href="#" className="text-offwhite font-semibold tracking-wider uppercase">MN</a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className={`relative pb-1 transition-colors ${active === 'about' ? 'text-offwhite after:content-[\'\'] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-deep' : 'hover:text-offwhite'}`}>My Story</a>
          <a href="#journey" className={`relative pb-1 transition-colors ${active === 'journey' ? 'text-offwhite after:content-[\'\'] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-deep' : 'hover:text-offwhite'}`}>Journey</a>
          <a href="#skills" className={`relative pb-1 transition-colors ${active === 'skills' ? 'text-offwhite after:content-[\'\'] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-deep' : 'hover:text-offwhite'}`}>Skills</a>
          <a href="#projects" className={`relative pb-1 transition-colors ${active === 'projects' ? 'text-offwhite after:content-[\'\'] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-deep' : 'hover:text-offwhite'}`}>Projects</a>
          <a href="#recognition" className={`relative pb-1 transition-colors ${active === 'recognition' ? 'text-offwhite after:content-[\'\'] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-deep' : 'hover:text-offwhite'}`}>Recognition</a>
          <a href="#speaking" className={`relative pb-1 transition-colors ${active === 'speaking' ? 'text-offwhite after:content-[\'\'] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-deep' : 'hover:text-offwhite'}`}>Speaking</a>
          <a href="#progress" className={`relative pb-1 transition-colors ${active === 'progress' ? 'text-offwhite after:content-[\'\'] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-deep' : 'hover:text-offwhite'}`}>Progress</a>
          <a href="/resume.pdf" download rel="noopener" className="btn btn-ghost px-4 py-2 text-xs">Resume</a>
          <a href="#cta" className={`btn btn-primary ${active === 'cta' ? 'shadow-glow' : ''}`}>Connect</a>
        </div>
      </nav>
    </header>
  )
}

export default Nav
