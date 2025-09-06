"use client";

import React, { useEffect } from 'react';

const TerminalLoader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById('terminal-loader');
      if (loader) {
        loader.classList.add('hidden');
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="terminal-loader" id="terminal-loader">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot red"></div>
          <div className="terminal-dot yellow"></div>
          <div className="terminal-dot green"></div>
        </div>
        <div className="terminal-body">
          <div className="terminal-line" style={{ animationDelay: '0.5s' }}>Initializing Full-Stack Environment...</div>
          <div className="terminal-line" style={{ animationDelay: '1s' }}>Loading React components...</div>
          <div className="terminal-line" style={{ animationDelay: '1.5s' }}>Connecting to Node.js backend...</div>
          <div className="terminal-line" style={{ animationDelay: '2s' }}>Syncing with MongoDB / SQL database...</div>
          <div className="terminal-line" style={{ animationDelay: '2.5s' }}>Building REST & GraphQL APIs...</div>
          <div className="terminal-line" style={{ animationDelay: '3s' }}>Welcome to Ziad's Portfolio</div>
          <div className="terminal-line" style={{ animationDelay: '3.5s' }}>System Ready.<span className="terminal-cursor"></span></div>
        </div>
      </div>
    </div>
  );
};

export default TerminalLoader;