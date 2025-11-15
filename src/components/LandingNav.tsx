import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const LandingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
    setPastHero(latest > window.innerHeight * 0.8);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-md border-b border-charcoal-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex items-center justify-between"
          animate={{
            height: scrolled ? 64 : 80,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={{
              scale: pastHero ? 0.9 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold text-charcoal-900 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Afresh
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('scaleos')}
              className="text-charcoal-700 hover:text-charcoal-900 font-medium transition-colors text-sm"
            >
              ScaleOS
            </button>
            <button
              onClick={() => scrollToSection('engagement')}
              className="text-charcoal-700 hover:text-charcoal-900 font-medium transition-colors text-sm"
            >
              Engagement
            </button>
            <button
              onClick={() => scrollToSection('why-this')}
              className="text-charcoal-700 hover:text-charcoal-900 font-medium transition-colors text-sm"
            >
              Why This
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-charcoal-700 hover:text-charcoal-900 font-medium transition-colors text-sm"
            >
              About
            </button>
            <Button
              onClick={() => window.open('https://calendly.com/douglas-stevenson', '_blank')}
              size="sm"
            >
              Book a Founder Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </motion.div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4 pb-4"
            >
            <button
              onClick={() => {
                scrollToSection('scaleos');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-charcoal-700 hover:text-charcoal-900 font-medium py-2"
            >
              ScaleOS
            </button>
            <button
              onClick={() => {
                scrollToSection('engagement');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-charcoal-700 hover:text-charcoal-900 font-medium py-2"
            >
              Engagement
            </button>
            <button
              onClick={() => {
                scrollToSection('why-this');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-charcoal-700 hover:text-charcoal-900 font-medium py-2"
            >
              Why This
            </button>
            <button
              onClick={() => {
                scrollToSection('about');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-charcoal-700 hover:text-charcoal-900 font-medium py-2"
            >
              About
            </button>
            <Button
              onClick={() => {
                window.open('https://calendly.com/douglas-stevenson', '_blank');
                setMobileMenuOpen(false);
              }}
              size="md"
              className="w-full"
            >
              Book a Founder Call
            </Button>
            </motion.div>
          )}
        </div>
    </motion.nav>
  );
};
