import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="home">
      <div className="particle-background">
        <canvas id="particle-canvas"></canvas>
      </div>
      
      <div className="home-container">
        <div className={`home-content ${isLoaded ? 'loaded' : ''}`}>
          <div className="logo-container">
            <img 
              src="/images/img5.jpg.png" 
              alt="GDG Logo" 
              className="main-logo-simple"
              onError={(e) => {
                e.target.src = "/images/logoNObg.svg";
              }}
            />
          </div>
          
          <h1 className="welcome-text">
            <span className="welcome-word">WELCOME</span>
            <span className="welcome-word">TO</span>
            <span className="welcome-word gdg-text">GDG</span>
            <span className="welcome-word citech-text">CITECH</span>
          </h1>
          
          <p className="description">
            GDG-CITech is more than a club — it's a community of curious builders, thinkers, and learners who love technology. We host interactive workshops, code labs, and events that spark creativity and collaboration. Together, we're shaping a space where every student can learn, lead, and launch something meaningful.
          </p>
          
          <div className="cta-buttons">
            <button 
              className="cta-button primary"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Community
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </button>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

// Particle animation effect
class ParticleAnimation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.init();
    this.animate();
  }

  init() {
    this.resizeCanvas();
    this.createParticles();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    const numberOfParticles = Math.min(100, Math.floor(window.innerWidth / 20));
    
    for (let i = 0; i < numberOfParticles; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: this.getRandomColor()
      });
    }
  }

  getRandomColor() {
    const colors = ['#4285f4', '#ee3929ff', '#fcbf08fd', '#12e84bff'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      if (particle.x < 0 || particle.x > this.canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height) particle.speedY *= -1;
      
      this.ctx.save();
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.fillStyle = particle.color;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });
    
    requestAnimationFrame(this.animate);
  }
}

// Initialize particles when component mounts
export const initializeParticles = () => {
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    new ParticleAnimation(canvas);
  }
};

export default Home;