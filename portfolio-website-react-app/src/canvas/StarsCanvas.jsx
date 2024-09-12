// src/StarsCanvas.jsx
import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

// Component representing the stars in the 3D space.
const Stars = (props) => {
  const ref = useRef(); // Reference to the Points object for rotation control.

  // Generate 5000 random points within a sphere of radius 1.2, stored in a Float32Array.
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  const [paused, setPaused] = useState(false); // State to control if animation is paused.

  // Handles the rotation of the points every frame unless paused.
  useFrame((state, delta) => {
    if (!paused) {
      ref.current.rotation.x -= delta / 10; // Slowly rotate stars on the X-axis.
      ref.current.rotation.y -= delta / 15; // Slowly rotate stars on the Y-axis.
    }
  });

  // Toggles the animation on or off when the 'animationpause' event is triggered (not built-in, may need custom event).
  useEffect(() => {
    const handlePause = () => {
      setPaused((prev) => !prev); // Toggle paused state.
    };

    window.addEventListener('animationpause', handlePause); // Listen for custom pause event.

    return () => {
      window.removeEventListener('animationpause', handlePause); // Clean up listener on unmount.
    };
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}> {/* Set initial group rotation */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        {/* Rendering the points (stars) in 3D space using the sphere data */}
        <PointMaterial
          transparent
          color='#f272c8' // Set star color to light pink.
          size={0.002} // Set size of each star.
          sizeAttenuation={true} // Adjust size based on distance from the camera.
          depthWrite={false} // Disable depth writing to avoid depth conflicts.
        />
      </Points>
    </group>
  );
};

// Component that renders the 3D canvas and stars.
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
        zIndex: -1, // Ensure the background stays behind all other content.
        pointerEvents: 'none', // Prevent interaction with the background (e.g., clicks).
        background: 'linear-gradient(135deg, rgb(10, 0, 0), rgb(0, 0, 30))' // Dark gradient background.
      }}
    >
      {/* Canvas for rendering 3D content with a camera positioned at [0, 0, 1] */}
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true }} // Enable transparency in the WebGL context.
      >
        <Suspense fallback={null}>
          {/* Load and render the Stars component when ready */}
          <Stars />
        </Suspense>

        {/* Preload all assets to ensure smooth rendering */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;