import React from 'react'

type Subrole = { team: string; bullets: string[] }
type Exp = {
  company: string; role: string; location?: string; period: string;
  bullets?: string[]; subroles?: Subrole[];
}

export function Experience({ items }: { items: Exp[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((e, i) => (
        <article key={i} className="card">
          <h3 className="text-lg font-bold">{e.role} — {e.company}</h3>
          <p className="text-sm opacity-70">{e.location} • {e.period}</p>
          {e.subroles ? (
            <div className="mt-3 space-y-4">
              {e.subroles.map((s, idx) => (
                <div key={idx}>
                  <p className="text-sm font-semibold">{s.team}</p>
                  <ul className="mt-2 list-disc ml-5 space-y-2 text-sm">
                    {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            e.bullets && (
              <ul className="mt-3 list-disc ml-5 space-y-2 text-sm">
                {e.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
              </ul>
            )
          )}
        </article>
      ))}
    </div>
  )
}
