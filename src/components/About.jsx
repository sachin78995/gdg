import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 'learn',
      title: 'LEARN',
      description: 'Expand your knowledge through hands-on workshops',
      linkText: 'Explore Resources',
      color: '#f55648ee',
      icon: '🎓',
      gradient: 'linear-gradient(135deg, #f14f40ff, #f74231ee)'
    },
    {
      id: 'connect',
      title: 'CONNECT',
      description: 'Network with skilled teammates and industry professionals',
      linkText: 'Join Community',
      color: '#0992e8e6',
      icon: '🤝',
      gradient: 'linear-gradient(135deg, #4285f4, #42a5f5)',
      whatsapp: 'https://chat.whatsapp.com/your-group-link'
    },
    {
      id: 'grow',
      title: 'GROW',
      description: 'Transform your ideas into reality by working on impactful projects',
      linkText: 'Start Growing',
      color: '#23f75ce8',
      icon: '💡',
      gradient: 'linear-gradient(135deg, #34a853, #66bb6a)'
    },
    {
      id: 'build',
      title: 'BUILD',
      description: 'Develop personally and professionally through collaboration',
      linkText: 'Get Started',
      color: '#efeb26e2',
      icon: '🛠️',
      gradient: 'linear-gradient(135deg, #fbbc05, #ffca28)'
    }
  ];

  const handleCardClick = (card) => {
    if (card.whatsapp) {
      window.open(card.whatsapp, '_blank');
    } else {
      // Handle other card actions
      console.log(`Clicked on ${card.title} card`);
    }
  };

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className={`about-header ${isVisible ? 'animate' : ''}`}>
          <h2 className="about-title">Why join GDG-CITech?</h2>
          <p className="about-subtitle">
            Discover the four pillars that make our community unique
          </p>
        </div>

        <div className={`about-grid ${isVisible ? 'animate' : ''}`}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`about-card ${card.id}-card`}
              style={{ '--delay': `${index * 0.2}s`, '--color': card.color }}
              onClick={() => handleCardClick(card)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-icon" style={{ background: card.gradient }}>
                    <span className="icon">{card.icon}</span>
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
                
                <div className="card-back" style={{ background: card.gradient }}>
                  <div className="card-back-content">
                    <h3 className="card-back-title">{card.title}</h3>
                    <p className="card-back-description">{card.description}</p>
                    <button className="card-link">
                      {card.linkText}
                      <span className="arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="card-glow" style={{ background: card.gradient }}></div>
            </div>
          ))}
        </div>

        <div className={`about-bottom ${isVisible ? 'animate' : ''}`}>
          <div className="stats-container">
            <div className="stat">
              <div className="stat-number">+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat">
              <div className="stat-number">+</div>
              <div className="stat-label">Events Hosted</div>
            </div>
            <div className="stat">
              <div className="stat-number">+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat">
              <div className="stat-number">+</div>
              <div className="stat-label">Tech Domains</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </section>
  );
};

export default About;