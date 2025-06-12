import React from 'react';
import Hero from './Hero';
import ServicesOverview from './ServicesOverview';
import AboutSection from './AboutSection';
import Testimonials from './Testimonials';
import ContactCTA from './ContactCTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutSection />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default HomePage;
