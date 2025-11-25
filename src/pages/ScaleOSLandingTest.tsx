import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { TimelineItem } from '../components/ui/TimelineItem';

const ScaleOSLandingTest: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check for access key in URL
  const urlParams = new URLSearchParams(location.search);
  const accessKey = urlParams.get('key');
  
  // Simple password protection - redirect if no valid key
  useEffect(() => {
    if (accessKey !== 'scaleos2026') {
      navigate('/scaleos');
    }
  }, [accessKey, navigate]);

  // Don't render content if key is invalid
  if (accessKey !== 'scaleos2026') {
    return null;
  }

  useEffect(() => {
    // Set page title and meta tags
    document.title = 'ScaleOS - Scale Without Chaos';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'ScaleOS equips high-growth founders and leaders with the operating system required to scale beyond early traction. Built by operators from Amazon and Facebook.');
    
    // Update Open Graph tags
    const updateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    updateMetaTag('og:title', 'ScaleOS - Scale Without Chaos');
    updateMetaTag('og:description', 'ScaleOS equips high-growth founders and leaders with the operating system required to scale beyond early traction.');
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', window.location.href);
    
    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', 'ScaleOS - Scale Without Chaos');
    updateTwitterTag('twitter:description', 'ScaleOS equips high-growth founders and leaders with the operating system required to scale beyond early traction.');
    
    // Handle hash-based navigation when page loads or hash changes
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    } else {
      // Scroll to top when navigating to this page without a hash
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const floatingAnimation = {
    y: [0, -4, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-50 via-white to-charcoal-50/30">
      <LandingNav />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" style={{ backgroundPosition: '30% 20%' }}></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-charcoal-900 leading-[1.1] tracking-tight">
                Scale Without Chaos
              </h1>
              <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed max-w-2xl font-semibold mb-4" style={{ lineHeight: '1.75' }}>
                Build without burnout. Ship without surprises.
              </p>
              <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed max-w-2xl" style={{ lineHeight: '1.75' }}>
                ScaleOS equips high-growth founders and leaders with the operating system required to scale beyond early traction. Its frameworks come from operators who've built to $1B+ and led engineering at Amazon and Facebook.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => window.open('https://calendly.com/douglas-stevenson', '_blank')}
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
              <div className="pt-2">
                <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full mb-2">TEST VERSION</div>
                <div>
                  <a 
                    href="/scaleos" 
                    className="text-sm text-charcoal-500 hover:text-accent underline"
                  >
                    ← Back to Production Version
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.div
                animate={floatingAnimation}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 relative overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-charcoal-900 mb-1">ScaleOS Dashboard</h3>
                        <p className="text-sm text-charcoal-600">Real-time operating metrics</p>
                      </div>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20">
                        LIVE
                      </span>
                    </div>
                    
                    {/* Stat cards with improved design */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-accent/10 rounded-xl p-4 border border-accent/20 backdrop-blur-sm">
                        <div className="text-xs font-medium text-charcoal-600 mb-2 uppercase tracking-wide">Velocity</div>
                        <div className="text-3xl font-bold text-accent mb-1">92%</div>
                        <div className="flex items-center text-xs text-green-600 font-medium">
                          <span>↑ 8%</span>
                          <span className="ml-1 text-charcoal-500">vs last month</span>
                        </div>
                      </div>
                      <div className="bg-emerald-50/80 rounded-xl p-4 border border-emerald-200/50 backdrop-blur-sm">
                        <div className="text-xs font-medium text-charcoal-600 mb-2 uppercase tracking-wide">Reliability</div>
                        <div className="text-3xl font-bold text-emerald-600 mb-1">99.9%</div>
                        <div className="flex items-center text-xs text-green-600 font-medium">
                          <span>↑ 0.2%</span>
                          <span className="ml-1 text-charcoal-500">vs last month</span>
                        </div>
                      </div>
                      <div className="bg-purple-50/80 rounded-xl p-4 border border-purple-200/50 backdrop-blur-sm">
                        <div className="text-xs font-medium text-charcoal-600 mb-2 uppercase tracking-wide">Hiring Bar</div>
                        <div className="text-3xl font-bold text-purple-600 mb-1">85%</div>
                        <div className="flex items-center text-xs text-green-600 font-medium">
                          <span>↑ 12%</span>
                          <span className="ml-1 text-charcoal-500">vs last month</span>
                        </div>
                      </div>
                      <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-200/50 backdrop-blur-sm">
                        <div className="text-xs font-medium text-charcoal-600 mb-2 uppercase tracking-wide">Alignment</div>
                        <div className="text-3xl font-bold text-blue-600 mb-1">94%</div>
                        <div className="flex items-center text-xs text-green-600 font-medium">
                          <span>↑ 5%</span>
                          <span className="ml-1 text-charcoal-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* DORA Metrics section */}
                    <div className="pt-5 border-t border-charcoal-200/50">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-charcoal-900 uppercase tracking-wide">DORA Metrics</span>
                        <span className="px-2 py-1 bg-charcoal-100 text-charcoal-600 text-xs font-medium rounded-md">Last 30 days</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 px-3 bg-charcoal-50/50 rounded-lg">
                          <span className="text-sm text-charcoal-700 font-medium">Deployment Frequency</span>
                          <span className="text-sm font-bold text-charcoal-900">Daily</span>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 bg-charcoal-50/50 rounded-lg">
                          <span className="text-sm text-charcoal-700 font-medium">Lead Time</span>
                          <span className="text-sm font-bold text-charcoal-900">2.5 days</span>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 bg-charcoal-50/50 rounded-lg">
                          <span className="text-sm text-charcoal-700 font-medium">MTTR</span>
                          <span className="text-sm font-bold text-charcoal-900">15 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <Section id="why-this" className="relative bg-white overflow-hidden">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-charcoal-50/50 via-transparent to-transparent opacity-60" style={{ backgroundPosition: '80% 50%' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 leading-tight tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                Your Product Is Scaling Faster Than Your Company
              </h2>
              <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed max-w-xl" style={{ lineHeight: '1.75' }}>
                As your product finds traction, the cracks in your operating system start to show.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <span className="text-accent mr-4 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    You are hiring fast but not sure if you are raising the bar or just adding people.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-4 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    Engineering velocity is high but architecture, reliability, and quality are starting to creak.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-4 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    Milestones slip and board updates get harder.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-4 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    Everyone is busy but you are not confident you can hit the next funding or market milestones.
                  </span>
                </li>
              </ul>
              <p className="text-xl md:text-2xl font-bold text-charcoal-900 pt-6 border-t border-charcoal-200/50" style={{ lineHeight: '1.6' }}>
                This is not a motivation problem. It is an operating system problem.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-red-50/80 border-red-300/50 backdrop-blur-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-semibold text-red-600 uppercase mb-2 tracking-wider">Warning</div>
                    <h3 className="text-lg font-bold text-charcoal-900">Missed Milestone</h3>
                  </div>
                  <span className="px-3 py-1 bg-red-200/80 text-red-800 text-xs font-bold rounded-full border border-red-300/50">
                    Critical
                  </span>
                </div>
              </Card>
              <Card className="bg-orange-50/80 border-orange-300/50 backdrop-blur-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-semibold text-orange-600 uppercase mb-2 tracking-wider">Alert</div>
                    <h3 className="text-lg font-bold text-charcoal-900">Mis-hire</h3>
                  </div>
                  <span className="px-3 py-1 bg-orange-200/80 text-orange-800 text-xs font-bold rounded-full border border-orange-300/50">
                    High
                  </span>
                </div>
              </Card>
              <Card className="bg-yellow-50/80 border-yellow-300/50 backdrop-blur-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-semibold text-yellow-600 uppercase mb-2 tracking-wider">Risk</div>
                    <h3 className="text-lg font-bold text-charcoal-900">Architecture Rewrite</h3>
                  </div>
                  <span className="px-3 py-1 bg-yellow-200/80 text-yellow-800 text-xs font-bold rounded-full border border-yellow-300/50">
                    Medium
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Pain Points Section */}
      <Section id="pain-points" className="relative bg-gradient-to-b from-white via-charcoal-50/30 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 mb-8 leading-tight tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              Pain Points
            </h2>
            <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed mb-12" style={{ lineHeight: '1.75' }}>
              Scaling a company puts extraordinary pressure on founders and executive teams. These recurring pain points are the signal that it is time to evaluate new systems, processes and mechanisms to scale the organization.
            </p>
            <Button
              onClick={() => navigate('/pain-points')}
              size="lg"
            >
              Explore Pain Points
            </Button>
          </div>
        </div>
      </Section>

      {/* What Is ScaleOS Section */}
      <Section id="scaleos" className="relative bg-gradient-to-b from-white via-charcoal-50/30 to-white overflow-hidden">
        {/* Radial gradient highlight */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-40" style={{ backgroundPosition: '50% 30%' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 mb-8 leading-tight tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              ScaleOS: An Operating System for High Growth Tech Companies
            </h2>
            <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed max-w-3xl mx-auto" style={{ lineHeight: '1.75' }}>
              ScaleOS is a set of mechanisms, reviews, and leadership behaviors that let you scale from early traction to durable growth without burning out your team or rewriting the entire system.
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.01em' }}>
              The 3 Mechanisms of ScaleOS
            </h3>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Leadership Principles',
                  description: 'The foundational principles that guide decision-making, hiring, and culture at companies. Principles that are used daily by leaders and teams to evaluate ideas, make decisions, and build products.',
                  bullets: [
                    'Obsess over controllable inputs',
                    'Autonomous teams with single–threaded leaders',
                    'Culture codified in daily rituals',
                    'Shared flywheel everyone can draw on a whiteboard',
                  ],
                },
                {
                  title: 'Bar-Raising Hiring System',
                  description: 'A rigorous, repeatable hiring system where every new leader and IC raises the bar.',
                  detail: 'We define what "great" looks like, hardwire it into sourcing, interviewing, and decision making, and protect the culture as you scale.',
                  bullets: [
                    'Better architecture and code quality',
                    'Faster, more predictable delivery',
                    'Fewer incidents and recoveries that are measured in minutes, not hours',
                    'Healthier engineering culture',
                    'Teams that get better every quarter',
                  ],
                },
                {
                  title: 'Operational Excellence: Architecture, Agile, and Telemetry',
                  description: 'Operational excellence and quality mechanisms built into how the company runs, not layered on top.',
                  bullets: [
                    'Architecture coherence across hardware, software, and AI so the foundation scales with the business',
                    'Agile done right with reviews, standards, and accountability that increase velocity and quality',
                    'Telemetry and metrics that give leaders a single version of the truth so decisions are based on what is actually happening',
                  ],
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
                    {mechanism.description && (
                      <p className="text-charcoal-700 mb-3">
                        {mechanism.description}
                      </p>
                    )}
                    {mechanism.detail && (
                      <p className="text-charcoal-600 text-sm leading-relaxed mb-3">
                        {mechanism.detail}
                      </p>
                    )}
                    {mechanism.bullets && (
                      <ul className="space-y-2">
                        {mechanism.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start text-charcoal-600 text-sm leading-relaxed">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* The ScaleOS Promise Section */}
      <Section id="promise" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 mb-8 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              The ScaleOS Promise
            </h2>
            <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed mb-12" style={{ lineHeight: '1.75' }}>
              Clarity for the CEO. Discipline for engineering. Alignment across product.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4">For CEOs</h3>
                <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                  You get a strategic operating rhythm, a clear view of engineering execution, and a partner who's scaled from zero to $1Bn+ with 20% plus EBITDA margins.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4">For CTOs / Engineering Leaders</h3>
                <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                  They get practical engineering excellence coaching — architecture reviews, reliability systems, sprint discipline, DORA insights, and how to build senior engineering talent.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <h3 className="text-2xl font-bold text-charcoal-900 mb-4">For Product + Engineering Teams</h3>
                <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                  They get a shared language, accountability, and a structure that eliminates firefighting, rework, and missed expectations.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* What ScaleOS Includes Section */}
      <Section id="includes" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            What ScaleOS Includes
          </h2>
          
          <div className="space-y-12">
            {[
              {
                number: 1,
                title: 'CEO Coaching',
                subtitle: 'Monthly 1:1 coaching designed for founders and CEOs operating at speed.',
                outcomes: [
                  'Strategic clarity',
                  'Prioritization and focus',
                  'Leadership maturity',
                  'Accountability and conflict norms',
                  'Better decisions with less friction',
                  'Real-time support during crises or inflection points',
                ],
                note: 'This is what most CEOs are missing — a partner who has lived it, not theorized it.',
              },
              {
                number: 2,
                title: 'CTO / Engineering Leadership Coaching',
                subtitle: 'Monthly 1:1 technical leadership coaching for CTOs, VPEs, Staff Engineers, and Tech Leads.',
                topics: [
                  'Architecture evaluation and modernization',
                  'Incident culture and operational resilience',
                  'Sprint quality and engineering discipline',
                  'Hiring, leveling, and building senior engineers',
                  'Implementing bar-raising engineering practices',
                  'Product–engineering alignment',
                  'DORA metrics that actually matter',
                ],
                note: 'This is the engineering maturity system most companies never build.',
              },
              {
                number: 3,
                title: 'The ScaleOS Monthly Leadership Workshop',
                subtitle: 'A 90–120 minute leadership workshop with the CEO, CTO, product, and engineering leadership.',
                alignment: [
                  'Priorities',
                  'Capacity & planning',
                  'Architecture',
                  'Reliability',
                  'Velocity',
                  'Execution quality',
                  'Tradeoffs and decision rights',
                ],
                result: 'The whole leadership team starts operating like a single mind instead of five competing voices.',
              },
              {
                number: 4,
                title: 'Quarterly Deep-Dives',
                subtitle: 'Every quarter, we run a structured intervention with the whole team.',
                options: [
                  'Engineering Maturity Diagnostic',
                  'Operational Excellence Bootcamp',
                  'Incident Retrospective Reset',
                  'Architecture Review & Tech Debts Strategy',
                  'Product–Engineering Operating Rhythm',
                  'Org Redesign + Accountability Mapping',
                  'Strategy to Execution Cascade',
                ],
                note: 'This is where real transformation happens.',
              },
              {
                number: 5,
                title: 'Always-On Advisory Support',
                subtitle: 'We provide executive decision support. Plus engineering and architecture support.',
                support: 'Slack access to both = no more waiting four weeks for clarity.',
                note: 'This is why CEO + CTO pairs love ScaleOS.',
              },
            ].map((item, index) => (
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
                        {item.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-lg text-charcoal-700 leading-relaxed mb-4" style={{ lineHeight: '1.75' }}>
                        {item.subtitle}
                      </p>
                      
                      {item.outcomes && (
                        <div className="mb-4">
                          <p className="font-semibold text-charcoal-900 mb-2">Outcomes:</p>
                          <ul className="space-y-2">
                            {item.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start text-charcoal-700">
                                <span className="text-accent mr-2 mt-1">•</span>
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {item.topics && (
                        <div className="mb-4">
                          <p className="font-semibold text-charcoal-900 mb-2">Topics include:</p>
                          <ul className="space-y-2">
                            {item.topics.map((topic, idx) => (
                              <li key={idx} className="flex items-start text-charcoal-700">
                                <span className="text-accent mr-2 mt-1">•</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {item.alignment && (
                        <div className="mb-4">
                          <p className="font-semibold text-charcoal-900 mb-2">These sessions create alignment across:</p>
                          <ul className="space-y-2">
                            {item.alignment.map((area, idx) => (
                              <li key={idx} className="flex items-start text-charcoal-700">
                                <span className="text-accent mr-2 mt-1">•</span>
                                <span>{area}</span>
                              </li>
                            ))}
                          </ul>
                          {item.result && (
                            <p className="mt-4 font-semibold text-charcoal-900 italic">
                              Result: {item.result}
                            </p>
                          )}
                        </div>
                      )}
                      
                      {item.options && (
                        <div className="mb-4">
                          <p className="font-semibold text-charcoal-900 mb-2">Choose from:</p>
                          <ul className="space-y-2">
                            {item.options.map((option, idx) => (
                              <li key={idx} className="flex items-start text-charcoal-700">
                                <span className="text-accent mr-2 mt-1">•</span>
                                <span>{option}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {item.support && (
                        <p className="mb-4 text-charcoal-700 font-semibold">
                          {item.support}
                        </p>
                      )}
                      
                      {item.note && (
                        <p className="mt-4 pt-4 border-t border-charcoal-200 text-charcoal-700 italic">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Engagement Models Section */}
      <Section id="engagement" className="relative bg-white overflow-hidden">
        {/* Radial gradient highlight */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/3 via-transparent to-transparent opacity-50" style={{ backgroundPosition: '50% 50%' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-20 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Work With Us The Way Operators Actually Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Founder Operating System',
                badge: null,
                features: [
                  '2 x 90 minute sessions per month with the CEO and CTO',
                  'Focus on priorities for the next 12 weeks',
                  'Convert current fires into durable mechanisms (cadence, hiring, metrics)',
                  'Async Loom and email support for critical decisions',
                ],
              },
              {
                title: 'Half Day Team Workshops',
                badge: null,
                features: [
                  '4 hour morning workshops for engineering and product leadership teams',
                  'Formats: Operational Cadence Reset, Bar-Raising Hiring, Architecture Coherence, Accountability Without Drama',
                ],
              },
              {
                title: 'ScaleOS 90 Day',
                badge: 'Most Popular',
                features: [
                  '90-day commitment with two sessions per month',
                  '2 half day workshops included',
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
                <div className={`h-full flex flex-col bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                  model.badge ? 'border-accent/50 border-2' : 'border-white/20'
                }`}>
                  <div className="flex items-start justify-end mb-6">
                    {model.badge && (
                      <span className="px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-full">
                        {model.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-6 leading-tight">{model.title}</h3>
                  <ul className="space-y-4 flex-grow mb-6">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                        <span className="text-accent mr-3 mt-1 font-bold">✓</span>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => window.open('https://calendly.com/douglas-stevenson', '_blank')}
              size="lg"
            >
              Talk About Fit
            </Button>
          </div>
        </div>
      </Section>

      {/* Who ScaleOS Is For Section */}
      <Section id="who-is-for" className="relative bg-gradient-to-b from-white via-charcoal-50/30 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Who ScaleOS Is For
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'CEOs who are scaling headcount, customers, or complexity',
              'CTOs who need a more senior engineering culture',
              'Product teams stuck between strategy and execution',
              'Engineering orgs slowed by chaos, rework, or inconsistency',
              'Companies preparing for Series B, C, pre-IPO, or major infrastructure growth',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1 text-xl">•</span>
                    <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                      {item}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Results You Can Expect Section */}
      <Section id="results" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Results You Can Expect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Engineering execution doubles in reliability and consistency',
              'Founders feel calmer, clearer, and more confident',
              'Product/Engineering alignment dramatically improves',
              'Roadmaps become real, not aspirational',
              'Sprints stabilize',
              'Fewer incidents, better on-call, better reviews',
              'Leaders grow into their roles',
              'Teams start playing offense instead of defense',
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1 font-bold text-xl">✓</span>
                    <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                      {result}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why It Works Section */}
      <Section id="why-it-works" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Why It Works
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  Because most companies try to scale with either:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>A CEO coach who doesn't understand engineering, or</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>An engineering advisor who doesn't understand leadership</span>
                  </li>
                </ul>
                <p className="font-semibold text-charcoal-900">
                  ScaleOS gives you both — fully integrated.
                </p>
                <p>
                  It's the only coaching system that connects:
                </p>
                <p className="text-center text-xl font-semibold text-accent py-4">
                  CEO → CTO → Product → Engineering → Execution
                </p>
                <p className="text-center">
                  All inside one operating rhythm.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* The ScaleOS Partnership Section */}
      <Section id="partnership" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            The ScaleOS Partnership
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-accent/10 border-accent/20">
                <h3 className="text-3xl font-bold text-charcoal-900 mb-6">You Get</h3>
                <ul className="space-y-3">
                  {[
                    'CEO clarity',
                    'CTO capability',
                    'Engineering excellence',
                    'Cross-functional alignment',
                    'A predictable rhythm your whole company can operate inside',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-charcoal-700">
                      <span className="text-accent mr-2 mt-1 font-bold">✓</span>
                      <span>{item}</span>
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
              <Card className="h-full bg-accent/10 border-accent/20">
                <h3 className="text-3xl font-bold text-charcoal-900 mb-6">We Bring</h3>
                <ul className="space-y-3">
                  {[
                    '20+ years of CEO experience scaling to $1Bn+',
                    'Deep engineering leadership and architectural expertise',
                    'Systems that reduce chaos and increase execution',
                    'A balanced partnership that keeps CEO + CTO aligned',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-charcoal-700">
                      <span className="text-accent mr-2 mt-1 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Timeline and Outcomes Section */}
      <Section className="relative bg-gradient-to-b from-charcoal-50 via-white to-charcoal-50/30 overflow-hidden">
        {/* Radial gradient highlight */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-40" style={{ backgroundPosition: '50% 50%' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-20 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            What Actually Changes And When
          </h2>
          
          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent to-transparent"></div>
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
          
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Horizontal line */}
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent to-transparent opacity-30"></div>
              
              <div className="grid grid-cols-3 gap-8 relative">
                {[
                  {
                    time: 'Week 1',
                    title: 'Immediate Clarity',
                    items: [
                      'CEO and CTO alignment session on strategy, risks, and 12 week outcomes',
                      'Rapid ScaleOS diagnostic',
                      'Identification of 2 to 3 silent fires',
                      'Delivery of a Working Backwards style document',
                    ],
                  },
                  {
                    time: 'Month 1',
                    title: 'New Operating Rhythm',
                    items: [
                      'Operating cadence in place: ORRs, sprint reviews, incident reviews, design reviews',
                      'Bar-raising hiring system in place',
                      'Leadership principles and accountability reset',
                      'CEO and CTO aligned on roadmap and decision rights',
                    ],
                  },
                  {
                    time: 'Month 3',
                    title: 'The Company Feels Different',
                    items: [
                      'Engineering velocity and reliability improved',
                      'First bar-raising hires in place',
                      'Leadership behavior shifts, less artificial harmony',
                      'Teams running more independently',
                    ],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pt-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    <div className="text-center mb-6">
                      <div className="text-sm font-bold text-accent mb-2 uppercase tracking-wider">{item.time}</div>
                      <h3 className="text-2xl font-bold text-charcoal-900 mb-6">{item.title}</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {item.items.map((listItem, idx) => (
                        <li key={idx} className="text-charcoal-700 text-sm leading-relaxed flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span style={{ lineHeight: '1.75' }}>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Cost Of Not Doing This Section */}
      <Section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 leading-tight tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                What Is The Cost Of Not Doing This?
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <span className="text-red-500 mr-4 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    A single mis-hire in a senior role can cost <strong className="text-charcoal-900 font-bold">$250,000 to $500,000</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-4 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    Missing key milestones by three to six months can burn <strong className="text-charcoal-900 font-bold">$1 million to $3 million</strong> of runway.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-4 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    An architecture rewrite after 12 to 18 months of drift can cost <strong className="text-charcoal-900 font-bold">$2 million to $6 million</strong> in engineering time.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-4 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    Reliability failures with early customers can vaporize <strong className="text-charcoal-900 font-bold">$250,000 to $1 million or more</strong> in ARR.
                  </span>
                </li>
              </ul>
              <p className="text-xl md:text-2xl font-bold text-charcoal-900 pt-8 border-t border-charcoal-200/50" style={{ lineHeight: '1.6' }}>
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
      <Section id="about" className="relative bg-gradient-to-b from-white via-charcoal-50/30 to-white overflow-hidden">
        {/* Radial gradient highlight */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-40" style={{ backgroundPosition: '50% 50%' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-20 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
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
                  Founder and CEO coach based in San Francisco, scaled a contextual technology company from zero to over $1 billion in revenues with strong margins, deep experience in cofounder dynamics, executive hiring, and board alignment. Certified in Working Genius and related team tools.
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
                <div className="text-accent font-semibold mb-4">Founder & Engineering Leader</div>
                <p className="text-charcoal-700 leading-relaxed">
                  Former engineering leader at Amazon and Facebook, deep experience in large scale systems, reliability, and engineering organization design. Jim Phillips built Amazon's ad platform from $50M/quarter to $2B/quarter revenue, scaling to 75B daily transactions with millisecond latencies and reducing total cost of ownership by 93%. Special focus on bringing Working Backwards and Amazon style mechanisms into companies.
                </p>
              </Card>
            </motion.div>
          </div>
          
          <p className="text-center text-xl md:text-2xl text-charcoal-700 max-w-3xl mx-auto font-semibold leading-relaxed" style={{ lineHeight: '1.75' }}>
            We show up as operators. We help you install mechanisms that work in the real world.
          </p>
        </div>
      </Section>

      {/* Resources Section */}
      <Section id="resources" className="relative bg-white overflow-hidden">
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
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate('/leadership-principles')}>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-accent mb-2">Amazon's 16 Leadership Principles</div>
                  <h4 className="text-xl font-bold text-charcoal-900 mb-3">
                    Foundational Leadership Framework
                  </h4>
                  <p className="text-charcoal-700 mb-4">
                    The core principles that guide decision-making, hiring, and culture at Amazon. These 16 principles are used daily by leaders and teams to evaluate ideas, make decisions, and build products. Interactive, numbered guide with expandable details.
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
            
            {/* Add more resources here as needed */}
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section id="final-cta" className="relative bg-charcoal-900 text-white overflow-hidden">
        {/* Radial gradient highlight */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-30" style={{ backgroundPosition: '50% 50%' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Let Us See If ScaleOS Is A Fit
          </h2>
          <p className="text-xl md:text-2xl text-charcoal-300 mb-16 leading-relaxed max-w-3xl mx-auto" style={{ lineHeight: '1.75' }}>
            If you are a founder or leader in tech, AI, or digital health and you are feeling the strain of growth, we can map your current operating system and where it is likely to break next.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => window.open('https://calendly.com/douglas-stevenson', '_blank')}
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

export default ScaleOSLandingTest;
