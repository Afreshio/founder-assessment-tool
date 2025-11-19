import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const PRFAQ: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when navigating to this page (unless there's a hash)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  
  const steps = [
    {
      number: 1,
      title: 'Define the customer and the problem',
      content: [
        'Before writing anything, the team aligns on:',
        '• Who is the customer? (be specific, not "everyone")',
        '• What painful problem are they facing today?',
        '• How are they solving it now, and why is that bad or incomplete?',
        '• What does success look like for them? (ideally measurable)',
        'This step is often captured in a short problem statement that anchors the whole PR FAQ.',
      ],
    },
    {
      number: 2,
      title: 'Draft the "future" Press Release',
      content: [
        'Next, the team writes a one-page internal press release as if the product has already launched and succeeded.',
        '',
        'Typical sections:',
        '• Headline – Simple, exciting statement of the launch',
        '• Sub-headline – One sentence that clarifies the key benefit',
        '• Date + location – Usually the team\'s home city and a future launch date',
        '• Opening paragraph – What was launched, for whom, and why it matters',
        '• Customer problem – Plain language description of the pain',
        '• The solution & core benefits – How this product changes the customer\'s life, focusing on outcomes, not features',
        '• Customer quote – A fictional, but realistic quote from a delighted customer',
        '• Internal leader quote – Optional quote from a senior leader reinforcing the strategic importance',
        '',
        'The rule of thumb: if you can\'t explain the product simply and compellingly in one page, you\'re not ready to build it.',
      ],
    },
    {
      number: 3,
      title: 'Write the FAQ (external + internal)',
      content: [
        'Then the team writes a multi-page FAQ that stress-tests the idea.',
        '',
        'External FAQs (from a customer\'s point of view):',
        '• How does this work?',
        '• What does it cost?',
        '• How do I get started?',
        '• What about my data / privacy / security?',
        '• How is this better than what I use today?',
        '',
        'Internal FAQs (from leadership and stakeholders):',
        '• Market & strategy – How big is the opportunity? Why now?',
        '• Differentiation – Why will we win vs alternatives?',
        '• Business model – Pricing, margins, unit economics, key assumptions',
        '• Tech & operations – Architecture, dependencies, scalability, reliability',
        '• Legal, risk, and compliance – What could go wrong, and how do we mitigate?',
        '• Rollout plan – Phases, launch markets, success metrics',
        '• Resourcing – Team, budget, and time needed',
        '',
        'The FAQ is where most of the real work happens. It forces the team to confront objections early, while ideas are still cheap to change.',
      ],
    },
    {
      number: 4,
      title: 'Iterate in writing',
      content: [
        'Once the first PR FAQ draft exists, the team iterates:',
        '• Circulate the doc to relevant stakeholders',
        '• Gather written comments and questions',
        '• Tighten the narrative, clarify assumptions, and sharpen metrics',
        '• Repeat until the story is crisp and the hard questions have robust answers',
        '',
        'Amazon\'s culture is heavily document-centric; the expectation is that the argument lives in the doc, not in slideware.',
      ],
    },
    {
      number: 5,
      title: 'Run the PR FAQ review meeting',
      content: [
        'For major initiatives, Amazon uses a very structured review:',
        '',
        '1. Silent reading – The meeting starts with 15–30 minutes of quiet reading so everyone actually understands the document',
        '2. Clarifying questions – Short round to clear up confusion',
        '3. Challenge and discussion – Leaders push on customer value, risks, economics, and focus',
        '4. Decision – Options typically are:',
        '   • Green-light (with or without revisions)',
        '   • Request for more work / another iteration',
        '   • No-go',
        '',
        'The goal is to decide whether this idea is worth real resources, not to polish the plan to perfection.',
      ],
    },
    {
      number: 6,
      title: 'Work backwards into a delivery plan',
      content: [
        'Only after the PR FAQ is accepted does the team convert it into execution:',
        '• Customer experience → user stories / journeys',
        '• Promised benefits → success metrics and dashboards',
        '• Key FAQs → system architecture, ops plans, and policies',
        '• Launch narrative → marketing and GTM plan',
        '• Milestones → roadmap and resourcing',
        '',
        'From this point on, the PR FAQ remains the north star – the team checks that what they are building actually matches what was promised to customers in the press release.',
      ],
    },
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
              PR FAQ Method
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
              Amazon's "Working Backwards" process for product planning: start with the customer and work backwards. Write the press release and FAQ first, then build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is PR FAQ Section */}
      <Section id="what-is" className="relative bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                What is the PR FAQ?
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  Amazon's PR FAQ is a written, customer-centric document used to propose and vet new products or features before anyone writes a line of code. The core idea: <strong>start with the customer and work backwards</strong>.
                </p>
                <p>
                  Instead of beginning with a roadmap or a spec, teams write:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>A <strong>Press Release (PR)</strong> that imagines launch day.</li>
                  <li>A <strong>Frequently Asked Questions (FAQ)</strong> section that answers hard questions from customers and internal skeptics.</li>
                </ol>
                <p>
                  This PR FAQ becomes the single source of truth for the idea and the starting point for all further product work.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Process Steps Section */}
      <Section id="process" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            The PR FAQ Process
          </h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
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
                        Step {step.number} – {step.title}
                      </h3>
                      <div className="text-charcoal-700 leading-relaxed space-y-2" style={{ lineHeight: '1.75' }}>
                        {step.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className={paragraph.startsWith('•') ? 'ml-4' : ''}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Summary Section */}
      <Section id="summary" className="relative bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Our Process: Amazon-Style PR FAQ
              </h2>
              <div className="space-y-4">
                <ol className="list-decimal list-inside space-y-3 text-lg text-charcoal-700 leading-relaxed ml-4" style={{ lineHeight: '1.75' }}>
                  <li>Start with the customer and define the problem.</li>
                  <li>Write a one-page "launch day" press release.</li>
                  <li>Stress-test the idea with a detailed FAQ.</li>
                  <li>Iterate in writing until the story and the numbers hold up.</li>
                  <li>Run a focused review to make a go / no-go call.</li>
                  <li>Work backwards from that narrative into roadmap, design, and metrics.</li>
                </ol>
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
            ScaleOS incorporates PR FAQ and other Amazon-style mechanisms to help you scale without chaos.
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

export default PRFAQ;

