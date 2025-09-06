"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

const Contact = () => {
  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.contact-content');

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
    <section id="contact" className="section">
      <h2 className="section-title">Let’s Build Something Together</h2>
      <p className="section-subtitle">
        Ready to turn ideas into fully functional web applications? Let’s connect!
      </p>

      <div className="contact-container">
        <div className="contact-content fade-in-up">
          <h3 className="contact-title">Get In Touch</h3>
          <p className="contact-subtitle">
            Whether you need a responsive frontend, a powerful backend, or a full-stack solution, 
            I can help bring your project to life with modern technologies.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <span>📧</span>
              </div>
              <div className="contact-label">Email</div>
              <div className="contact-value">ziadmohamad91177@gmail.com</div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <span>📱</span>
              </div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">(+20) 1068730963</div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <span>📍</span>
              </div>
              <div className="contact-label">Location</div>
              <div className="contact-value">Cairo, Egypt</div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <span>🌐</span>
              </div>
              <div className="contact-label">Availability</div>
              <div className="contact-value">Open for opportunities</div>
            </div>
          </div>

          <div className="social-links">
            <Link href="https://www.linkedin.com/in/ziad-mohamad-abualhasan" className="social-link" title="LinkedIn" target='blank'>
              <span>💼</span>
            </Link>
            <Link href="https://github.com/ziad202211" className="social-link" title="GitHub" target='blank'>
              <span>🐱</span>
            </Link>
            <Link href="https://instagram.com/ziadmohamad_" className="social-link" title="Instagram" target='blank'>
              <span>📸</span>
            </Link>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
