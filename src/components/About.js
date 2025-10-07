import React, { useEffect, useRef, useState } from 'react';
import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const skills = [
    'React', 'JavaScript', 'HTML/CSS', 
    'Java', 'Python', 'UI/UX', 'Responsive Design', 'Wix', 'Webflow',
    'Documentation', 'Version Control', 'Git', 'GitHub', 'Terminal',
    'AWS', 'Azure', 'Requirement Gathering'
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`about ${isVisible ? 'fade-in' : ''}`}
    >
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-image">
          <div className="profile-circle">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Profile" 
            />
          </div>
        </div>
        
        <div className="about-text">
          <p>
            Hello! I'm a passionate <span className="highlight">web developer and designer</span> who 
            loves creating beautiful, functional digital experiences. With a keen eye for detail 
            and a commitment to excellence, I transform ideas into reality.
          </p>
          <p>
            My journey in web development has been driven by curiosity and a desire to build 
            things that matter. I specialize in creating <span className="highlight">modern, responsive websites</span> that 
            not only look great but also deliver exceptional user experiences.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new design trends, learning the latest 
            technologies, and collaborating with clients to bring their visions to life.
          </p>
          
          <div className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skill-tags">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

