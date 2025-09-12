import React from 'react'

export type Project = {
  title: string
  description: string
  tech: string[]
  links?: { label: string, href: string }[]
}

export function Projects({ items }: { items: Project[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p, i) => (
        <article key={i} className="card">
          <h3 className="text-lg font-bold">{p.title}</h3>
          <p className="mt-2 text-sm opacity-90">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t, idx) => (
              <span key={idx} className="text-xs px-2 py-1 rounded-full border border-border">{t}</span>
            ))}
          </div>
          {p.links && (
            <div className="mt-4">
              {p.links.map((l, idx) => (
                <a key={idx} href={l.href} target="_blank" rel="noreferrer" className="text-sm underline mr-4">{l.label}</a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  )
}
