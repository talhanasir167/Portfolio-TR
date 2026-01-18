import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ContactSection from '../../components/ContactSection/ContactSection'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Home.css'

const Home = () => {
  const projects = [
    { title: 'Learnlogicify Landing Page', id: 1 },
    { title: 'Winzee Web Chat application', id: 2 },
    { title: 'ChatGPT clone', id: 3 },
    { title: 'Gemini Clone', id: 4 }
  ]

  return (
    <div className="home">
      <Header />
      
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              The Developer &<br />
              Designer
            </h1>
            <div className="hero-nav">
              <div className="nav-dot"></div>
              <div className="nav-dot"></div>
              <div className="nav-dot"></div>
              <div className="nav-dot"></div>
              <div className="nav-dot"></div>
            </div>
          </div>
          <div className="hero-image">
            <div className="portrait-placeholder">
              <div className="portrait-content">A</div>
            </div>
            <div className="hero-scroll-indicator">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-content">
          <div className="about-column">
            <p>
              Driven by curiosity and a love for design, I create simple, functional, and visually striking digital experiences. As a student, I'm always learning and exploring new ideas.
            </p>
          </div>
          <div className="about-column">
            <p>
              The fusion of my passion for design, development, and seamless user experiences places me at the intersection of creativity and technology in the digital world.
            </p>
            <a href="#more" className="about-link">
              More about me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="works">
        <div className="works-content">
          <h2 className="works-title">Impressive Works</h2>
          <p className="works-description">
            HERE'S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.
          </p>
          <div className="works-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} title={project.title} />
            ))}
          </div>
          <Link to="/projects" className="explore-button">
            <span className="explore-dot"></span>
            Explore more
          </Link>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home

