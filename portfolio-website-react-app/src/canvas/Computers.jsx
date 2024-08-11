import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const YourModel = ({ isMobile }) => {
  const model = useGLTF("/models/scene.gltf");

  return (
    <mesh>
          <hemisphereLight intensity={2.8} groundColor='black' />
          <spotLight
            position={[10, 2, 10]} // Adjusted position
            angle={5.1} // Wider angle
            penumbra={2}
            intensity={0} // Increased intensity
            castShadow
            shadow-mapSize={1024}
          />
          <pointLight intensity={50.9} position={[0, -10, -30]} /> {/* Additional light */}
          <ambientLight intensity={0.1} /> {/* Soft global illumination */}
          <primitive
            object={model.scene}
            scale={isMobile ? 1.0 : 10.65}
            position={isMobile ? [0, -3, -3] : [0.5, 0.5, -5.8]}
            rotation={[-0.00, -0.00, -0.0]}
          />
        </mesh>
  );
};


const YourModelCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
  <div className="canvas-container"> {/* New wrapping div */}
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: isMobile ? [2, 2, 8] : [8, 10, 15], fov: 25, near: 0.1, far: 1000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
            enableZoom={false}
            enablePan={false}  // Disable panning
            //target={[0, 0, 0]}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={isMobile ? [0, -3, -3] : [0.5, 0.5, -5.8]}
        />
        <YourModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
    </div>
  );
};

export default YourModelCanvas;