import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ContactSection from '../../components/ContactSection/ContactSection'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {
  const projects = [
    { 
      title: 'Learnlogicify Landing Page', 
      id: 1,
      image: 'https://picsum.photos/800/500?random=1'
    },
    { 
      title: 'Winzee Web Chat application', 
      id: 2,
      image: 'https://picsum.photos/800/500?random=2'
    },
    { 
      title: 'ChatGPT clone', 
      id: 3,
      image: 'https://picsum.photos/800/500?random=3'
    },
    { 
      title: 'Gemini Clone', 
      id: 4,
      image: 'https://picsum.photos/800/500?random=4'
    }
  ]

  const projectCategories = ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Full Stack']
  const technologies = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'Django', 'MongoDB', 'PostgreSQL']

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
          <p className="projects-hero-subtitle">
            EXPLORING THE INTERSECTION OF CREATIVITY AND TECHNOLOGY THROUGH INNOVATIVE DIGITAL SOLUTIONS
          </p>
        </div>
      </section>

      <section className="projects-categories">
        <div className="projects-categories-content">
          <h2 className="section-title">Project Categories</h2>
          <div className="categories-grid">
            {projectCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{index + 1}</div>
                <h3 className="category-title">{category}</h3>
                <p className="category-description">Comprehensive solutions tailored to each category's unique requirements and challenges.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-showcase">
        <div className="projects-showcase-content">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A CURATED SELECTION OF PROJECTS SHOWCASING MY EXPERTISE AND CREATIVITY</p>
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} title={project.title} image={project.image} />
            ))}
          </div>
        </div>
      </section>

      <section className="projects-technologies">
        <div className="projects-technologies-content">
          <h2 className="section-title">Technologies Used</h2>
          <p className="section-subtitle">MODERN TOOLS AND FRAMEWORKS THAT POWER MY PROJECTS</p>
          <div className="technologies-list">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-badge">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-stats">
        <div className="projects-stats-content">
          <div className="stat-item">
            <div className="stat-number">24+</div>
            <div className="stat-label">Web Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">12+</div>
            <div className="stat-label">Mobile Apps</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">18+</div>
            <div className="stat-label">UI Designs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Success Rate</div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}

export default Projects


