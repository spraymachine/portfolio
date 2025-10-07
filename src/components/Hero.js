import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import './Hero.css';

function TypingText({
  words = ["Web Designer", "Web Developer", "Cloud Engineer"],
  typingSpeed = 150,
  deleteSpeed = 100,
  delayBetweenWords = 1000,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    const word = words[currentWordIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const timer = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length - 1));
      }, deleteSpeed);
      return () => clearTimeout(timer);
    }

    if (currentText === word) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentText(word.substring(0, currentText.length + 1));
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    words,
    typingSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  useEffect(() => {
    controls.start({
      opacity: [0.2, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <span className="typing-text">
      {currentText}
      <motion.span animate={controls} className="cursor">|</motion.span>
    </span>
  );
}

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
          <TypingText />
        </h2>
       
        {/* <a href="#contact" className="cta-button">
          Let's Work
        </a> */}
        
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

