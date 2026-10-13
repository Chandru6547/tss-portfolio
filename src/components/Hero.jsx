import React from 'react';
import './Hero.css';
import codingman from '../assests/codingman.png';

const FEATURE_MODULES = [
  {
    id: 'assessments',
    title: 'Adaptive Assessments',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    colorScheme: 'blue',
  },
  {
    id: 'practice',
    title: 'Targeted Practice Track',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    colorScheme: 'teal',
  },
  {
    id: 'labs',
    title: 'Cloud Labs & Code Visualizer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    colorScheme: 'indigo',
  },
  {
    id: 'curriculum',
    title: 'Curriculum & Courseware',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    colorScheme: 'amber',
  },
  {
    id: 'integration',
    title: 'Global Platform Sync',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    colorScheme: 'blue-dark',
  },
  {
    id: 'lsrw',
    title: 'AI Communication (LSRW)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    colorScheme: 'emerald',
  },
  {
    id: 'training',
    title: 'Enterprise Upskilling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    colorScheme: 'purple',
  },
  {
    id: 'placement',
    title: 'Placement Automation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    colorScheme: 'cyan',
  },
];

const METRICS = [
  { value: '500+', label: 'Universities & Enterprises' },
  { value: '99.9%', label: 'Platform Reliability' },
  { value: 'ISO 27001', label: 'Certified Infrastructure' },
  { value: 'AI-Guided', label: 'Outcome Analytics' },
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
            <span className="badge-text">Next-Generation Higher Education SaaS</span>
          </div>

          {/* Headline */}
          <h1 id="hero-heading" className="hero-title animate-fade-in-up" style={{ '--delay': '0.2s' }}>
            Architect industry readiness. <br />
            <span className="hero-title-highlight">Accelerate placement outcomes.</span>
          </h1>

          {/* Subheading */}
          <p className="hero-description animate-fade-in-up" style={{ '--delay': '0.3s' }}>
            The end-to-end learning and evaluation ecosystem for forward-thinking universities. 
            Automate diagnostics, empower hands-on software development, and bridge the gap 
            between academia and technical hiring at scale.
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
              Schedule Institutional Demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="#interactive-tour" className="hero-btn-secondary">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              Explore Interactive Tour
            </a>
          </div>

          {/* Metrics Footer */}
          <div className="hero-metrics-bar animate-fade-in-up" style={{ '--delay': '0.85s' }}>
            {METRICS.map((metric, i) => (
              <div key={i} className="metric-item">
                <strong className="metric-value">{metric.value}</strong>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Media Column */}
        <div className="hero-right animate-fade-in" style={{ '--delay': '0.4s' }}>
          <div className="hero-media-wrapper">
            <div className="hero-backdrop-glow" aria-hidden="true" />
            
            <img 
              src={codingman} 
              alt="Platform interface demonstrating student coding evaluation and metrics" 
              className="hero-main-img" 
              loading="eager"
            />

            {/* Overlay 1: Interactive Terminal with Floating Animation */}
            <div className="floating-card terminal-card float-card-primary" aria-hidden="true">
              <div className="terminal-header">
                <div className="terminal-traffic-lights">
                  <span className="dot dot-close" />
                  <span className="dot dot-minimize" />
                  <span className="dot dot-expand" />
                </div>
                <span className="terminal-title">assessment_runtime.py</span>
                <span className="terminal-status-pill">Running</span>
              </div>
              <pre className="terminal-body">
                <code>
                  <span className="code-keyword">async def</span> <span className="code-function">evaluate</span>(student_id):{'\n'}
                  {'  '}res = <span className="code-keyword">await</span> sandbox.execute(){'\n'}
                  {'  '}<span className="code-keyword">return</span> {'{'} status: <span className="code-string">"Passed"</span> {'}'}
                  <span className="code-cursor" />
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}