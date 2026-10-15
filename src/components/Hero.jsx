import React from 'react';
import './Hero.css';
import codingman from '../assests/codingman.png';

const FEATURE_MODULES = [
  {
    id: 'assessments',
    title: 'Assess skills',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    colorScheme: 'blue',
  },
  {
    id: 'labs',
    title: 'Practice in cloud labs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    colorScheme: 'indigo',
  },
  {
    id: 'lsrw',
    title: 'Build communication',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    colorScheme: 'emerald',
  },
  {
    id: 'placement',
    title: 'Connect to opportunities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    colorScheme: 'cyan',
  },
];

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-container">
        {/* Left Column */}
        <div className="hero-left">
          {/* Eyebrow / Tag */}
          <div className="hero-badge animate-fade-in-up" role="status" style={{ '--delay': '0.1s' }}>
            <span className="badge-pulse" aria-hidden="true" />
            <span className="badge-text">Learning that leads to opportunity</span>
          </div>

          {/* Headline */}
          <h1 id="hero-heading" className="hero-title animate-fade-in-up" style={{ '--delay': '0.2s' }}>
            Turn learning into <span className="hero-title-highlight">career-ready skills.</span>
          </h1>

          {/* Subheading */}
          <p className="hero-description animate-fade-in-up" style={{ '--delay': '0.3s' }}>
            Give every learner a clear path from building skills to proving what they can do. TechSign brings assessment, hands-on practice, communication, and placement workflows together in one platform.
          </p>

          {/* Feature Grid */}
          <div className="hero-features-grid" role="list">
            {FEATURE_MODULES.map((item, index) => (
              <div 
                key={item.id} 
                className="hero-feature-item animate-fade-in-up" 
                role="listitem"
                style={{ '--delay': `${0.35 + index * 0.05}s` }}
              >
                <span className={`feature-icon-badge badge-${item.colorScheme}`}>
                  {item.icon}
                </span>
                <span className="feature-text">{item.title}</span>
              </div>
            ))}
          </div>

          {/* CTA Actions */}
          <div className="hero-actions animate-fade-in-up" style={{ '--delay': '0.75s' }}>
            <a href="#request-demo" className="hero-btn-primary">
              See TechSign in action
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="#interactive-tour" className="hero-btn-secondary">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              Explore the platform
            </a>
          </div>

        </div>

        {/* Right Media Column */}
        <div className="hero-right animate-fade-in" style={{ '--delay': '0.4s' }}>
          <div className="hero-media-wrapper">
            <img 
              src={codingman} 
              alt="Platform interface demonstrating student coding evaluation and metrics" 
              className="hero-main-img" 
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}