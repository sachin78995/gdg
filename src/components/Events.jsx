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

  const handleCardClick = (eventId) => {
    navigate(`/event-detail/${eventId}`);
  };

  const events = [
    {
      id: 1,
      title: 'Robotics and Embedded Systems Workshop',
      description: 'A hands-on workshop where participants will learn about robotics and embedded systems, and build their own robots.',
      image: '/events/event-1/img-2.jpg',
      page:'/'
    },
    {
      id: 2,
      title: 'PulseX - Leveraging the Power of AI',
      description: 'PulseX – Leveraging the Power of AI was an open-innovation hackathon organized by GDGoC – CIT, aimed at encouraging students to identify real-world and social problem statements and build impactful, feasible solutions using Google technologies. The event emphasized practical implementation, innovation, and real-world relevance over mere technical complexity.',
      image: '/events/event-2/event-2.jpg',
      page:'/'
    },
    {
      id: 3,
      title: 'Workshops',
      description: 'Hands-on learning sessions covering various programming languages and frameworks.',
      image: '/images/up.png',
      page:'/'
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
                className={`google-card ${isVisible ? 'animate' : ''} ${event.id === 3 ? 'no-click' : ''}`} 
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={event.id !== 3 ? () => handleCardClick(event.id) : undefined}
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