import { useState, useEffect } from 'react'
import './ConfluenceAccess.css'

function ConfluenceAccess() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  // Password for access - change this to your desired password
  const CORRECT_PASSWORD = 'scaleos2026' // Change this password
  
  useEffect(() => {
    // Check if user is already authenticated in this session
    const authStatus = sessionStorage.getItem('confluence_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('confluence_authenticated', 'true')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('confluence_authenticated')
    setPassword('')
  }

  if (!isAuthenticated) {
    return (
      <div className="confluence-access">
        <div className="confluence-auth-container">
          <h1 className="auth-title">Confluence Access</h1>
          <p className="auth-subtitle">Please enter the password to access the Confluence page</p>
          <form onSubmit={handleSubmit} className="auth-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="auth-input"
              autoFocus
            />
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="auth-button">
              Access Confluence
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="confluence-access">
      <div className="confluence-content">
        <div className="confluence-header">
          <h1>ScaleOS Confluence</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
        <div className="confluence-link-container">
          <a
            href="https://scaleos.atlassian.net/wiki/home"
            target="_blank"
            rel="noopener noreferrer"
            className="confluence-link"
          >
            <svg
              className="confluence-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Open ScaleOS Confluence</span>
            <svg
              className="external-link-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 13V19A2 2 0 0 1 16 21H5A2 2 0 0 1 3 19V8A2 2 0 0 1 5 6H11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 3H21V9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 14L21 3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <p className="confluence-description">
            Access your ScaleOS Confluence workspace. This link will open in a new tab.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConfluenceAccess

