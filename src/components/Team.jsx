import React, { useState, useEffect, useRef } from 'react';
import './Team.css';

const Team = () => {
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

  const teamMembers = [
    {
      name: "Shreya Upadhyay",
      role: "CO-LEAD",
      department: "CSE-DS",
      image: "/images/img1.pn", // You'll replace with actual images
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      roleColor: "#ea4335",
      gradient: "linear-gradient(135deg, #ea4335, #f14c4cff)"
    },
    {
      name: "K.Lakshmi Navyatha",
      role: "Curation Lead",
      department: "ISE",
      image: "/images/team/navyatha.jpg",
      social: {
        github: "https://github.com/navyatha",
        linkedin: "https://linkedin.com/in/navyatha"
      },
      roleColor: "#4285f4",
      gradient: "linear-gradient(135deg, #4285f4, #42a5f5)"
    },
    {
      name: "Sachin Sankole",
      role: "Web-Dev Lead",
      department: "ISE",
      image: "/images/team/himashree.jpg",
      social: {
        github: "https://github.com/himashree",
        linkedin: "https://linkedin.com/in/himashree"
      },
      roleColor: "#4285f4",
      gradient: "linear-gradient(135deg, #4285f4, #64b5f6)"
    },
    {
      name: "R VIKRANT",
      role: "Cyber Security Lead",
      department: "CSE-IOT",
      image: "/images/team/vikrant.jpg",
      social: {
        github: "https://github.com/rvikrant",
        linkedin: "https://linkedin.com/in/rvikrant"
      },
      roleColor: "#ea4335",
      gradient: "linear-gradient(135deg, #ea4335, #ef5350)"
    },
    {
      name: "Himashree Kolisetty",
      role: "Curation Co-Lead",
      department: "CSE",
      image: "/images/team/sachin.jpg",
      social: {
        github: "https://github.com/sachinsankole",
        linkedin: "https://linkedin.com/in/sachinsankole"
      },
      roleColor: "#34a853",
      gradient: "linear-gradient(135deg, #34a853, #66bb6a)"
    },
    {
      name: "Pramugdha Gupta",
      role: "Design",
      department: "CSE",
      image: "/images/team/pramugdha.jpg",
      social: {
        github: "https://github.com/pramugdha",
        linkedin: "https://linkedin.com/in/pramugdha"
      },
      roleColor: "#378ae8ff",
      gradient: "linear-gradient(135deg, #378ae8ff, #378ae8ff)"
    },
    {
      name: "Sankarshan V Sastry",
      role: "Embedded Systems Lead",
      department: "ECE",
      image: "/images/team/sankarshan.jpg",
      social: {
        github: "https://github.com/sankarshan",
        linkedin: "https://linkedin.com/in/sankarshan"
      },
      roleColor: "#378ae8ff",
      gradient: "linear-gradient(135deg, #378ae8ff, #378ae8ff)"
    },
    {
      name: "Kushal Gowder",
      role: "Marketing Lead",
      department: "ISE",
      image: "/images/team/kushal.jpg",
      social: {
        github: "https://github.com/kushalgowder",
        linkedin: "https://linkedin.com/in/kushalgowder"
      },
      roleColor: "#ec4343ff",
      gradient: "linear-gradient(135deg, #ec4343ff, #f3414aff)"
    },
    {
      name: "Deeksha Subedi",
      role: "Marketing Co-Lead",
      department: "ISE",
      image: "/images/team/deeksha.jpg",
      social: {
        github: "https://github.com/deeksha",
        linkedin: "https://linkedin.com/in/deeksha"
      },
      roleColor: "#e91e63",
      gradient: "linear-gradient(135deg, #e91e63, #ec407a)"
    },
    {
      name: "Gouri Vast",
      role: "Social Media Lead",
      department: "ECE",
      image: "/images/team/gouri.jpg",
      social: {
        github: "https://github.com/gourivast",
        linkedin: "https://linkedin.com/in/gourivast"
      },
      roleColor: "#378ae8ff",
      gradient: "linear-gradient(135deg, #378ae8ff, #378ae8ff)"
    }
  ];

  return (
    <section id="team" className="team" ref={sectionRef}>
      <div className="team-container">
        <div className={`team-header ${isVisible ? 'animate' : ''}`}>
          <h2 className="team-title">Meet Our Team</h2>
          <p className="team-subtitle">
            The passionate individuals behind GDG-CITech who make everything possible
          </p>
        </div>

        <div className={`team-grid ${isVisible ? 'animate' : ''}`}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card"
              style={{ 
                '--delay': `${index * 0.1}s`,
                '--role-color': member.roleColor,
                '--gradient': member.gradient
              }}
            >
              <div className="card-inner">
                {/* Front of card */}
                <div className="card-front">
                  <div className="member-image-container">
                    <div className="image-placeholder" style={{ background: member.gradient }}>
                      <span className="member-initials">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    {/* Replace with actual image when available */}
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="member-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <div 
                      className="member-role"
                      style={{ background: member.gradient }}
                    >
                      {member.role}
                    </div>
                    <p className="member-department">{member.department}</p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="card-back" style={{ background: member.gradient }}>
                  <div className="card-back-content">
                    <h3 className="back-name">{member.name}</h3>
                    <p className="back-role">{member.role}</p>
                    <p className="back-department">{member.department}</p>
                    
                    <div className="social-links">
                      <a 
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={`${member.name} GitHub`}
                      >
                        <svg viewBox="0 0 24 24" className="social-icon">
                          <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                      
                      <a 
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg viewBox="0 0 24 24" className="social-icon">
                          <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
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

        <div className={`team-stats ${isVisible ? 'animate' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">11</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Departments</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8+</div>
            <div className="stat-label">Specializations</div>
          </div>
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