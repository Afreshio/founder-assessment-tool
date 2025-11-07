import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Determine basename based on current path
// If path starts with /quiz, use /quiz, otherwise use root
const getBasename = () => {
  if (window.location.pathname.startsWith('/quiz')) {
    return '/quiz'
  }
  return '/'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

