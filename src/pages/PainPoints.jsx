import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';

const PainPoints = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-50 via-white to-charcoal-50/30">
      <LandingNav />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 mb-8 leading-tight tracking-tight text-center" style={{ letterSpacing: '-0.02em' }}>
            Pain Points
          </h1>
          <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed max-w-4xl mx-auto text-center" style={{ lineHeight: '1.75' }}>
            Scaling a company puts extraordinary pressure on founders and executive teams. These recurring pain points are the signal that it is time to evaluate new systems, processes and mechanisms to scale the organization.
          </p>
        </div>
      </section>

      {/* PRFAQ Section */}
      <Section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              1. PRFAQ (Press Release + FAQ) – Pain Points It Targets
            </h2>
            <p className="text-xl text-charcoal-700 mb-8 leading-relaxed" style={{ lineHeight: '1.75' }}>
              Amazon's "working backwards" PRFAQ is mainly aimed at product strategy and alignment problems.
            </p>
            <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Core pain points</h3>
          </div>

          <div className="space-y-8">
            {[
              {
                number: 1,
                title: 'Building features nobody actually wants',
                description: 'Teams ship "cool" tech that doesn\'t solve a real customer problem.',
                solution: 'PRFAQ forces you to start with a future press release (customer value, not features) and FAQs (use cases, objections), which flushes this out early.',
              },
              {
                number: 2,
                title: 'Vague or misaligned vision across stakeholders',
                description: 'Execs, eng, product, sales all hold slightly different mental models of "what we\'re building."',
                solution: 'A single 6-page narrative + FAQs creates a shared, concrete story of the future state and customer outcome.',
              },
              {
                number: 3,
                title: 'Jumping to solutions before understanding the problem',
                description: 'Teams define architecture, sprints and OKRs with a half-baked understanding of the customer pain.',
                solution: 'The PR section must state: who the customer is, their problem, why this is worth solving, and how success will be measured. That locks the problem definition before solutioning.',
              },
              {
                number: 4,
                title: 'Incoherent or hand-wavy business case',
                description: '"This will be big" with no clear path to impact, adoption, or metrics.',
                solution: 'PRFAQ requires explicit claims about value props, pricing, adoption scenarios, and key metrics – and leaders challenge those in the doc review.',
              },
              {
                number: 5,
                title: 'Scope creep and product thrash',
                description: 'As more voices join, the product bloats or changes shape constantly.',
                solution: 'A reviewed and approved PRFAQ becomes the source of truth; new ideas must map back to the press-release promise or be explicitly managed as scope change.',
              },
              {
                number: 6,
                title: 'Slow, meeting-heavy decision making',
                description: 'Strategy decisions drift across many slide decks and meetings.',
                solution: 'The written narrative plus a read-through meeting compresses decision-making: people read in silence, then debate the doc. This reduces political theater and focuses on the content.',
              },
              {
                number: 7,
                title: 'Lack of clear success metrics',
                description: 'Teams don\'t know what "good" looks like post-launch.',
                solution: 'The FAQ section typically includes: what metrics will we track, what are target thresholds, and how we\'ll know we failed. That drives clarity for launch and iteration.',
              },
            ].map((item) => (
              <Card key={item.number} className="hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
                      {item.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                      {item.title}
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                          <strong className="text-charcoal-900">Problem:</strong> {item.description}
                        </p>
                      </div>
                      <div>
                        <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                          <strong className="text-charcoal-900">Solution:</strong> {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Bar-Raising Engineering Review Section */}
      <Section className="relative bg-gradient-to-b from-white via-charcoal-50/30 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              2. Bar-Raising Engineering Review & Operational Readiness Review
            </h2>
            <p className="text-xl text-charcoal-700 mb-8 leading-relaxed" style={{ lineHeight: '1.75' }}>
              These practices are aimed at technical quality, reliability, and operational readiness.
            </p>
            <h3 className="text-3xl font-bold text-charcoal-900 mb-2">A. Bar-Raising Engineering Review – Pain Points</h3>
            <p className="text-lg text-charcoal-600 mb-8 italic">
              Think of this as Amazon's way to prevent "engineering debt at birth."
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                number: 1,
                title: 'Inconsistent engineering quality across teams',
                description: 'Different teams have different standards; some ship fragile systems.',
                solution: 'A bar-raiser (senior engineer not in the line hierarchy) enforces consistent standards for design, security, and reliability across orgs.',
              },
              {
                number: 2,
                title: 'Local optimization at the expense of long-term maintainability',
                description: 'Teams choose quick hacks to hit a date, creating systemic debt.',
                solution: 'Bar-raisers specifically push on long-term implications: simplicity of design, blast radius, coupling, failure modes, and evolution over time.',
              },
              {
                number: 3,
                title: 'Architectures that don\'t scale with growth',
                description: 'Systems work for thousands of users but fail at millions.',
                solution: 'Reviews stress load, scaling characteristics, capacity planning assumptions, and future growth scenarios.',
              },
              {
                number: 4,
                title: 'Hidden technical risks and "unknown unknowns"',
                description: 'Teams are blind to edge cases they\'ve never encountered.',
                solution: 'Senior reviewers bring pattern-recognition and prior incidents, probing for edge cases, cross-service dependencies, and abuse or misuse scenarios.',
              },
              {
                number: 5,
                title: 'Overly complex designs',
                description: 'Clever architectures that no one can understand or debug.',
                solution: 'Bar-raisers push for simplicity, separation of concerns, clear ownership boundaries, and minimal moving parts.',
              },
              {
                number: 6,
                title: 'Weak documentation and lack of shared understanding',
                description: 'Knowledge lives in a few engineers\' heads.',
                solution: 'The review forces a high-quality design doc that others can understand, review, and maintain.',
              },
            ].map((item) => (
              <Card key={item.number} className="hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
                      {item.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                      {item.title}
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                          <strong className="text-charcoal-900">Problem:</strong> {item.description}
                        </p>
                      </div>
                      <div>
                        <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                          <strong className="text-charcoal-900">Solution:</strong> {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Operational Readiness Review Section */}
      <Section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-charcoal-900 mb-2">B. Operational Readiness Review (ORR) – Pain Points</h3>
            <p className="text-lg text-charcoal-600 mb-8 italic">
              This is about avoiding "launch and pray."
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                number: 1,
                title: 'Launching services that aren\'t operable in the real world',
                description: 'No runbooks, no dashboards, no alarms.',
                solution: 'ORR checks: monitoring, alerting, runbooks, on-call rotations, escalation paths, SOPs for common failures.',
              },
              {
                number: 2,
                title: 'Unclear ownership in production',
                description: 'In incidents, nobody knows who\'s actually responsible.',
                solution: 'ORR requires clear service ownership, on-call assignments, and contact paths.',
              },
              {
                number: 3,
                title: 'Poor incident response and long time-to-recover',
                description: 'Teams discover failure modes for the first time in production.',
                solution: 'ORR expects disaster scenarios, failure injection / game days, and documented recovery procedures before launch.',
              },
              {
                number: 4,
                title: 'Insufficient security, compliance, and privacy controls',
                description: 'Gaps in access control, audit logs, data handling.',
                solution: 'ORR checklist includes security reviews, threat modeling, access patterns, and compliance requirements for the service.',
              },
              {
                number: 5,
                title: 'No capacity or performance guardrails',
                description: 'Services get overloaded by traffic spikes or internal use.',
                solution: 'ORR verifies load testing, capacity planning, autoscaling rules, and throttling/failover plans.',
              },
              {
                number: 6,
                title: 'Inadequate customer support readiness',
                description: 'CX and support teams get blindsided by new behaviors and failure modes.',
                solution: 'ORR ensures support documentation, runbooks for Tier-1/Tier-2, and clear escalation pathways from support to engineering.',
              },
            ].map((item) => (
              <Card key={item.number} className="hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
                      {item.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                      {item.title}
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                          <strong className="text-charcoal-900">Problem:</strong> {item.description}
                        </p>
                      </div>
                      <div>
                        <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                          <strong className="text-charcoal-900">Solution:</strong> {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* How They Work Together Section */}
      <Section className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-8 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              How They Work Together
            </h2>
            <p className="text-xl text-charcoal-700 mb-8 leading-relaxed" style={{ lineHeight: '1.75' }}>
              If you zoom out:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="h-full">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">PRFAQ</h3>
              <p className="text-charcoal-700 leading-relaxed mb-4" style={{ lineHeight: '1.75' }}>
                attacks upstream product & strategy pain:
              </p>
              <p className="text-charcoal-600 italic leading-relaxed" style={{ lineHeight: '1.75' }}>
                "Are we building the right thing for the right customer, with a clear story and metrics?"
              </p>
            </Card>

            <Card className="h-full">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">Bar-Raising Engineering Review</h3>
              <p className="text-charcoal-700 leading-relaxed mb-4" style={{ lineHeight: '1.75' }}>
                attacks design & build pain:
              </p>
              <p className="text-charcoal-600 italic leading-relaxed" style={{ lineHeight: '1.75' }}>
                "Are we building it in a way that's simple, scalable, and technically sound?"
              </p>
            </Card>

            <Card className="h-full">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">Operational Readiness Review</h3>
              <p className="text-charcoal-700 leading-relaxed mb-4" style={{ lineHeight: '1.75' }}>
                attacks run & operate pain:
              </p>
              <p className="text-charcoal-600 italic leading-relaxed" style={{ lineHeight: '1.75' }}>
                "Can we run this reliably in production at scale, with fast, safe recovery when things break?"
              </p>
            </Card>
          </div>

          <Card className="bg-accent/10 border-accent/20">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-4 text-center">Together, they form a pipeline that reduces:</h3>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start text-charcoal-700">
                <span className="text-accent mr-3 mt-1 font-bold text-xl">•</span>
                <span className="text-lg leading-relaxed" style={{ lineHeight: '1.75' }}>Wasted effort on the wrong product</span>
              </li>
              <li className="flex items-start text-charcoal-700">
                <span className="text-accent mr-3 mt-1 font-bold text-xl">•</span>
                <span className="text-lg leading-relaxed" style={{ lineHeight: '1.75' }}>Fragile architectures</span>
              </li>
              <li className="flex items-start text-charcoal-700">
                <span className="text-accent mr-3 mt-1 font-bold text-xl">•</span>
                <span className="text-lg leading-relaxed" style={{ lineHeight: '1.75' }}>Painful, chaotic launches</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-charcoal-900 text-charcoal-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Afresh.io. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PainPoints;
