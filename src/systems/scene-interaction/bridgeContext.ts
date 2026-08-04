import { createContext } from 'react';
import type { SceneInteractionTargetDefinition } from './types';

export interface SceneInteractionBridgeValue {
  registerTarget: (definition: SceneInteractionTargetDefinition) => void;
  unregisterTarget: (id: string) => void;
}

export const SceneInteractionBridgeContext = createContext<SceneInteractionBridgeValue | null>(null);
