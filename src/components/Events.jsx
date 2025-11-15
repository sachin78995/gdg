import React, { useState, useEffect, useRef } from 'react';
import './Events.css';

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showNotifyModal, setShowNotifyModal] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [isNotified, setIsNotified] = useState(false);
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

  const handleNotifyMe = () => {
    setShowNotifyModal(true);
  };

  const handleSubmitNotify = (e) => {
    e.preventDefault();
    if (notifyEmail) {
      // Here you would typically send the email to your backend
      console.log('Notify email:', notifyEmail);
      setIsNotified(true);
      setTimeout(() => {
        setShowNotifyModal(false);
        setNotifyEmail('');
        setIsNotified(false);
      }, 2000);
    }
  };

  const upcomingEvents = [
    {
      title: 'Web Development Workshop',
      date: 'Coming Soon',
      description: 'Learn modern web development with React and Node.js',
      status: 'planning',
      icon: '💻'
    },
    {
      title: 'AI/ML Bootcamp',
      date: 'Coming Soon',
      description: 'Introduction to Machine Learning and Artificial Intelligence',
      status: 'planning',
      icon: '🤖'
    },
    {
      title: 'Mobile App Development',
      date: 'Coming Soon',
      description: 'Build cross-platform mobile apps with React Native',
      status: 'planning',
      icon: '📱'
    },
    {
      title: 'Cloud Computing Workshop',
      date: 'Coming Soon',
      description: 'Learn about cloud services and deployment strategies',
      status: 'planning',
      icon: '☁️'
    }
  ];

  return (
    <section id="events" className="events" ref={sectionRef}>
      <div className="events-container">
        <div className={`events-header ${isVisible ? 'animate' : ''}`}>
          <h2 className="events-title">Events</h2>
          <p className="events-subtitle">Exciting learning opportunities coming your way</p>
        </div>

        <div className={`main-announcement ${isVisible ? 'animate' : ''}`}>
          <div className="announcement-card">
            <div className="announcement-icon">
              <div className="checkmark">
                <svg viewBox="0 0 24 24" className="check-svg">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
              </div>
            </div>
            
            <div className="announcement-content">
              <h3 className="announcement-title">Events — Coming Soon</h3>
              <p className="announcement-description">
                We're working hard to bring you amazing workshops, hackathons, and tech talks. 
                Be the first to know when we launch our exciting event series!
              </p>
              
              <button className="notify-button" onClick={handleNotifyMe}>
                <span>Notify Me</span>
                <div className="button-glow"></div>
              </button>
            </div>
          </div>
        </div>

        <div className={`upcoming-grid ${isVisible ? 'animate' : ''}`}>
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="event-preview-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="event-icon">{event.icon}</div>
              <h4 className="event-title">{event.title}</h4>
              <p className="event-description">{event.description}</p>
              <div className="event-status">
                <span className="status-badge">{event.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`treasure-hunt-section ${isVisible ? 'animate' : ''}`}>
          <div className="treasure-card">
            <div className="treasure-content">
              <h3>🏆 Treasure Hunt Event</h3>
              <p>Get ready for an exciting treasure hunt challenge!</p>
              <img 
                src="/images/not_found.jpg" 
                alt="Treasure Hunt" 
                className="treasure-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notification Modal */}
      {showNotifyModal && (
        <div className="modal-overlay" onClick={() => setShowNotifyModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Stay Updated</h3>
              <button 
                className="modal-close"
                onClick={() => setShowNotifyModal(false)}
              >
                ×
              </button>
            </div>
            
            {!isNotified ? (
              <form onSubmit={handleSubmitNotify} className="notify-form">
                <p>Enter your email to get notified about upcoming events</p>
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="email-input"
                />
                <button type="submit" className="submit-button">
                  Subscribe to Updates
                </button>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h4>You're all set!</h4>
                <p>We'll notify you about upcoming events.</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="floating-elements">
        <div className="floating-element element-1">💡</div>
        <div className="floating-element element-2">🚀</div>
        <div className="floating-element element-3">⭐</div>
        <div className="floating-element element-4">💻</div>
      </div>
    </section>
  );
};

export default Events;