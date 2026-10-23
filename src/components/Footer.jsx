import React from "react";
import "./Footer.css";
import logo from "../assests/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const isInviteTrainingPage = window.location.pathname.replace(/\/$/, "") === "/invite-training";
  const homeAnchor = (id) => (isInviteTrainingPage ? `/#${id}` : `#${id}`);

  return (
    <footer className="ts-footer" id="contact">
      <div className="ts-footer-top">
        <div className="footer-container">
          {/* Brand & Direct Contact Column */}
          <div className="footer-brand-col">
          
            <a href="/" className="footer-brand">
              <img src={logo} alt="TechSign Solutions Logo" className="footer-logo" />
              <span className="footer-brand-name">TechSign Solutions</span>
            </a>
            <p className="footer-brand-desc">
              Next-generation learning, assessment, and placement platform designed for forward-thinking engineering institutions and enterprises.
            </p>

            <div className="footer-contact-cards">
              <a href="mailto:campusconnect@teamtechsign.in" className="contact-card">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <span className="contact-type">Email Campus Relations</span>
                  <strong className="contact-value">campusconnect@teamtechsign.in</strong>
                </div>
              </a>

              <a href="tel:+919542667636" className="contact-card">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <span className="contact-type">Direct Helpline</span>
                  <strong className="contact-value">+91 95426 67636</strong>
                </div>
              </a>
            </div>
          </div>

          {/* Nav Link Columns */}
          <div className="footer-links-group">
            <div className="footer-links-col">
              <h4 className="footer-col-title">Platform</h4>
              <ul className="footer-list">
                <li><a href={homeAnchor("features")}>Adaptive Assessments</a></li>
                <li><a href={homeAnchor("product")}>Cloud Workspaces</a></li>
                <li><a href={homeAnchor("features")}>Code Visualizer</a></li>
                <li><a href={homeAnchor("product")}>Placement Automation</a></li>
                <li><a href={homeAnchor("interactive-tour")}>Live Sandbox</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-col-title">Campus Programs</h4>
              <ul className="footer-list">
                <li><a href={homeAnchor("testimonials")}>Student Upskilling</a></li>
                <li><a href={homeAnchor("request-demo")}>Institutional Demo</a></li>
                <li><a href={homeAnchor("curriculum")}>LSRW Communication</a></li>
                <li><a href={homeAnchor("product")}>Faculty Dashboard</a></li>
                <li><a href="/invite-training">Invite us for CRT training</a></li>
                <li><a href={homeAnchor("request-demo")}>Hackathons & Drives</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-col-title">Portals</h4>
              <ul className="footer-list">
                <li><a href={homeAnchor("student-login")}>Student Login</a></li>
                <li><a href={homeAnchor("institution-login")}>Institution Admin</a></li>
                <li><a href={homeAnchor("admin-login")}>Enterprise Portal</a></li>
                <li><a href={homeAnchor("privacy")}>Privacy & Security</a></li>
                <li><a href={homeAnchor("terms")}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="ts-footer-bottom">
        <div className="footer-container bottom-inner">
          <p className="copyright-text">
            © {currentYear} TechSign Solutions. All rights reserved.
          </p>
          <div className="footer-badges">
            <span className="trust-pill">ISO 27001 Certified</span>
            <span className="trust-pill">99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}