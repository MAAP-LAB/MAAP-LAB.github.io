import type { ReactNode } from 'react'

interface SectionProps {
  icon?: string
  title: string
  id?: string
  children: ReactNode
}

export function Section({ icon, title, id, children }: SectionProps) {
  return (
    <section className="section" id={id}>
      <h2 className="section-title">
        {icon && <span className="icon">{icon}</span>}
        <span>{title}</span>
      </h2>
      {children}
    </section>
  )
}
