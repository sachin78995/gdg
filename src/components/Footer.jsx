import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/gdg-citech',
      icon: (
        <svg viewBox="0 0 24 24" className="social-icon">
          <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/gdgcit/posts/?feedView=all',
      icon: (
        <svg viewBox="0 0 24 24" className="social-icon">
          <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/gdg.cit',
      icon: (
        <svg viewBox="0 0 24 24" className="social-icon">
          <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://chat.whatsapp.com/ISzPWBcam0C4w8c4R7bbr6',
      icon: (
        <svg viewBox="0 0 24 24" className="social-icon">
          <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
    }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="/images/im3.png" 
                alt="GDG-CITech" 
                className="footer-logo-img"
                onError={(e) => {
                  e.target.src = "/images/logoNObg.svg";
                }}
              />
              <span className="footer-logo-text">GDG-CITech</span>
            </div>
            <p className="footer-description">
              Building a community of curious developers, thinkers, and learners passionate 
              about technology and innovation.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="footer-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Get Involved</h4>
              <ul className="footer-list">
                <li><a href="#about" className="footer-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }}>Join Community</a></li>
                <li><a href="#events" className="footer-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#events'); }}>Attend Events</a></li>
                <li><a href="#team" className="footer-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#team'); }}>Meet the Team</a></li>
                <li><a href="#contact" className="footer-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}>Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-list">
                <li><a href="https://developers.google.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Google Developers</a></li>
                <li><a href="https://gdg.community.dev/" target="_blank" rel="noopener noreferrer" className="footer-link">GDG Global</a></li>
                <li><a href="https://developers.google.com/community" target="_blank" rel="noopener noreferrer" className="footer-link">Community Guidelines</a></li>
                <li><a href="https://developers.google.com/learn" target="_blank" rel="noopener noreferrer" className="footer-link">Learning Resources</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Connect</h4>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">📧</span>
                  <a href="mailto:gdsc@cambridge.edu.in" className="footer-contact-link">
                    gdsc@cambridge.edu.in
                  </a>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">📍</span>
                  <span className="footer-contact-text">
                    Cambridge Institute of Technology
                  </span>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">🌐</span>
                  <span className="footer-contact-text">
                    Bangalore, Karnataka
                  </span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Follow Us</h4>
              <div className="social-links-grid">
                <a
                  href="https://chat.whatsapp.com/ISzPWBcam0C4w8c4R7bbr6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                  aria-label="Follow us on WhatsApp"
                >
                  <span className="social-label">WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/gdg.cit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                  aria-label="Follow us on Instagram"
                >
                  <span className="social-label">Instagram</span>
                </a>
                <a
                  href="https://github.com/gdg-citech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                  aria-label="Follow us on GitHub"
                >
                  <span className="social-label">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/gdgcit/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                  aria-label="Follow us on LinkedIn"
                >
                  <span className="social-label">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} GDG-CITech, Cambridge Institute of Technology. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <span className="footer-divider-dot">•</span>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <span className="footer-divider-dot">•</span>
              <a href="#" className="footer-bottom-link">Code of Conduct</a>
            </div>
          </div>
          
          <div className="footer-attribution">
            <p className="attribution-text">
              Made with <span className="heart">❤️</span> by GDG-CITech Team
            </p>
          </div>
        </div>
      </div>

      <div className="footer-background-pattern">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="pattern-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;