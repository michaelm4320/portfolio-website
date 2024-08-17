import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const YourModel = () => {
  const model = useGLTF("/models/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2.8} groundColor='black' />
      <spotLight
        position={[10, 2, 10]}
        angle={5.1}
        penumbra={2}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={50.9} position={[0, -10, -30]} />
      <ambientLight intensity={0.1} />
      <primitive
        object={model.scene}
        scale={10.65} // Unified scale
        position={[0.0, 0.5, -5.8]} // Unified position
        rotation={[-0.00, -0.00, -0.0]}
      />
    </mesh>
  );
};

const YourModelCanvas = () => {
  return (
    <div className="canvas-container">
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [8, 10, 15], fov: 25, near: 0.1, far: 1000 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            target={[0.5, 0.5, -5.8]} // Unified target
          />
          <YourModel />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default YourModelCanvas;
