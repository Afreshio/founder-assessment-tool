import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const ScaleOSQuestions: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set page title and meta tags
    document.title = 'ScaleOS Questions - Scale Without Chaos';
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const firstSetQuestions = [
    "If your company 3x'd in the next 18 months, what would break first?",
    "Where have you already outgrown your current operating system?",
    "What is the most expensive thing your leadership team is doing repeatedly that is still ad hoc?",
    "What do you personally no longer have clear line of sight into that worries you the most?",
    "Which problem keeps reappearing even though you have 'fixed' it a few times already?",
    "If your best engineers were completely honest, what would they say is slowing them down the most?",
    "What part of your business feels like it is running on Amazon level discipline, and what part feels like a series of heroic saves?",
  ];

  const secondSetQuestions = [
    "How confident are you that your current architecture and teams can handle the next 10x of growth without a reliability crisis?",
    "When was the last time you ran a truly hard postmortem on an outage and then changed how you operate, not just the code?",
    "What are the top three operational health metrics that you personally review every week, and do they actually predict pain before it hits?",
    "Where is work getting stuck between product, engineering, and operations, and how do you know?",
    "Do you have a small number of single-threaded owners for the missions that matter most, or is ownership still spread across committees?",
    "If an SRE or staff engineer were CEO for a week, what changes to process and systems would they force through immediately?",
    "Which Amazon style practices have you already stolen, and where do you wish you had more 'big company' discipline without the bloat?",
  ];

  const thirdSetQuestions = [
    "As CEO, where are you still the bottleneck, and how intentional is that?",
    "What are the decisions that still have to cross your desk that should not by this stage?",
    "Which two people on your team you cannot imagine losing, and what risk does that concentration create?",
    "How often is your exec team having real ideological conflict on strategy, not just polite updates?",
    "When your leaders say 'we need more people,' how often is that actually a systems problem instead of a headcount problem?",
    "If I sat in your exec meeting next week, what would I see: real decisions made quickly, or long status tours?",
    "What is the conversation you know your leadership team needs to have, but you keep postponing because it will be uncomfortable?",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-50 via-white to-charcoal-50/30">
      <LandingNav />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 mb-8 leading-tight tracking-tight text-center" style={{ letterSpacing: '-0.02em' }}>
            ScaleOS Questions
          </h1>
          <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed max-w-4xl mx-auto text-center" style={{ lineHeight: '1.75' }}>
            These questions help identify where your operating system is breaking down and where ScaleOS can help you build durable mechanisms for growth.
          </p>
        </div>
      </section>

      {/* First Set of Questions */}
      <Section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 tracking-tight text-center" style={{ letterSpacing: '-0.02em' }}>
              Foundational Questions
            </h2>
            <p className="text-xl text-charcoal-700 mb-8 leading-relaxed text-center max-w-3xl mx-auto" style={{ lineHeight: '1.75' }}>
              Questions that reveal where your current operating system is struggling with growth, visibility, and repeatability.
            </p>
          </div>

          <div className="space-y-6">
            {firstSetQuestions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg md:text-xl text-charcoal-900 leading-relaxed font-medium" style={{ lineHeight: '1.75' }}>
                        {question}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Second Set of Questions */}
      <Section className="relative bg-gradient-to-b from-white via-charcoal-50/30 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 tracking-tight text-center" style={{ letterSpacing: '-0.02em' }}>
              Operational Excellence Questions
            </h2>
            <p className="text-xl text-charcoal-700 mb-8 leading-relaxed text-center max-w-3xl mx-auto" style={{ lineHeight: '1.75' }}>
              Questions focused on reliability, operational health, and Amazon-style discipline in your engineering and operations.
            </p>
          </div>

          <div className="space-y-6">
            {secondSetQuestions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg md:text-xl text-charcoal-900 leading-relaxed font-medium" style={{ lineHeight: '1.75' }}>
                        {question}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Third Set of Questions */}
      <Section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 tracking-tight text-center" style={{ letterSpacing: '-0.02em' }}>
              CEO & Leadership Questions
            </h2>
            <p className="text-xl text-charcoal-700 mb-8 leading-relaxed text-center max-w-3xl mx-auto" style={{ lineHeight: '1.75' }}>
              Questions that uncover leadership bottlenecks, decision-making patterns, and organizational health at the executive level.
            </p>
          </div>

          <div className="space-y-6">
            {thirdSetQuestions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg md:text-xl text-charcoal-900 leading-relaxed font-medium" style={{ lineHeight: '1.75' }}>
                        {question}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Resources Section */}
      <Section id="resources" className="relative bg-gradient-to-b from-white via-charcoal-50/30 to-white overflow-hidden">
        {/* Radial gradient highlight */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/3 via-transparent to-transparent opacity-50" style={{ backgroundPosition: '50% 50%' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-12 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Resources & Methods
          </h2>
          <p className="text-xl md:text-2xl text-charcoal-700 text-center mb-16 leading-relaxed max-w-3xl mx-auto" style={{ lineHeight: '1.75' }}>
            Frameworks and methods that inform ScaleOS, used by operators at Amazon, Facebook, and other high-growth companies.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate('/scaleos')}>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-accent mb-2">ScaleOS Overview</div>
                  <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                    The Complete Operating System
                  </h4>
                  <p className="text-charcoal-700 mb-4">
                    Learn about ScaleOS: an operating system for high-growth tech companies. Includes Leadership Principles, Bar-Raising Hiring, and Operational Excellence mechanisms.
                  </p>
                  <div className="text-accent font-semibold text-sm group-hover:underline">
                    Explore ScaleOS →
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate('/leadership-principles')}>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-accent mb-2">Amazon's 16 Leadership Principles</div>
                  <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                    Foundational Leadership Framework
                  </h4>
                  <p className="text-charcoal-700 mb-4">
                    The core principles that guide decision-making, hiring, and culture at Amazon. These 16 principles are used daily by leaders and teams to evaluate ideas, make decisions, and build products.
                  </p>
                  <div className="text-accent font-semibold text-sm group-hover:underline">
                    Explore Principles →
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate('/core-management-practices')}>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-accent mb-2">Core Management Practices</div>
                  <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                    Essential Management Mechanisms
                  </h4>
                  <p className="text-charcoal-700 mb-4">
                    Fundamental management practices and cultural alignment mechanisms that enable scalable, high-performing organizations. Includes written narratives, bar-raising hiring, input metrics, single-threaded leaders, and cultural principles.
                  </p>
                  <div className="text-accent font-semibold text-sm group-hover:underline">
                    Learn More →
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate('/bar-raising-engineering')}>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-accent mb-2">Bar-Raising Engineering</div>
                  <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                    Engineering Practices
                  </h4>
                  <p className="text-charcoal-700 mb-4">
                    How high-performing tech companies build discipline, quality, and long-term velocity. Bar-raising practices create the technical, cultural, and operational discipline that separates reactive teams from enduringly excellent ones.
                  </p>
                  <div className="text-accent font-semibold text-sm group-hover:underline">
                    Learn More →
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate('/pr-faq-instructions')}>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-accent mb-2">PR/FAQ Instructions</div>
                  <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                    Working Backwards Template
                  </h4>
                  <p className="text-charcoal-700 mb-4">
                    Detailed instructions and template for writing PR/FAQs. Includes press release components, FAQ templates, review process, common mistakes, and step-by-step guidance for creating customer-focused product plans.
                  </p>
                  <div className="text-accent font-semibold text-sm group-hover:underline">
                    Learn More →
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate('/pr-faq')}>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-accent mb-2">PR FAQ Method</div>
                  <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                    Working Backwards
                  </h4>
                  <p className="text-charcoal-700 mb-4">
                    Amazon's method for product planning: write the press release and FAQ first, then build backwards. Forces clarity on customer value and reduces wasted effort.
                  </p>
                  <div className="text-accent font-semibold text-sm group-hover:underline">
                    Learn More →
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate('/orr')}>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-accent mb-2">Operational Readiness Review</div>
                  <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                    ORR Resource Guide
                  </h4>
                  <p className="text-charcoal-700 mb-4">
                    A formal "gate" assessment conducted before launch. Ensures systems are ready to be operated safely, reliably, and efficiently. Covers definition, process, checklists, and best practices.
                  </p>
                  <div className="text-accent font-semibold text-sm group-hover:underline">
                    Learn More →
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate('/coe')}>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-accent mb-2">Correction of Errors</div>
                  <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                    COE Template
                  </h4>
                  <p className="text-charcoal-700 mb-4">
                    A scalable, repeatable process to identify root causes, fix problems, and continuously improve quality. Includes Five Whys methodology, impact analysis, corrective actions, and lessons learned framework.
                  </p>
                  <div className="text-accent font-semibold text-sm group-hover:underline">
                    Learn More →
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate('/pain-points')}>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-accent mb-2">Pain Points</div>
                  <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                    Scaling Challenges
                  </h4>
                  <p className="text-charcoal-700 mb-4">
                    Understanding the specific pain points that prevent companies from scaling effectively. Learn how PRFAQ, Bar-Raising Engineering Reviews, and Operational Readiness Reviews address core challenges.
                  </p>
                  <div className="text-accent font-semibold text-sm group-hover:underline">
                    Explore Pain Points →
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative bg-gradient-to-b from-white via-charcoal-50/30 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Card className="bg-accent/10 border-accent/20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Ready to Answer These Questions Together?
              </h2>
              <p className="text-xl text-charcoal-700 mb-8 leading-relaxed max-w-2xl mx-auto" style={{ lineHeight: '1.75' }}>
                If these questions resonate, let's map your current operating system and identify where ScaleOS can help you build durable mechanisms for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open('https://calendly.com/douglas-stevenson', '_blank')}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book a 30 Minute Founder Call
                </Button>
              </div>
            </div>
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

export default ScaleOSQuestions;

