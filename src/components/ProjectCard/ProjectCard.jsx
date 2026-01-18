import './ProjectCard.css'

const ProjectCard = ({ title, image, description }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <div className="project-placeholder">
          {image || title.charAt(0)}
        </div>
      </div>
      <div className="project-info">
        <span className="project-title">{title}</span>
        <div className="project-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

