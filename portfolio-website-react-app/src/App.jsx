import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import  StarsCanvas from './canvas/StarsCanvas.jsx';
import AboutMe from "./sections/AboutMe.jsx";
import Experience from "./sections/Experience.jsx";
import Portfolio from "./sections/Portfolio.jsx";

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Navbar />
        <StarsCanvas />
        <Hero />
        <AboutMe />
        <Experience />
        <Portfolio />
    </>
  );
}

export default App;