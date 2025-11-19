import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const COE: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when navigating to this page (unless there's a hash)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const objectives = [
    {
      number: 1,
      title: 'Identify and fix root causes',
      description: 'Identify and fix the root cause(s) of outages, and events (typically one-time or edge case events) that negatively impact the customer experience and/or business/financial results.',
    },
    {
      number: 2,
      title: 'Continuously improve quality',
      description: 'Continuously improve the quality of customer-facing products and services by not letting defects persist.',
    },
    {
      number: 3,
      title: 'Foster a culture of learning',
      description: 'Foster a company culture of growth, learning, and continuous improvement.',
    },
  ];

  const fiveWhysExample = [
    {
      why: 1,
      question: 'Why?',
      answer: 'Because Dayton Freight delivered the package to FedEx 2 hours after the cut-off time.',
    },
    {
      why: 2,
      question: 'Why?',
      answer: 'Because the Dayton Freight truck left our dock 4 hours late.',
    },
    {
      why: 3,
      question: 'Why?',
      answer: 'Because our picking team was 5 hours delayed.',
    },
    {
      why: 4,
      question: 'Why?',
      answer: 'Because we had 30 pickers on the floor but needed 40 to complete the wave.',
    },
    {
      why: 5,
      question: 'Why?',
      answer: 'Because we didn\'t anticipate the spike in demand for products x, y and z.',
    },
  ];

  const templateSections = [
    {
      number: 1,
      title: 'Description of Problem and Its Impact',
      subsections: [
        {
          name: 'Description',
          description: 'Provide a clear, concise description of what went wrong.',
        },
        {
          name: 'Data Collected',
          description: 'Include relevant metrics, logs, timestamps, and any quantitative data that helps understand the scope and severity.',
        },
        {
          name: 'Customer Impact',
          description: 'Describe how customers were affected. Include number of affected customers, duration of impact, and specific customer-facing issues.',
        },
        {
          name: 'Financial Impact',
          description: 'Quantify the business and financial impact, including revenue loss, refunds, operational costs, and any other measurable financial consequences.',
        },
      ],
    },
    {
      number: 2,
      title: 'Root Causes',
      subsections: [
        {
          name: 'Background',
          description: 'Provide context about the system, process, or situation before the error occurred.',
        },
        {
          name: 'Triggering Event(s)',
          description: 'Identify the specific event(s) that triggered the problem. What happened that caused the error to manifest?',
        },
        {
          name: 'Root Causes',
          description: 'Use the "Five Whys" method (or other root cause analysis tool) to drill down to the root cause(s) of the issue.',
        },
      ],
    },
    {
      number: 3,
      title: 'Corrective Actions Taken',
      description: 'List all actions taken to fix the immediate problem and prevent recurrence. Include both short-term fixes and long-term improvements.',
    },
    {
      number: 4,
      title: 'Lessons Learned…Good and Bad',
      description: 'Document what went wrong and what went well. This section enables the organization to learn from mistakes and replicate successful responses.',
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
              Correction of Errors
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
              A scalable, repeatable process designed to enable organizations to identify root causes, fix problems, and continuously improve quality through learning from mistakes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <Section id="overview" className="relative bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Overview & Instructions
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  Correction of Error (COE) is a scalable, repeatable process designed to enable organizations to:
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Objectives Section */}
      <Section id="objectives" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            COE Objectives
          </h2>
          
          <div className="space-y-6">
            {objectives.map((objective, index) => (
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
                        {objective.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">
                        {objective.title}
                      </h3>
                      <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                        {objective.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Five Whys Method Section */}
      <Section id="five-whys" className="relative bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                The Five Whys Method
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  In the Root Causes section, employ the "Five Whys" method (or other root cause analysis tool) to drill down to the root cause(s) of the issue. Five whys (or 5 whys) is an iterative technique used to explore the cause-and-effect relationships underlying a particular problem.
                </p>
                <p>
                  Each answer to the question "why did this occur" then becomes the starting point for the next why. The "five" is because, typically, if you repeat the why process five times you will bottom out and reach the root cause(s). If there are multiple root causes, then multiple strings of whys beginning with different first answers need to be explored which requires multiple iterations.
                </p>
                <p>
                  <strong>Important:</strong> The method doesn't drive or inform which questions to ask, or how long to search for additional root causes. In other words, the method is no guarantee of success — it requires the right inputs, team members, and willingness to iterate.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Five Whys Example Section */}
      <Section id="five-whys-example" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <h3 className="text-3xl font-bold text-charcoal-900 mb-6">
                Example: Five Whys Analysis
              </h3>
              <div className="mb-6">
                <p className="text-lg font-semibold text-charcoal-900 mb-4">
                  The problem: The customer didn't receive their package on time
                </p>
              </div>
              <div className="space-y-4">
                {fiveWhysExample.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-lg">
                      {item.why}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-charcoal-900 mb-1">{item.question}</p>
                      <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Template Structure Section */}
      <Section id="template" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            COE Document Template Structure
          </h2>
          
          <div className="space-y-8">
            {templateSections.map((section, index) => (
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
                        {section.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">
                        {section.title}
                      </h3>
                      {section.description && (
                        <p className="text-charcoal-700 leading-relaxed mb-4" style={{ lineHeight: '1.75' }}>
                          {section.description}
                        </p>
                      )}
                      {section.subsections && (
                        <div className="space-y-4">
                          {section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} className="border-l-4 border-accent pl-4">
                              <h4 className="font-bold text-charcoal-900 mb-2">{subsection.name}</h4>
                              <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                                {subsection.description}
                              </p>
                            </div>
                          ))}
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

      {/* Lessons Learned Section */}
      <Section id="lessons-learned" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Lessons Learned: Good and Bad
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  It isn't easy to be forthcoming about the mistakes we have made. We all make mistakes. Internalizing and learning from mistakes (so they can be avoided in the future) is one of the important goals of this process.
                </p>
                <p>
                  Sharing mistakes broadly throughout the organization enables those who have not (yet) experienced this particular type of error, to learn and also avoid making a similar error in the future. This is why it is so important that the errors and learnings are clearly documented and disseminated broadly through the organization (as uncomfortable as that might be).
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-red-50/50 border border-red-200/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                      Here are the errors we made and/or hard lessons we learned:
                    </h3>
                    <ul className="space-y-2 text-charcoal-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        <span>[Document specific errors and lessons learned]</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50/50 border border-green-200/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-charcoal-900 mb-4">
                      Here are some things we did well during the event:
                    </h3>
                    <ul className="space-y-2 text-charcoal-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>[Document successful responses and positive outcomes]</span>
                      </li>
                    </ul>
                  </div>
                </div>
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
            ScaleOS incorporates COE and other Amazon-style mechanisms to help you scale without chaos.
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

export default COE;

