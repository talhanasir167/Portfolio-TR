import './SkillCard.css'

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-title">{skill.title}</h3>
      <p className="skill-description">{skill.description}</p>
      
      {skill.icons && (
        <div className="skill-icons">
          {skill.icons.map((icon, index) => (
            <span key={index} className="skill-icon-text">{icon}</span>
          ))}
        </div>
      )}
      
      {skill.tags && (
        <div className="skill-tags">
          {skill.tags.map((tag, index) => (
            <span key={index} className="skill-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default SkillCard


