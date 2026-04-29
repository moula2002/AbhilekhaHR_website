import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Verticals from './Verticals';
import Clients from './Clients';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import VisionMission from './VisionMission';
import WhyUs from './WhyUs';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="h-12 bg-white" />
      <Stats />
      <div className="h-12 bg-white" />
      <Verticals />
      <VisionMission />
      <Clients />
      <WhyUs />
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;
