import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Clients.css";

const CLIENTS = [
  {
    name: "Malla Reddy College Of Engineering",
    shortName: "MRIT",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PlmJSchG-W_Dl66EALc6V-_oUx38SdK7kFpUVrexhQ&s=10",
  },
  {
    name: "BRIL",
    shortName: "BRIL",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-jdDpKKsFR0YaeKYaw1JxFZxKLKqVPpzMBSWGMK8eg&s=10",
  },
  {
    name: "KNRR",
    shortName: "KNRR",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXHTW3yJVbyVQbS5rZqyNOrwC4h3mluJZzqruNRW9lQ&s=10",
  },
  {
    name: "BRIG",
    shortName: "BRIG",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEaw2kpUlNqipYf4M0UCCXICWc0RqTlKFWfJ8lfqhSg&s",
  },
  {
    name: "Sri Indu College of Engineering & Technology",
    shortName: "Sri Indu",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTrfzzmRfwNN4YY1d0m4Nmt1jLTATf8FkEPFX1L9isQ&s=10",
  },
  {
    name: "Malla Reddy Institute of Technology",
    shortName: "MRIT",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREn2_rYrjJs6vL9l8OIGDI4k_xGpJfag_jorsaLcsRjw&s"
  
  },
  
];

export default function Clients() {
  const sliderRef = useRef(null);

  const scrollColleges = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction * sliderRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="ts-clients-section" aria-labelledby="clients-heading">
      <div className="clients-container">
        {/* Section Header */}
        <div className="clients-header">
          <span className="clients-eyebrow">Trusted Partnerships</span>
          <h2 id="clients-heading" className="clients-title">
            Empowering top institutions to produce{" "}
            <span className="clients-title-highlight">industry-ready talent.</span>
          </h2>
          <p className="clients-subtitle">
            Leading engineering colleges and universities partner with TechSign Solutions 
            to streamline technical diagnostics, cloud labs, and campus placement drives.
          </p>
        </div>

        {/* College Slider */}
        <div className="clients-carousel-controls" role="group" aria-label="College slider controls">
          <button type="button" onClick={() => scrollColleges(-1)} aria-label="Previous colleges">
            <ChevronLeft aria-hidden="true" size={20} />
          </button>
          <button type="button" onClick={() => scrollColleges(1)} aria-label="Next colleges">
            <ChevronRight aria-hidden="true" size={20} />
          </button>
        </div>
        <div
          className="clients-grid"
          ref={sliderRef}
          tabIndex={0}
          aria-label="College partners"
          aria-roledescription="carousel"
        >
          {CLIENTS.map((client, index) => (
            <div
              key={client.name}
              className="client-card"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${CLIENTS.length}`}
            >
              <div className="client-logo-wrapper">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="client-logo"
                  loading="lazy"
                />
              </div>
              <h3 className="client-name">{client.name}</h3>
              <span className="client-badge">Institutional Partner</span>
            </div>
          ))}
        </div>

        {/* Trust Metric Strip */}
        <div className="clients-trust-banner">
          <div className="trust-item">
            <strong>50,000+</strong>
            <span>Students Assessed</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <strong>100%</strong>
            <span>Proctored Integrity</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <strong>3.5x</strong>
            <span>Higher Placement Conversion</span>
          </div>
        </div>
      </div>
    </section>
  );
}