import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ContactSection from '../../components/ContactSection/ContactSection'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Home.css'

const Home = () => {
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
              <img 
                src="https://picsum.photos/500/667?random=5" 
                alt="Portrait" 
                className="portrait-img"
              />
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

      <section className="stats">
        <div className="stats-content">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30+</div>
            <div className="stat-label">Technologies Mastered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-content">
          <h2 className="section-title">Services I Offer</h2>
          <p className="section-subtitle">COMPREHENSIVE DIGITAL SOLUTIONS TAILORED TO YOUR BUSINESS NEEDS</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3 className="service-title">Web Development</h3>
              <p className="service-description">Custom web applications built with modern frameworks and best practices for optimal performance and scalability.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3 className="service-title">UI/UX Design</h3>
              <p className="service-description">User-centric designs that combine aesthetics with functionality to create engaging digital experiences.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3 className="service-title">Mobile Development</h3>
              <p className="service-description">Cross-platform mobile applications using React Native and Flutter for iOS and Android.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h3 className="service-title">Cloud Solutions</h3>
              <p className="service-description">Deployment and management of applications on AWS, GCP, and Azure with CI/CD pipelines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="technologies">
        <div className="technologies-content">
          <h2 className="section-title">Core Technologies</h2>
          <p className="section-subtitle">THE TOOLS AND FRAMEWORKS I USE TO BRING IDEAS TO LIFE</p>
          <div className="technologies-grid">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Figma'].map((tech, index) => (
              <div key={index} className="tech-item">
                {tech}
              </div>
            ))}
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
              <ProjectCard key={project.id} title={project.title} image={project.image} />
            ))}
          </div>
          <Link to="/projects" className="explore-button">
            <span className="explore-dot"></span>
            Explore more
          </Link>
        </div>
      </section>

      <section className="process">
        <div className="process-content">
          <h2 className="section-title">My Process</h2>
          <p className="section-subtitle">A SYSTEMATIC APPROACH TO DELIVERING EXCEPTIONAL RESULTS</p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3 className="step-title">Discovery</h3>
              <p className="step-description">Understanding your business goals, target audience, and project requirements through detailed consultation.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3 className="step-title">Design</h3>
              <p className="step-description">Creating wireframes, mockups, and prototypes that align with your brand and user needs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3 className="step-title">Development</h3>
              <p className="step-description">Building robust, scalable solutions using industry best practices and modern technologies.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3 className="step-title">Launch</h3>
              <p className="step-description">Deploying with thorough testing, optimization, and providing ongoing support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home


