import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './sections/Navbar';
import Home from './sections/Home';
import  StarsCanvas from './canvas/StarsCanvas.jsx';
import AboutMe from "./sections/AboutMe.jsx";

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
    <StarsCanvas />
      <div className="parallax-container-home">
      <Parallax pages={3}>
          <ParallaxLayer offset={0} style={{ height: '150vh' }}>
                <Home />
                <AboutMe />
           </ParallaxLayer>
    </Parallax>
    </div>
    </>
  );
}

export default App;
