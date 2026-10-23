import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import DevExperience from './components/DevExperience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import InviteTraining from './components/InviteTraining';

export default function App() {
  const isInviteTrainingPage = window.location.pathname.replace(/\/$/, '') === '/invite-training';

  return (
    <div className="app-container">
      <Navbar />
      <main>
        {isInviteTrainingPage ? (
          <InviteTraining />
        ) : (
          <>
            <Hero />
            <Clients />
            <Features />
            <DevExperience />
            <Testimonials />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}