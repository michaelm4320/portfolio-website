import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import StarsCanvas from './canvas/StarsCanvas.jsx';
import AboutMe from "./sections/AboutMe.jsx";
import Experience from "./sections/Experience.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Michael's Portfolio Website";
  }, []);

  useEffect(() => {
    fetch('https://api.michaelmartinez.dev/', {
      method: 'GET'
    })
      .then(response => response.text()) // Handles the response if needed
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
        <Navbar />
        <StarsCanvas />
        <Hero />
        <AboutMe />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
    </>
  );
}

export default App;
