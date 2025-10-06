import React, { useEffect, useRef, useState } from 'react';
import './Work.css';

function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      <p className="section-subtitle">
        A collection of projects I've worked on, each crafted with attention to detail and passion for excellence.
      </p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-category">{project.category}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;

