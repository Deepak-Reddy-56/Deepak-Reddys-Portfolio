import { Suspense, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';
import Workspace from './scene/Workspace';

function BlenderCamera() {
  const { camera } = useThree();

  useLayoutEffect(() => {
    camera.position.set(-11.173, 20.88, 40.8);
    camera.lookAt(-6.09272942519131, 18.61890572857945, 12.498397067386922);
    camera.rotateZ(0);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
  }, [camera]);

  return null;
}

export default function App() {
  return (
    <Canvas camera={{ fov: 39.6, near: 0.1, far: 1000 }}>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 8, 6]} intensity={0.7} />
      <BlenderCamera />
      <Suspense fallback={null}>
        <Workspace />
      </Suspense>
    </Canvas>
  );
}