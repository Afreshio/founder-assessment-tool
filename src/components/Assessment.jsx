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
      // Calculate scores - sum all answers for each trait
      // Since questions can have the same id, we need to sum them
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
        const answerValue = newAnswers[answerKey] || 0
        scores[question.id] += answerValue
      })
      
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

