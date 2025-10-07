import React, { useEffect, useRef, useState } from 'react';
import './Work.css';

function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const detailsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');

    const thresholds = [0.6, 0.7, 0.8, 0.9, 1];
    const io = new IntersectionObserver(
      (entries) => {
        let nextIndex = activeIndex;
        let bestRatio = 0;

        entries.forEach((entry) => {
          const idxAttr = entry.target.getAttribute('data-index');
          const idx = idxAttr ? parseInt(idxAttr, 10) : 0;
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            nextIndex = idx;
          }
        });

        if (bestRatio >= 0.6 && nextIndex !== activeIndex) {
          setActiveIndex(nextIndex);
        }
      },
      { threshold: thresholds }
    );

    cards.forEach((el) => io.observe(el));

    return () => {
      cards.forEach((el) => io.unobserve(el));
      io.disconnect();
    };
  }, [activeIndex]);

  const projects = [
    {
      title: 'Scratch Wrath',
      description: 'An engaging gaming platform built with modern web technologies, featuring interactive gameplay and smooth animations.',
      link: 'https://manik5621.wixsite.com/scratch-wrath',
      category: 'Gaming'
    },
    {
      title: 'Krishi Engineers',
      description: 'Professional business website showcasing engineering solutions with a clean, corporate design and comprehensive service information.',
      link: 'https://www.krishiengineers.in',
      category: 'Business'
    },
    {
      title: 'Safe Hands',
      description: 'A compassionate platform dedicated to safety and support services, with intuitive navigation and accessible design.',
      link: 'https://www.safehands.live',
      category: 'Services'
    },
    {
      title: 'Akiri Sridhar Portfolio',
      description: 'Elegant personal portfolio website with sophisticated design elements and smooth user experience.',
      link: 'https://akirisridhar.com',
      category: 'Portfolio'
    },
    {
      title: 'Viren Jewellery',
      description: 'Luxurious e-commerce website for jewelry brand, featuring stunning product displays and seamless shopping experience.',
      link: 'https://mani-dodla.wixstudio.com/viren-jewellery',
      category: 'E-commerce'
    },
    {
      title: 'CodeFall Tech Hub',
      description: 'Modern tech hub platform showcasing innovative solutions and technologies with cutting-edge design.',
      link: 'https://codefall-tech-hub.lovable.app',
      category: 'Tech'
    },
    {
      title: 'BNBB Platform',
      description: 'Dynamic web application with rich features and interactive elements, delivering exceptional user engagement.',
      link: 'https://mani-dodla.wixsite.com/bnbb',
      category: 'Web App'
    }
  ];

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className={`work ${isVisible ? 'fade-in' : ''}`}
    >
      <h2 className="section-title">My Work</h2>
      <div className="work-container">
        <div className="project-list">
          <div className="active-project-title">
            {projects[activeIndex]?.title}
          </div>
        </div>
        <div className="project-details" ref={detailsRef}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` }}
              role="button"
              tabIndex={0}
              onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.open(project.link, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile overlay heading - rendered last to be on top */}
      <div className="project-list-mobile-overlay">
        <div className="active-project-title">
          {projects[activeIndex]?.title}
        </div>
      </div>
    </section>
  );
}

export default Work;

