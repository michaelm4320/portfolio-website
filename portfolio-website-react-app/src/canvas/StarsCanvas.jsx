// src/StarsCanvas.jsx
import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  const [paused, setPaused] = useState(false);

  useFrame((state, delta) => {
    if (!paused) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  useEffect(() => {
    const handlePause = () => {
      setPaused((prev) => !prev);
    };

    window.addEventListener('animationpause', handlePause);

    return () => {
      window.removeEventListener('animationpause', handlePause);
    };
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div
      className='stars-canvas'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Ensure it's behind other content
        pointerEvents: 'none', // So it doesn't interfere with scrolling or clicking
        background: 'linear-gradient(135deg, rgb(10, 0, 0), rgb(0, 0, 30))'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
