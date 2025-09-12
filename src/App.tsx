import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import data from './data/content'

const App: React.FC = () => {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div>
      <Navbar dark={dark} setDark={setDark} />

      <main className="max-w-6xl mx-auto px-4">
        <Hero {...data.profile} />

        <section id="about" className="py-12">
          <h2 className="text-3xl font-extrabold mb-6 text-center">About Me</h2>
          <About text={data.about} />
        </section>

        <section id="projects" className="py-12">
          <h2 className="text-3xl font-extrabold mb-6 text-center">Projects</h2>
          <Projects items={data.projects} />
        </section>

        <section id="experience" className="py-12">
          <h2 className="text-3xl font-extrabold mb-6 text-center">Experience</h2>
          <Experience items={data.experience} />
        </section>

        <section id="achievements" className="py-12">
          <h2 className="text-3xl font-extrabold mb-6 text-center">Achievements</h2>
          <Achievements items={data.achievements} />
        </section>

        <section id="contact" className="py-12">
          <h2 className="text-3xl font-extrabold mb-6 text-center">Contact</h2>
          <Contact {...data.profile} />
        </section>
      </main>

      <footer className="text-center py-8 text-sm opacity-70">
        © {new Date().getFullYear()} {data.profile.name}. Built with React + Tailwind.
      </footer>
    </div>
  )
}

export default App
