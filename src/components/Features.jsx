import React, { useState } from 'react';
import './Features.css';

const TABS = [
  {
    id: 'assessments',
    title: 'Adaptive Assessments',
    badge: 'Evaluation Engine',
    headline: 'Real-time proctoring and multi-language sandboxed compilers.',
    description:
      'Run rigorous benchmark evaluations at institutional scale. Prevent plagiarism with telemetry analysis and deliver instant diagnostic reports to faculty.',
    stats: [
      { label: 'Evaluation Speed', value: '< 1.2s' },
      { label: 'Languages Supported', value: '35+' },
      { label: 'Plagiarism Accuracy', value: '99.4%' },
    ],
    codePreview: {
      fileName: 'proctoring_engine.ts',
      code: `// Real-time telemetry check
const session = await ProctoringEngine.verify({
  candidateId: "TS-8842",
  webcamActive: true,
  audioAnomalies: 0,
  tabSwitches: 0
});

return session.isCompliant ? "APPROVED" : "FLAGGED";`,
    },
  },
  {
    id: 'labs',
    title: 'Cloud Workspaces',
    badge: 'Zero-Setup Dev',
    headline: 'Browser-native Linux containers for every single student.',
    description:
      'Eliminate "works on my machine" issues. Provision instant development sandboxes pre-loaded with databases, frameworks, and auto-graded rubrics.',
    stats: [
      { label: 'Spin-up Time', value: '450ms' },
      { label: 'Pre-built Stacks', value: '60+' },
      { label: 'Container Isolation', value: 'Rootless gVisor' },
    ],
    codePreview: {
      fileName: 'workspace_manifest.yaml',
      code: `workspace:
  image: ubuntu-jammy-fullstack
  resources:
    cpu: 2.0
    memory: 4Gi
  extensions:
    - python3.11
    - postgresql-16
    - nodejs-lts`,
    },
  },
  {
    id: 'placement',
    title: 'Placement Automation',
    badge: 'Career Pipeline',
    headline: 'Direct pipeline matching student mastery to hiring criteria.',
    description:
      'Transform candidate transcripts into verifiable skill profiles. Corporate recruiters filter directly by code quality, problem-solving speed, and verified tests.',
    stats: [
      { label: 'Placement Lift', value: '+42%' },
      { label: 'Partner Networks', value: '1,200+' },
      { label: 'Time Saved per Hire', value: '18 hrs' },
    ],
    codePreview: {
      fileName: 'placement_match.json',
      code: `{
  "student": "Alex Rivera",
  "skillIndex": 94.8,
  "topCompetencies": ["System Design", "Go", "Docker"],
  "recruiterStatus": "Fast-Track Interview"
}`,
    },
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section id="features" className="ts-features-section" aria-labelledby="features-heading">
      <div className="features-container">
        {/* Section Header */}
        <div className="features-header">
          <span className="features-eyebrow">Enterprise Architecture</span>
          <h2 id="features-heading" className="features-title">
            Built for rigorous academic programs, <br />
            <span className="title-highlight">engineered for enterprise hiring.</span>
          </h2>
          <p className="features-subtitle">
            Move beyond static LMS video lectures. Give engineering and STEM departments
            a fully interactive execution runtime.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="features-tabs-nav" role="tablist">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                className={`features-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                <span className="tab-indicator" />
                <span className="tab-title">{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel */}
        <div className="features-showcase-panel">
          {/* Left Column: Context & Stats */}
          <div className="showcase-info">
            <span className="showcase-badge">{activeTab.badge}</span>
            <h3 className="showcase-headline">{activeTab.headline}</h3>
            <p className="showcase-desc">{activeTab.description}</p>

            <div className="showcase-stats-grid">
              {activeTab.stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <a href="#request-demo" className="showcase-link">
              Explore {activeTab.title} docs
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right Column: Interactive Code Sandbox Window */}
          <div className="showcase-preview">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="window-filename">{activeTab.codePreview.fileName}</span>
                <span className="window-tag">Verified Sandboxed Runtime</span>
              </div>
              <pre className="window-body">
                <code>{activeTab.codePreview.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}