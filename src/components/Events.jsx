import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';
import logo from '/images/google-gemini-logo1.png';

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

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

  const handleMoreInfo = () => {
    navigate('/event-detail');
  };

  const events = [
    {
      id: 1,
      title: 'AI Workshop Series — AI Hands-On with Gemini',
      logo: logo
    },
    {
      id: 2,
      title: 'Upcoming Hackathon',
      logo: logo
    }
  ];

  return (
    <section id="events" className="events" ref={sectionRef}>
      <div className="events-wrapper">
        <h1 className="events-title">Upcoming Events</h1>
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={event.id} className="events-card-container">
              <div className={`google-card ${isVisible ? 'animate' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                {event.id === 1 && (
                  <>
                    <div className="logo-frame">
                      <img src={event.logo} alt="Event logo" className="logo-image" />
                    </div>

                    <h2 className="google-heading">{event.title}</h2>

                    <div className="accent-bar">
                      <span className="dot dot-blue" />
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>

                    <button className="info-button" onClick={handleMoreInfo}>Get more info</button>
                  </>
                )}
                {event.id === 2 && (
                  <>
                    <div className="logo-frame" style={{ visibility: 'hidden' }}>
                      <img src={event.logo} alt="Event logo" className="logo-image" />
                    </div>

                    <h2 className="google-heading" >{event.title}</h2>
                    <div className="accent-bar" >
                      <span className="dot dot-blue" />
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>

                    <button className="info-button" style={{ visibility: 'hidden' }}>Get more info</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;