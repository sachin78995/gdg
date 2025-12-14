import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home, { initializeParticles } from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EventDetail from './components/EventDetail';
import './App.css';

const AnimatedRoute = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.1, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);
  const appRef = useRef();

  useEffect(() => {
    // Initialize particle animation when component mounts
    const timer = setTimeout(() => {
      initializeParticles();
    }, 100);

    // Hide footer on event detail page
    setShowFooter(!location.pathname.includes('event-detail'));

    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => clearTimeout(timer);
  }, [location]);

  const mainPage = (
    <main>
      <Home />
      <About />
      <Events />
      <Team />
      <Contact />
    </main>
  );

  return (
    <div className="App" ref={appRef}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <AnimatedRoute>
                {mainPage}
              </AnimatedRoute>
            } 
          />
          <Route 
            path="/event-detail" 
            element={
              <AnimatedRoute>
                <EventDetail />
              </AnimatedRoute>
            } 
          />
        </Routes>
      </AnimatePresence>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
