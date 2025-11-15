import { useState } from 'react'
import './AntifragilityDiagnostic.css'

const QUESTIONS = [
  {
    id: 1,
    dimension: 'Reaction to Stress',
    question: 'When unexpected pressure or conflict arises, do you retreat, recover, or get stronger?',
    scale: {
      1: 'Avoid/retreat',
      3: 'Recover',
      5: 'Gain strength'
    }
  },
  {
    id: 2,
    dimension: 'Relationship to Change',
    question: 'When conditions shift, how quickly and constructively do you adapt?',
    scale: {
      1: 'Deny',
      3: 'Adjust slowly',
      5: 'Reconfigure effectively'
    }
  },
  {
    id: 3,
    dimension: 'Learning from Variability',
    question: 'After a mistake, how much better does your process become?',
    scale: {
      1: 'Hide/blame',
      3: 'Fix',
      5: 'Improve system'
    }
  },
  {
    id: 4,
    dimension: 'Distributed Ownership',
    question: 'When under pressure, does ownership concentrate or spread?',
    scale: {
      1: 'Depend on few',
      3: 'Share load',
      5: 'New leaders emerge'
    }
  },
  {
    id: 5,
    dimension: 'Relationship to Feedback',
    question: 'How do you handle critical feedback?',
    scale: {
      1: 'Deflect',
      3: 'Listen politely',
      5: 'Seek and integrate'
    }
  },
  {
    id: 6,
    dimension: 'Use of Volatility',
    question: 'Do you invite small stressors to strengthen your work?',
    scale: {
      1: 'Avoid',
      3: 'Manage risk',
      5: 'Use volatility as fuel'
    }
  }
]

const PHASES = ['Ideation', 'Activation', 'Implementation']

const ZONES = {
  fragile: { range: [6, 12], label: 'Fragile Zone', color: '#ef4444' },
  resilient: { range: [13, 18], label: 'Resilient Zone', color: '#f59e0b' },
  adaptive: { range: [19, 24], label: 'Adaptive Zone', color: '#3b82f6' },
  antifragile: { range: [25, 30], label: 'Antifragile Zone', color: '#10b981' }
}

const ZONE_DESCRIPTIONS = {
  fragile: 'Breaks or withdraws under pressure. Growth requires constructive dissent, healthy conflict, and vulnerability based trust.',
  resilient: 'Absorbs shocks but returns to baseline. Focus on learning loops.',
  adaptive: 'Learns and evolves through challenge. Focus on experimentation and distributed ownership.',
  antifragile: 'Gains from stress, builds strength through volatility. Seek larger, riskier opportunities to test and grow the system.'
}

const CONTINUUM_LABELS = [
  'Fragile', 'Brittle', 'Resistant', 'Durable', 'Resilient',
  'Adaptive', 'Robust', 'Regenerative', 'Transformative', 'Antifragile'
]

function AntifragilityDiagnostic() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [selectedPhase, setSelectedPhase] = useState('Ideation')
  const [phaseResults, setPhaseResults] = useState({
    Ideation: {},
    Activation: {},
    Implementation: {}
  })
  const [showResults, setShowResults] = useState(false)
  const [showPhaseComparison, setShowPhaseComparison] = useState(false)

  const handleAnswer = (questionId, score) => {
    const newAnswers = { ...answers, [questionId]: score }
    setAnswers(newAnswers)
    
    // Auto-advance to next question
    if (currentQuestion < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      // All questions answered
      setTimeout(() => {
        handleComplete(newAnswers)
      }, 300)
    }
  }

  const handleComplete = (finalAnswers) => {
    const newPhaseResults = {
      ...phaseResults,
      [selectedPhase]: finalAnswers
    }
    setPhaseResults(newPhaseResults)
    setShowResults(true)
  }

  const handleRestart = () => {
    setAnswers({})
    setCurrentQuestion(0)
    setShowResults(false)
    setShowPhaseComparison(false)
  }

  const handlePhaseChange = () => {
    if (Object.keys(answers).length === QUESTIONS.length) {
      const newPhaseResults = {
        ...phaseResults,
        [selectedPhase]: answers
      }
      setPhaseResults(newPhaseResults)
    }
    setAnswers({})
    setCurrentQuestion(0)
    setShowResults(false)
  }

  const calculateScore = (answersObj) => {
    const scores = Object.values(answersObj)
    return scores.reduce((sum, score) => sum + score, 0)
  }

  const getZone = (score) => {
    if (score >= 25) return 'antifragile'
    if (score >= 19) return 'adaptive'
    if (score >= 13) return 'resilient'
    return 'fragile'
  }

  const scoreToContinuum = (score) => {
    // Map 6-30 score to 1-10 continuum
    const normalized = ((score - 6) / (30 - 6)) * 9 + 1
    return Math.round(normalized)
  }

  const currentScore = calculateScore(answers)
  const currentZone = getZone(currentScore)
  const continuumPosition = scoreToContinuum(currentScore)

  if (showResults) {
    const finalScore = calculateScore(phaseResults[selectedPhase])
    const finalZone = getZone(finalScore)
    const finalContinuum = scoreToContinuum(finalScore)

    return (
      <div className="antifragility-page">
        <div className="antifragility-container">
          <h1 className="antifragility-title">Antifragility Diagnostic</h1>
          
          {showPhaseComparison ? (
            <PhaseComparisonView 
              phaseResults={phaseResults}
              onBack={() => setShowPhaseComparison(false)}
            />
          ) : (
            <ResultsView
              score={finalScore}
              zone={finalZone}
              continuumPosition={finalContinuum}
              answers={phaseResults[selectedPhase]}
              phase={selectedPhase}
              onRestart={handleRestart}
              onPhaseChange={handlePhaseChange}
              selectedPhase={selectedPhase}
              setSelectedPhase={setSelectedPhase}
              onShowComparison={() => setShowPhaseComparison(true)}
            />
          )}
        </div>
      </div>
    )
  }

  const question = QUESTIONS[currentQuestion]
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100

  return (
    <div className="antifragility-page">
      <div className="antifragility-container">
        <div className="antifragility-intro">
          <h1 className="antifragility-title">Antifragility Diagnostic</h1>
          <p className="antifragility-description">
            Antifragility is the ability to not just withstand stress and volatility, but to actually 
            gain strength and capability from it. This diagnostic measures how antifragile your team 
            or organization is across six core dimensions. Each question is scored 1–5, where 1 
            represents fragile responses and 5 represents antifragile responses.
          </p>
          
          <ContinuumVisualizationIntro />
          
          <div className="phase-selector">
            <label>Assessment Phase:</label>
            <select 
              value={selectedPhase} 
              onChange={(e) => {
                setSelectedPhase(e.target.value)
                handlePhaseChange()
              }}
            >
              {PHASES.map(phase => (
                <option key={phase} value={phase}>{phase}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="question-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="question-card">
            <div className="question-header">
              <span className="question-number">Question {currentQuestion + 1} of {QUESTIONS.length}</span>
              <span className="question-dimension">{question.dimension}</span>
            </div>
            
            <h2 className="question-text">{question.question}</h2>
            
            <div className="scale-options">
              {[1, 2, 3, 4, 5].map(score => (
                <button
                  key={score}
                  className={`scale-button ${answers[question.id] === score ? 'selected' : ''}`}
                  onClick={() => handleAnswer(question.id, score)}
                >
                  <div className="scale-score">{score}</div>
                  <div className="scale-label">
                    {question.scale[score] || (score === 2 ? 'Somewhat fragile' : score === 4 ? 'Somewhat antifragile' : '')}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to interpolate between two hex colors
const interpolateColor = (color1, color2, factor) => {
  const c1 = color1.match(/\w\w/g).map((c) => parseInt(c, 16))
  const c2 = color2.match(/\w\w/g).map((c) => parseInt(c, 16))
  const result = c1.map((c, i) => Math.round(c + (c2[i] - c) * factor))
  return `#${result.map(c => c.toString(16).padStart(2, '0')).join('')}`
}

// Map dimension score (1-5) to continuum gradient color
const getDimensionColor = (score) => {
  // Map score 1-5 to gradient position (0-100%)
  // Score 1 = 0%, Score 5 = 100%
  const gradientPosition = ((score - 1) / 4) * 100
  
  // Continuum gradient stops: #fee2e2 0%, #fef3c7 25%, #dbeafe 50%, #d1fae5 75%, #a7f3d0 100%
  if (gradientPosition <= 25) {
    // Interpolate between #fee2e2 (0%) and #fef3c7 (25%)
    const factor = gradientPosition / 25
    return interpolateColor('#fee2e2', '#fef3c7', factor)
  } else if (gradientPosition <= 50) {
    // Interpolate between #fef3c7 (25%) and #dbeafe (50%)
    const factor = (gradientPosition - 25) / 25
    return interpolateColor('#fef3c7', '#dbeafe', factor)
  } else if (gradientPosition <= 75) {
    // Interpolate between #dbeafe (50%) and #d1fae5 (75%)
    const factor = (gradientPosition - 50) / 25
    return interpolateColor('#dbeafe', '#d1fae5', factor)
  } else {
    // Interpolate between #d1fae5 (75%) and #a7f3d0 (100%)
    const factor = (gradientPosition - 75) / 25
    return interpolateColor('#d1fae5', '#a7f3d0', factor)
  }
}

function ResultsView({ score, zone, continuumPosition, answers, phase, onRestart, onPhaseChange, selectedPhase, setSelectedPhase, onShowComparison }) {
  const zoneInfo = ZONES[zone]
  const dimensionScores = QUESTIONS.map(q => ({
    dimension: q.dimension,
    score: answers[q.id] || 0
  }))

  return (
    <div className="results-container">
      <div className="results-header">
        <h2>Your Antifragility Profile</h2>
        <p className="results-phase">Phase: {phase}</p>
      </div>

      <div className="score-display">
        <div className="total-score">
          <span className="score-label">Total Score</span>
          <span className="score-value">{score} / 30</span>
        </div>
        <div className={`zone-badge zone-${zone}`}>
          {zoneInfo.label}
        </div>
      </div>

      <div className="zone-description">
        <p>{ZONE_DESCRIPTIONS[zone]}</p>
      </div>

      <ContinuumVisualization position={continuumPosition} />

      <RadarChart scores={dimensionScores} />

      <div className="dimension-breakdown">
        <h3>Dimension Scores</h3>
        <div className="dimension-list">
          {dimensionScores.map((item, idx) => (
            <div key={idx} className="dimension-item">
              <span className="dimension-name">{item.dimension}</span>
              <div className="dimension-bar-container">
                <div 
                  className="dimension-bar" 
                  style={{ 
                    width: `${(item.score / 5) * 100}%`,
                    backgroundColor: getDimensionColor(item.score)
                  }}
                />
                <span className="dimension-score">{item.score}/5</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="results-actions">
        <button className="action-button secondary" onClick={onRestart}>
          Retake Assessment
        </button>
        <button className="action-button secondary" onClick={onShowComparison}>
          Compare Phases
        </button>
        <div className="phase-switcher">
          <label>Switch Phase:</label>
          <select 
            value={selectedPhase} 
            onChange={(e) => {
              setSelectedPhase(e.target.value)
              onPhaseChange()
            }}
          >
            {PHASES.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

function ContinuumVisualizationIntro() {
  return (
    <div className="continuum-container">
      <h3>Antifragility Continuum</h3>
      <div className="continuum-bar">
        {CONTINUUM_LABELS.map((label, idx) => {
          return (
            <div
              key={idx}
              className="continuum-point"
              style={{ 
                left: `${(idx / (CONTINUUM_LABELS.length - 1)) * 100}%`,
                opacity: 0.7
              }}
              title={`${idx + 1}. ${label}`}
            >
              <div className="continuum-marker" />
              <span className="continuum-label">{label}</span>
            </div>
          )
        })}
      </div>
      <p className="continuum-description">
        This assessment will help you understand where your team falls on the continuum from <strong>Fragile</strong> to <strong>Antifragile</strong>.
      </p>
    </div>
  )
}

function ContinuumVisualization({ position }) {
  return (
    <div className="continuum-container">
      <h3>Antifragility Continuum</h3>
      <div className="continuum-bar">
        {CONTINUUM_LABELS.map((label, idx) => {
          const positionNum = idx + 1
          const isActive = positionNum === position
          const distance = Math.abs(positionNum - position)
          const opacity = Math.max(0.3, 1 - distance * 0.15)
          
          return (
            <div
              key={idx}
              className={`continuum-point ${isActive ? 'active' : ''}`}
              style={{ 
                left: `${(idx / (CONTINUUM_LABELS.length - 1)) * 100}%`,
                opacity: isActive ? 1 : opacity
              }}
              title={`${positionNum}. ${label}`}
            >
              <div className="continuum-marker" />
              <span className="continuum-label">{label}</span>
            </div>
          )
        })}
        <div 
          className="continuum-indicator"
          style={{ left: `${((position - 1) / (CONTINUUM_LABELS.length - 1)) * 100}%` }}
        />
      </div>
      <p className="continuum-description">
        Your team is positioned at <strong>{position}. {CONTINUUM_LABELS[position - 1]}</strong> on the antifragility continuum.
      </p>
    </div>
  )
}

function RadarChart({ scores }) {
  const maxScore = 5
  const centerX = 150
  const centerY = 150
  const radius = 100

  const getPoint = (angle, value) => {
    const radian = (angle * Math.PI) / 180
    const distance = (value / maxScore) * radius
    return {
      x: centerX + distance * Math.cos(radian),
      y: centerY + distance * Math.sin(radian)
    }
  }

  const angles = scores.map((_, idx) => (idx * 360) / scores.length - 90)
  const points = scores.map((item, idx) => getPoint(angles[idx], item.score))
  
  const pathData = points.map((point, idx) => 
    idx === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`
  ).join(' ') + ' Z'

  return (
    <div className="radar-chart-container">
      <h3>Dimension Radar Chart</h3>
      <svg className="radar-chart" viewBox="0 0 300 300">
        {/* Grid circles */}
        {[1, 2, 3, 4, 5].map(level => (
          <circle
            key={level}
            cx={centerX}
            cy={centerY}
            r={(level / maxScore) * radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}
        
        {/* Axis lines */}
        {angles.map((angle, idx) => {
          const radian = (angle * Math.PI) / 180
          const x = centerX + radius * Math.cos(radian)
          const y = centerY + radius * Math.sin(radian)
          return (
            <line
              key={idx}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          )
        })}
        
        {/* Data area */}
        <path
          d={pathData}
          fill="rgba(59, 130, 246, 0.3)"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        
        {/* Data points */}
        {points.map((point, idx) => (
          <circle
            key={idx}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#3b82f6"
          />
        ))}
        
        {/* Labels */}
        {scores.map((item, idx) => {
          const angle = angles[idx]
          const radian = (angle * Math.PI) / 180
          const labelRadius = radius + 20
          const x = centerX + labelRadius * Math.cos(radian)
          const y = centerY + labelRadius * Math.sin(radian)
          const lastWord = item.dimension.split(' ').pop()
          return (
            <text
              key={idx}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fill="#4b5563"
            >
              {lastWord}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

function PhaseComparisonView({ phaseResults, onBack }) {
  const phaseScores = PHASES.map(phase => ({
    phase,
    score: Object.values(phaseResults[phase]).reduce((sum, score) => sum + score, 0),
    answers: phaseResults[phase]
  }))

  return (
    <div className="phase-comparison">
      <button className="back-button" onClick={onBack}>← Back to Results</button>
      <h2>Phase Comparison</h2>
      
      <div className="comparison-chart">
        {phaseScores.map((item, idx) => {
          const zone = getZone(item.score)
          const zoneInfo = ZONES[zone]
          return (
            <div key={idx} className="comparison-bar-item">
              <div className="comparison-label">{item.phase}</div>
              <div className="comparison-bar-container">
                <div 
                  className="comparison-bar"
                  style={{ 
                    width: `${(item.score / 30) * 100}%`,
                    backgroundColor: zoneInfo.color
                  }}
                />
                <span className="comparison-score">{item.score}/30</span>
              </div>
              <div className={`comparison-zone zone-${zone}`}>{ZONES[zone].label}</div>
            </div>
          )
        })}
      </div>

      <div className="comparison-radar">
        <h3>Dimension Comparison Across Phases</h3>
        <div className="comparison-radar-grid">
          {QUESTIONS.map((q, qIdx) => (
            <div key={qIdx} className="comparison-dimension">
              <h4>{q.dimension}</h4>
              {phaseScores.map((phaseData, pIdx) => (
                <div key={pIdx} className="comparison-dimension-score">
                  <span className="phase-label">{phaseData.phase}:</span>
                  <span className="phase-score">{phaseData.answers[q.id] || 0}/5</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function getZone(score) {
  if (score >= 25) return 'antifragile'
  if (score >= 19) return 'adaptive'
  if (score >= 13) return 'resilient'
  return 'fragile'
}

export default AntifragilityDiagnostic

