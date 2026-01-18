import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';
import logo from '/images/google-gemini-logo1.png';

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);
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

  const handleCardClick = (eventId) => {
    setClickedCard(eventId);
    setTimeout(() => {
      setClickedCard(null);
    }, 500);
  };

  const handleMoreInfo = () => {
    navigate('/event-detail');
  };

  const events = [
    {
      id: 1,
      title: 'Event on Embedded Systems',
      description: 'Hands-On Cybersecurity: Defend, Detect, Deploy - A Practical Experience',
      image: '/images/event1.jpg'
    },
    {
      id: 2,
      title: 'Info session',
      description: 'GDG CIT pulled off a fantastic Info Session for the Google Solution Challenge 2025.....',
      image: '/images/event2.jpg'
    },
    {
      id: 3,
      title: 'Workshops',
      description: 'Hands-on workshops provide practical skills, expert guidance, and collaborative learning.',
      image: '/images/event3.jpg'
    }
  ];

  return (
    <section id="events" className="events" ref={sectionRef}>
      <div className="events-wrapper">
        <h1 className="events-title"> Events</h1>
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={event.id} className="events-card-container">
              <div 
                className={`google-card ${isVisible ? 'animate' : ''} ${clickedCard === event.id ? 'clicked' : ''}`} 
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => handleCardClick(event.id)}
              >
                <div className="event-image-wrapper">
                  <img src={event.image} alt={event.title} className="event-image" />
                </div>
                
                <div className="event-content">
                  <h2 className="google-heading">{event.title}</h2>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;