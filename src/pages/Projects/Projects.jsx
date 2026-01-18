import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ContactSection from '../../components/ContactSection/ContactSection'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {
  const projects = [
    { title: 'Learnlogicify Landing Page', id: 1 },
    { title: 'Winzee Web Chat application', id: 2 },
    { title: 'ChatGPT clone', id: 3 },
    { title: 'Gemini Clone', id: 4 }
  ]

  return (
    <div className="projects-page">
      <Header />
      
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1 className="projects-hero-title">
            welcome to my realm of<br />
            wild projects and awesome<br />
            creations
          </h1>
        </div>
      </section>

      <section className="projects-showcase">
        <div className="projects-showcase-content">
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} title={project.title} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}

export default Projects

