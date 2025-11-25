import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const ScaleOSQuestions: React.FC = () => {
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

