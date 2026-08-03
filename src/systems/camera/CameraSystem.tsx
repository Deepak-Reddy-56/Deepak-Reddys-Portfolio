import { useLayoutEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { INITIAL_CAMERA } from './cameraConfig';

export default function CameraSystem() {
  const { camera } = useThree();

  useLayoutEffect(() => {
    // Apply the canonical static inspection camera
    camera.position.set(...INITIAL_CAMERA.position);
    camera.lookAt(...INITIAL_CAMERA.lookAt);
    camera.rotateZ(INITIAL_CAMERA.roll);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
  }, [camera]);

  return null;
}
