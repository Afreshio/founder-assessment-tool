import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const BarRaisingEngineering: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when navigating to this page (unless there's a hash)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const goals = [
    'Better architecture and code quality',
    'Faster, more predictable delivery',
    'Fewer incidents and recoveries that are measured in minutes, not hours',
    'Healthier engineering culture',
    'Teams that get better every quarter',
  ];

  const pillars = [
    {
      number: 1,
      title: 'Technical Excellence',
      description: 'Clear standards for architecture, code quality, testing, documentation, and observability.',
      mechanisms: [
        'Architecture reviews',
        'Definition of Done',
        'Performance and reliability checks',
        'Automated testing',
      ],
    },
    {
      number: 2,
      title: 'Delivery Discipline',
      description: 'Predictable execution anchored in metrics that matter.',
      mechanisms: [
        'Cycle time, lead time, defect rate',
        'DORA metrics',
        'Sprint reviews',
        'Post-mortems',
        'Continuous improvement rituals',
      ],
    },
    {
      number: 3,
      title: 'Engineering Culture',
      description: 'Where learning, feedback, and healthy conflict are normal—because excellence requires honesty.',
      mechanisms: [
        'Retrospectives',
        'Real-time feedback',
        'Psychological safety',
        '"Lessons learned" reviews',
      ],
    },
    {
      number: 4,
      title: 'Hiring & Onboarding',
      description: 'Amazon\'s insight applies everywhere: a single bar-raising hire lifts the entire team; a low-bar hire drags it down.',
      mechanisms: [
        'Explicit hiring criteria',
        'Structured interviews',
        'Bar-raising interviewers',
        'Onboarding checklists',
      ],
    },
    {
      number: 5,
      title: 'Scaling Systems',
      description: 'Engineering systems and organizational design that can handle 10x growth without collapsing.',
      mechanisms: [
        'Modular architectures',
        'Tech-debt strategy',
        'Multi-team alignment',
        'Reliability frameworks',
      ],
    },
  ];

  const implementationSteps = [
    {
      number: 1,
      title: 'Assess the Current State',
      description: 'Rate your org against the five pillars. Identify where the bar is low, unclear, or uneven.',
    },
    {
      number: 2,
      title: 'Define Your Bar',
      description: 'Write down the standards. Be concrete.',
      examples: [
        '"Every PR includes tests and documentation."',
        '"No feature ships without observability."',
        '"Architectural decisions follow a written RFC process."',
      ],
    },
    {
      number: 3,
      title: 'Build the Supporting Systems',
      description: 'Put in place the rituals and governance that uphold the bar: code reviews, sprint reviews, architecture councils, incident reviews, and quality gates.',
    },
    {
      number: 4,
      title: 'Establish Accountability Loops',
      description: 'Monthly or quarterly reviews with engineering leadership to examine what improved, what regressed, and what gets raised next.',
    },
    {
      number: 5,
      title: 'Create a Culture of Continuous Learning',
      description: 'Reading groups, technical deep-dives, failure-learning sessions, and leadership coaching keep the bar moving upward—not static.',
    },
  ];

  const resources = {
    articles: [
      'Edmond Lau: Raising the Bar for Engineering Leadership',
      'DORA Research & Accelerate',
      'Amazon\'s Bar Raiser Program (interview rigor & decision quality)',
    ],
    books: [
      'Accelerate – Nicole Forsgren, Jez Humble, Gene Kim',
      'The Effective Engineer – Edmond Lau',
      'Clean Code – Robert C. Martin',
      'The Phoenix Project – Gene Kim, Kevin Behr, George Spafford',
    ],
    practices: [
      'Rigorous architecture reviews',
      'PR quality checklists',
      'Incident management with blameless post-mortems',
      'Reliability frameworks and SLOs',
      'Engineering health metrics for leaders',
    ],
  };

  const benefits = [
    'Higher customer trust',
    'Lower operational burden',
    'Faster innovation cycles',
    'Stronger, more independent teams',
    'A reputation that attracts top-tier engineering talent',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-50 via-white to-charcoal-50/30">
      <LandingNav />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12 overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" style={{ backgroundPosition: '30% 20%' }}></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-charcoal-900 leading-[1.1] tracking-tight">
              Bar-Raising Engineering Practices
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
              How high-performing tech companies build discipline, quality, and long-term velocity
            </p>
            <p className="text-lg text-charcoal-600 leading-relaxed max-w-3xl mx-auto" style={{ lineHeight: '1.75' }}>
              Modern engineering teams don't scale on effort alone. They scale on standards. Bar-raising practices create the technical, cultural, and operational discipline that separates reactive teams from enduringly excellent ones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Raising the Bar Means Section */}
      <Section id="what-it-means" className="relative bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                What "Raising the Bar" Means
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  Raising the bar is the deliberate act of setting higher expectations for how engineering works—then building the systems, habits, and leadership behaviors that make those expectations real.
                </p>
                <p className="font-semibold text-charcoal-900">The goal:</p>
                <ul className="space-y-2 ml-4">
                  {goals.map((goal, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Core Pillars Section */}
      <Section id="pillars" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            The Core Pillars
          </h2>
          
          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold">
                        {pillar.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">
                        {pillar.title}
                      </h3>
                      <p className="text-charcoal-700 leading-relaxed mb-4" style={{ lineHeight: '1.75' }}>
                        {pillar.description}
                      </p>
                      <div>
                        <p className="font-semibold text-charcoal-900 mb-2">Key mechanisms:</p>
                        <ul className="space-y-1">
                          {pillar.mechanisms.map((mechanism, mIndex) => (
                            <li key={mIndex} className="flex items-start text-charcoal-700">
                              <span className="text-accent mr-2 mt-1">•</span>
                              <span>{mechanism}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Implementation Steps Section */}
      <Section id="implementation" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            How to Implement Bar-Raising Practices
          </h2>
          
          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">
                        Step {step.number}: {step.title}
                      </h3>
                      <p className="text-charcoal-700 leading-relaxed mb-4" style={{ lineHeight: '1.75' }}>
                        {step.description}
                      </p>
                      {step.examples && (
                        <div className="mt-4 pt-4 border-t border-charcoal-200">
                          <p className="font-semibold text-charcoal-900 mb-2">Examples:</p>
                          <ul className="space-y-2">
                            {step.examples.map((example, eIndex) => (
                              <li key={eIndex} className="flex items-start text-charcoal-700 italic">
                                <span className="text-accent mr-2 mt-1">•</span>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Resources Section */}
      <Section id="resources" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            High-Leverage Resources
          </h2>
          <p className="text-xl text-charcoal-700 text-center mb-12 max-w-3xl mx-auto" style={{ lineHeight: '1.75' }}>
            A curated starter set for teams seeking to elevate their practices
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                  Articles & Frameworks
                </h3>
                <ul className="space-y-3">
                  {resources.articles.map((article, index) => (
                    <li key={index} className="flex items-start text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span>{article}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                  Books
                </h3>
                <ul className="space-y-3">
                  {resources.books.map((book, index) => (
                    <li key={index} className="flex items-start text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span>{book}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                  Practices to Install
                </h3>
                <ul className="space-y-3">
                  {resources.practices.map((practice, index) => (
                    <li key={index} className="flex items-start text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* For Leaders Section */}
      <Section id="for-leaders" className="relative bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-accent/10 border-accent/20">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                For CEOs and Technology Leaders
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  Bar-raising is not an engineering initiative—it's a leadership initiative. The CEO sets the tone, the CTO operationalizes it, and managers reinforce it daily.
                </p>
                <p className="font-semibold text-charcoal-900">
                  Organizations that commit to this approach unlock:
                </p>
                <ul className="space-y-2 ml-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-4 border-t border-accent/20 font-semibold text-charcoal-900 text-xl">
                  Raising the bar is a choice. The payoff compounds.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta" className="relative bg-charcoal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-30" style={{ backgroundPosition: '50% 50%' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Want to learn more about ScaleOS?
          </h2>
          <p className="text-xl text-charcoal-300 mb-8 leading-relaxed">
            ScaleOS incorporates bar-raising practices and other Amazon-style mechanisms to help you scale without chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('https://calendly.com/douglas-stevenson', '_blank')}
              variant="primary"
              size="lg"
              className="bg-accent hover:bg-accent-dark"
            >
              Book a Founder Call
            </Button>
            <Button
              onClick={() => navigate('/scaleos')}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-charcoal-900"
            >
              Learn About ScaleOS
            </Button>
          </div>
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

export default BarRaisingEngineering;

