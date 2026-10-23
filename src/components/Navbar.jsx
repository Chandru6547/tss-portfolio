import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../assests/logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSignInOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isInviteTrainingPage = window.location.pathname.replace(/\/$/, "") === "/invite-training";
  const homeAnchor = (id) => (isInviteTrainingPage ? `/#${id}` : `#${id}`);

  const navLinks = [
    { name: "Features", href: homeAnchor("features") },
    { name: "Product", href: homeAnchor("product") },
    { name: "Resources", href: homeAnchor("resources") },
    { name: "Contact", href: homeAnchor("contact") },
  ];

  return (
    <header className="ts-header">
      <nav className="ts-navbar">
        <div className="ts-nav-content">
          {/* Logo & Brand Name */}
          <a href="/" className="ts-brand">
            <img src={logo} alt="TechSign Solutions Logo" className="ts-brand-logo" />
            <span className="ts-brand-name">TechSign Solutions</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="ts-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="ts-nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action Items */}
          <div className="ts-nav-actions">
            {/* Sign in Dropdown */}
            <div className="ts-dropdown-wrapper" ref={dropdownRef}>
              <button
                type="button"
                className="ts-signin-btn"
                onClick={() => setIsSignInOpen((prev) => !prev)}
              >
                Sign in
                <svg
                  className={`ts-chevron ${isSignInOpen ? "rotate" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isSignInOpen && (
                <div className="ts-dropdown-menu">
                  <a href="#student-login" className="ts-dropdown-item">
                    Student Login
                  </a>
                  <a href="#institution-login" className="ts-dropdown-item">
                    Institution Login
                  </a>
                  <a href="#admin-login" className="ts-dropdown-item">
                    Admin Portal
                  </a>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a href="/invite-training" className="ts-btn-primary">
              Invite us for CRT training
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="ts-mobile-toggle"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="ts-mobile-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="ts-mobile-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {isMobileMenuOpen && (
          <div className="ts-mobile-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="ts-mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="ts-mobile-divider"></div>
            <a href="#signin" className="ts-mobile-link">
              Sign in
            </a>
            <a href="/invite-training" className="ts-btn-primary mobile-full">
              Invite us for CRT training
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}