import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const PRFAQInstructions: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when navigating to this page (unless there's a hash)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const pressReleaseComponents = [
    {
      title: 'Heading',
      description: 'Name the product so the reader (i.e., your target customers) will understand—one sentence under the title.',
    },
    {
      title: 'Subheading',
      description: 'Describe the customer for the product and what benefits they will gain from using it—one sentence underneath the Heading. Describing the customers precisely here is critical. If you think your product is for everyone, you are mistaken. Great products are tailored to the specific needs of a specific customer segment.',
    },
    {
      title: 'Summary Paragraph',
      description: 'Start with the city, media outlet, and your proposed launch date. Give a summary of the product and its benefits. The launch date should have meaning. That is, pick a date when you expect actually to launch this product.',
    },
    {
      title: 'Problem Paragraph',
      description: 'This is where you describe the problem(s) that your product is designed to solve. Make sure you write this paragraph from the customer\'s point of view. You must identify a problem with a large total addressable market (TAM).',
    },
    {
      title: 'Solution Paragraph(s)',
      description: 'Describe your product in detail and how it simply and easily solves the customer\'s problem. The solution must address the problem directly, be described in sufficient detail, and acknowledge the competition and state how this new product is meaningfully differentiated.',
    },
    {
      title: 'Quotes & Getting Started',
      description: 'Add one quote from you or your company\'s spokesperson and a second from a hypothetical customer describing the benefit of using your new product. Describe how easy it is to get started, and provide a link to your website where customers can get more information.',
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Early Drafts (Solo Effort)',
      content: [
        'The PR/FAQ typically starts as a solo effort, usually by a product manager.',
        'Early drafts have many holes and unanswered questions.',
        'The author researches to fill in the blanks.',
        'Fidelity and detail increase with each draft.',
      ],
    },
    {
      number: 2,
      title: 'Peer Review',
      content: [
        'Author seeks feedback from their manager and a few relevant (ideally cross-functional) peers.',
        'Small group of about 10 contributors makes sense for the first few drafts.',
      ],
    },
    {
      number: 3,
      title: 'Cross-Functional Review',
      content: [
        'Early draft is ready for a first review with a cross-functional team of stakeholders and a leader or decision-maker.',
        'Once the decision maker in the small group is satisfied, they set a meeting to share it with the company\'s appropriate executive(s).',
      ],
    },
    {
      number: 4,
      title: 'Executive Review',
      content: [
        'One or more reviews at the executive level.',
        'If the executive team finds the idea promising, multiple subsequent drafts and review meetings will follow.',
      ],
    },
  ];

  const reviewCriteria = [
    'Is the customer clearly defined?',
    'Is the problem clearly defined?',
    'Does the proposed solution address the problem?',
    'Would we expect customers to change their behavior to buy/use the solution?',
    'Which dimension(s) is the new product better, cheaper, or faster than substitutes?',
    'Is the TAM and the payback big enough?',
    'What are the constraints or problems (e.g., business, resources, technical, legal) we will need to solve?',
  ];

  const commonMistakes = [
    {
      title: 'Speed vs Velocity',
      description: 'People confuse speed with velocity. Speed measures distance per second, but there is no direction. Velocity is speed with a direction. Amazon Web Services spent more than a year writing, revising, debating, and discussing PR/FAQs before launching. By investing time upfront in planning, they were able to move fast in the production phase.',
    },
    {
      title: 'Selling vs. Truth Seeking',
      description: 'Great decisions are made by understanding an issue and the many alternatives. When you try to "sell" an idea to "win" approval, you impede this process. Instead, understand and articulate what will prevent the product from being successful.',
    },
    {
      title: 'Discount Competition & Current Solutions',
      description: 'It is a mistake to discount or not correctly factor in the competition. If the customer problem is big, they already have some product or method of dealing with it today. Make sure to address: What are the solutions today? Is this solution compelling enough for people to switch?',
    },
    {
      title: 'Customer Backwards, Not Skills Forward',
      description: 'With the PR/FAQ process, you start by envisioning an innovative product for customers and work backward from there. Most companies view new business ideas using a skills-forward approach, relying on their current capabilities. The PR/FAQ process decouples what customers want from what we are good at building today.',
    },
    {
      title: 'Great Product, Wrong Problem',
      description: 'Building a great product that doesn\'t solve a problem that matters to customers won\'t result in a healthy new business. This is why getting the problem right is so significant. It can\'t be a problem already solved with a similar product unless your new product creates additional value by being meaningfully better, faster, or cheaper.',
    },
  ];

  const externalFAQs = [
    'What is the price?',
    'How does it work?',
    'How do I get help/customer support?',
    'Where can I buy it?',
  ];

  const internalFAQs = [
    'What products or solutions does the target customer use today to solve this problem?',
    'What problem(s) does this product solve for customers?',
    'How does this proposed product solution create value for customers? That is, in what way(s) is this product better, cheaper, and faster than the alternatives?',
    'What/who are the current competitors for this product?',
    'How large is the estimated consumer demand, and what is the TAM (total addressable market)?',
    'How many consumers have this need or problem?',
    'For how many consumers is this problem big enough that they are willing to spend money to do something about it? If so, how much money would they be willing to spend?',
    'How many of these consumers have the characteristics/capabilities/constraints necessary to use the product?',
    'What happens if a customer encounters x? How does the product deal with use case x?',
    'What are the challenging problems (business model, engineering, legal, UI, etc) that will need to be solved to enable this new product?',
    'What new capabilities will we need to establish to support this product?',
    'Do we have any third-party business relationships or dependencies to build this product? If so, what are they, and why will they be willing to partner with us (what is in it for them)?',
    'What third-party technologies are we dependent on to function properly for this product to work as promised?',
    'Are there any potential regulatory or legal issues to consider?',
    'What are the per-unit economics of the product? What is our expected Gross Profit and Contribution profit per unit?',
    'How much will we need to invest upfront to build this product regarding people, technology, inventory, warehouse space, etc.?',
    'How will we manage the risk of the upfront investment required?',
    'Based on the up-front investment and the per unit economics, how many months/years before we achieve profitability?',
    'What assumptions need to be true for this product to be successful?',
    'What are the top three reasons this product will not succeed?',
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
              Working Backwards PR/FAQ
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
              Instructions & Template: Start with the customer and work backwards—a systematic way to vet ideas and create new products that delight customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <Section id="introduction" className="relative bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Introduction
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  Most of Amazon's major products and initiatives since 2004 have one thing in common—they were created through a process called <strong>Working Backwards</strong>. Working Backwards is a systematic way to vet ideas and create new products. Its key tenet is to start by defining the customer experience, then iteratively work backwards from that point until the team achieves clarity of thought around what to build.
                </p>
                <p>
                  Its principal tool is a written narrative called the <strong>PR/FAQ</strong>, short for Press Release and Frequently Asked Questions.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Why Amazon Created Section */}
      <Section id="why-created" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Why Amazon Created the PR/FAQ Process
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  At Amazon, focusing on the customer is so central to the management mindset that it is the company's first Leadership Principle: <strong>Customer Obsession</strong>. Leaders start with the customer and work backwards.
                </p>
                <p>
                  The Working Backwards PR/FAQ process was created so that every leader at Amazon could stay focused on customers' needs while building and inventing new products. Start with the customer and work backwards…easy, right? In practice, it is much harder than it sounds.
                </p>
                <p>
                  Writing a press release is usually the last step in launching a new product. When writing the press release, you are laser-focused on describing your product so that when a potential customer reads about it in the press, they will be excited and compelled to buy it. You aren't focused on your competitors, current capabilities, P&L, business partners, or other considerations. Writing a press release is a forcing function to ensure that the creator of the new product idea is focused on the customer.
                </p>
                <p>
                  Once you have written a compelling press release, you and your team can work backwards from there, using the FAQ process, to figure out how to bring your new product vision to market.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Press Release Components Section */}
      <Section id="press-release-components" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Press Release Components
          </h2>
          
          <div className="space-y-6">
            {pressReleaseComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">
                    {component.title}
                  </h3>
                  <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    {component.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* The FAQ Section */}
      <Section id="the-faq" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                The FAQ
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  A well-written PR defines a specific objective—a destination where there is a treasure. Think of the FAQ section as the map to that destination and a detailed description of the dragons you will need to slay along your journey.
                </p>
                <p>
                  The first section is devoted to <strong>External FAQs</strong>. This is where you provide detailed answers to the questions that you can expect the press and customers to ask, such as: How does it work? What is the warranty? What is the return policy? How do I install it? These are relatively straightforward questions, but the details you provide in your answer matter a lot.
                </p>
                <p>
                  The next section is the <strong>Internal FAQs</strong>. A well-written internal FAQ section anticipates the most important questions that senior leaders and stakeholders in the company will ask after reading the PR. Anticipate questions from every department in the company: finance, marketing, customer support, operations, HR, etc.
                </p>
                <p>
                  An excellent FAQ demonstrates mastery of every aspect of the product. It should be optimistic but also realistic. It should include a data-based assessment of the potential market for the product, a firm grasp of what will be required to build it, the risks involved, and the conditions under which the product will succeed or fail.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            The Process of Writing a PR/FAQ
          </h2>
          
          <div className="mb-12">
            <Card className="mb-8">
              <p className="text-lg text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                One of the great things about the PR/FAQ process is that anyone can use it. Whether you are a college student, an entry-level employee at a big company, or a C-level executive, you don't need specialized design or coding skills, you just need to be able to write. The first draft of a PR/FAQ should take only a few hours, not a few days.
              </p>
            </Card>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
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
                        {step.title}
                      </h3>
                      <ul className="text-charcoal-700 leading-relaxed space-y-2" style={{ lineHeight: '1.75' }}>
                        {step.content.map((item, pIndex) => (
                          <li key={pIndex} className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="bg-accent/10 border-accent/20">
              <p className="text-lg text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                <strong>A great product development process should be a funnel, not a tunnel.</strong> A funnel accepts and considers many new product ideas at the onset, progressively eliminating lower-potential ideas and focusing on a short list of products with the most significant potential. By contrast, a tunnel is constrained at the outset, and all or nearly all new product ideas that enter the process are built and launched.
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Review Meeting Section */}
      <Section id="review-meeting" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                The PR/FAQ Review Meeting
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  A common misconception is that the goal of any PR/FAQ meeting is to "sell" the idea to the reviewers. This was not the case at Amazon, where we were focused more on <strong>truth-seeking vs. selling</strong> and <strong>improving vs. deciding</strong>.
                </p>
                <p>
                  A well-run PR/FAQ meeting is an opportunity for each reviewer to both a) get a deeper understanding of the proposed idea and b) ask questions and give feedback. The document is circulated at the start of the meeting, followed by 15-20 minutes of silent reading and note-taking. After everyone has read the document, the remaining 40 minutes are open for questions, debate, and discussion.
                </p>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-4">The Reviewer's Job is to Evaluate Objectively:</h3>
                  <ul className="space-y-2">
                    {reviewCriteria.map((criterion, index) => (
                      <li key={index} className="flex items-start text-charcoal-700">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Decision Section */}
      <Section id="decision" className="relative bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
                The Decision
              </h2>
              <div className="text-lg text-charcoal-700 leading-relaxed space-y-4" style={{ lineHeight: '1.75' }}>
                <p>
                  At some point, a level of completion of the PR/FAQ document is reached, and a go, no-go decision can be made. If the new idea is a go, what happens next should be well understood because it is described in the FAQs. Resources (people, money, fixed cost investments), a rough timeline, and other operational matters are spelled out in the document.
                </p>
                <p>
                  If the PR/FAQ is not approved, there are a range of reasons why this can happen:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>The solution is a "copycat" or not sufficiently differentiated from current products. Go back to the drawing board.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>The TAM is too small. Return to the drawing board and determine if changes can be made in the target customer set, the problem, or the solution to grow the TAM.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>The upfront investment is high, and the payoff is risky and/or low. Find ways to get started with fewer resources.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>The product is not viable (today) because of one or more unsolved problems described in the FAQ. The PR/FAQ may be revisited in future quarters or years if/when there is a solution.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">•</span>
                    <span>You would like to move forward with the idea, but because you already have a lengthy backlog of other ideas, you will need to prioritize it.</span>
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Common Mistakes Section */}
      <Section id="common-mistakes" className="relative bg-gradient-to-b from-charcoal-50/30 via-white to-charcoal-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Watch Outs & Common Mistakes
          </h2>
          
          <div className="space-y-6">
            {commonMistakes.map((mistake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-red-50/50 border-red-200/50 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">
                    {mistake.title}
                  </h3>
                  <p className="text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    {mistake.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Templates Section */}
      <Section id="faq-templates" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Standard Frequently Asked Questions (FAQs)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <h3 className="text-3xl font-bold text-charcoal-900 mb-6">
                  External FAQs
                </h3>
                <ul className="space-y-3">
                  {externalFAQs.map((faq, index) => (
                    <li key={index} className="flex items-start text-charcoal-700 leading-relaxed" style={{ lineHeight: '1.75' }}>
                      <span className="text-accent mr-2 mt-1 font-bold">Q:</span>
                      <span>{faq}</span>
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
                <h3 className="text-3xl font-bold text-charcoal-900 mb-6">
                  Internal FAQs
                </h3>
                <ul className="space-y-3 max-h-[600px] overflow-y-auto">
                  {internalFAQs.map((faq, index) => (
                    <li key={index} className="flex items-start text-charcoal-700 leading-relaxed text-sm" style={{ lineHeight: '1.75' }}>
                      <span className="text-accent mr-2 mt-1 font-bold">Q:</span>
                      <span>{faq}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
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
            ScaleOS incorporates PR/FAQ and other Amazon-style mechanisms to help you scale without chaos.
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

export default PRFAQInstructions;

