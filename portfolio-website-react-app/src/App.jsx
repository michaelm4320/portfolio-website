import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './sections/Navbar';
import Home from './sections/Home';
import  StarsCanvas from './canvas/StarsCanvas.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StarsCanvas />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
