"use client";

import React, { useEffect } from 'react';

const skillsData = [
  {
    icon: '💻',
    title: 'Full-Stack Development',
    description: 'Building responsive and dynamic web applications from frontend to backend',
    tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript','React.js', 'Next.js','Tailwind CSS', 'Bootstrap',  'PHP', 'Laravel'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    description: 'Designing, managing, and querying relational and NoSQL databases',
    tech: ['SQL','MySQL', 'Oracle DB', 'WAMP', 'MongoDB'],
  },
  {
    icon: '☁️',
    title: 'Cloud & Virtualization',
    description: 'Hands-on experience in cloud infrastructure, virtualization, and deployment',
    tech: ['AWS', 'VirtualBox', 'Fedora', 'DigitalOcean'],
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    description: 'Designing and implementing AI/ML models for classification and automation tasks',
    tech: ['Python', 'Machine Learning', 'Neural Networks'],
  },
  {
    icon: '🎮',
    title: 'Game Development',
    description: 'Creating 2D interactive applications and games with graphics and animations',
    tech: ['C++', 'OpenGL', 'GLUT'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Prototyping and designing user-friendly interfaces with modern tools',
    tech: ['Figma', 'Adobe XD'],
  },
  {
    icon: '⚡',
    title: 'AI Builders',
    description: 'Exploring modern AI development tools and copilots for productivity',
    tech: [
      'Bolt',
      'Mocha',
      'Cursor',
      'Windsurf',
      'Cline',
      'Aider',
      'Firebase Studio',
    ],
  },
  {
    icon: '🧠',
    title: 'Large Language Models (LLMs)',
    description: 'Working with state-of-the-art LLMs for text generation, automation, and AI solutions',
    tech: [
      'ChatGPT',
      'Claude',
      'Qwen',
      'Gemini',
      'DeepSeek',
      'Llama',
      'Mistral',
      'Grok',
    ],
  },
];


const Skills = () => {
  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.skill-card');

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
    <section className="section">
      <h2 className="section-title">skills and technologies</h2>
      <p className="section-subtitle">Cutting-edge tools and technologies I master</p>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card fade-in-up" key={index}>
            <div className="skill-icon">
              <span>{skill.icon}</span>
            </div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
            <div className="skill-tech">
              {skill.tech.map((tag, tagIndex) => (
                <span className="tech-tag" key={tagIndex}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
