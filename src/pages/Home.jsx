import { useState } from 'react'
import Assessment from '../components/Assessment'
import Results from '../components/Results'

function Home() {
  const [results, setResults] = useState(null)

  const handleAssessmentComplete = (scores) => {
    setResults(scores)
  }

  const handleRestart = () => {
    setResults(null)
  }

  return (
    <div className="home-page">
      <h1 className="title">Founder Assessment Tool</h1>
      <p className="subtitle">Discover what type of founder you are</p>
      
      {!results ? (
        <Assessment onComplete={handleAssessmentComplete} />
      ) : (
        <Results scores={results} onRestart={handleRestart} />
      )}
    </div>
  )
}

export default Home

