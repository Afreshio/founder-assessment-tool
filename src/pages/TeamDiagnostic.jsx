import './TeamDiagnostic.css'

// SVG Icon Components
const WonderGeniusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 20c0-2.5 2.2-5 5-5s5 2.5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="6" r="0.8" fill="currentColor"/>
    <circle cx="12" cy="6" r="0.8" fill="currentColor"/>
    <circle cx="16" cy="6" r="0.8" fill="currentColor"/>
    <path d="M5 2c0 2 1 3 3 2s2-2 0-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M19 2c0 2-1 3-3 2s-2-2 0-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
)

const WonderFrustrationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18.63 13A17.888 17.888 0 0 1 18 8M6.26 6.26A5.86 5.86 0 0 0 6 8c0 5-2 7-2 7s2 2 2 8M18 8c0-2.21-1.79-4-4-4M10 4c-2.21 0-4 1.79-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const InventionGeniusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 12c0-1.5 1.3-3 3-3s3 1.5 3 3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 9l-2 4h4l-2-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M10 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const InventionFrustrationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2v6h6V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 8l-2 12h10l-2-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="7" y1="12" x2="17" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const DiscernmentGeniusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 10l1-2L5.5 7l-2 1L2.5 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M6.5 10l1-2L9.5 7l-2 1L6.5 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M10.5 10l1-2L13.5 7l-2 1L10.5 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M14.5 10l1-2L17.5 7l-2 1L14.5 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M18.5 10l1-2L21.5 7l-2 1L18.5 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
)

const DiscernmentFrustrationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
    <path d="M9 15c0 1.5 1.3 3 3 3s3-1.5 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const GalvanizingGeniusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L8 8h8l-4-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M8 8v8h8V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M8 16l-2 4h12l-2-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M10 10h4M10 12h4M10 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 12c0-2 1-3 2-2M18 12c0-2-1-3-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
)

const GalvanizingFrustrationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L8 8h8l-4-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M8 8v8h8V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M8 16l-2 4h12l-2-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const EnablementGeniusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 20c0-3 2.7-6 6-6s6 3 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 12l-2-2M16 12l2-2M12 6v-2M12 18v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const EnablementFrustrationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const TenacityGeniusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8c0-1 1-2 2-1s1 2 0 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M18 8c0-1-1-2-2-1s-1 2 0 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M8 10h8v8H8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M10 12h4M10 14h4M10 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="20" r="2" fill="currentColor"/>
  </svg>
)

const TenacityFrustrationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const WORKING_GENIUSES = [
  {
    name: 'Wonder',
    wellRepresented: 'We observe the environment, questioning current approaches and the status quo. We think about how things could be different.',
    genius: 'Ponders possibilities',
    frustration: 'Too busy to notice',
    underrepresented: "We spend most of our energy on getting things done and rarely stop to discuss what's happening in our industry or environment. We often fail to identify serious problems or take advantage of major opportunities.",
    geniusIcon: WonderGeniusIcon,
    frustrationIcon: WonderFrustrationIcon
  },
  {
    name: 'Invention',
    wellRepresented: 'We generate novel solutions and ideas.',
    genius: 'Generates novel solutions',
    frustration: 'Unable to innovate',
    underrepresented: 'We fail to generate novel solutions and ideas.',
    geniusIcon: InventionGeniusIcon,
    frustrationIcon: InventionFrustrationIcon
  },
  {
    name: 'Discernment',
    wellRepresented: 'We define and solve the best solution.',
    genius: 'Defines and Solves Best Solution',
    frustration: 'Surprised by Failures',
    underrepresented: 'We fail to define and solve the best solution.',
    geniusIcon: DiscernmentGeniusIcon,
    frustrationIcon: DiscernmentFrustrationIcon
  },
  {
    name: 'Galvanizing',
    wellRepresented: 'We rally the team around our best initiatives.',
    genius: 'Rallies the Team',
    frustration: 'Fails to Inspire',
    underrepresented: 'We fail to get the team rallied and focused around our best ideas or endeavours.',
    geniusIcon: GalvanizingGeniusIcon,
    frustrationIcon: GalvanizingFrustrationIcon
  },
  {
    name: 'Enablement',
    wellRepresented: 'We provide the support needed to move the solution into the first stages of implementation.',
    genius: 'Supports Others',
    frustration: 'Lacks Support',
    underrepresented: 'We fail to champion the most important priorities. No one responds to the rallying cry around the idea or solution.',
    geniusIcon: EnablementGeniusIcon,
    frustrationIcon: EnablementFrustrationIcon
  },
  {
    name: 'Tenacity',
    wellRepresented: 'We hold ourselves accountable for finishing well. We enjoy seeing the full impact of our solution realized in the world.',
    genius: 'Brings to Completion',
    frustration: "Doesn't Finish",
    underrepresented: 'We fail to complete projects. We move on to the next thing before seeing the initiative all the way through.',
    geniusIcon: TenacityGeniusIcon,
    frustrationIcon: TenacityFrustrationIcon
  }
]

function TeamDiagnostic() {
  return (
    <div className="team-diagnostic-page">
      <div className="team-diagnostic-container">
        <h1 className="team-diagnostic-title">Team Diagnostic</h1>
        
        <div className="team-diagnostic-header">
          <div className="header-section header-strengths">
            <h2>Team Strengths</h2>
          </div>
          <div className="header-section header-challenges">
            <h2>Team Challenges</h2>
          </div>
        </div>

        <div className="working-genius-grid">
          {WORKING_GENIUSES.map((wg, index) => {
            const GeniusIcon = wg.geniusIcon
            const FrustrationIcon = wg.frustrationIcon
            
            return (
              <div key={wg.name} className="working-genius-row">
                <div className="wg-column wg-name-column">
                  <h3 className="wg-name">{wg.name}</h3>
                  <p className="wg-well-represented">{wg.wellRepresented}</p>
                </div>
                
                <div className="wg-column wg-genius-column">
                  <div className="genius-frustration-item genius-item">
                    <div className="icon-wrapper">
                      <GeniusIcon />
                    </div>
                    <div className="text-content">
                      <span className="label">Genius:</span>
                      <span className="value">{wg.genius}</span>
                    </div>
                  </div>
                  <div className="genius-frustration-item frustration-item">
                    <div className="icon-wrapper">
                      <FrustrationIcon />
                    </div>
                    <div className="text-content">
                      <span className="label">Frustration:</span>
                      <span className="value">{wg.frustration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="wg-column wg-underrepresented-column">
                  <p className="wg-underrepresented">{wg.underrepresented}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TeamDiagnostic

