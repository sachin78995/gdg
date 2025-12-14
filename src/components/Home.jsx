import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 1. Import ScrollTrigger
import './Home.css';

// 2. Register both plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Home = () => {
  const containerRef = useRef();
  const logoRef = useRef();
  const buttonRef = useRef();

 useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)",
    }, (context) => {
      let { isMobile } = context.conditions;
      
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Ensure visibility
      gsap.set(".home-content", { visibility: "visible" });

      // 1. Entrance Animation
      tl.from(logoRef.current, {
        y: 100,
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      })
      .from(".welcome-word", {
        y: 30,
        opacity: 0,
        rotationX: -45,
        duration: 0.8,
        stagger: 0.1,
      }, "-=0.6")
      .from(".description", {
        duration: 2.5,
        text: "",
        ease: "none",
      }, "-=0.2")
      .from(".cta-buttons", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      });

      // 2. ONLY LEVITATION (Infinite Float)
      // No scroll triggers here. It just floats forever.
      gsap.to(logoRef.current, {
        y: "-=15", // Moves up 15px
        duration: 2,
        repeat: -1, // Infinite
        yoyo: true, // Up and down
        ease: "sine.inOut",
        delay: 1.5 // Waits for the entrance to finish before starting
      });

    });

  }, { scope: containerRef });

  useEffect(() => {
    initializeParticles();
  }, []);

  // Simple Hover Functions for Buttons
  const onHoverEnter = (e) => {
    gsap.to(e.currentTarget, { 
      scale: 1.1, 
      boxShadow: "0 10px 20px rgba(66, 133, 244, 0.4)",
      duration: 0.3 
    });
  };

  const onHoverLeave = (e) => {
    gsap.to(e.currentTarget, { 
      scale: 1, 
      boxShadow: "0 4px 10px rgba(66, 133, 244, 0.3)",
      duration: 0.3 
    });
  };

  return (
    <section id="home" className="home" ref={containerRef}>
      <div className="particle-background">
        <canvas id="particle-canvas"></canvas>
      </div>
      
      <div className="home-container">
        <div className="home-content">
          <div className="logo-container">
            <img 
              ref={logoRef}
              src="/images/img5.jpg.png" 
              alt="GDG Logo" 
              className="main-logo-simple"
              onError={(e) => { e.target.src = "/images/logoNObg.svg"; }}
            />
          </div>
          
          <h1 className="welcome-text">
            <span className="welcome-word">WELCOME</span>
            <span className="welcome-word">TO</span>
            <span className="welcome-word gdg-word" style={{display: 'inline-block', whiteSpace: 'nowrap'}}>
              <span className="gdg-letter g-blue">G</span>
              <span className="gdg-letter g-red">D</span>
              <span className="gdg-letter g-yellow">G</span>
            </span>
            <span className="welcome-word citech-text">CITECH</span>
          </h1>
          
          <p className="description">
            GDG-CITech is more than a club — it's a community of curious builders, thinkers, and learners who love technology. We host interactive workshops, code labs, and events that spark creativity.
          </p>
          
          <div className="cta-buttons">
            {/* UPDATED BUTTON: Arrow is now INSIDE with Flexbox */}
            <button 
              className="cta-button primary"
              onMouseEnter={onHoverEnter}
              onMouseLeave={onHoverLeave}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Community 
              <span className="btn-icon">↓</span>
            </button>

            <button 
              className="cta-button secondary"
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- (Keep your existing ParticleAnimation class here) ---
// I am omitting the Particle class to save space since it hasn't changed. 
// Make sure to include it! 
class ParticleAnimation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 150 };
    this.resizeCanvas = this.resizeCanvas.bind(this);
    window.addEventListener('resize', this.resizeCanvas);
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });
    this.init();
    this.animate();
  }
  init() {
    this.resizeCanvas();
    this.createParticles();
  }
  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.createParticles();
  }
  createParticles() {
    this.particles = [];
    const particleCount = window.innerWidth < 768 ? 45 : 100;
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * (window.innerWidth - size * 2) + size;
      const y = Math.random() * (window.innerHeight - size * 2) + size;
      const directionX = (Math.random() * 2) - 1;
      const directionY = (Math.random() * 2) - 1;
      const color = this.getRandomColor();
      this.particles.push(new Particle(x, y, directionX, directionY, size, color));
    }
  }
  getRandomColor() {
    const colors = ['#4285f4', '#ea4335', '#fbbc05', '#34a853'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  connect() {
    let opacityValue = 1;
    for (let a = 0; a < this.particles.length; a++) {
      for (let b = a; b < this.particles.length; b++) {
        let distance = ((this.particles[a].x - this.particles[b].x) * (this.particles[a].x - this.particles[b].x)) + 
                       ((this.particles[a].y - this.particles[b].y) * (this.particles[a].y - this.particles[b].y));
        if (distance < (this.canvas.width / 7) * (this.canvas.height / 7)) {
          opacityValue = 1 - (distance / 20000);
          this.ctx.strokeStyle = 'rgba(200, 200, 200,' + opacityValue + ')';
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
          this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
          this.ctx.stroke();
        }
      }
    }
  }
  animate = () => {
    requestAnimationFrame(this.animate);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update(this.canvas, this.mouse);
      this.particles[i].draw(this.ctx);
    }
    this.connect();
  }
}

class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update(canvas, mouse) {
    if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
    if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 3;
      if (mouse.x > this.x && this.x > this.size * 10) this.x -= 3;
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 3;
      if (mouse.y > this.y && this.y > this.size * 10) this.y -= 3;
    }
    this.x += this.directionX;
    this.y += this.directionY;
  }
}

export const initializeParticles = () => {
  const canvas = document.getElementById('particle-canvas');
  if (canvas) new ParticleAnimation(canvas);
};

export default Home;