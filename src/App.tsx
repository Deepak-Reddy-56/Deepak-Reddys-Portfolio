import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Workspace from './scene/Workspace';
import CameraManager from './systems/camera/CameraManager';

export default function App() {
  return (
    <Canvas camera={{ fov: 39.6, near: 0.1, far: 1000 }}>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 8, 6]} intensity={0.7} />
      <CameraManager />
      <Suspense fallback={null}>
        <Workspace />
      </Suspense>
    </Canvas>
  );
}