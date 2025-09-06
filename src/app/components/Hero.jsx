"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
  useEffect(() => {
    // Typewriter effect for subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
      subtitle.style.width = '100%'; // Animation handled by CSS
    }

    // Code editor animation
    const codeLines = document.querySelectorAll('.code-editor .code-line');
    codeLines.forEach((line, index) => {
      line.style.animationDelay = `${4 + index * 0.2}s`;
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="glitch-text" data-text="ZIAD MOHAMAD">ZIAD MOHAMAD</h1>
          <h2 className="hero-subtitle">Full-Stack Developer</h2>
          <p className="hero-description">
            Passionate about building seamless web applications from frontend to backend.  
            I design intuitive user experiences, craft robust APIs, and work with databases to deliver scalable, modern solutions.  
          </p>


          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <div className="stat-label">Year Experience</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <div className="stat-label">Uptime Achieved</div>
            </div>
          </div>

          <div className="hero-buttons">
            <Link href="#contact" className="btn-cyber">
              <span>Get In Touch</span>
            </Link>
            <Link href="#projects" className="btn-ghost">View Projects</Link>
          </div>
        </div>

        {/* <div className="code-editor">
          <div className="editor-header">
            <div className="editor-dots">
              <div className="editor-dot red"></div>
              <div className="editor-dot yellow"></div>
              <div className="editor-dot green"></div>
            </div>
            <div className="editor-title">kubernetes-deployment.yaml</div>
          </div>
          <div className="editor-body">
            <div className="code-line">
              <span className="line-number">1</span>
              <span className="keyword">apiVersion:</span> <span className="string">apps/v1</span>
            </div>
            <div className="code-line">
              <span className="line-number">2</span>
              <span className="keyword">kind:</span> <span className="string">Deployment</span>
            </div>
            <div className="code-line">
              <span className="line-number">3</span>
              <span className="keyword">metadata:</span>
            </div>
            <div className="code-line">
              <span className="line-number">4</span>
              &nbsp;&nbsp;<span className="keyword">name:</span> <span className="string">devops-app</span>
            </div>
            <div className="code-line">
              <span className="line-number">5</span>
              <span className="keyword">spec:</span>
            </div>
            <div className="code-line">
              <span className="line-number">6</span>
              &nbsp;&nbsp;<span className="keyword">replicas:</span> <span className="variable">3</span>
            </div>
            <div className="code-line">
              <span className="line-number">7</span>
              &nbsp;&nbsp;<span className="keyword">selector:</span>
            </div>
            <div className="code-line">
              <span className="line-number">8</span>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">matchLabels:</span>
            </div>
            <div className="code-line">
              <span className="line-number">9</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">app:</span> <span className="string">devops-app</span>
            </div>
            <div className="code-line">
              <span className="line-number">10</span>
              <span className="comment"># Automated by Ziad's DevOps Pipeline</span>
            </div>
          </div>
        </div> */}
          <div className="code-editor">
  <div className="editor-header">
    <div className="editor-dots">
      <div className="editor-dot red"></div>
      <div className="editor-dot yellow"></div>
      <div className="editor-dot green"></div>
    </div>
    <div className="editor-title">server.js</div>
  </div>
  <div className="editor-body">
    <div className="code-line">
      <span className="line-number">1</span>
      <span className="keyword">const</span> <span className="variable">express</span> = <span className="function">require</span>(<span className="string">'express'</span>);
    </div>
    <div className="code-line">
      <span className="line-number">2</span>
      <span className="keyword">const</span> <span className="variable">mongoose</span> = <span className="function">require</span>(<span className="string">'mongoose'</span>);
    </div>
    <div className="code-line">
      <span className="line-number">3</span>
      <span className="keyword">const</span> <span className="variable">app</span> = <span className="function">express</span>();
    </div>
    <div className="code-line">
      <span className="line-number">4</span>
      <span className="variable">mongoose</span>.<span className="function">connect</span>(<span className="string">'mongodb://localhost/portfolio'</span>);
    </div>
    <div className="code-line">
      <span className="line-number">5</span>
      <span className="variable">app</span>.<span className="function">get</span>(<span className="string">'/api/skills'</span>, (<span className="variable">req</span>, <span className="variable">res</span>) =&gt; <span className="punct">&#123;</span>)
    </div>
    <div className="code-line">
      <span className="line-number">6</span>
      &nbsp;&nbsp;<span className="variable">res</span>.<span className="function">json</span>([<span className="string">'React'</span>, <span className="string">'Node.js'</span>, <span className="string">'MongoDB'</span>]);
    </div>
    <div className="code-line">
      <span className="line-number">7</span>
      <span className="punct">&#125;</span><span className="punct">)</span><span className="punct">;</span>
    </div>
    <div className="code-line">
      <span className="line-number">8</span>
      <span className="variable">app</span>.<span className="function">listen</span>(<span className="number">3000</span>, () =&gt; <span className="function">console.log</span>(<span className="string">"🚀 Portfolio server running"</span>));
    </div>
    <div className="code-line">
      <span className="line-number">9</span>
      <span className="comment">// Built with ❤️ by Ziad (Full-Stack Developer)</span>
    </div>
  </div>
</div>

        
      </div>
    </section>
  );
};

export default Hero;