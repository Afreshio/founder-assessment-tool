import { motion } from 'framer-motion';
import React from 'react';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TimelineItem } from '../components/ui/TimelineItem';

const ScaleOSLanding: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-50 to-white">
      <LandingNav />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 leading-tight">
                Scale Without Chaos
              </h1>
              <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed">
                ScaleOS is the operating system for Seed–Series B founders who have found product traction but are hitting organizational limits. Built by operators who scaled to over $100M and led engineering at Amazon and Facebook.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection('final-cta')}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book a 30 Minute Founder Call
                </Button>
                <Button
                  onClick={() => scrollToSection('scaleos')}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  See the ScaleOS Blueprint
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Card className="bg-white p-8 shadow-2xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-2">ScaleOS Dashboard</h3>
                    <p className="text-sm text-charcoal-600">Real-time operating metrics</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                      <div className="text-xs text-charcoal-600 mb-1">Velocity</div>
                      <div className="text-3xl font-bold text-accent">92%</div>
                      <div className="text-xs text-green-600 mt-1">↑ 8%</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="text-xs text-charcoal-600 mb-1">Reliability</div>
                      <div className="text-3xl font-bold text-green-600">99.9%</div>
                      <div className="text-xs text-green-600 mt-1">↑ 0.2%</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <div className="text-xs text-charcoal-600 mb-1">Hiring Bar</div>
                      <div className="text-3xl font-bold text-purple-600">85%</div>
                      <div className="text-xs text-green-600 mt-1">↑ 12%</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="text-xs text-charcoal-600 mb-1">Alignment</div>
                      <div className="text-3xl font-bold text-blue-600">94%</div>
                      <div className="text-xs text-green-600 mt-1">↑ 5%</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-charcoal-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-charcoal-700">DORA Metrics</span>
                      <span className="text-xs text-charcoal-500">Last 30 days</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-charcoal-600">Deployment Frequency</span>
                        <span className="text-sm font-semibold text-charcoal-900">Daily</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-charcoal-600">Lead Time</span>
                        <span className="text-sm font-semibold text-charcoal-900">2.5 days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-charcoal-600">MTTR</span>
                        <span className="text-sm font-semibold text-charcoal-900">15 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <Section id="why-this" className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900">
                Your Product Is Scaling Faster Than Your Company
              </h2>
              <p className="text-xl text-charcoal-700 leading-relaxed">
                As your product finds traction, the cracks in your operating system start to show.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span className="text-lg text-charcoal-700">
                    You are hiring fast but not sure if you are raising the bar or just adding people.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span className="text-lg text-charcoal-700">
                    Engineering velocity is high but architecture, reliability, and quality are starting to creak.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span className="text-lg text-charcoal-700">
                    Milestones slip and board updates get harder.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span className="text-lg text-charcoal-700">
                    Everyone is busy but you are not confident you can hit the next funding or market milestones.
                  </span>
                </li>
              </ul>
              <p className="text-lg font-semibold text-charcoal-900 pt-4 border-t border-charcoal-200">
                This is not a motivation problem. It is an operating system problem.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-red-50 border-red-200">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-semibold text-red-600 uppercase mb-1">Warning</div>
                    <h3 className="font-bold text-charcoal-900">Missed Milestone</h3>
                  </div>
                  <span className="px-2 py-1 bg-red-200 text-red-800 text-xs font-semibold rounded-full">
                    Critical
                  </span>
                </div>
              </Card>
              <Card className="bg-orange-50 border-orange-200">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-semibold text-orange-600 uppercase mb-1">Alert</div>
                    <h3 className="font-bold text-charcoal-900">Mis-hire</h3>
                  </div>
                  <span className="px-2 py-1 bg-orange-200 text-orange-800 text-xs font-semibold rounded-full">
                    High
                  </span>
                </div>
              </Card>
              <Card className="bg-yellow-50 border-yellow-200">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-semibold text-yellow-600 uppercase mb-1">Risk</div>
                    <h3 className="font-bold text-charcoal-900">Architecture Rewrite</h3>
                  </div>
                  <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs font-semibold rounded-full">
                    Medium
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* What Is ScaleOS Section */}
      <Section id="scaleos" className="bg-gradient-to-b from-white to-charcoal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              ScaleOS: An Operating System for High Growth Tech Companies
            </h2>
            <p className="text-xl text-charcoal-700 leading-relaxed">
              ScaleOS is a set of mechanisms, reviews, and leadership behaviors that let you scale from early traction to durable growth without burning out your team or rewriting the entire system.
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 text-center mb-12">
              The 7 Mechanisms of ScaleOS
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Bar-Raising Hiring System',
                  description: 'A systematic approach to hiring that ensures every new team member raises the bar, not just fills a seat.',
                },
                {
                  title: 'Leadership Principles and Cultural Reset',
                  description: 'Clear principles that guide decision-making and create a culture of accountability without drama.',
                },
                {
                  title: 'Architecture Coherence (Hardware, Software, AI)',
                  description: 'Ensure your technical foundation scales with your business needs before it becomes a constraint.',
                },
                {
                  title: 'Operational Excellence and Quality Mechanisms',
                  description: 'Build quality and reliability into your systems from the start, not as an afterthought.',
                },
                {
                  title: 'Agile Done Right: Reviews, Standards, Accountability',
                  description: 'Implement reviews and standards that actually improve velocity and quality, not slow you down.',
                },
                {
                  title: 'Telemetry, Metrics, and Truth Seeking',
                  description: 'Use data to make decisions, not assumptions. Know what is actually happening in your organization.',
                },
                {
                  title: 'CEO and CTO Coaching and Alignment',
                  description: 'Ensure founders and technical leaders are aligned on strategy, risks, and operating cadence.',
                },
              ].map((mechanism, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="text-2xl font-bold text-accent mb-2">{index + 1}.</div>
                    <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                      {mechanism.title}
                    </h4>
                    <p className="text-charcoal-700">
                      {mechanism.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Engagement Models Section */}
      <Section id="engagement" className="bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 text-center mb-16">
            Work With Us The Way Operators Actually Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Founder Operating System',
                price: 'From $5,000',
                period: 'per month',
                tag: 'For Seed / Series A',
                features: [
                  '2 x 90 minute sessions per month with the CEO',
                  'Focus on priorities for the next 12 weeks',
                  'Convert current fires into durable mechanisms (cadence, hiring, metrics)',
                  'Async Loom and email support for critical decisions',
                ],
              },
              {
                title: 'Half Day Team Workshops',
                price: 'From $7,500',
                period: 'per workshop',
                tag: 'For Series A / B',
                features: [
                  '4 hour morning workshops for exec or leadership teams',
                  'Formats: Operational Cadence Reset, Bar-Raising Hiring, Architecture Coherence, Accountability Without Drama',
                ],
              },
              {
                title: 'ScaleOS 90 Day Sprint',
                price: '$25,000 - $45,000',
                period: 'typical range',
                tag: 'For Series A / B',
                features: [
                  'Full ScaleOS diagnostic',
                  'Operating cadence installation',
                  'CEO and CTO alignment',
                  'Hiring system and initial telemetry design',
                ],
              },
            ].map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {model.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-4">{model.title}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-charcoal-900">{model.price}</span>
                    <span className="text-charcoal-600 ml-2">{model.period}</span>
                  </div>
                  <ul className="space-y-3 flex-grow mb-6">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-charcoal-700">
                        <span className="text-accent mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => scrollToSection('final-cta')}
              size="lg"
            >
              Talk About Fit
            </Button>
          </div>
        </div>
      </Section>

      {/* Timeline and Outcomes Section */}
      <Section className="bg-gradient-to-b from-charcoal-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 text-center mb-16">
            What Actually Changes And When
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent to-transparent"></div>
              
              <div className="space-y-0">
                <TimelineItem
                  time="Week 1"
                  title="Immediate Clarity"
                  items={[
                    'CEO and CTO alignment session on strategy, risks, and 12 week outcomes',
                    'Rapid ScaleOS diagnostic',
                    'Identification of 2 to 3 silent fires',
                    'Delivery of a Working Backwards style document',
                  ]}
                  index={0}
                />
                <TimelineItem
                  time="Month 1"
                  title="New Operating Rhythm"
                  items={[
                    'Operating cadence in place: ORRs, sprint reviews, incident reviews, design reviews',
                    'Bar-raising hiring system in place',
                    'Leadership principles and accountability reset',
                    'CEO and CTO aligned on roadmap and decision rights',
                  ]}
                  index={1}
                />
                <TimelineItem
                  time="Month 3"
                  title="The Company Feels Different"
                  items={[
                    'Engineering velocity and reliability improved',
                    'First bar-raising hires in place',
                    'Leadership behavior shifts, less artificial harmony',
                    'Teams running more independently',
                  ]}
                  index={2}
                  isLast={true}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Cost Of Not Doing This Section */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900">
                What Is The Cost Of Not Doing This?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                  <span className="text-lg text-charcoal-700">
                    A single mis-hire in a senior role can cost <strong className="text-charcoal-900">$250,000 to $500,000</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                  <span className="text-lg text-charcoal-700">
                    Missing key milestones by three to six months can burn <strong className="text-charcoal-900">$1 million to $3 million</strong> of runway.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                  <span className="text-lg text-charcoal-700">
                    An architecture rewrite after 12 to 18 months of drift can cost <strong className="text-charcoal-900">$2 million to $6 million</strong> in engineering time.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                  <span className="text-lg text-charcoal-700">
                    Reliability failures with early customers can vaporize <strong className="text-charcoal-900">$250,000 to $1 million or more</strong> in ARR.
                  </span>
                </li>
              </ul>
              <p className="text-xl font-semibold text-charcoal-900 pt-6 border-t border-charcoal-200">
                Our work is a rounding error compared to the hidden cost of scaling without an operating system.
              </p>
            </div>
            
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <div className="text-center py-8">
                <div className="text-6xl font-bold text-red-600 mb-4">$4M+</div>
                <p className="text-2xl font-semibold text-charcoal-900 mb-2">
                  Potential Cost
                </p>
                <p className="text-charcoal-700">
                  Of scaling without the right operating system
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-gradient-to-b from-white to-charcoal-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 text-center mb-16">
            Built By Operators, Not Theorists
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
                  Douglas Stevenson
                </h3>
                <div className="text-accent font-semibold mb-4">Founder & CEO Coach</div>
                <p className="text-charcoal-700 leading-relaxed">
                  Founder and CEO coach based in San Francisco, scaled a contextual technology company from zero to over $100 million with strong margins, deep experience in cofounder dynamics, executive hiring, and board alignment. Certified in Working Genius and related team tools.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
                  Jim Phillips
                </h3>
                <div className="text-accent font-semibold mb-4">Engineering Leader</div>
                <p className="text-charcoal-700 leading-relaxed">
                  Former engineering leader at Amazon and Facebook, deep experience in large scale systems, reliability, and engineering organization design. Special focus on bringing Working Backwards and Amazon style mechanisms into early stage companies.
                </p>
              </Card>
            </motion.div>
          </div>
          
          <p className="text-center text-xl text-charcoal-700 max-w-3xl mx-auto font-medium">
            We show up as operators. We help you install mechanisms that work in the real world.
          </p>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section id="final-cta" className="bg-charcoal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let Us See If ScaleOS Is A Fit
          </h2>
          <p className="text-xl text-charcoal-300 mb-12 leading-relaxed">
            If you are a Seed to Series B founder in tech, AI, or digital health and you are feeling the strain of growth, we can map your current operating system and where it is likely to break next.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => {
                // In a real app, this would open a calendar booking link
                window.location.href = 'mailto:hello@afresh.io?subject=Founder Call Request';
              }}
              variant="primary"
              size="lg"
              className="bg-accent hover:bg-accent-dark"
            >
              Book a 30 Minute Founder Call
            </Button>
            <Button
              onClick={() => {
                // In a real app, this would open a contact form or document
                window.location.href = 'mailto:hello@afresh.io?subject=ScaleOS Overview Request';
              }}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-charcoal-900"
            >
              Request The ScaleOS Overview
            </Button>
          </div>
          
          <p className="text-charcoal-400 text-sm">
            No cost. No slide deck. A direct conversation about how you are operating today and what needs to change.
          </p>
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

export default ScaleOSLanding;
