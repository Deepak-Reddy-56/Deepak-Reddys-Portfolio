import type { InteractionType } from '../interaction/types';

export interface SceneInteractionTargetDefinition {
  id: string;
  supportedInteractions: InteractionType[];
}
