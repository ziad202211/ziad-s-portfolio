"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

const projectsData = [
  {
    icon: '🩺',
    title: 'Doctor Appointment Web App',
    description: 'A full-stack web application for booking doctor appointments with user authentication, scheduling, and form validation. Improved efficiency by automating manual booking tasks.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL'],
    liveDemo: '#',
    github: '#',
  },
  {
    icon: '💰',
    title: 'Expense Tracker',
    description: 'A personal finance web app to track income and expenses with categories, charts, and persistent storage. Built to practice CRUD operations and database management.',
    tech: ['Next.js'],
    liveDemo: '#',
    github: '#',
  },
  {
    icon: '🤖',
    title: 'Artificial Neural Network Model',
    description: 'A Python-based machine learning model designed for classification tasks, showcasing strong foundations in AI and data processing.',
    tech: ['Python', 'NumPy', 'Machine Learning'],
    liveDemo: '#',
    github: '#',
  },
  {
    icon: '🎮',
    title: '2D Shooter Game',
    description: 'An interactive 2D game developed with OpenGL and GLUT, featuring character movement, shooting mechanics, scoring, and animations.',
    tech: ['C++', 'OpenGL', 'GLUT'],
    liveDemo: '#',
    github: '#',
  },
];


const Projects = () => {
  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.project-card');

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
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">Full-stack applications and creative solutions that bring ideas to life</p>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card fade-in-up" key={index}>
            <div className="project-header">
              <span>{project.icon}</span>
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tag, tagIndex) => (
                  <span className="project-tech-tag" key={tagIndex}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <Link href={project.liveDemo} className="project-link">
                  <span>🔗</span>
                  Live Demo
                </Link>
                <Link href={project.github} className="project-link">
                  <span>📁</span>
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
