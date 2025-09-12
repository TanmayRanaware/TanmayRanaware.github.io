import React from 'react'
export function Achievements({ items }: { items: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((a, i) => <div key={i} className="card text-sm">{a}</div>)}
    </div>
  )
}
