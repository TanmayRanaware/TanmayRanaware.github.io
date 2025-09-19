import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { FadeIn, SlideIn, ScaleIn } from './components/animations'
import data from './data/content'

const App: React.FC = () => {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen">
      <Navbar dark={dark} setDark={setDark} />

      <main>
        <Hero {...data.profile} />

        <section id="about" className="apple-section">
          <div className="apple-container">
            <FadeIn duration={0.8} delay={0.2}>
              <h2 className="apple-heading text-center mb-16">About Me</h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <About text={data.about} />
            </FadeIn>
          </div>
        </section>

        <section id="projects" className="apple-section bg-gray-50 dark:bg-gray-900/50">
          <div className="apple-container">
            <FadeIn delay={0.1}>
              <h2 className="apple-heading text-center mb-16">Projects</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Projects items={data.projects} />
            </FadeIn>
          </div>
        </section>

        <section id="experience" className="apple-section">
          <div className="apple-container">
            <FadeIn delay={0.1}>
              <h2 className="apple-heading text-center mb-16">Experience</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Experience items={data.experience} />
            </FadeIn>
          </div>
        </section>

        <section id="achievements" className="apple-section bg-gray-50 dark:bg-gray-900/50">
          <div className="apple-container">
            <FadeIn delay={0.1}>
              <h2 className="apple-heading text-center mb-16">Achievements</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Achievements items={data.achievements} />
            </FadeIn>
          </div>
        </section>

        <section id="contact" className="apple-section">
          <div className="apple-container">
            <FadeIn delay={0.1}>
              <h2 className="apple-heading text-center mb-16">Contact</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Contact {...data.profile} />
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="text-center py-16 text-gray-500 dark:text-gray-400">
        <div className="apple-container">
          <p>© {new Date().getFullYear()} {data.profile.name}. Built with React + Tailwind.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
