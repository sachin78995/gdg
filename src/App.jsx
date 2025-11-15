import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home, { initializeParticles } from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize particle animation when component mounts
    const timer = setTimeout(() => {
      initializeParticles();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Events />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
