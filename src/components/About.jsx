import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef();

  // Define stats data here for easy counting animation
  const stats = [
    { label: "Active Members", value: 500, suffix: "+" },
    { label: "Events Hosted", value: 50, suffix: "+" },
    { label: "Projects Built", value: 30, suffix: "+" },
    { label: "Tech Domains", value: 10, suffix: "+" }
  ];

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

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Animation starts when top of section hits 80% of viewport
        toggleActions: "play none none reverse",
      }
    });

    // 1. Title & Subtitle Fade In
    tl.from([".about-title", ".about-subtitle"], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })

    // 2. Cards Pop In (Staggered)
    .from(".about-card", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15, // Delay between each card
      ease: "back.out(1.7)" // Nice bouncy effect
    }, "-=0.4")

    // 3. Stats Container Appearance
    .from(".stats-container", {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.2");

    // 4. NUMBER COUNTING ANIMATION
    // This runs independently when the stats section is visible
    stats.forEach((stat, index) => {
      // Find the specific number element
      const element = document.getElementById(`stat-num-${index}`);
      
      gsap.to(element, {
        innerText: stat.value, // Animate to this value
        duration: 2,
        snap: { innerText: 1 }, // Snap to whole numbers (no decimals)
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 85%",
        },
        ease: "power1.out",
        onUpdate: function() {
          // Keep the suffix (+) during animation if needed, 
          // or just append it via CSS/Layout
          element.innerText = Math.ceil(this.targets()[0].innerText) + stat.suffix;
        }
      });
    });

    // 5. FLOATING SHAPES (Organic Movement)
    gsap.to(".shape", {
      y: "random(-40, 40)",
      x: "random(-20, 20)",
      rotation: "random(-180, 180)",
      duration: "random(10, 20)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 5,
        from: "random"
      }
    });

  }, { scope: containerRef });

  const handleCardClick = (card) => {
    if (card.whatsapp) window.open(card.whatsapp, '_blank');
  };

  return (
    <section id="about" className="about" ref={containerRef}>
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Why join GDG-CITech?</h2>
          <p className="about-subtitle">
            Discover the four pillars that make our community unique
          </p>
        </div>

        <div className="about-grid">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`about-card ${card.id}-card`}
              style={{ '--color': card.color }}
              onClick={() => handleCardClick(card)}
            >
              <div className="card-inner">
                {/* FRONT */}
                <div className="card-front">
                  <div className="card-icon" style={{ background: card.gradient }}>
                    <span className="icon">{card.icon}</span>
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
                
                {/* BACK */}
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

        <div className="about-bottom">
          <div className="stats-container">
            {stats.map((stat, index) => (
              <div className="stat" key={index}>
                {/* The span id allows GSAP to target just the number */}
                <div className="stat-number" id={`stat-num-${index}`}>0{stat.suffix}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
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