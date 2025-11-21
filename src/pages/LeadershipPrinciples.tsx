import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const LeadershipPrinciples: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedPrinciple, setExpandedPrinciple] = useState<number | null>(null);

  useEffect(() => {
    // Scroll to top when navigating to this page (unless there's a hash)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const principles = [
    {
      number: 1,
      title: 'Customer Obsession',
      description: 'Leaders start with the customer and work backwards. They work vigorously to earn and keep customer trust. Although leaders pay attention to competitors, they obsess over customers.',
    },
    {
      number: 2,
      title: 'Ownership',
      description: 'Leaders are owners. They think long term and don\'t sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team. They never say "that\'s not my job."',
    },
    {
      number: 3,
      title: 'Invent and Simplify',
      description: 'Leaders expect and require innovation and invention from their teams and always find ways to simplify. They are externally aware, look for new ideas from everywhere, and are not limited by "not invented here." As we do new things, we accept that we may be misunderstood for long periods of time.',
    },
    {
      number: 4,
      title: 'Are Right, A Lot',
      description: 'Leaders are right a lot. They have strong judgment and good instincts. They seek diverse perspectives and work to disconfirm their beliefs.',
    },
    {
      number: 5,
      title: 'Learn and Be Curious',
      description: 'Leaders are never done learning and always seek to improve themselves. They are curious about new possibilities and act to explore them.',
    },
    {
      number: 6,
      title: 'Hire and Develop the Best',
      description: 'Leaders raise the performance bar with every hire and promotion. They recognize exceptional talent, and willingly move them throughout the organization. Leaders develop leaders and take seriously their role in coaching others. We work on behalf of our people to invent mechanisms for development like Career Choice.',
    },
    {
      number: 7,
      title: 'Insist on the Highest Standards',
      description: 'Leaders have relentlessly high standards — many people may think these standards are unreasonably high. Leaders are continually raising the bar and drive their teams to deliver high quality products, services, and processes. Leaders ensure that defects do not get sent down the line and that problems are fixed so they stay fixed.',
    },
    {
      number: 8,
      title: 'Think Big',
      description: 'Thinking small is a self-fulfilling prophecy. Leaders create and communicate a bold direction that inspires results. They think differently and look around corners for ways to serve customers.',
    },
    {
      number: 9,
      title: 'Bias for Action',
      description: 'Speed matters in business. Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking.',
    },
    {
      number: 10,
      title: 'Frugality',
      description: 'Accomplish more with less. Constraints breed resourcefulness, self-sufficiency, and invention. There are no extra points for growing headcount, budget size, or fixed expense.',
    },
    {
      number: 11,
      title: 'Earn Trust',
      description: 'Leaders listen attentively, speak candidly, and treat others respectfully. They are vocally self-critical, even when doing so is awkward or embarrassing. Leaders do not believe their or their team\'s body odor smells of perfume. They benchmark themselves and their teams against the best.',
    },
    {
      number: 12,
      title: 'Dive Deep',
      description: 'Leaders operate at all levels, stay connected to the details, audit frequently, and are skeptical when metrics and anecdote differ. No task is beneath them.',
    },
    {
      number: 13,
      title: 'Have Backbone; Disagree and Commit',
      description: 'Leaders are obligated to respectfully challenge decisions when they disagree, even when doing so is uncomfortable or exhausting. Leaders have conviction and are tenacious. They do not compromise for the sake of social cohesion. Once a decision is determined, they commit wholly.',
    },
    {
      number: 14,
      title: 'Deliver Results',
      description: 'Leaders focus on the key inputs for their business and deliver them with the right quality and in a timely fashion. Despite setbacks, they rise to the occasion and never settle.',
    },
    {
      number: 15,
      title: 'Strive to be Earth\'s Best Employer',
      description: 'Leaders work every day to create a safer, more productive, higher performing, more diverse, and more just work environment. They lead with empathy, have fun at work, and make it easy for others to have fun. Leaders ask themselves: Are my fellow employees growing? Are they empowered? Are they ready for what\'s next? Leaders have a vision for and commitment to their employees\' personal success, whether that be at Amazon or elsewhere.',
      added: 'Added in 2021',
    },
    {
      number: 16,
      title: 'Success and Scale Bring Broad Responsibility',
      description: 'We started in a garage, but we\'re not there anymore. We are big, we impact the world, and we are far from perfect. We must be humble and thoughtful about even the secondary effects of our actions. Our local communities, planet, and future generations need us to be better every day. We must begin each day with a determination to make better, do better, and be better for our customers, our employees, our partners, and the world at large. And we must end every day knowing we can do even more tomorrow. Leaders create more than they consume and always leave things better than how they found them.',
      added: 'Added in 2021',
    },
  ];

  const togglePrinciple = (number: number) => {
    setExpandedPrinciple(expandedPrinciple === number ? null : number);
  };

  return (
    <div className="min-h-screen bg-white">
      <LandingNav />
      
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-b from-charcoal-50 via-white to-white overflow-hidden pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 mb-6 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              Amazon's 16 Leadership Principles
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed" style={{ lineHeight: '1.75' }}>
              The foundational principles that guide decision-making, hiring, and culture at Amazon. These principles are used daily by leaders and teams to evaluate ideas, make decisions, and build products.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Principles Grid */}
      <Section className="relative bg-white overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card 
                  className={`h-full cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    expandedPrinciple === principle.number 
                      ? 'ring-2 ring-accent shadow-xl' 
                      : 'hover:ring-1 hover:ring-accent/50'
                  }`}
                  onClick={() => togglePrinciple(principle.number)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl shadow-lg">
                          {principle.number}
                        </div>
                        <h3 className="text-2xl font-bold text-charcoal-900">
                          {principle.title}
                        </h3>
                      </div>
                      {principle.added && (
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                          {principle.added}
                        </span>
                      )}
                    </div>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p 
                        className="text-charcoal-700 leading-relaxed"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: expandedPrinciple === principle.number ? 'unset' : 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: expandedPrinciple === principle.number ? 'visible' : 'hidden',
                        }}
                      >
                        {principle.description}
                      </p>
                    </motion.div>
                    
                    <div className="mt-4 flex items-center text-accent font-semibold text-sm">
                      <span className="group-hover:underline">
                        {expandedPrinciple === principle.number ? 'Click to collapse' : 'Click to expand'}
                      </span>
                      <motion.svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{
                          rotate: expandedPrinciple === principle.number ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Usage Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-charcoal-900 mb-4">
                  How These Principles Are Used
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-charcoal-700">
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-charcoal-900">In Hiring</h3>
                    <p className="leading-relaxed">
                      Interview questions are designed around these principles. Candidates are evaluated on how well they demonstrate alignment with these values.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-charcoal-900">In Decision-Making</h3>
                    <p className="leading-relaxed">
                      When evaluating new ideas or initiatives, teams reference these principles to ensure alignment with company values and long-term goals.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-charcoal-900">In Performance Reviews</h3>
                    <p className="leading-relaxed">
                      Leadership principles are integrated into performance evaluations, helping identify areas for growth and recognizing exemplary behavior.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-charcoal-900">In Culture Building</h3>
                    <p className="leading-relaxed">
                      These principles serve as the foundation for team culture, guiding how people interact, collaborate, and solve problems together.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative bg-charcoal-900 text-white overflow-hidden py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to Apply These Principles?
          </h2>
          <p className="text-xl text-charcoal-300 mb-8 leading-relaxed">
            Learn how to integrate leadership principles into your organization's culture, hiring, and decision-making processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('https://calendly.com/douglas-stevenson', '_blank')}
              variant="primary"
              size="lg"
              className="bg-accent hover:bg-accent-dark"
            >
              Book a Consultation
            </Button>
            <Button
              onClick={() => navigate('/scaleos')}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-charcoal-900"
            >
              Explore ScaleOS
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LeadershipPrinciples;

