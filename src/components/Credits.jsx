import React, { useEffect, useRef, useState } from 'react';
import './Credits.css';

const Credits = () => {
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

  const developers = [
    {
      name: 'Sachin Sankole',
      role: 'Web Development Lead',
      image: '/core-team/sachin.jpg',
      github: 'https://github.com/sachin78995',
      linkedin: 'https://www.linkedin.com/in/sachin-sankole-3975832ab/'
    },
    {
      name: 'Harish E',
      role: 'Web Development Member',
      image: '/Volunteers/Harish E.jpg',
      github: 'https://github.com/Harish3005-cloud',
      linkedin: 'https://www.linkedin.com/in/harish-e-naidu/'
    }
  ];

  return (
    <section id="credits" className="credits" ref={sectionRef}>
      <div className="credits-container">
        <div className={`credits-header ${isVisible ? 'animate' : ''}`}>
          <h2 className="credits-title">Website Development Team</h2>
          <p className="credits-subtitle">
          The team responsible for the design and development of this website
          </p>
        </div>

        <div className={`credits-grid ${isVisible ? 'animate' : ''}`}>
          {developers.map((developer, index) => (
            <div
              key={developer.name}
              className="credits-card"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="credits-card-inner">
                <div className="credits-image-wrapper">
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="credits-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="credits-info">
                  <h3 className="credits-name">{developer.name}</h3>
                  <p className="credits-role">{developer.role}</p>
                  <div className="credits-social">
                    {developer.github && (
                      <a
                        href={developer.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="credits-social-link"
                        aria-label={`${developer.name} GitHub`}
                      >
                        <svg viewBox="0 0 24 24" className="credits-social-icon">
                          <path
                            fill="currentColor"
                            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                          />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                    {developer.linkedin && (
                      <a
                        href={developer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="credits-social-link"
                        aria-label={`${developer.name} LinkedIn`}
                      >
                        <svg viewBox="0 0 24 24" className="credits-social-icon">
                          <path
                            fill="currentColor"
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                          />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credits;
