export interface CameraState {
  id: string;
  position: [number, number, number];
  lookAt: [number, number, number];
  roll?: number;
  fov?: number;
  near?: number;
  far?: number;
}
