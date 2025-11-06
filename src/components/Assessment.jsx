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

  const handleAnswer = (value) => {
    const questionId = QUESTIONS[currentQuestion].id
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    if (currentQuestion < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      // Calculate scores
      const scores = {
        W: newAnswers.W || 0,
        I: newAnswers.I || 0,
        D: newAnswers.D || 0,
        G: newAnswers.G || 0,
        E: newAnswers.E || 0,
        T: newAnswers.T || 0
      }
      setTimeout(() => {
        onComplete(scores)
      }, 300)
    }
  }

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100

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

