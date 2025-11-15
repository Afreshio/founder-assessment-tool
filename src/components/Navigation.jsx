import { Link, useLocation } from 'react-router-dom'
import afreshLogo from '../assets/Afresh.png'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="navigation">
      <Link to="/" className="nav-logo" aria-label="Afresh home">
        <img src={afreshLogo} alt="Afresh" className="nav-logo-img" />
      </Link>
      <div className="nav-links">
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
        <Link 
          to="/scaleos" 
          className={location.pathname === '/scaleos' ? 'nav-link active' : 'nav-link'}
        >
          ScaleOS
        </Link>
        <Link 
          to="/quiz" 
          className={location.pathname === '/quiz' ? 'nav-link active' : 'nav-link'}
        >
          <span className="nav-link-text-full">Founder Fit Quiz</span>
          <span className="nav-link-text-short">Quiz</span>
        </Link>
        <Link 
          to="/antifragility-diagnostic" 
          className={location.pathname === '/antifragility-diagnostic' ? 'nav-link active' : 'nav-link'}
        >
          Antifragility Diagnostic
        </Link>
        <Link 
          to="/productive-meetings" 
          className={location.pathname === '/productive-meetings' || location.pathname === '/team-diagnostic' ? 'nav-link active' : 'nav-link'}
        >
          Team Diagnostic
        </Link>
        <Link 
          to="/pain-points" 
          className={location.pathname === '/pain-points' ? 'nav-link active' : 'nav-link'}
        >
          Pain Points
        </Link>
        <Link 
          to="/articles" 
          className={location.pathname === '/articles' ? 'nav-link active' : 'nav-link'}
        >
          Articles
        </Link>
        <Link 
          to="/about" 
          className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navigation

