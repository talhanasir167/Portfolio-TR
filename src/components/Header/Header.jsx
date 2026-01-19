import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-logo">
          @Code by Tayyab
        </Link>
        <div className="header-right">
          <p className="header-description">
            Passionate Creative Designer and Developer
          </p>
          <nav className="header-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header


