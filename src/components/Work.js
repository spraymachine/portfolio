import React, { useEffect, useRef, useState } from 'react';
import './Work.css';

function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const detailsRef = useRef(null);
  const mobileHeaderRef = useRef(null);
  const [isMobileFixed, setIsMobileFixed] = useState(false);
  const [mobileHeaderHeight, setMobileHeaderHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    setMobileHeaderHeight(mobileHeaderRef.current ? mobileHeaderRef.current.offsetHeight : 0);
    const navbar = document.querySelector('.navbar');
    setNavHeight(navbar ? navbar.offsetHeight : 0);

    const handleResize = () => {
      setMobileHeaderHeight(mobileHeaderRef.current ? mobileHeaderRef.current.offsetHeight : 0);
      const n = document.querySelector('.navbar');
      setNavHeight(n ? n.offsetHeight : 0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const isMobile = window.innerWidth <= 768;
      if (!isMobile) {
        if (isMobileFixed) setIsMobileFixed(false);
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const headerH = mobileHeaderRef.current ? mobileHeaderRef.current.offsetHeight : 0;
      const shouldFix = rect.top <= navHeight && rect.bottom > headerH + navHeight;
      if (shouldFix !== isMobileFixed) setIsMobileFixed(shouldFix);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileFixed, navHeight]);

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

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className={`work ${isVisible ? 'fade-in' : ''}`}
      aria-label="Portfolio and work showcase"
    >
      <h2 className="section-title">My Work - Web Development Projects</h2>
      <div className="work-container">
        <div className="project-list">
          <div className="active-project-title">
            {projects[activeIndex]?.title}
          </div>
        </div>
        {/* Mobile overlay heading - sticky within container */}
        <div 
          className="project-list-mobile-overlay"
          ref={mobileHeaderRef}
          style={isMobileFixed ? { position: 'fixed', top: navHeight || 0, left: 0, right: 0, width: '100%', zIndex: 1000 } : {}}
        >
          <div className="active-project-title">
            {projects[activeIndex]?.title}
          </div>
        </div>
        {isMobileFixed ? <div style={{ height: (mobileHeaderHeight || 0) }} /> : null}
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
    </section>
  );
}

export default Work;

