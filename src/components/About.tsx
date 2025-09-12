import React from 'react'

export function About({ text }: { text: string }) {
  return (
    <div className="card text-sm leading-7">
      {text}
    </div>
  )
}
