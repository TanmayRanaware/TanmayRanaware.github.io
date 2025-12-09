import React from 'react'

export function Navbar() {
  const links = [
    { href: '#research', label: 'Research' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' }
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="font-bold text-lg">Tanmay Ranaware</a>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium hover:underline">
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
