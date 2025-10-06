import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className={`hero ${isVisible ? 'fade-in' : ''}`}>
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Mani</span>
        </h1>
        <h2 className="hero-subtitle">
          Crafting Digital Experiences with Passion
        </h2>
        <p className="hero-description">
          A web developer & designer creating beautiful, functional websites that bring ideas to life.
        </p>
        <a href="#contact" className="cta-button">
          Let's Work Together
        </a>
        
        {/* Decorative SVG elements */}
        <div className="hero-decoration">
          <svg className="circle-1" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent)" strokeWidth="2" opacity="0.3" />
          </svg>
          <svg className="circle-2" width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="30" fill="none" stroke="var(--text-dark)" strokeWidth="2" opacity="0.2" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;

