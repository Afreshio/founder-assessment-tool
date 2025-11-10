import './Page.css'

function PainPoints() {
  return (
    <div className="page">
      <h1 className="page-title">Founder Pain Points We Solve</h1>

      <div className="page-content">
        <p className="page-text">
          Scaling a company puts extraordinary pressure on founders and executive teams. These
          recurring pain points are the signal that it is time to bring in a strategic partner
          and sounding board.
        </p>

        <div className="page-section">
          <h2 className="page-subtitle">Leadership &amp; Team Dynamics</h2>
          <ul className="page-list">
            <li>Executive team misalignment on vision, priorities, or decision cadence</li>
            <li>High-performers burning out or underperforming because feedback loops broke down</li>
            <li>Founders carrying all the accountability while middle management stalls progress</li>
          </ul>
        </div>

        <div className="page-section">
          <h2 className="page-subtitle">Operational Bottlenecks</h2>
          <ul className="page-list">
            <li>Important initiatives stuck between product, GTM, and operations owners</li>
            <li>OKRs and weekly rituals exist on paper but lack real accountability</li>
            <li>Fast growth exposed gaps in hiring, onboarding, and enabling the next layer of leaders</li>
          </ul>
        </div>

        <div className="page-section">
          <h2 className="page-subtitle">Founder Experience</h2>
          <ul className="page-list">
            <li>Decision fatigue from constantly toggling between investor, customer, and team demands</li>
            <li>Isolation at the top—no unbiased sparring partner who understands the stakes</li>
            <li>Worry that culture and cohesion will crack as the company crosses the next growth stage</li>
          </ul>
        </div>

        <p className="page-text">
          If these resonate, you are not alone. Our advisory retainer, founder coaching, and team
          off-sites are built to restore clarity, momentum, and trust—so you can get back to
          building the company only you can build.
        </p>
      </div>
    </div>
  )
}

export default PainPoints
