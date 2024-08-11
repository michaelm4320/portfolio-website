import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './sections/Navbar';
import Home from './sections/Home';
import  StarsCanvas from './canvas/StarsCanvas.jsx';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
<StarsCanvas />
      <div className="parallax-container-home">
      <Parallax pages={2}>
           <ParallaxLayer offset={0}>

              <Home />
              <Navbar />
      </ParallaxLayer>
    </Parallax>
    </div>
    </>
  );
}

export default App;
