import type { CameraState } from './types';
import { INITIAL_CAMERA,CAMERA_FOV } from './cameraConfig';

const states = new Map<string, CameraState>();

export function registerState(state: CameraState) {
  if (!state || !state.id) return;
  states.set(state.id, state);
}

export function getState(id: string): CameraState | undefined {
  return states.get(id);
}

export function listStates(): CameraState[] {
  return Array.from(states.values());
}

// Register default placeholder states. The initial "Landing" state uses the
// approved inspection camera values. Other states are placeholders for later
// implementation and intentionally reuse the initial values to avoid visual
// changes until they are specifically defined.
export function registerDefaultStates() {
  registerState({
    id: 'Landing',
    position: INITIAL_CAMERA.position,
    lookAt: INITIAL_CAMERA.lookAt,
    roll: INITIAL_CAMERA.roll,
    fov: 39.6,
    near: 0.1,
    far: 1000,
  });

  const placeholder = {
    position: INITIAL_CAMERA.position,
    lookAt: INITIAL_CAMERA.lookAt,
    roll: INITIAL_CAMERA.roll,
    fov: CAMERA_FOV.LANDING,
    near: 0.1,
    far: 1000,
  } as const;

  registerState({
    id: 'Monitor',
    position: [-6.1, 16.25, 0.8],
    lookAt: [-6.0927, 16.18355, 0.2],
    roll: INITIAL_CAMERA.roll,
    fov: CAMERA_FOV.MONITOR,
    near: 0.1,
    far: 1000,
  });

  registerState({ id: 'Idle', ...placeholder });
  registerState({ id: 'Desk', ...placeholder });

  registerState({ id: 'Desktop', ...placeholder });
  registerState({ id: 'Browser', ...placeholder });
}
