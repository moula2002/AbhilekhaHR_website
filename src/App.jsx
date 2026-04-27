import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import ITProfiles from './components/sections/ITProfiles';
import NonITProfiles from './components/sections/NonITProfiles';
import Services from './components/sections/Services';
import AboutPage from './components/sections/AboutPage';
import CareersPage from './components/sections/CareersPage';
import ContactPage from './components/sections/ContactPage';

// Scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen font-inter text-slate-900 bg-surface">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/it-recruitment" element={<ITProfiles />} />
          <Route path="/non-it-recruitment" element={<NonITProfiles />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;