import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ContactSection from '../../components/ContactSection/ContactSection'
import SkillCard from '../../components/SkillCard/SkillCard'
import './Skills.css'

const Skills = () => {
  const skills = [
    {
      title: 'Front-End Development',
      description: 'Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.',
      icons: ['HTML5', 'JS', 'TS', 'React', 'Next.js', 'Node.js'],
      id: 1
    },
    {
      title: 'Styling & Design',
      description: 'Crafting visually appealing and responsive designs with advanced styling tools and frameworks.',
      icons: ['CSS3', 'Sass', 'Bootstrap', 'Material-UI'],
      id: 2
    },
    {
      title: 'Programming Languages',
      description: 'Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.',
      icons: ['Python', 'C', 'C++', 'Java', 'C#'],
      id: 3
    },
    {
      title: 'Back-End Development',
      description: 'Developing robust server-side logic and APIs to power dynamic and scalable web applications.',
      icons: ['Node.js', 'Express.js', 'Django', 'Ruby on Rails'],
      id: 4
    },
    {
      title: 'Web Animations',
      description: 'Creating seamless animations and transitions to enhance user engagement and interactivity.',
      icons: ['Framer Motion', 'GSAP', 'Lottie'],
      id: 5
    },
    {
      title: 'Database Management',
      description: 'Designing and managing databases to ensure secure and efficient data storage and retrieval.',
      icons: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
      id: 6
    },
    {
      title: 'Core Computer Science Concepts',
      description: 'Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and efficient computing techniques.',
      tags: ['Operating Systems', 'Computer Networks', 'Object-Oriented Programming', 'DSA', 'System Design'],
      id: 7
    },
    {
      title: 'Cloud & Deployment',
      description: 'Experienced in deploying and managing applications using modern cloud platforms and tools.',
      icons: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Vercel'],
      id: 8
    },
    {
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile apps with sleek designs and robust functionality.',
      icons: ['React Native', 'Flutter'],
      id: 9
    },
    {
      title: 'Version Control & Collaboration',
      description: 'Effectively managing code and collaborating on projects to ensure seamless teamwork.',
      icons: ['Git', 'GitHub'],
      id: 10
    },
    {
      title: 'Personal Development',
      description: 'Committed to continuous learning and personal growth to excel in both professional and collaborative environments.',
      tags: ['Time Management', 'Problem Solving', 'Communication', 'Leadership'],
      id: 11
    },
    {
      title: 'Testing & Debugging',
      description: 'Ensuring code quality and reliability through rigorous testing and debugging processes.',
      icons: ['Jest', 'Cypress', 'Selenium'],
      id: 12
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.',
      icons: ['Figma'],
      tags: ['Prototyping', 'Wireframing'],
      id: 13
    }
  ]

  return (
    <div className="skills-page">
      <Header />
      
      <section className="skills-hero">
        <div className="skills-hero-content">
          <h1 className="skills-hero-title">Skills that fuel my passion</h1>
          <div className="skills-nav-icons">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="nav-icon"></div>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-showcase">
        <div className="skills-showcase-content">
          <div className="skills-grid">
            {skills.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}

export default Skills

