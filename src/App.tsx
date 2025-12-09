import React, { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Research } from './components/Research'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { FadeIn, SlideIn, ScaleIn } from './components/animations'
import data from './data/content'

const App: React.FC = () => {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero {...data.profile} />

        <section id="about" className="apple-section">
          <div className="apple-container">
            <FadeIn duration={0.8} delay={0.2}>
              <h2 className="apple-heading text-center mb-16">About Me</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex justify-center mb-12">
                <img
                  src="/image.jpg"
                  alt="About me"
                  className="rounded-full w-48 h-48 object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <About text={data.about} />
            </FadeIn>
          </div>
        </section>

        <section id="experience" className="apple-section bg-gray-900/50">
          <div className="apple-container">
            <FadeIn delay={0.1}>
              <h2 className="apple-heading text-center mb-16">Experience</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Experience items={data.experience} />
            </FadeIn>
          </div>
        </section>

        <section id="research" className="apple-section">
          <div className="apple-container">
            <FadeIn delay={0.1}>
              <h2 className="apple-heading text-center mb-16">Research</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Research items={data.research} />
            </FadeIn>
          </div>
        </section>

        <section id="projects" className="apple-section bg-gray-900/50">
          <div className="apple-container">
            <FadeIn delay={0.1}>
              <h2 className="apple-heading text-center mb-16">Projects</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Projects items={data.projects} />
            </FadeIn>
          </div>
        </section>

        <section id="achievements" className="apple-section bg-gray-900/50">
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

      <footer className="text-center py-16 text-gray-400">
        <div className="apple-container">
          <p>© {new Date().getFullYear()} {data.profile.name}. Built with React + Tailwind.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
