import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const CoreManagementPractices: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when navigating to this page (unless there's a hash)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const corePractices = [
    {
      number: 1,
      title: 'Ban PowerPoint and Use Written Narratives',
      description: 'Implement six-page narratives and PR/FAQ documents (Press Release/Frequently Asked Questions) in your leadership team meetings.',
      details: [
        'This change can be implemented almost instantly',
        'While there may be initial pushback, leaders will eventually find they "can never go back to the old way"',
        'This process quickly produces results and forces clearer thinking',
      ],
    },
    {
      number: 2,
      title: 'Establish the Bar Raiser Hiring Process',
      description: 'Adopt the Bar Raiser hiring process to consistently improve the quality of new hires.',
      details: [
        'This method improves process quality',
        'Reduces the number of poor hires',
        'Enables learning for everyone involved',
      ],
    },
    {
      number: 3,
      title: 'Focus on Controllable Input Metrics',
      description: 'Be relentless about identifying metrics that can be directly controlled and have the greatest impact on desired outputs (like free cash flow per share).',
      details: [
        'This requires patient trial and error to find the input metrics that best allow you to control your results',
        'It is important to remember this does not mean abandoning output metrics',
        'Amazon still cares a great deal about outputs like free cash flow per share',
      ],
    },
    {
      number: 4,
      title: 'Adopt Autonomous Teams with Single-Threaded Leaders',
      description: 'Transition to an organizational structure that supports autonomous teams led by single-threaded leaders.',
      details: [
        'This requires careful management because it raises inevitable questions about authority, jurisdiction, and "turf"',
        'It is recommended to start with the product development group',
        'Then evaluate if other areas would benefit from this structure',
      ],
    },
    {
      number: 5,
      title: 'Revise Compensation Structure',
      description: 'Update the compensation structure for leaders to encourage long-term commitment and long-term decision-making.',
      details: [
        'It is important to ensure that leaders across all areas of the company are compensated with the same basic approach',
        'Avoid too many exceptions for "special cases"',
      ],
    },
  ];

  const culturalPractices = [
    {
      number: 1,
      title: 'Articulate and Embed Core Cultural Elements',
      description: 'Define the core elements of your company\'s culture (such as customer obsession, long-term thinking, eagerness to invent, and operational excellence).',
      details: [
        'Then, actively build these elements into every process and discussion',
        'Rather than assuming they will have an effect merely by being stated or displayed',
      ],
    },
    {
      number: 2,
      title: 'Define and Utilize Leadership Principles',
      description: 'Develop a clear set of leadership principles through participation from many contributors, rather than assigning the task to a single group or outsourcing it.',
      details: [
        'These principles should be revisited and revised as needed',
        'Must be integrated into every core process, including career development, hiring, planning, and performance management',
      ],
    },
    {
      number: 3,
      title: 'Depict Your Flywheel',
      description: 'Create a visual representation of your company\'s drivers of growth (your flywheel).',
      details: [
        'Evaluate everything the company does based on its positive or negative effect on these drivers',
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
              Core Management Practices
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
              Essential management practices and cultural alignment mechanisms that enable scalable, high-performing organizations
            </p>
            <p className="text-lg text-charcoal-600 leading-relaxed max-w-3xl mx-auto" style={{ lineHeight: '1.75' }}>
              These practices form the foundation of how successful companies operate at scale, creating clarity, accountability, and long-term thinking throughout the organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Are Core Management Practices Section */}
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
                What Are Core Management Practices?
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  Core Management Practices are the fundamental mechanisms and processes that enable organizations to operate effectively at scale. These practices create structure, clarity, and accountability while fostering a culture of excellence and long-term thinking.
                </p>
                <p>
                  When implemented consistently, these practices transform how teams communicate, make decisions, hire talent, measure success, and align around shared goals. They are the operating system that allows companies to scale without chaos.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Core Management Practices Section */}
      <Section id="core-practices" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Core Management Practices
          </h2>
          
          <div className="space-y-8">
            {corePractices.map((practice, index) => (
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
                        {practice.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">
                        {practice.title}
                      </h3>
                      <p className="text-charcoal-700 leading-relaxed mb-4" style={{ lineHeight: '1.75' }}>
                        {practice.description}
                      </p>
                      <div>
                        <ul className="space-y-2">
                          {practice.details.map((detail, dIndex) => (
                            <li key={dIndex} className="flex items-start text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                              <span className="text-accent mr-2 mt-1">•</span>
                              <span>{detail}</span>
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

      {/* Cultural and Principle Alignment Section */}
      <Section id="cultural-alignment" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Cultural and Principle Alignment
          </h2>
          
          <div className="space-y-8">
            {culturalPractices.map((practice, index) => (
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
                        {practice.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">
                        {practice.title}
                      </h3>
                      <p className="text-charcoal-700 leading-relaxed mb-4" style={{ lineHeight: '1.75' }}>
                        {practice.description}
                      </p>
                      <div>
                        <ul className="space-y-2">
                          {practice.details.map((detail, dIndex) => (
                            <li key={dIndex} className="flex items-start text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                              <span className="text-accent mr-2 mt-1">•</span>
                              <span>{detail}</span>
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

      {/* Summary Section */}
      <Section id="summary" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                The Power of Systematic Management
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  These core management practices work together to create an operating system that scales. Written narratives force clarity. Bar-raising hiring improves every team. Input metrics give you control. Single-threaded leaders create accountability. And aligned compensation drives long-term thinking.
                </p>
                <p>
                  When combined with strong cultural elements, clear leadership principles, and a well-defined flywheel, these practices create organizations that can scale effectively while maintaining quality, culture, and strategic focus.
                </p>
                <p className="font-semibold text-charcoal-900 pt-4 border-t border-charcoal-200">
                  The key is consistency: these practices must be embedded into every process, every meeting, and every decision—not treated as optional initiatives.
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
            ScaleOS incorporates these core management practices and other Amazon-style mechanisms to help you scale without chaos.
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

export default CoreManagementPractices;

