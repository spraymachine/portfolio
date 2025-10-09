import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-logo">Mani Dodla</div>
        <ul className="nav-links">
          <li><a href="#home" aria-label="Navigate to Home section">Home</a></li>
          <li><a href="#about" aria-label="Navigate to About Me section">About Me</a></li>
          <li><a href="#work" aria-label="Navigate to My Work section">My Work</a></li>
          <li><a href="#contact" aria-label="Navigate to Contact Me section">Contact Me</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

