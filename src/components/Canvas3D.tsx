
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';
import * as THREE from 'three';

const Scene = () => {
  const boxRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const cylinderRef = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    if (boxRef.current && sphereRef.current && cylinderRef.current) {
      // Start animation
      const animate = () => {
        if (boxRef.current) {
          boxRef.current.rotation.y += 0.005;
          boxRef.current.rotation.x += 0.002;
        }
        
        if (sphereRef.current) {
          sphereRef.current.rotation.y -= 0.003;
          sphereRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
        }
        
        if (cylinderRef.current) {
          cylinderRef.current.rotation.z += 0.005;
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
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3366ff" />
      
      {/* Data cube */}
      <mesh ref={boxRef} position={[-2, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#475569" />
      </mesh>
      
      {/* Machine learning sphere */}
      <mesh ref={sphereRef} position={[2, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#64748b" metalness={0.5} roughness={0.2} />
      </mesh>
      
      {/* Analytics cylinder */}
      <mesh ref={cylinderRef} position={[0, -1, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 2, 32]} />
        <meshStandardMaterial color="#334155" metalness={0.3} roughness={0.4} />
      </mesh>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-slate-600 font-bold">Loading 3D Experience...</div>
  </div>
);

const Canvas3D = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full h-full ${className || ''}`}>
      <Canvas 
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ 
          touchAction: 'none',
          outline: 'none',
          background: 'transparent'
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#f8fafc'), 0);
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
