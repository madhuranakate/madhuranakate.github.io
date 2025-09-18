import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="section pt-28" id="home">
      <div className="container-max grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-in-up">
          <h1 className="font-display gradient-text text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Too curious to stay bored — building, learning, leading.
            <span className="block text-base sm:text-lg lg:text-xl text-offwhite/90 mt-2">Solutions Architect | Tech Leader | Builder of High-Impact Systems</span>
          </h1>
          <p className="mt-5 text-xl sm:text-2xl text-beige/90 max-w-2xl">
            I’m Madhura Nakate — Solutions Architect, leader, and storyteller. Self-taught, fast-learning, and future-driven, I help organizations turn complex problems into scalable, reliable, and innovative solutions.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="chip">Solutions Architect</span>
            <span className="chip">Leader</span>
            <span className="chip">Storyteller</span>
          </div>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="btn btn-primary">See My Work</a>
            <a href="https://www.linkedin.com/in/madhura-nakate-17070636" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Let’s Talk</a>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs text-beige/50">Connect:</span>
            <div className="flex items-center gap-2">
              <a href="https://www.linkedin.com/in/madhura-nakate-17070636" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-offwhite/80 hover:text-offwhite border border-white/10 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6v6.35h-4V15.2c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06V21H9z" /></svg>
              </a>
              <a href="https://x.com/madhuranakate" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-offwhite/80 hover:text-offwhite border border-white/10 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden><path d="M17.53 3h3.7l-8.1 9.24L23 21h-6.4l-5-6.54L5.6 21H1.86l8.66-9.89L1 3h6.5l4.42 5.78L17.53 3zm-2.26 15.62h2.05L8.94 5.29H6.75l8.52 13.33z" /></svg>
              </a>
              <a href="https://www.instagram.com/madhura5/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-offwhite/80 hover:text-offwhite border border-white/10 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="md:justify-self-end relative">
          <div className="absolute -inset-2 rounded-2xl bg-red-deep/20 blur-2xl" aria-hidden />
          <img
            src="/hero.jpg"
            alt="Madhura Nakate portrait"
            className="w-full h-64 md:h-80 lg:h-96 object-cover object-[50%_35%] rounded-2xl border border-white/10"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
