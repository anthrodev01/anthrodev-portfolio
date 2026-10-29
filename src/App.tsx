import Header from './components/Header'
import Hero from './components/Hero'
import Reveal from './components/Reveal'
import ProjectSection from './components/ProjectSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ComingSoon from './components/ComingSoon'
import { projects } from './data/projects'

function titleForPath(pathname: string): string | null {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return null
  if (path === '/about') return 'About'
  if (path === '/resume') return 'Resume'
  const match = path.match(/^\/work\/([\w-]+)$/)
  if (match) {
    const project = projects.find((p) => p.slug === match[1])
    return project ? `${project.title} case study` : 'Page not found'
  }
  return 'Page not found'
}

export default function App() {
  const placeholderTitle = titleForPath(window.location.pathname)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        {placeholderTitle ? (
          <ComingSoon title={placeholderTitle} />
        ) : (
          <>
            <Hero />

            <section id="work" className="work-intro" tabIndex={-1} aria-label="Selected work">
              <Reveal as="p" className="work-intro__text">
                A selection of products I've helped shape.
              </Reveal>
            </section>

            <div className="projects">
              {projects.map((project, i) => (
                <ProjectSection key={project.slug} project={project} index={i + 1} />
              ))}
            </div>

            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
