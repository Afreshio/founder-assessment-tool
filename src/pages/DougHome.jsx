import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import headshotImg from '../assets/doug-headshot.jpeg'
import afreshLogo from '../assets/Afresh.png'
import './DougHome.css'

function DougHome() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroImageRef = useRef(null)
  const sectionRefs = useRef([])

  useEffect(() => {
    // Parallax effect for hero image (desktop only)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all refs after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref)
      })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  return (
    <div className="doug-home">
      <div className="hero-section">
        <div className="hero-branding">
          <img src={afreshLogo} alt="Afresh logo" className="hero-logo" />
          <span className="hero-brand-text">Afresh.io</span>
        </div>
        <div className="hero-content">
          <div className="hero-profile">
            <div className="hero-image-wrapper" ref={heroImageRef}>
              <img 
                src={headshotImg} 
                alt="Doug Stevenson" 
                className="hero-headshot"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }}
              />
            </div>
            <div className="hero-text">
              <h1 className="hero-name">Doug Stevenson</h1>
              <p className="hero-title">Founder & Exec Coach</p>
              <p className="hero-subtitle">Helping founders and executives build cohesive, high-accountability teams.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="credentials-section scroll-animate" ref={addToRefs}>
          <h2 className="section-title">Credentials</h2>
          <ul className="credentials-list">
            <li>Ernst & Young Entrepreneur of the Year</li>
            <li>Inc. 100 and 500 Honoree</li>
            <li>Matt Mochary Method CEO Coach Training</li>
            <li>Patrick Lencioni - Table Group - Certified Facilitator Working Genius</li>
            <li>Stanford Behavior Design - Healdsburg Course and Tiny Habits Certification with BJ Fogg</li>
            <li>Certified Laser Focused Coaching Masterclass ICF and SHRM approved</li>
            <li>Guest Faculty Speaker at Eric Partaker's CEO Accelerator (last three cohorts)</li>
          </ul>
        </div>

        <div className="mission-section scroll-animate" ref={addToRefs}>
          <h2 className="section-title">My Mission</h2>
          <p className="mission-text">
            I help founders and executives build cohesive teams. Building trust, mastering conflict, 
            achieving commitment, embracing accountability and focusing on results!
          </p>
          <p className="mission-text">
            Sharing my experience as a founder, scaling our company Vibrant from zero to 
            more than $120M with 20% EBITDA margins across the US, UK, France and Germany.
          </p>
          <blockquote className="quote">
            "The team you build, is the company you build" - Vinod Khosla - Khosla Ventures
          </blockquote>
        </div>

        <div className="experience-section scroll-animate" ref={addToRefs}>
          <h2 className="section-title">Experience</h2>
          <p className="experience-text">
            With over 25 years of experience in building Adtech as the CEO and Co-founder of 
            Vibrant Media and Quintesse, two companies at the forefront of the digital marketing 
            and online advertising industry.
          </p>
          <p className="experience-text">
            My mission now is to help Founders and CEOs scale their companies and build cohesive teams.
          </p>
        </div>

        <div className="personal-section scroll-animate" ref={addToRefs}>
          <h2 className="section-title">Personal</h2>
          <p className="personal-text">
            My wife and I are based in San Francisco and enjoy weekend trips to Marin. 
            Our two sons are studying film and design in NY.
          </p>
        </div>

        <div className="education-section scroll-animate" ref={addToRefs}>
          <h2 className="section-title">Education</h2>
          <p className="education-text">
            B.Sc. in Electrical & Electronic Engineering from the University of Edinburgh
          </p>
        </div>

        <div className="services-section scroll-animate" ref={addToRefs}>
          <h2 className="section-title">How to Work with Doug</h2>
          <div className="services-grid">
            <div className="service-card scroll-animate" ref={addToRefs}>
              <h3 className="service-title">1-1 Founder & CEO Coaching</h3>
              <p className="service-desc">
                Using frameworks from Matt Mochary and Pat Lencioni; CEO accelerator
              </p>
            </div>
            <div className="service-card scroll-animate" ref={addToRefs}>
              <h3 className="service-title">'Founder Fit' Clinic</h3>
              <p className="service-desc">
                Founder productivity, real time feedback and embracing healthy conflict
              </p>
            </div>
            <div className="service-card scroll-animate" ref={addToRefs}>
              <h3 className="service-title">Exec Team Events & Offsites</h3>
              <p className="service-desc">
                Five behaviors of a Cohesive team and Productivity Team Mapping
              </p>
            </div>
          </div>
        </div>

        <div className="cta-section scroll-animate" ref={addToRefs}>
          <a 
            href="https://calendly.com/douglas-stevenson" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            Book a 30 Minute Complimentary Coaching Session
          </a>
          <Link to="/quiz" className="cta-button-secondary">
            Take the Founder Fit Quiz
          </Link>
        </div>

        <div className="testimonials-section scroll-animate" ref={addToRefs}>
          <div className="testimonial-card scroll-animate" ref={addToRefs}>
            <p className="testimonial-quote">
              "Doug has been an immense help for us, not only giving guidance in master level strategy and sales, but also with growth as a professional and business owner. Within the short time we have worked with Doug, I can actively look and see all the improvements he was able to help us with. I would highly recommend him to anyone."
            </p>
            <p className="testimonial-author">- Will Jones</p>
          </div>
          <div className="testimonial-card scroll-animate" ref={addToRefs}>
            <p className="testimonial-quote">
              "I've been fortunate to have Douglas as a mentor since 2019, supporting me in my role as a CEO and C-suite executive. His insight, guidance, and interpersonal support have been invaluable in helping me navigate challenges and grow as a leader. I'm deeply grateful for his perspective and encouragement, and I look forward to continuing our work together, both individually and in a team setting."
            </p>
            <p className="testimonial-author">- Richard Henry</p>
          </div>
          <div className="testimonial-card scroll-animate" ref={addToRefs}>
            <p className="testimonial-quote">
              "Our executive team was interested in some team building exercises so that we could get to know each other on a deeper level. Doug did an amazing job helping us achieve this goal. We utilized Patrick Lencioni's Five Behaviors of a Cohesive Team and Working Genius. Our team enjoyed it immensely and Doug helped us navigate the experience. In the end we are building toward an anti-fragile team."
            </p>
            <p className="testimonial-author">- Bob Powell</p>
          </div>
          <div className="testimonial-card scroll-animate" ref={addToRefs}>
            <p className="testimonial-quote">
              "Douglas has been a fantastic coach and mentor over the past few years. His entrepreneurial spirit and leadership skills, combined with his compassion, patience, and willingness to explore challenges, have reshaped my view of the world. His perspective has helped me well beyond my professional landscape. He is a great listener, considers all angles, and provides insightful perspectives."
            </p>
            <p className="testimonial-author">- Renaud De Vreker</p>
          </div>
          <div className="testimonial-card scroll-animate" ref={addToRefs}>
            <p className="testimonial-quote">
              "Doug Stevenson is an excellent coach. His thorough business intelligence, broad vision, and quick analysis on any topic make him an expert. With his strength in seeing the big picture, he helps you articulate your business model and goals. His leadership experience combined with mindfulness makes his approach unique."
            </p>
            <p className="testimonial-author">- Anne-Marie Stoehr</p>
          </div>
          <div className="testimonial-card scroll-animate" ref={addToRefs}>
            <p className="testimonial-quote">
              "I hold the position of Senior Director of Engineering at Rippling, and I recently collaborated with Douglas for executive coaching to develop one of my promising talents. After eight sessions, the transformation is evident in their patience, wisdom, and intentionality toward strategic thinking, planning, and cross-functional communication. I can directly attribute tangible business-level impact to Douglas's coaching."
            </p>
            <p className="testimonial-author">- Daniel Buscaglia</p>
          </div>
          <div className="testimonial-card scroll-animate" ref={addToRefs}>
            <p className="testimonial-quote">
              "We want to double down on real-time feedback and encouraging productive conflict."
              <span className="testimonial-rating"> 9/10 rating</span>
            </p>
            <p className="testimonial-author">- Sami Inkinen, CEO & Founder, Virta Health (Pre-IPO), Co-founder Trulia</p>
          </div>
          <div className="testimonial-card scroll-animate" ref={addToRefs}>
            <p className="testimonial-quote">
              "I am very thankful for the amazing team of Vibrant people I have been able to work with on the entrepreneurial journey!"
            </p>
            <p className="testimonial-author">- Doug Stevenson</p>
          </div>
        </div>

        <div className="contact-section">
          <p className="contact-text">
            <a href="https://www.linkedin.com/in/douglasstevenson/" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn Bio
            </a>
            {' | '}
            <a href="mailto:doug@afresh.io" className="contact-link">
              Email: doug@afresh.io
            </a>
          </p>
          <div className="linkedin-logo-section">
            <a 
              href="https://www.linkedin.com/in/douglasstevenson/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin-logo-link"
              aria-label="Connect on LinkedIn"
            >
              <svg 
                className="linkedin-logo"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DougHome

