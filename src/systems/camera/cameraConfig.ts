// Canonical initial camera values (Phase 2 approved)
export const INITIAL_CAMERA = {
  position: [-11.173, 20.88, 40.8] as [number, number, number],
  lookAt: [-6.09272942519131, 18.61890572857945, 12.498397067386922] as [number, number, number],
  roll: 0 as number,
};

export const CAMERA_FOV = {
  LANDING: 39.6,
  MONITOR: 24,
} as const;