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
      aria-label="About Mani Dodla - Web Developer"
    >
      <h2 className="section-title">About Me - Mani Dodla</h2>
      
      <div className="about-content">
        <div className="about-image">
          <div className="profile-circle">
            <img 
              src="https://via.placeholder.com/300" 
              alt="Mani Dodla - Web Developer in Vizag, India" 
            />
          </div>
        </div>
        
        <div className="about-text">
          <p>
            Hello! I'm <span className="highlight">Mani Dodla</span>, a passionate <span className="highlight">web developer and designer</span> based 
            in <span className="highlight">Visakhapatnam (Vizag), India</span>. I love creating beautiful, functional digital experiences 
            with a keen eye for detail and a commitment to excellence. I transform ideas into reality through code.
          </p>
          <p>
            As a <span className="highlight">professional web developer in Vizag</span>, my journey in web development has been driven 
            by curiosity and a desire to build things that matter. I specialize in creating <span className="highlight">modern, 
            responsive websites</span> and web applications using React, JavaScript, and cutting-edge technologies that 
            not only look great but also deliver exceptional user experiences.
          </p>
          <p>
            Whether you're looking for a <span className="highlight">freelance web developer in India</span> or need custom web solutions 
            for your business, I'm here to help. When I'm not coding, you'll find me exploring new design trends, 
            learning the latest technologies, and collaborating with clients to bring their visions to life.
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

