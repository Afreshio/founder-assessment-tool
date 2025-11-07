import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()

  return (
    <nav className="navigation">
      <Link to="/" className="nav-logo">
        Afresh.io
      </Link>
      <div className="nav-links">
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
        <Link 
          to="/quiz" 
          className={location.pathname === '/quiz' ? 'nav-link active' : 'nav-link'}
        >
          Founder Fit Quiz
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

