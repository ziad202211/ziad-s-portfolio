"use client";

import React, { useEffect } from 'react';

const experienceData = [
  {
    title: 'Junior Full-Stack Developer',
    company: 'Wasta Company',
    period: '2025 – Present',
    description:
      'Contributing to the development of scalable web applications. Working with React, Node.js, and MySQL to build responsive user interfaces, RESTful APIs, and database-driven features. Collaborating with senior developers to deliver high-quality solutions aligned with client requirements.',
  },
  {
    title: 'Cloud Computing Trainee',
    company: 'National Telecommunication Institute (NTI)',
    period: 'Aug 2024 – Sep 2024',
    description:
      'Completed a 6-week intensive training organized by the Ministry of Communications and IT. Deployed and managed 10+ cloud-based applications in simulated environments. Built and tested compute, storage, and networking components while applying DevOps principles and system architecture.',
  },
  {
    title: 'Full-Stack Web Developer (Academic Project)',
    company: 'Canadian International College (CIC)',
    period: 'Apr 2025 – May 2025',
    description:
      'Developed a responsive doctor appointment booking web app using Laravel, PHP, MySQL, HTML, CSS, and JavaScript. Implemented user authentication, appointment scheduling, and form validation. Automated scheduling reduced manual booking time by 50%. Achieved 95% satisfaction in usability testing.',
  },
  {
    title: 'AI Developer (Academic Project)',
    company: 'Canadian International College (CIC)',
    period: '2024',
    description:
      'Designed and trained an Artificial Neural Network model using Python for classification tasks. Applied machine learning concepts, data preprocessing, and model evaluation to achieve accurate predictions.',
  },
  {
    title: 'Game Developer (Academic Project)',
    company: 'Canadian International College (CIC)',
    period: '2023',
    description:
      'Created a 2D character shooter game with OpenGL and GLUT in C++. Implemented movement, shooting mechanics, scoring system, and animations. Showcased strong problem-solving and graphics programming skills.',
  },
];


const Experience = () => {
  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.timeline-item');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(el => observer.observe(el));
    };

    handleScrollAnimations();
  }, []);

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Professional Journey</h2>
      <p className="section-subtitle">Building the web, one feature at a time</p>

      <div className="timeline">
        {experienceData.map((item, index) => (
          <div className="timeline-item fade-in-up" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="experience-title">{item.title}</h3>
              <div className="experience-company">{item.company}</div>
              <div className="experience-period">{item.period}</div>
              <p className="experience-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;