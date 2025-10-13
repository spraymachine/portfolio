import React, { useEffect, useRef, useState } from 'react';
import Core from 'smooothy';
import './Work2.css';

function Work2() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderInstanceRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
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
      title: 'Krishi Engineers',
      description: 'Professional business website showcasing engineering solutions with a clean, corporate design and comprehensive service information.',
      link: 'https://www.krishiengineers.in',
      category: 'Business'
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
    }, 
    {
      title: 'Scratch Wrath',
      description: 'An engaging gaming platform built with modern web technologies, featuring interactive gameplay and smooth animations.',
      link: 'https://manik5621.wixsite.com/scratch-wrath',
      category: 'Gaming'
    }
  ];

  // Intersection Observer for section visibility
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

  // Initialize slider
  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = new Core(sliderRef.current, {
      infinite: true,
      snap: true,
      ease: 0.1,
      scrollInput: true,
      snapStrength: 0.08,
      speedDecay: 0.9,
      onSlideChange: (current, previous) => {
        setCurrentSlide(current);
      }
    });

    sliderInstanceRef.current = slider;

    // Auto-slide functionality
    let autoSlideInterval;
    const startAutoSlide = () => {
      autoSlideInterval = setInterval(() => {
        if (sliderInstanceRef.current) {
          sliderInstanceRef.current.goToNext();
        }
      }, 3000); // Slide every 3 seconds
    };

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }
    };

    // Start auto-sliding
    startAutoSlide();

    // Pause on hover/touch
    const sliderElement = sliderRef.current;
    sliderElement.addEventListener('mouseenter', stopAutoSlide);
    sliderElement.addEventListener('mouseleave', startAutoSlide);
    sliderElement.addEventListener('touchstart', stopAutoSlide);
    sliderElement.addEventListener('touchend', startAutoSlide);

    // Animation loop
    let rafId;
    const animate = () => {
      slider.update();
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      stopAutoSlide();
      sliderElement.removeEventListener('mouseenter', stopAutoSlide);
      sliderElement.removeEventListener('mouseleave', startAutoSlide);
      sliderElement.removeEventListener('touchstart', stopAutoSlide);
      sliderElement.removeEventListener('touchend', startAutoSlide);
      slider.destroy();
    };
  }, []);

  const handleNavClick = (index) => {
    if (sliderInstanceRef.current) {
      sliderInstanceRef.current.goToIndex(index);
    }
  };

  const handlePrevClick = () => {
    if (sliderInstanceRef.current) {
      sliderInstanceRef.current.goToPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderInstanceRef.current) {
      sliderInstanceRef.current.goToNext();
    }
  };

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className={`work2 ${isVisible ? 'fade-in' : ''}`}
      aria-label="Portfolio and work showcase"
    >
      <h2 className="section-title">My Work</h2>
      
      <div className="slider-controls">
        <button 
          className="slider-nav-btn prev" 
          onClick={handlePrevClick}
          aria-label="Previous project"
        >
          ←
        </button>
        <div className="slider-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleNavClick(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        <button 
          className="slider-nav-btn next" 
          onClick={handleNextClick}
          aria-label="Next project"
        >
          →
        </button>
      </div>

      <div className="slider-wrapper" ref={sliderRef} data-slider>
        {projects.map((project, index) => (
          <div key={index} className="slide">
            <div className="project-card-wrapper">
              <div className="project-card">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work2;

