import './Results.css'

const FOUNDER_TYPES = {
  Visionary: {
    description: "You're a Visionary founder! You excel at deep contemplation and innovation, bringing fresh ideas and long-term thinking to your ventures.",
    traits: ["Deep thinking", "Innovation", "Long-term vision"],
    color: "#62b487",
    roughEdges: "Your rough edges can include being a chaos maker and not valuing practicality as much as originality. Less thought given to implementation which puts stress and chaos on teammates.",
    idealPartner: "Partner with an Operator co-founder who loves execution, organizational rhythm, and translating your bold ideas into dependable results."
  },
  Catalyst: {
    description: "You're a Catalyst founder! You're constantly innovating and have a gift for inspiring and rallying people around your ideas.",
    traits: ["Innovation", "Inspiration", "Team building"],
    color: "#52a276",
    roughEdges: "Your rough edges can include coming across as disingenuous and over-the-top in your excitement - hard to believe that anyone can be that excited about anything. Constant micro-innovations even after a decision has been made. Can be careless and hasty.",
    idealPartner: "Pair with an Operator co-founder who creates operating cadence, anchors focus, and keeps the team aligned once your vision is set."
  },
  Architect: {
    description: "You're an Architect founder! You trust your instincts when data is scarce and excel at seeing projects through to completion.",
    traits: ["Intuition", "Execution", "Reliability"],
    color: "#7cc8a0",
    roughEdges: "Your rough edges can include angst around getting things done - can get judgmental when people are not meeting your standards and expectations. Relentless sense of responsibility can cause you to lean into your T before discerning - need to make sure you prioritize and discern BEFORE finishing.",
    idealPartner: "Partner with a Visionary or Catalyst co-founder who stretches the long-term horizon, keeps new ideas flowing, and balances your execution focus."
  },
  Operator: {
    description: "You're an Operator founder! You're great at rallying teams and ensuring projects are completed successfully.",
    traits: ["Team leadership", "Execution", "Results"],
    color: "#3c7c5d",
    roughEdges: "Your rough edges can include being impatient, pushy and a little domineering. Can be overconfident, cavalier in your declarations of what is true and good and dismiss others when there is more nuance involved.",
    idealPartner: "Partner with a Visionary co-founder who expands the big picture, challenges assumptions, and fuels long-range innovation."
  }
}

function calculateArchetypeScores(scores) {
  const { W, I, D, G, T, E } = scores
  
  // Calculate weighted archetype scores (0-16 range)
  const visionaryScore = (W * 1.5) + (I * 1.5) + (D * 1.0)
  const catalystScore = (G * 1.5) + (I * 1.5) + (D * 0.5) + (T * 0.5)
  const architectScore = (D * 1.5) + (T * 1.5) + (I * 1.0)
  const operatorScore = (G * 1.0) + (T * 1.5) + (E * 1.0)
  
  return {
    Visionary: Math.round(visionaryScore * 10) / 10, // Round to 1 decimal
    Catalyst: Math.round(catalystScore * 10) / 10,
    Architect: Math.round(architectScore * 10) / 10,
    Operator: Math.round(operatorScore * 10) / 10
  }
}

function getInterpretation(score) {
  if (score >= 14) return { level: 'Highly aligned', color: '#3c7c5d' }
  if (score >= 11) return { level: 'Strong tendency', color: '#62b487' }
  if (score >= 8) return { level: 'Partial alignment', color: '#a8d9b6' }
  return { level: 'Non-dominant', color: '#d0d0d0' }
}

function determineFounderType(scores, tiebreaker) {
  const archetypeScores = calculateArchetypeScores(scores)
  
  // Sort scores to find top two
  const sortedScores = Object.entries(archetypeScores)
    .sort((a, b) => b[1] - a[1])
  
  const topScore = sortedScores[0][1]
  const secondScore = sortedScores[1][1]
  const topType = sortedScores[0][0]
  const secondType = sortedScores[1][0]
  
  // Check if within 1.5 points for hybrid
  const isHybrid = (topScore - secondScore) <= 1.5
  
  // Use tiebreaker if hybrid
  let finalPrimaryType = topType
  if (isHybrid && tiebreaker) {
    if (tiebreaker === 'whiteboard') {
      // White board → Visionary or Catalyst
      if (topType === 'Visionary' || topType === 'Catalyst') finalPrimaryType = topType
      else if (secondType === 'Visionary' || secondType === 'Catalyst') finalPrimaryType = secondType
    } else if (tiebreaker === 'tasklist') {
      // Task list → Architect or Operator
      if (topType === 'Architect' || topType === 'Operator') finalPrimaryType = topType
      else if (secondType === 'Architect' || secondType === 'Operator') finalPrimaryType = secondType
    }
  }
  
  return {
    primaryType: finalPrimaryType,
    isHybrid: isHybrid,
    hybridType: isHybrid ? `${topType}–${secondType}` : null,
    scores: archetypeScores
  }
}

function Results({ scores, tiebreaker, onRestart }) {
  const result = determineFounderType(scores, tiebreaker)
  const founderType = result.primaryType
  const typeInfo = FOUNDER_TYPES[founderType]
  const archetypeScores = result.scores
  
  return (
    <div className="results">
      <div className="results-header">
        <div className="founder-badge" style={{ background: `linear-gradient(135deg, ${typeInfo.color} 0%, ${typeInfo.color}dd 100%)` }}>
          <h2 className="founder-type">
            {result.isHybrid ? result.hybridType : founderType}
            {result.isHybrid && <span className="hybrid-label"> (Hybrid)</span>}
          </h2>
        </div>
        <p className="founder-description">{typeInfo.description}</p>
      </div>
      
      <div className="archetype-scores-section">
        <h3 className="archetype-scores-title">Your Archetype Scores</h3>
        <div className="archetype-scores-grid">
          {Object.entries(archetypeScores).map(([type, score]) => {
            const interpretation = getInterpretation(score)
            const isTop = type === founderType
            return (
              <div key={type} className={`archetype-score-card ${isTop ? 'top-score' : ''}`}>
                <div className="archetype-score-header">
                  <span className="archetype-score-name">{type}</span>
                  <span className="archetype-score-value">{score.toFixed(1)}/16</span>
                </div>
                <div className="archetype-score-bar">
                  <div 
                    className="archetype-score-fill" 
                    style={{ 
                      width: `${(score / 16) * 100}%`,
                      backgroundColor: interpretation.color
                    }}
                  />
                </div>
                <div className="archetype-score-interpretation" style={{ color: interpretation.color }}>
                  {interpretation.level}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="founder-fit-grid-section">
        <h3 className="founder-fit-grid-title">Founder Fit 2×2 Grid</h3>
        <div className="founder-fit-grid-container">
          <div className="founder-fit-grid">
            {/* Y-Axis Label (Vision) */}
            <div className="grid-y-axis-label grid-y-axis-top">Vision</div>
            
            {/* Grid Quadrants */}
            <div className="grid-quadrant grid-quadrant-top-left">
              <h4 className="quadrant-title">Visionary Founders</h4>
              <p className="quadrant-core"><strong>Core:</strong> Wonder + Invention</p>
              <p className="quadrant-focus"><strong>Focus:</strong> Meaning, ideas, possibility</p>
              <ul className="quadrant-examples">
                <li>The Dreamer – Elon Musk</li>
                <li>The Prophet – Marc Benioff</li>
                <li>The Sage – Yvon Chouinard</li>
              </ul>
              <p className="quadrant-description">They live in "what could be." They imagine the future and challenge assumptions.</p>
            </div>
            
            <div className="grid-quadrant grid-quadrant-top-right">
              <h4 className="quadrant-title">Catalyst Founders</h4>
              <p className="quadrant-core"><strong>Core:</strong> Invention + Galvanizing</p>
              <p className="quadrant-focus"><strong>Focus:</strong> Momentum, inspiration, disruption</p>
              <ul className="quadrant-examples">
                <li>The Firestarter – Richard Branson</li>
                <li>The Evangelist – Brian Chesky</li>
                <li>The Inventor – Steve Jobs</li>
              </ul>
              <p className="quadrant-description">They mobilize people and energy to make bold ideas real.</p>
            </div>
            
            <div className="grid-quadrant grid-quadrant-bottom-left">
              <h4 className="quadrant-title">Architect Founders</h4>
              <p className="quadrant-core"><strong>Core:</strong> Discernment + Tenacity</p>
              <p className="quadrant-focus"><strong>Focus:</strong> Systems, judgment, scale</p>
              <ul className="quadrant-examples">
                <li>The Strategist – Warren Buffett</li>
                <li>The Architect – Reed Hastings</li>
                <li>The Builder – Sundar Pichai</li>
              </ul>
              <p className="quadrant-description">They design enduring structures, balancing innovation with rigor.</p>
            </div>
            
            <div className="grid-quadrant grid-quadrant-bottom-right">
              <h4 className="quadrant-title">Operator Founders</h4>
              <p className="quadrant-core"><strong>Core:</strong> Galvanizing + Tenacity</p>
              <p className="quadrant-focus"><strong>Focus:</strong> Accountability, discipline, delivery</p>
              <ul className="quadrant-examples">
                <li>The Executor – Frank Slootman</li>
                <li>The Steward – Tim Cook</li>
                <li>The Operator – Bob Iger</li>
              </ul>
              <p className="quadrant-description">They ensure precision, urgency, and performance at scale.</p>
            </div>
            
            {/* Y-Axis Label (Execution) */}
            <div className="grid-y-axis-label grid-y-axis-bottom">Execution</div>
            
            {/* X-Axis Labels */}
            <div className="grid-x-axis-label grid-x-axis-left">Creative</div>
            <div className="grid-x-axis-label grid-x-axis-right">Operational</div>
          </div>
        </div>
      </div>

      <div className="scores-section">
        <h3 className="scores-title">Raw Trait Scores</h3>
        <p className="scores-subtitle">These are your base scores (0-4) used to calculate your archetype scores above.</p>
        <div className="scores-grid">
          <div className="score-item">
            <span className="score-label">Wonder (W)</span>
            <span className="score-value">{scores.W}/4</span>
          </div>
          <div className="score-item">
            <span className="score-label">Invention (I)</span>
            <span className="score-value">{scores.I}/4</span>
          </div>
          <div className="score-item">
            <span className="score-label">Discernment (D)</span>
            <span className="score-value">{scores.D}/4</span>
          </div>
          <div className="score-item">
            <span className="score-label">Galvanizing (G)</span>
            <span className="score-value">{scores.G}/4</span>
          </div>
          <div className="score-item">
            <span className="score-label">Enablement (E)</span>
            <span className="score-value">{scores.E}/4</span>
          </div>
          <div className="score-item">
            <span className="score-label">Tenacity (T)</span>
            <span className="score-value">{scores.T}/4</span>
          </div>
        </div>
      </div>
      
      <div className="traits-section">
        <h3 className="traits-title">Your Key Traits</h3>
        <div className="traits-list">
          {typeInfo.traits.map((trait, index) => (
            <span key={index} className="trait-badge">{trait}</span>
          ))}
        </div>
      </div>
      
      {typeInfo.roughEdges && (
        <div className="rough-edges-section">
          <h3 className="rough-edges-title">Your Rough Edges</h3>
          <p className="rough-edges-text">{typeInfo.roughEdges}</p>
        </div>
      )}

      {typeInfo.idealPartner && (
        <div className="cofounder-section">
          <h3 className="cofounder-title">Ideal Co-Founder Match</h3>
          <p className="cofounder-text">{typeInfo.idealPartner}</p>
        </div>
      )}
      
      <div className="calendly-section">
        <div className="calendly-icon">💬</div>
        <h3 className="calendly-title">Ready to Level Up?</h3>
        <p className="calendly-text">
          Book a free 30-minute Zoom discovery call with Doug Stevenson to dive deeper into your founder type, 
          explore your rough edges, and discover actionable strategies to strengthen your leadership.
        </p>
        <div className="calendly-features">
          <span className="calendly-feature">✓ Free 30-min call</span>
          <span className="calendly-feature">✓ Personalized insights</span>
          <span className="calendly-feature">✓ Action plan</span>
        </div>
        <a 
          href="https://calendly.com/douglas-stevenson" 
          target="_blank" 
          rel="noopener noreferrer"
          className="calendly-button"
        >
          <span className="calendly-button-icon">📅</span>
          Schedule Your Free Zoom Call
        </a>
      </div>
      
      <button className="restart-button" onClick={onRestart}>
        Take Quiz Again
      </button>
    </div>
  )
}

export default Results

