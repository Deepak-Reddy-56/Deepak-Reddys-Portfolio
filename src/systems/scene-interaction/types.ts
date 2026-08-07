import type { InteractionType } from '../interaction/types';
import type { Object3D } from 'three';

export interface SceneInteractionTargetDefinition {
  id: string;
  object: Object3D;
  supportedInteractions: InteractionType[];
  cameraState?: string;
}
