import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './sections/Navbar';
import Home from './sections/Home';

import {Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Parallax pages={1}>
        <ParallaxLayer offset={0}>
        <Home />
        </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}

export default App;
