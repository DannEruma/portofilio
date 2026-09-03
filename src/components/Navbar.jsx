import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Shield, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-lg shadow-black/30 py-3.5' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name - matching reference "Michiel" orange first letter vibe */}
          <a
            href="#home"
            className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-1"
            aria-label="Dhani Portfolio Home"
          >
            <div className="relative font-display font-extrabold text-2xl tracking-tight text-white flex items-center">
              <span className="text-[#ff7a59] transition-transform duration-300 group-hover:scale-110 inline-block font-black">
                D
              </span>
              <span>hani</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a59] ml-1 animate-pulse" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#ff7a59] bg-white/5 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#ff7a59] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white coral-gradient hover:opacity-95 shadow-md shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 border border-white/10"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#ff7a59]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden glass-nav border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-orange-500/15 text-[#ff7a59] font-bold border border-orange-500/30'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center block py-3 rounded-xl font-semibold text-sm text-white coral-gradient shadow-lg shadow-orange-500/25"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
