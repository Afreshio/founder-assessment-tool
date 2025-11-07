import { useState } from 'react'
import './Assessment.css'

const QUESTIONS = [
  {
    id: 'W',
    text: "I am comfortable sitting and contemplating the meaning of things longer than most others are."
  },
  {
    id: 'I',
    text: "People say I can't stop innovating or proposing new ideas."
  },
  {
    id: 'D',
    text: "I am much more capable than most people in using my gut instincts when there is little data or information available."
  },
  {
    id: 'G',
    text: "I have a gift for rallying people around a plan or idea, and inspiring them to take action."
  },
  {
    id: 'E',
    text: "I find helping people to be more deeply fulfilling than others do."
  },
  {
    id: 'T',
    text: "I get more satisfaction and fulfillment than most people from seeing a project through to its finish."
  },
  {
    id: 'W',
    text: "I can't help but get lost in pondering the bigger picture of things."
  },
  {
    id: 'I',
    text: "I prefer to create something by working from a \"clean slate\" rather than having to tweak something that has already been established."
  },
  {
    id: 'D',
    text: "People say that I have a rare talent for providing uniquely insightful advice and perspective."
  },
  {
    id: 'G',
    text: "When momentum and progress slow down, I enjoy being the one to reenergize people to push forward."
  },
  {
    id: 'E',
    text: "Compared to most others, I am an exceedingly responsive and helpful person."
  },
  {
    id: 'T',
    text: "I rarely miss a deadline or target and couldn't imagine letting it happen."
  }
]

const ANSWER_OPTIONS = [
  { value: 0, label: "Oh no, definitely not" },
  { value: 1, label: "Sometimes/somewhat" },
  { value: 2, label: "Oh yeah, definitely" }
]

function Assessment({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showTiebreaker, setShowTiebreaker] = useState(false)

  const calculateScores = (allAnswers) => {
    const scores = {
      W: 0,
      I: 0,
      D: 0,
      G: 0,
      E: 0,
      T: 0
    }
    
    // Sum scores for each trait
    QUESTIONS.forEach((question, index) => {
      const answerKey = `Q${index}_${question.id}`
      const answerValue = allAnswers[answerKey] || 0
      scores[question.id] += answerValue
    })
    
    return scores
  }

  const checkForTie = (scores) => {
    const { W, I, D, G, T } = scores
    const visionaryScore = W + I
    const catalystScore = I + G
    const architectScore = D + T
    const operatorScore = G + T
    
    const typeScores = {
      Visionary: visionaryScore,
      Catalyst: catalystScore,
      Architect: architectScore,
      Operator: operatorScore
    }
    
    const maxScore = Math.max(...Object.values(typeScores))
    const tiedTypes = Object.keys(typeScores).filter(type => typeScores[type] === maxScore)
    
    return tiedTypes.length > 1 ? tiedTypes : null
  }

  const handleAnswer = (value) => {
    const question = QUESTIONS[currentQuestion]
    const answerKey = `Q${currentQuestion}_${question.id}`
    const newAnswers = { ...answers, [answerKey]: value }
    setAnswers(newAnswers)

    if (currentQuestion < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      // Calculate scores and check for tie
      const scores = calculateScores(newAnswers)
      const tiedTypes = checkForTie(scores)
      
      if (tiedTypes) {
        // Show tiebreaker question
        setShowTiebreaker(true)
      } else {
        // No tie, proceed with results
        setTimeout(() => {
          onComplete(scores, null)
        }, 300)
      }
    }
  }

  const handleTiebreaker = (choice) => {
    const scores = calculateScores(answers)
    const tiebreakerAnswer = choice // 'whiteboard' or 'tasklist'
    
    setTimeout(() => {
      onComplete(scores, tiebreakerAnswer)
    }, 300)
  }

  const progress = showTiebreaker 
    ? 100 
    : ((currentQuestion + 1) / QUESTIONS.length) * 100

  if (showTiebreaker) {
    return (
      <div className="assessment">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="question-container">
          <div className="question-number">
            Tiebreaker Question
          </div>
          
          <h2 className="question-text">
            Which one is your favorite: a white board or a task list?
          </h2>
          
          <div className="answers">
            <button
              className="answer-button tiebreaker-button"
              onClick={() => handleTiebreaker('whiteboard')}
            >
              White Board
            </button>
            <button
              className="answer-button tiebreaker-button"
              onClick={() => handleTiebreaker('tasklist')}
            >
              Task List
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="assessment">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className="question-container">
        <div className="question-number">
          Question {currentQuestion + 1} of {QUESTIONS.length}
        </div>
        
        <h2 className="question-text">
          {QUESTIONS[currentQuestion].text}
        </h2>
        
        <div className="answers">
          {ANSWER_OPTIONS.map((option) => (
            <button
              key={option.value}
              className="answer-button"
              onClick={() => handleAnswer(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Assessment

