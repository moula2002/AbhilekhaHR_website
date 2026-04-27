import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Verticals from './Verticals';
import Clients from './Clients';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Gallery from './Gallery';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Verticals />
      <Clients />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;
