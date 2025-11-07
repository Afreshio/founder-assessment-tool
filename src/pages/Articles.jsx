import './Page.css'

function Articles() {
  return (
    <div className="page-container">
      <h1 className="page-title">Articles</h1>
      
      <article className="article-card">
        <div className="article-header">
          <h2 className="article-title">Creating Clarity</h2>
          <div className="article-meta">
            <span className="article-author">Doug Stevenson</span>
            <span className="article-date">November 5, 2025</span>
          </div>
        </div>
        
        <div className="article-content">
          <p className="article-intro">
            Here is a great exercise we have been using lately with executive teams from Patrick Lencioni 
            the Founder of The Table Group to help clarify team principles.
          </p>
          
          <h3 className="article-subtitle">Clarification of Team Principles</h3>
          
          <div className="article-details">
            <p><strong>The purpose of the exercise:</strong> To create clarity within the team around how members will deal with one another on an ongoing basis.</p>
            
            <p><strong>Time required:</strong> One or two hours.</p>
            
            <p><strong>Instructions:</strong> Have the team discuss and come to resolution around the following issues and any others that the team deems important:</p>
            
            <ul className="article-list">
              <li>The structure and schedule for meetings</li>
              <li>Acceptable behavior during meetings (for example, laptop use)</li>
              <li>The preferred methods for communication (for example, e-mail, voice mail, and so on) and the norms around how to use them</li>
              <li>The timeliness of responding to one another using those methods</li>
              <li>The use of common resources, human and otherwise</li>
              <li>The availability of team members during non work hours</li>
              <li>The level of freedom in which team members can engage one another's staffs</li>
              <li>The extent to which being on time is a priority</li>
            </ul>
          </div>
          
          <div className="extra-credit-section">
            <h3 className="article-subtitle">Extra Credit: Patrick Lencioni The Table Group Videos and Podcasts on Clarity</h3>
            
            <div className="video-links">
              <div className="video-link-item">
                <a 
                  href="https://www.youtube.com/watch?v=cYMcvYPMzqk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  <svg className="youtube-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  The Six Critical Questions by Patrick Lencioni
                </a>
                <p className="video-description">
                  Pat reviews The Six Critical Questions and discusses how a leadership team can become completely aligned to provide their employees the clarity they need to succeed. What are the Six Critical Questions? The content of this video is based on Patrick Lencioni's book, The Advantage.
                </p>
              </div>
              
              <div className="video-link-item">
                <a 
                  href="https://www.youtube.com/watch?v=Ojo0QwbtAeQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  <svg className="youtube-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  The Four Disciplines by Patrick Lencioni - including creating clarity
                </a>
                <p className="video-description">
                  Organizational health is the single greatest competitive advantage in business - and it boils down to these four simple disciplines. The content of this video is based on Patrick Lencioni's book, The Advantage.
                </p>
              </div>
              
              <div className="video-link-item">
                <a 
                  href="https://www.youtube.com/watch?v=45CGsS1MVcg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  <svg className="youtube-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  150. Say it Again, and Again, and Again...
                </a>
                <p className="video-description">
                  As leaders and managers, we are often far too hesitant to over communicate. This week, on our 150th episode of the At the Table Podcast, the whole team discusses the importance of over communication, and the fears that keep us from achieving better clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Articles

