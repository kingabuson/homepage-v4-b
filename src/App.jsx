import React from 'react';
import Header from './components/Header';
import HeroEditorial from './components/HeroEditorial';
import LogoMarquee from './components/LogoMarquee';
import FloatingCTA from './components/FloatingCTA';

import Features from './components/Features';
import Stats from './components/Stats';
import CustomerSegments from './components/CustomerSegments';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import ArrowBackground from './components/ArrowBackground';

import VideoTestimonials from './components/VideoTestimonials';
import TracxnAI from './components/TracxnAI';

function App() {
  return (
    <div className="App">
      <ArrowBackground />
      <Header />
      <main>
        <HeroEditorial />
        <LogoMarquee />

        <AnimatedSection>
          <CustomerSegments />
        </AnimatedSection>

        <AnimatedSection>
          <Features />
        </AnimatedSection>

        <AnimatedSection>
          <Stats />
        </AnimatedSection>

        <AnimatedSection>
          <TracxnAI />
        </AnimatedSection>

        <AnimatedSection>
          <VideoTestimonials />
        </AnimatedSection>

        <AnimatedSection>
          <CTASection />
        </AnimatedSection>
      </main>
      <Footer />
      <FloatingCTA href="#demo" label="Request for demo" />
    </div>
  );
}

export default App;
