import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { getFresnelMat } from './getFresnelMat.jsx'; // Ensure this file is correctly imported

const EarthModel = () => {
  const groupRef = useRef();
  const { scene } = useThree();
  const [animationsPaused, setAnimationsPaused] = useState(false);

  // Textures (replace these with your own or placeholders)
  const [earthMap, specularMap, bumpMap, lightsMap, cloudsMap, alphaMap] = useTexture([
    '/textures/00_earthmap1k.jpg',
    '/textures/02_earthspec1k.jpg',
    '/textures/01_earthbump1k.jpg',
    '/textures/03_earthlights1k.jpg',
    '/textures/04_earthcloudmap.jpg',
    '/textures/05_earthcloudmaptrans.jpg',
  ]);

  useEffect(() => {
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(-2, 0.5, 1.5);
    scene.add(sunLight);
    return () => scene.remove(sunLight);
  }, [scene]);

  useEffect(() => {
    const handleAnimationPause = () => {
      setAnimationsPaused(document.body.classList.contains('animations-paused'));
    };

    handleAnimationPause(); // Initialize state
    window.addEventListener('animationpause', handleAnimationPause);

    return () => {
      window.removeEventListener('animationpause', handleAnimationPause);
    };
  }, []);

  useFrame(() => {
    if (!animationsPaused) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  const geometry = new THREE.IcosahedronGeometry(1, 12);

  return (
    <group ref={groupRef} rotation={[0, 0, -23.4 * (Math.PI / 180)]}>
      <mesh geometry={geometry}>
        <meshPhongMaterial
          map={earthMap}
          specularMap={specularMap}
          bumpMap={bumpMap}
          bumpScale={0.04}
        />
      </mesh>
      <mesh geometry={geometry}>
        <meshBasicMaterial
          map={lightsMap}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh geometry={geometry} scale={[1.003, 1.003, 1.003]}>
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          alphaMap={alphaMap}
        />
      </mesh>
      <mesh geometry={geometry} scale={[1.01, 1.01, 1.01]}>
        <primitive object={getFresnelMat()} />
      </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1.7], fov: 75, near: 0.1, far: 1000 }}
      gl={{ antialias: true }}
      shadows
      dpr={[1, 2]}
    >
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.1} />
      <EarthModel />
    </Canvas>
  );
};

export default EarthCanvas;
