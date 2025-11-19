import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const ORR: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when navigating to this page (unless there's a hash)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const pillars = [
    {
      title: 'People',
      description: 'Are the operators trained? Is the support team staffed? Do they know who to call when things break?',
    },
    {
      title: 'Process',
      description: 'Do standard operating procedures (SOPs), runbooks, and escalation paths exist?',
    },
    {
      title: 'Technology',
      description: 'Is the hardware/software stable? Is monitoring/alerting configured? Are backups tested?',
    },
    {
      title: 'Environment',
      description: 'Is the facility safe? Is the supply chain secured? Are spare parts on-site? (Physical/Manufacturing)',
    },
  ];

  const phases = [
    {
      number: 1,
      title: 'Initiation (2–4 weeks before launch)',
      content: [
        'Define Scope: Decide what is being reviewed (e.g., "Feature X launch" or "Production Line B startup").',
        'Identify Stakeholders: Typically includes Product Owners, Engineering Leads, Operations/SRE, Customer Support, and Security/Compliance.',
        'Select the Checklist: Tailored to the specific risk level of the project.',
      ],
    },
    {
      number: 2,
      title: 'Self-Assessment & Evidence Gathering',
      content: [
        'The project team fills out the readiness checklist before the formal review meeting.',
        'Evidence is key: Don\'t just say "Yes" to "Are backups working?"—link to the successful restore log.',
      ],
    },
    {
      number: 3,
      title: 'The Review Meeting',
      content: [
        'Walkthrough: The team presents their readiness status to the review board.',
        'Gap Analysis: Reviewers challenge assumptions and identify gaps (e.g., "You have a runbook, but has anyone actually tested it?").',
        'Risk Classification: Issues are classified as Blockers (Launch stops until fixed) or Post-Launch Actions (Can be fixed later).',
      ],
    },
    {
      number: 4,
      title: 'Decision & Closure',
      content: [
        'Go/No-Go Decision:',
        '  • Go: All blockers resolved.',
        '  • Conditional Go: Proceed with mitigations (e.g., "Launch allowed, but engineering must be on-call 24/7 for the first week").',
        '  • No-Go: Too much risk; launch delayed.',
      ],
    },
  ];

  const universalChecklist = [
    'Stakeholder Sign-off: Have Legal, Security, and Business owners approved?',
    'Training: Have the end-users and support staff received training materials?',
    'Documentation: Are FAQs, user manuals, and troubleshooting guides published?',
    'Rollback Plan: If the launch fails, is there a documented, tested way to revert to the previous state within X minutes?',
    'Escalation Matrix: A list of names/phone numbers for level 2 and level 3 support.',
  ];

  const softwareChecklist = [
    {
      category: 'Observability',
      items: [
        'Are logs shipping to the central logging server?',
        'Are dashboards created for key metrics (Latency, Traffic, Errors, Saturation)?',
        'Do alerts route to the correct PagerDuty/OpsGenie schedule?',
      ],
    },
    {
      category: 'Reliability',
      items: [
        'Has load testing been performed to projected peak traffic?',
        'Are "Circuit Breakers" in place to prevent cascading failures?',
      ],
    },
    {
      category: 'Security',
      items: [
        'Have secrets/API keys been rotated from test to production values?',
        'Has a vulnerability scan been run on the final build?',
      ],
    },
    {
      category: 'Data',
      items: [
        'Is the backup schedule automated?',
        'Critical: Has a data restore test been successfully performed in the last 30 days?',
      ],
    },
  ];

  const manufacturingChecklist = [
    {
      category: 'Supply Chain',
      items: [
        'Are raw material vendors locked in and contracts signed?',
        'Is the "Spare Parts Strategy" defined? (e.g., Do we have critical spares on the shelf to minimize downtime?)',
      ],
    },
    {
      category: 'EHS (Environment, Health, Safety)',
      items: [
        'Are Lockout/Tagout (LOTO) procedures documented for the new machines?',
        'Have safety guards and emergency stops been physically tested?',
        'Is the noise/chemical exposure level within compliance limits?',
      ],
    },
    {
      category: 'Equipment',
      items: [
        'Is the Preventative Maintenance (PM) schedule loaded into the CMMS (maintenance software)?',
        'Have calibration certifications been verified for all measurement tools?',
      ],
    },
  ];

  const pitfalls = [
    {
      title: 'The "Tick-Box" Exercise',
      description: 'Teams rush through the checklist just to get approval, lying about readiness.',
      mitigation: 'Require evidence (links, logs, photos) for critical items.',
    },
    {
      title: 'Late Engagement',
      description: 'Ops is invited 2 days before launch.',
      mitigation: 'Start ORR planning during the design phase.',
    },
    {
      title: 'Ignoring "Soft" Readiness',
      description: 'The system works, but the support team is angry, untrained, or understaffed.',
      mitigation: 'Give Support teams veto power.',
    },
    {
      title: 'No "Day 2" Plan',
      description: 'The team focuses entirely on Launch Day and forgets about maintenance updates, patching, and long-term costs.',
      mitigation: 'Include maintenance and operational sustainability in the ORR scope.',
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
              Operational Readiness Review
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
              A formal "gate" assessment conducted before a project, system, or product is released into a live operational environment. Answer the question: "Is this system ready to be operated safely, reliably, and efficiently?"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <Section id="summary" className="relative bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Executive Summary
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  An Operational Readiness Review (ORR) is a formal "gate" or assessment conducted before a project, system, or product is released into a live operational environment.
                </p>
                <p>
                  <strong>The Goal:</strong> To answer the question, "Is this system ready to be operated safely, reliably, and efficiently by the team that will own it?"
                </p>
                <p>
                  <strong>The Difference:</strong> Unlike a design review (which asks "will it work?"), an ORR asks "can we support it?" It focuses on maintainability, supportability, and recoverability rather than just feature functionality.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Core Pillars Section */}
      <Section id="pillars" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            The Core Pillars of Readiness
          </h2>
          <p className="text-xl text-charcoal-700 text-center mb-12 max-w-3xl mx-auto" style={{ lineHeight: '1.75' }}>
            A successful ORR must evaluate three (sometimes four) critical pillars. If one is missing, the project is not ready.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">
                        {pillar.title}
                      </h3>
                      <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Lifecycle Section */}
      <Section id="process" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            The ORR Process Lifecycle
          </h2>
          <p className="text-xl text-charcoal-700 text-center mb-12 max-w-3xl mx-auto" style={{ lineHeight: '1.75' }}>
            An ORR is not a single meeting; it is a process that should begin well before the launch date.
          </p>
          
          <div className="space-y-8">
            {phases.map((phase, index) => (
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
                        {phase.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">
                        Phase {phase.number} – {phase.title}
                      </h3>
                      <div className="text-charcoal-700 leading-relaxed space-y-2" style={{ lineHeight: '1.75' }}>
                        {phase.content.map((item, pIndex) => (
                          <p key={pIndex} className={item.startsWith('  •') ? 'ml-4' : ''}>
                            {item}
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

      {/* Checklists Section */}
      <Section id="checklists" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Detailed Readiness Checklists
          </h2>
          
          {/* Universal Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Card>
              <h3 className="text-3xl font-bold text-charcoal-900 mb-6">
                A. Universal Items (All Industries)
              </h3>
              <ul className="space-y-3">
                {universalChecklist.map((item, index) => (
                  <li key={index} className="flex items-start text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    <span className="text-accent mr-3 mt-1 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Software Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <Card>
              <h3 className="text-3xl font-bold text-charcoal-900 mb-6">
                B. Software & IT Specific Checklist
              </h3>
              <div className="space-y-6">
                {softwareChecklist.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold text-charcoal-900 mb-3">{category.category}:</h4>
                    <ul className="space-y-2 ml-4">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Manufacturing Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <h3 className="text-3xl font-bold text-charcoal-900 mb-6">
                C. Manufacturing & Hardware Specific Checklist
              </h3>
              <div className="space-y-6">
                {manufacturingChecklist.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold text-charcoal-900 mb-3">{category.category}:</h4>
                    <ul className="space-y-2 ml-4">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Common Pitfalls Section */}
      <Section id="pitfalls" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Common Pitfalls (Why ORRs Fail)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {pitfalls.map((pitfall, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-red-50/50 border-red-200/50">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                    {pitfall.title}
                  </h3>
                  <p className="text-charcoal-700 mb-4 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    {pitfall.description}
                  </p>
                  <div className="pt-4 border-t border-red-200/50">
                    <p className="text-sm font-semibold text-accent mb-1">Mitigation:</p>
                    <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                      {pitfall.mitigation}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Document Template Section */}
      <Section id="template" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                ORR Document Template Structure
              </h2>
              <p className="text-lg text-charcoal-700 mb-6 leading-relaxed" style={{ lineHeight: '1.75' }}>
                Use this outline to create your own ORR document.
              </p>
              <ol className="list-decimal list-inside space-y-4 text-lg text-charcoal-700 leading-relaxed ml-4" style={{ lineHeight: '1.75' }}>
                <li>
                  <strong>Project Overview</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>What is being launched?</li>
                    <li>Target Launch Date:</li>
                  </ul>
                </li>
                <li>
                  <strong>Review Board</strong>
                  <p className="ml-6 mt-2">List specific approvers (e.g., Jane Doe - Security, John Smith - Ops)</p>
                </li>
                <li>
                  <strong>Scorecard Summary</strong>
                  <p className="ml-6 mt-2">Red/Amber/Green status for each pillar (People, Process, Tech).</p>
                </li>
                <li>
                  <strong>Critical Checklist Items</strong>
                  <p className="ml-6 mt-2">Insert the relevant checklist from Section 4 above.</p>
                </li>
                <li>
                  <strong>Known Issues / Risks</strong>
                  <p className="ml-6 mt-2">List of accepted risks (e.g., "Minor bug in reporting module, will be fixed in v1.1").</p>
                </li>
                <li>
                  <strong>Sign-Off Decision</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>GO</li>
                    <li>NO-GO</li>
                    <li>Signatures/Dates</li>
                  </ul>
                </li>
              </ol>
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
            ScaleOS incorporates ORR and other Amazon-style mechanisms to help you scale without chaos.
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

export default ORR;

