import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'events', 'team', 'contact'];
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
          <img 
            src="/images/img5.jpg.png" 
            alt="GDG-CITech" 
            className="logo-img"
            onError={(e) => {
              e.target.src = "/images/logoNObg.svg";
            }}
          />

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
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
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