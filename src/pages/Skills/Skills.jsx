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

  const topSkills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 82 },
    { name: 'UI/UX Design', level: 80 }
  ]

  const achievements = [
    { title: 'Expert Level', description: 'Proficient in modern web development frameworks and tools', count: '5+ Years' },
    { title: 'Projects Delivered', description: 'Successfully completed projects across various domains', count: '50+' },
    { title: 'Technologies', description: 'Comprehensive knowledge of multiple technology stacks', count: '30+' },
    { title: 'Client Satisfaction', description: 'Maintaining high standards in every project', count: '100%' }
  ]

  return (
    <div className="skills-page">
      <Header />
      
      <section className="skills-hero">
        <div className="skills-hero-content">
          <h1 className="skills-hero-title">Skills that fuel my passion</h1>
          <p className="skills-hero-subtitle">
            A COMPREHENSIVE OVERVIEW OF MY TECHNICAL EXPERTISE AND PROFESSIONAL CAPABILITIES
          </p>
        </div>
      </section>

      <section className="skills-overview">
        <div className="skills-overview-content">
          <h2 className="section-title-white">Core Expertise</h2>
          <p className="section-subtitle-white">YEARS OF DEDICATED PRACTICE ACROSS MULTIPLE TECHNOLOGY DOMAINS</p>
          <div className="top-skills">
            {topSkills.map((skill, index) => (
              <div key={index} className="skill-level-item">
                <div className="skill-level-header">
                  <span className="skill-level-name">{skill.name}</span>
                  <span className="skill-level-percent">{skill.level}%</span>
                </div>
                <div className="skill-level-bar">
                  <div className="skill-level-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-showcase">
        <div className="skills-showcase-content">
          <h2 className="section-title-white">Technical Skills</h2>
          <p className="section-subtitle-white">DETAILED BREAKDOWN OF MY SKILLSET ACROSS DIFFERENT DOMAINS</p>
          <div className="skills-grid">
            {skills.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="skills-achievements">
        <div className="skills-achievements-content">
          <h2 className="section-title-white">Achievements & Experience</h2>
          <p className="section-subtitle-white">HIGHLIGHTS OF MY PROFESSIONAL JOURNEY AND EXPERTISE</p>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-count">{achievement.count}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
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


