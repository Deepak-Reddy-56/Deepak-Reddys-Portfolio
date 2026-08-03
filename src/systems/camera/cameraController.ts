type CameraRequestListener = (stateId: string) => void;

const listeners = new Set<CameraRequestListener>();

export function requestCameraState(stateId: string) {
  for (const l of listeners) l(stateId);
}

export function subscribeCameraRequests(listener: CameraRequestListener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
