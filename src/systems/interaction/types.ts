export type InteractionType = 'hover' | 'hoverEnd' | 'click' | 'doubleClick' | 'focus' | 'blur' | 'input';

import type { Object3D } from "three";

export interface InteractableRegistration {
    id: string;
    object: Object3D;
    supportedInteractions: InteractionType[];
    cameraState?: string;
}

export interface InteractionRequest {
  targetId: string;
  type: InteractionType;
  source?: string;
  payload?: unknown;
}

export interface InteractionEvent {
  id: string;
  targetId: string;
  type: InteractionType;
  timestamp: number;
  payload?: unknown;
}
