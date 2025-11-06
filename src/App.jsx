import { useState } from 'react'
import Assessment from './components/Assessment'
import Results from './components/Results'
import './App.css'

function App() {
  const [results, setResults] = useState(null)

  const handleAssessmentComplete = (scores) => {
    setResults(scores)
  }

  const handleRestart = () => {
    setResults(null)
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Founder Assessment Tool</h1>
        <p className="subtitle">Discover what type of founder you are</p>
        
        {!results ? (
          <Assessment onComplete={handleAssessmentComplete} />
        ) : (
          <Results scores={results} onRestart={handleRestart} />
        )}
      </div>
    </div>
  )
}

export default App

