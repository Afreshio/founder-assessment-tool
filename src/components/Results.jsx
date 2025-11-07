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

function determineFounderType(scores) {
  const { W, I, D, G, T } = scores
  
  // Calculate type scores
  const visionaryScore = W + I
  const catalystScore = I + G
  const architectScore = D + T
  const operatorScore = G + T
  
  // Find the highest score
  const typeScores = {
    Visionary: visionaryScore,
    Catalyst: catalystScore,
    Architect: architectScore,
    Operator: operatorScore
  }
  
  // Get the type with the highest score
  const maxScore = Math.max(...Object.values(typeScores))
  const types = Object.keys(typeScores).filter(type => typeScores[type] === maxScore)
  
  // If there's a tie, use secondary criteria
  if (types.length > 1) {
    // Prioritize based on individual trait scores
    if (types.includes('Visionary') && W >= I) return 'Visionary'
    if (types.includes('Catalyst') && I >= G) return 'Catalyst'
    if (types.includes('Architect') && D >= T) return 'Architect'
    if (types.includes('Operator') && G >= T) return 'Operator'
    return types[0] // Default to first type if still tied
  }
  
  return types[0]
}

function Results({ scores, onRestart }) {
  const founderType = determineFounderType(scores)
  const typeInfo = FOUNDER_TYPES[founderType]
  
  return (
    <div className="results">
      <div className="results-header">
        <div className="founder-badge" style={{ background: `linear-gradient(135deg, ${typeInfo.color} 0%, ${typeInfo.color}dd 100%)` }}>
          <h2 className="founder-type">{founderType}</h2>
        </div>
        <p className="founder-description">{typeInfo.description}</p>
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

      <div className="scores-section">
        <h3 className="scores-title">Your Scores</h3>
        <div className="scores-grid">
          <div className="score-item">
            <span className="score-label">Wonder (W)</span>
            <span className="score-value">{scores.W}/2</span>
          </div>
          <div className="score-item">
            <span className="score-label">Invention (I)</span>
            <span className="score-value">{scores.I}/2</span>
          </div>
          <div className="score-item">
            <span className="score-label">Discernment (D)</span>
            <span className="score-value">{scores.D}/2</span>
          </div>
          <div className="score-item">
            <span className="score-label">Galvanizing (G)</span>
            <span className="score-value">{scores.G}/2</span>
          </div>
          <div className="score-item">
            <span className="score-label">Enablement (E)</span>
            <span className="score-value">{scores.E}/2</span>
          </div>
          <div className="score-item">
            <span className="score-label">Tenacity (T)</span>
            <span className="score-value">{scores.T}/2</span>
          </div>
        </div>
      </div>
      
      <div className="calendly-section">
        <h3 className="calendly-title">Want to Learn More?</h3>
        <p className="calendly-text">
          Book a free discovery call with Doug Stevenson to learn more about your rough edges as a founder and how to improve them.
        </p>
        <a 
          href="https://calendly.com/douglas-stevenson" 
          target="_blank" 
          rel="noopener noreferrer"
          className="calendly-button"
        >
          Schedule Your Free Call
        </a>
      </div>
      
      <button className="restart-button" onClick={onRestart}>
        Take Quiz Again
      </button>
    </div>
  )
}

export default Results

