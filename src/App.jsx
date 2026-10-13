import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import DevExperience from './components/DevExperience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Features />
        <DevExperience />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}