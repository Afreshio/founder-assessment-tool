import './Page.css'

function About() {
  return (
    <div className="page">
      <h1 className="page-title">About the Founder Fit Quiz</h1>
      
      <div className="page-content">
        <p className="page-text">
          The Founder Fit Quiz helps entrepreneurs discover their unique founder type 
          through a series of carefully crafted questions. Understanding your founder type can 
          help you leverage your strengths, identify areas for growth, and build more effective teams.
        </p>

        <h2 className="page-subtitle">The Four Founder Types</h2>

        <div className="founder-types-grid">
          <div className="founder-type-card">
            <h3 className="founder-type-name">Visionary</h3>
            <p className="founder-type-desc">
              Visionaries excel at deep contemplation and innovation. They bring fresh ideas 
              and long-term thinking to their ventures, often seeing possibilities others miss.
            </p>
            <div className="founder-type-traits">
              <span className="trait">Deep Thinking</span>
              <span className="trait">Innovation</span>
              <span className="trait">Long-term Vision</span>
            </div>
          </div>

          <div className="founder-type-card">
            <h3 className="founder-type-name">Catalyst</h3>
            <p className="founder-type-desc">
              Catalysts are constantly innovating and have a gift for inspiring and rallying 
              people around their ideas. They're natural team builders and motivators.
            </p>
            <div className="founder-type-traits">
              <span className="trait">Innovation</span>
              <span className="trait">Inspiration</span>
              <span className="trait">Team Building</span>
            </div>
          </div>

          <div className="founder-type-card">
            <h3 className="founder-type-name">Architect</h3>
            <p className="founder-type-desc">
              Architects trust their instincts when data is scarce and excel at seeing projects 
              through to completion. They're reliable executors who build solid foundations.
            </p>
            <div className="founder-type-traits">
              <span className="trait">Intuition</span>
              <span className="trait">Execution</span>
              <span className="trait">Reliability</span>
            </div>
          </div>

          <div className="founder-type-card">
            <h3 className="founder-type-name">Operator</h3>
            <p className="founder-type-desc">
              Operators are great at rallying teams and ensuring projects are completed successfully. 
              They combine leadership with execution to deliver results.
            </p>
            <div className="founder-type-traits">
              <span className="trait">Team Leadership</span>
              <span className="trait">Execution</span>
              <span className="trait">Results</span>
            </div>
          </div>
        </div>

        <h2 className="page-subtitle">How It Works</h2>
        <p className="page-text">
          The quiz consists of 12 questions (2 per trait), measuring different founder traits:
        </p>
        <ul className="page-list">
          <li><strong>Wonder (W)</strong>: Comfort with deep contemplation</li>
          <li><strong>Invention (I)</strong>: Ability to generate new ideas</li>
          <li><strong>Discernment (D)</strong>: Trust in gut instincts with limited data</li>
          <li><strong>Galvanizing (G)</strong>: Talent for rallying and inspiring people</li>
          <li><strong>Enablement (E)</strong>: Fulfillment from helping others</li>
          <li><strong>Tenacity (T)</strong>: Satisfaction from completing projects</li>
        </ul>
        <p className="page-text">
          Based on your scores, you'll be matched with the founder type that best represents 
          your strengths and approach to entrepreneurship.
        </p>
      </div>
    </div>
  )
}

export default About

