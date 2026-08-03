import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { subscribeCameraRequests } from './cameraController';
import { getState, registerDefaultStates } from './registry';

// CameraManager listens for requested camera states and applies them.
// For Phase 4 we only register and apply the initial Landing state. No
// interpolation or animation is performed here; that will be introduced in
// future milestones.
export default function CameraManager() {
  const { camera } = useThree();

  useEffect(() => {
    registerDefaultStates();

    // Apply the default Landing state immediately
    const landing = getState('Landing');
    if (landing) {
      camera.position.set(...landing.position);
      camera.lookAt(...landing.lookAt);
      if (landing.roll) camera.rotateZ(landing.roll);
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld();
    }

    // Subscribe to future requests. For now this just applies states
    // immediately without animation.
    const unsub = subscribeCameraRequests((stateId) => {
      const s = getState(stateId);
      if (!s) return;
      camera.position.set(...s.position);
      camera.lookAt(...s.lookAt);
      if (s.roll) camera.rotateZ(s.roll);
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld();
    });

    return () => { unsub(); };
  }, [camera]);

  return null;
}
