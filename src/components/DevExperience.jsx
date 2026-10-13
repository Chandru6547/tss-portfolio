import React from 'react';
import './DevExperience.css';
// Rename the imported file path to wherever you save your uploaded image:
import devWorkspaceImg from '../assests/developer-workspace.png';

const DEV_PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Zero-Config Environments',
    text: 'Pre-configured cloud containers equipped with full dev stacks, database runtimes, and rootless terminal access.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Instant Execution & Debugging',
    text: 'Real-time test runners with memory-leak profiling, call-stack visualization, and instant edge-case assertions.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Production-Grade Integrity',
    text: 'Empowering students to write clean, auditable code matching senior engineer workflows and enterprise lint standards.',
  },
];

export default function DevExperience() {
  return (
    <section id="product" className="ts-dev-section" aria-labelledby="dev-heading">
      <div className="dev-container">
        
        {/* Left Column: Visual with Developer Badges */}
        <div className="dev-media-column">
          <div className="dev-media-frame">
            <img
              src={devWorkspaceImg}
              alt="Developer coding in a low-light setup on a cloud runtime"
              className="dev-image"
              loading="lazy"
            />

            {/* Floating Terminal Status Badge */}
            <div className="dev-floating-status">
              <div className="pulse-indicator" />
              <div>
                <p className="status-label">Hot-Reload Sandbox</p>
                <p className="status-sub">Listening on port 5050 • 0 errors</p>
              </div>
            </div>

            {/* Floating Metric Pill */}
            <div className="dev-floating-metric">
              <span className="metric-score">99.8%</span>
              <span className="metric-caption">Test Suite Passed</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Technical Pillars */}
        <div className="dev-content-column">
          <span className="dev-eyebrow">Engineered For Developers</span>
          
          <h2 id="dev-heading" className="dev-title">
            Bridge academic code into <br />
            <span className="dev-title-accent">production-ready engineering.</span>
          </h2>

          <p className="dev-lead">
            Great software engineers aren't built on multiple-choice quizzes. 
            TechSign brings terminal workflows, Git-based versioning, and real-time 
            sandboxes directly to the classroom so learners build real-world muscle memory.
          </p>

          <div className="dev-pillars-list">
            {DEV_PILLARS.map((pillar, index) => (
              <div key={index} className="pillar-item">
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <div className="pillar-details">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-text">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dev-cta-group">
            <a href="#interactive-tour" className="dev-primary-btn">
              Explore Developer Sandbox
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <span className="dev-subtext">No downloads or CLI installations required</span>
          </div>

        </div>

      </div>
    </section>
  );
}