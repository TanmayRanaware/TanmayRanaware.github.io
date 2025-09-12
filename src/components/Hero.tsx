import React, { useEffect, useRef, useState } from 'react'

type Props = {
  name: string
  title: string
  tagline: string
  links: { label: string; href: string }[]
}

function TypingCodeBackground() {
  const snippets = useRef<string[]>([
`// LLM Agent pipeline
const tools = ["webSearch", "scrape", "summarize"]
for (const t of tools) agent.use(t)
const result = await agent.run("Compare vector DBs for RAG")`,
`# Streaming inference
from fastapi import FastAPI
from sse_starlette.sse import EventSourceResponse
app = FastAPI()`,
`// Kafka -> Glue ETL
const cleaned = consume("telemetry",{parallelism:8})
  .map(parseJSON).filter(x=>x.deviceId && x.ts)`
  ]).current

  const [text, setText] = useState('')
  const iRef = useRef(0), jRef = useRef(0)
  const dirRef = useRef<'type' | 'erase'>('type')

  useEffect(() => {
    let t: number
    const tick = () => {
      const s = snippets[iRef.current]
      if (dirRef.current === 'type') {
        setText(s.slice(0, jRef.current + 1))
        jRef.current++
        if (jRef.current >= s.length) { dirRef.current = 'erase'; t = window.setTimeout(tick, 1200); return }
        t = window.setTimeout(tick, 18)
      } else {
        setText(s.slice(0, jRef.current - 1))
        jRef.current--
        if (jRef.current <= 0) { dirRef.current = 'type'; iRef.current = (iRef.current + 1) % snippets.length }
        t = window.setTimeout(tick, 8)
      }
    }
    t = window.setTimeout(tick, 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <div className="hero-anim pointer-events-none" />
      <pre className="hero-code">{text}<span className="caret" /></pre>
    </div>
  )
}

function TypingTitle({ full }: { full: string }) {
  const [shown, setShown] = useState('')
  const idx = useRef(0)
  useEffect(() => {
    let t: number
    const type = () => {
      if (idx.current <= full.length) {
        setShown(full.slice(0, idx.current))
        idx.current += 1
        t = window.setTimeout(type, 45)
      }
    }
    type()
    return () => clearTimeout(t)
  }, [full])
  return <span aria-label={full}>{shown}<span className="title-caret" /></span>
}

export function Hero({ name, title, tagline, links }: Props) {
  const headline = `Hello, I'm ${name}.`
  return (
    <section className="py-12">
      <div className="relative rounded-2xl overflow-hidden">
        <div
          className="h-56 sm:h-64 md:h-72 w-full"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2000&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <TypingCodeBackground />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold"><TypingTitle full={headline} /></h1>
          <p className="mt-2 text-base md:text-lg opacity-90">{title}</p>
          <p className="mt-1 text-sm opacity-80">{tagline}</p>
          <div className="mt-4 flex gap-3 flex-wrap justify-center">
            {links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                 className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:opacity-90">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
