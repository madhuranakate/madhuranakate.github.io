import React from 'react'
import { site } from '../data/site'

const socials: { key: keyof typeof site; label: string; icon: JSX.Element }[] = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6v6.35h-4V15.2c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06V21H9z" />
      </svg>
    ),
  },
  {
    key: 'twitter',
    label: 'X (Twitter)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
        <path d="M17.53 3h3.7l-8.1 9.24L23 21h-6.4l-5-6.54L5.6 21H1.86l8.66-9.89L1 3h6.5l4.42 5.78L17.53 3zm-2.26 15.62h2.05L8.94 5.29H6.75l8.52 13.33z" />
      </svg>
    ),
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
      </svg>
    ),
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="section pt-6">
      <div className="container-max flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-beige/70 border-t border-white/10 pt-6">
        <div className="flex items-center gap-6 order-2 md:order-1">
          <span>© {new Date().getFullYear()} Madhura Nakate</span>
          <a href="#home" className="hover:text-offwhite">Back to top ↑</a>
        </div>
  <div className="flex items-center gap-3 order-1 md:order-2">
          {socials.map(s => {
            const url = site[s.key] as string | undefined
            if (!url) return null
            return (
              <a
                key={s.key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-offwhite/80 hover:text-offwhite border border-white/10 transition-colors"
              >
                {s.icon}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
