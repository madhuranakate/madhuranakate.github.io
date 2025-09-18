import React from 'react'

type Props = { title: string; subtitle?: string }

const SectionHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-offwhite">{title}</h2>
      {subtitle ? <p className="mt-2 text-beige/80">{subtitle}</p> : null}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

export default SectionHeader
