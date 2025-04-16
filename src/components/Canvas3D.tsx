
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';
import * as THREE from 'three';

const Scene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    if (meshRef.current) {
      // Start a gentle rotation animation
      const animate = () => {
        if (meshRef.current) {
          meshRef.current.rotation.y += 0.005;
          meshRef.current.rotation.x += 0.002;
        }
        requestAnimationFrame(animate);
      };
      
      const animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#6366f1" />
      </mesh>
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </>
  );
};

interface Canvas3DProps {
  className?: string;
}

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-indigo-600 font-bold">Loading 3D Experience...</div>
  </div>
);

const Canvas3D = ({ className }: Canvas3DProps) => {
  return (
    <div className={`w-full h-full ${className || ''}`}>
      <Canvas 
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]} // Responsive to device pixel ratio
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ 
          touchAction: 'none',
          outline: 'none',
          background: 'transparent'
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Canvas3D;
