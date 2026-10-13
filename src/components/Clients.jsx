import React from "react";
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
];

export default function Clients() {
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

        {/* Institution Cards Grid */}
        <div className="clients-grid">
          {CLIENTS.map((client, index) => (
            <div key={index} className="client-card">
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