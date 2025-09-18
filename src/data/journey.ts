export type JourneyItem = {
  company: string
  role: string
  period: string
  summary: string
  highlights?: string[]
}

export const journey: JourneyItem[] = [
  {
    company: 'Capgemini',
    role: 'Solutions Architect',
    period: '2023–Present',
    summary: 'Designing resilient systems and guiding teams with a big-picture, future-focused mindset.',
  },
  {
    company: 'Accenture (Client: HMRC – UK Government)',
    role: 'Senior Scala Developer → Technical Lead',
    period: '2017–2023',
    summary: 'Transitioned from testing to development; grew into Technical Lead delivering large-scale HMRC pensions services used by millions.',
    highlights: [
      'Led cross-functional team (9 devs, 5 testers) on HMRC pensions service',
      'Built developer + tester culture around quality & speed',
      'Introduced in-house concurrency locking system',
      'Accelerated delivery through automation and clear storytelling',
    ],
  },
  {
    company: 'Optymyze',
    role: 'Test Engineer',
    period: 'Early career',
    summary: 'Continued building automation and quality engineering, laying groundwork before moving into development later at Accenture.',
  },
  {
    company: 'Synygy',
    role: 'Test Engineer',
    period: 'Early career',
    summary: 'Started in testing and automation, building foundations in quality engineering.',
  },
]
