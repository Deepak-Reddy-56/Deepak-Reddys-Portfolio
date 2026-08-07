import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { subscribeCameraRequests } from './cameraController';
import { getState, registerDefaultStates } from './registry';
import { Vector3 } from 'three';

// CameraManager listens for requested camera states and applies them.
// For Phase 4 we only register and apply the initial Landing state. No
// interpolation or animation is performed here; that will be introduced in
// future milestones.
export default function CameraManager() {
  const { camera } = useThree();
  const targetState = useRef(getState('Landing') ?? null);
  const targetPosition = useRef(new Vector3());

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

      targetState.current = s;
    });

    return () => { unsub(); };
  }, [camera]);

  useFrame((_, delta) => {
    const target = targetState.current;

    if (!target) {
      return;
    }

    targetPosition.current.set(...target.position);
    const smoothing = 1.85;
    const alpha = 1 - Math.exp(-smoothing * delta);

    camera.position.lerp(targetPosition.current, alpha);
    camera.lookAt(...target.lookAt);
  });

  return null;
}
