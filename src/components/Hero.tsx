import React from 'react'

type Props = {
  name: string
  title: string
  tagline: string
  links: { label: string, href: string }[]
}

export function Hero({ name, title, tagline, links }: Props) {
  return (
    <section className="py-12">
      <div className="relative rounded-2xl overflow-hidden">
        <div
          className="h-52 sm:h-64 md:h-72 w-full"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2000&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{`Hello, I'm ${name}.`}</h1>
          <p className="mt-2 text-base md:text-lg opacity-90">{title}</p>
          <p className="mt-1 text-sm opacity-80">{tagline}</p>
          <div className="mt-4 flex gap-3 flex-wrap justify-center">
            {links.map(l => (
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
