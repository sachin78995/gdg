import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef();
  const [activeInfo, setActiveInfo] = useState(null);

  const pillars = [
    {
      id: 'learn',
      title: 'LEARN',
      color: '#EA4335'
    },
    {
      id: 'connect',
      title: 'CONNECT',
      color: '#4285F4'
    },
    {
      id: 'grow',
      title: 'GROW',
      color: '#34A853'
    },
    {
      id: 'build',
      title: 'BUILD',
      color: '#FBBC05'
    }
  ];

  useGSAP(() => {
    // 1. Header Animation
    gsap.from(".about-header-new", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // 2. Pillar Cards Animation
    gsap.from(".pillar-card", {
      scrollTrigger: {
        trigger: ".pillars-grid",
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
      y: 30,
      opacity: 0,
      scale: 0.98,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      immediateRender: false
    });

    // 3. Particle Animation
    gsap.to(".particle", {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      opacity: "random(0.3, 0.8)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.1,
        from: "random"
      }
    });

    // 4. Background Parallax
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
      <div className="circuit-pattern"></div>
      
      <div className="about-container-new">

        {/* Four Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id}
              className="pillar-card"
              style={{ 
                borderColor: pillar.color,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Particles */}
              <div className="particles">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="particle" 
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      backgroundColor: pillar.color,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
              </div>

              <div className="pillar-corner" style={{ background: pillar.color }}></div>
              <div className="pillar-corner bottom" style={{ background: pillar.color }}></div>
              
              <h3 className="pillar-title" style={{ color: pillar.color }}>
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
