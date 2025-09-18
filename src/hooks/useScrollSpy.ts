import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'home',
  'about',
  'journey',
  'skills',
  'projects',
  'recognition',
  'speaking',
  'progress',
  'cta',
] as const
export type SectionId = typeof SECTION_IDS[number]

export function useScrollSpy(threshold = 0.6) {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id)
            }
          })
        },
        { root: null, rootMargin: '0px', threshold }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [threshold])

  return active
}
