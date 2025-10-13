import React, { useEffect, useRef, useState } from 'react';
import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillCategories = {
    'Frontend': ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design'],
    'Backend': ['Java', 'Python'],
    'Design & Tools': ['UI/UX', 'Wix', 'Webflow'],
    'Development': ['Git', 'GitHub', 'Terminal', 'Documentation'],
    'Cloud': ['AWS', 'Azure', 'Requirement Gathering']
  };

  const highlights = [
    { number: '7+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '3+', label: 'Years Experience' }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`about ${isVisible ? 'fade-in' : ''}`}
      aria-label="About Mani Dodla - Web Developer"
    >
      <h2 className="section-title">About Me</h2>
      
      <div className="about-layout">
        {/* DIV 1 - Left Section: Profile & Highlights */}
        <div className="about-div1">
          <div className="about-image-wrapper">
            <div className="profile-circle">
              <img 
                src="https://via.placeholder.com/300" 
                alt="Mani Dodla - Web Developer in Vizag, India" 
              />
              <div className="profile-ring"></div>
            </div>
          </div>
          
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="highlight-number">{item.number}</div>
                <div className="highlight-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* DIV 2 - Right Section: About Text */}
        <div className="about-div2">
          <div className="about-text">
            <p className="intro-text">
              Hello! I'm <span className="highlight">Mani Dodla</span>, a passionate <span className="highlight">web developer and designer</span> based 
              in <span className="highlight">Visakhapatnam (Vizag), India</span>.
            </p>
            <p>
              I transform ideas into reality through code, creating beautiful and functional digital experiences 
              with a keen eye for detail and a commitment to excellence.
            </p>
            <p>
              As a <span className="highlight">professional web developer in Vizag</span>, I specialize in creating <span className="highlight">modern, 
              responsive websites</span> and web applications using React, JavaScript, and cutting-edge technologies that 
              not only look great but also deliver exceptional user experiences.
            </p>
            <p>
              Whether you're looking for a <span className="highlight">freelance web developer in India</span> or need custom web solutions 
              for your business, I'm here to help bring your vision to life.
            </p>
          </div>
        </div>
        
        {/* DIV 3 - Bottom Section: Skills */}
        <div ref={skillsRef} className={`about-div3 ${skillsVisible ? 'skills-visible' : ''}`}>
          <h3 className="skills-title">
            <span>Skills & Technologies</span>
            <div className="skills-title-line"></div>
          </h3>
          
          <div className="skill-categories">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <div key={category} className="skill-category" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <h4 className="category-name">{category}</h4>
                <div className="skill-tags">
                  {skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-tag"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

