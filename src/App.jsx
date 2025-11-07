import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import DougHome from './pages/DougHome'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Articles from './pages/Articles'
import './App.css'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorType, setCursorType] = useState('default')

  useEffect(() => {
    // Disable custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.onclick || 
          target.closest('a') || target.closest('button') || 
          target.classList.contains('cta-button') || target.classList.contains('cta-button-secondary') ||
          target.classList.contains('answer-button') || target.classList.contains('restart-button') ||
          target.classList.contains('calendly-button') || target.classList.contains('nav-link')) {
        setCursorType('pointer')
      } else {
        setCursorType('default')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)

  return (
    <div className="app">
      {!isTouchDevice && (
        <div className={`custom-cursor ${cursorType === 'pointer' ? 'pointer' : ''}`}
             style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }} />
      )}
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<DougHome />} />
          <Route path="/quiz" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

