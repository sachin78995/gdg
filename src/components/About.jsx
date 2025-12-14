import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef();
  
  // Define stats data
  const stats = [
    { label: "Active Members",/* value: 500, */ suffix: "+" },
    { label: "Events Hosted", /*value: 50,*/ suffix: "+" },
    { label: "Projects Built", /*value: 30,*/ suffix: "+" },
    { label: "Tech Domains", /*value: 10, */ suffix: "+" }
  ];

  const cards = [
    {
      id: 'learn',
      title: 'LEARN',
      description: 'Expand your knowledge through hands-on workshops',
      linkText: 'Explore Resources',
      color: '#EA4335', // Google Red
      icon: '🎓'
    },
    {
      id: 'connect',
      title: 'CONNECT',
      description: 'Network with skilled teammates and industry professionals',
      linkText: 'Join Community',
      color: '#4285F4', // Google Blue
      icon: '🤝'
    },
    {
      id: 'grow',
      title: 'GROW',
      description: 'Transform your ideas into reality by working on impactful projects',
      linkText: 'Start Growing',
      color: '#34A853', // Google Green
      icon: '💡'
    },
    {
      id: 'build',
      title: 'BUILD',
      description: 'Develop personally and professionally through collaboration',
      linkText: 'Get Started',
      color: '#FBBC05', // Google Yellow
      icon: '🛠️'
    }
  ];

  useGSAP(() => {
    // 1. Header & Stats Animation (Slide in from Left)
    gsap.from(".about-left-content", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // 2. Cards Animation (Slide up staggered)

    gsap.from(".tech-card", {
      scrollTrigger: {
        trigger: ".about-right-grid",
        start: "top 80%",
      },
      y: 60,
      autoAlpha: 0, // Use autoAlpha instead of opacity for better performance
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.2)",
      clearProps: "all" // Removes inline styles after animation finishes
    });

    // 3. Number Counting Animation
    stats.forEach((stat, index) => {
      const element = document.getElementById(`stat-num-${index}`);
      gsap.to(element, {
        innerText: stat.value,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        },
        ease: "power1.out",
        onUpdate: function() {
          element.innerText = Math.ceil(this.targets()[0].innerText) + stat.suffix;
        }
      });
    });

    // 4. Background Grid Parallax
    gsap.to(".circuit-pattern", {
      y: 100,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

  }, { scope: containerRef });

  return (
    <section id="about" className="about" ref={containerRef}>
      {/* Tech Background Pattern */}
      <div className="circuit-pattern"></div>
      
      <div className="about-container">
        
        {/* LEFT COLUMN: Sticky Header & Stats */}
        <div className="about-left-content">
          <div className="header-wrapper">
            <h2 className="about-title">Why   
              <span className="highlight gdg-word" aria-label="GDG">
                <span className="gdg-letter g-blue"> G</span>
                <span className="gdg-letter g-red">D</span>
                <span className="gdg-letter g-yellow">G</span>
              </span>
              CITech?
            </h2>
            <p className="about-subtitle">
              We are an ecosystem for developers. Discover the four pillars that drive our community's innovation.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-number" id={`stat-num-${index}`}>0{stat.suffix}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Feature Cards Grid */}
        <div className="about-right-grid">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="tech-card"
              style={{ '--accent-color': card.color }}
            >
              <div className="card-top">
                <div className="icon-box" style={{ background: card.color }}>
                  {card.icon}
                </div>
                <h3 className="card-title">{card.title}</h3>
              </div>
              <p className="card-description">{card.description}</p>
              
              <div className="card-footer">
                <a href="#" className="tech-link">
                  {card.linkText} <span>→</span>
                </a>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="hover-glow" style={{ background: card.color }}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;