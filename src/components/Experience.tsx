import React from 'react'

type Exp = {
  company: string
  role: string
  location?: string
  period: string
  bullets: string[]
}

export function Experience({ items }: { items: Exp[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((e, i) => (
        <article key={i} className="card">
          <h3 className="text-lg font-bold">{e.role} — {e.company}</h3>
          <p className="text-sm opacity-70">{e.location} • {e.period}</p>
          <ul className="mt-3 list-disc ml-5 space-y-2 text-sm">
            {e.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
          </ul>
        </article>
      ))}
    </div>
  )
}
