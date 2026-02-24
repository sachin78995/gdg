import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Team.css';
import { teamMembers, volunteers } from '../data/team';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const volunteersScrollRef = useRef(null);
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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollVolunteersLeft = () => {
    if (volunteersScrollRef.current) {
      volunteersScrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollVolunteersRight = () => {
    if (volunteersScrollRef.current) {
      volunteersScrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // teamMembers + volunteers are loaded from src/data/team.js

  return (
    <section id="team" className="team" ref={sectionRef}>
      <div className="team-container">
        <div className={`team-header ${isVisible ? 'animate' : ''}`}>
          <h2 className="team-title">Meet the Core Team</h2>
          <p className="team-subtitle">
            The passionate individuals behind GDG-CITech who make everything possible
          </p>
        </div>

        <div className="horizontal-scroll-wrapper">
          <button className="scroll-btn scroll-btn-left" onClick={scrollLeft} aria-label="Scroll Left">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <div
            className={`team-horizontal-scroll ${isVisible ? 'animate' : ''} ${isPaused ? 'paused' : ''}`}
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="scroll-content">
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div
                  key={`${member.slug}-${index}`}
                  className="team-card profile-card"
                  role="link"
                  tabIndex={0}
                  onClick={() => navigate(`/team/${member.slug}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') navigate(`/team/${member.slug}`);
                  }}
                  style={{
                    '--delay': `${index * 0.1}s`,
                    '--role-color': member.roleColor,
                    '--gradient': member.gradient
                  }}
                >
                  <div className="profile-card-glow"></div>
                  <div className="profile-card-inner">
                    <div className="profile-card-header">
                      <div className="member-image-container profile-avatar">
                        <div className="image-placeholder" style={{ background: member.gradient }}>
                          <span className="member-initials">{member.name.split(' ').map((n) => n[0]).join('')}</span>
                        </div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="member-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>

                      <div className="profile-text">
                        <h3 className="profile-title">{member.name}</h3>
                        <p className="profile-subtitle">{member.role}</p>
                        <p className="profile-meta">{member.department}</p>
                      </div>
                    </div>

                    <div className="profile-card-body">
                      <p className="profile-tagline">GDSC CITech Core Member</p>
                    </div>

                    <div className="profile-card-footer">
                      <div className="profile-social-links" onClick={(e) => e.stopPropagation()}>
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-social-link"
                            aria-label={`${member.name} GitHub`}
                          >
                            <svg viewBox="0 0 24 24" className="profile-social-icon">
                              <path
                                fill="currentColor"
                                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                              />
                            </svg>
                          </a>
                        )}

                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-social-link"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <svg viewBox="0 0 24 24" className="profile-social-icon">
                              <path
                                fill="currentColor"
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                              />
                            </svg>
                          </a>
                        )}

                        {member.social.instagram && (
                          <a
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-social-link"
                            aria-label={`${member.name} Instagram`}
                          >
                            <svg viewBox="0 0 24 24" className="profile-social-icon">
                              <path
                                fill="currentColor"
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="scroll-btn scroll-btn-right" onClick={scrollRight} aria-label="Scroll Right">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        <div className={`team-header ${isVisible ? 'animate' : ''}`} style={{ marginTop: '80px' }}>
          <h2 className="team-title">Meet the Volunteers</h2>
          <p className="team-subtitle">
            Our dedicated volunteers who contribute their time and skills to make GDG-CITech events successful
          </p>
        </div>

        <div className="horizontal-scroll-wrapper">
          <button className="scroll-btn scroll-btn-left" onClick={scrollVolunteersLeft} aria-label="Scroll Left">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <div 
            className={`team-horizontal-scroll ${isVisible ? 'animate' : ''} ${isPaused ? 'paused' : ''}`}
            ref={volunteersScrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="scroll-content">
              {[...volunteers, ...volunteers].map((volunteer, index) => (
                <div
                  key={index}
                  className="team-card"
                  style={{ 
                    '--delay': `${(teamMembers.length + index) * 0.1}s`,
                    '--role-color': volunteer.roleColor,
                    '--gradient': volunteer.gradient
                  }}
                >
                  <div className="card-inner">
                {/* Front of card */}
                <div className="card-front">
                  <div className="member-image-container">
                    <div className="image-placeholder" style={{ background: volunteer.gradient }}>
                      <span className="member-initials">
                        {volunteer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <img 
                      src={volunteer.image} 
                      alt={volunteer.name}
                      className="member-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="member-info">
                    <h3 className="member-name">{volunteer.name}</h3>
                    <div 
                      className="member-role"
                      style={{ background: volunteer.gradient }}
                    >
                      {volunteer.role}
                    </div>
                    <p className="member-department">{volunteer.department}</p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="card-back" style={{ background: volunteer.gradient }}>
                  <div className="card-back-content">
                    <h3 className="back-name">{volunteer.name}</h3>
                    <p className="back-role">{volunteer.role}</p>
                    <p className="back-department">{volunteer.department}</p>
                    
                    <div className="social-links">
                      {volunteer.social.github && (
                        <a 
                          href={volunteer.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label={`${volunteer.name} GitHub`}
                        >
                          <svg viewBox="0 0 24 24" className="social-icon">
                            <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          <span className="social-link-text">GitHub</span>
                        </a>
                      )}
                      
                      {volunteer.social.linkedin && (
                        <a 
                          href={volunteer.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label={`${volunteer.name} LinkedIn`}
                        >
                          <svg viewBox="0 0 24 24" className="social-icon">
                            <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          <span className="social-link-text">LinkedIn</span>
                        </a>
                      )}

                      {volunteer.social.instagram && (
                        <a 
                          href={volunteer.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label={`${volunteer.name} Instagram`}
                        >
                          <svg viewBox="0 0 24 24" className="social-icon">
                            <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <span className="social-link-text">Instagram</span>
                        </a>
                      )}
                    </div>
                    
                    <div className="connect-text">
                      Let's connect and build something amazing together!
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-glow"></div>
            </div>
          ))}
            </div>
          </div>

          <button className="scroll-btn scroll-btn-right" onClick={scrollVolunteersRight} aria-label="Scroll Right">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>
    </section>
  );
};

export default Team;