import React from 'react'
import { Moon, Sun } from 'lucide-react'

export function Navbar({ dark, setDark }: { dark: boolean, setDark: (v: boolean) => void }) {
  const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#about', label: 'About' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="font-bold text-lg">Tanmay Ranaware</a>
        <div className="flex items-center gap-6">
          {links.map(l => <a key={l.href} href={l.href} className="text-sm font-medium hover:underline">{l.label}</a>)}
          <button
            aria-label="Toggle dark mode"
            className="rounded-full p-2 border border-border"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>
      </nav>
    </header>
  )
}
