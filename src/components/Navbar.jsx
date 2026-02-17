import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'events', 'team', 'credits', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
        <button 
              className={`nav-logo-link`}
              onClick={() => scrollToSection('home')}
            >
          <img 
            src="/images/img5.jpg.png" 
            alt="GDG-CITech" 
            className="logo-img"
            onError={(e) => {
              e.target.src = "/images/logoNObg.svg";
            }}
          />
          </button>

          <span className="logo-text" aria-label="Google Developer Group - CITech Main">
            <span className="logo-google">
              <span className="logo-letter g-blue">G</span>
              <span className="logo-letter g-red">D</span>
              <span className="logo-letter g-yellow">G</span>
             
            </span>
            <span className="logo-subtext"> - CITech Main</span>
          </span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
          </div>
          <div className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About Us
            </button>
          </div>
          <div className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'events' ? 'active' : ''}`}
              onClick={() => scrollToSection('events')}
            >
              Events
            </button>
          </div>
          <div className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'team' ? 'active' : ''}`}
              onClick={() => scrollToSection('team')}
            >
              Team
            </button>
          </div>
          <div className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'credits' ? 'active' : ''}`}
              onClick={() => scrollToSection('credits')}
            >
              DevSpace
            </button>
          </div>
          <div className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </button>
          </div>
          
          {/* Theme Toggle Button */}
          <div className="nav-item theme-toggle-wrapper">
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? (
                <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {isMenuOpen && <div className="nav-backdrop" onClick={() => setIsMenuOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;