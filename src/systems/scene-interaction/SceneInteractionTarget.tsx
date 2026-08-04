import { useEffect } from 'react';
import { useSceneInteractionBridge } from './useSceneInteractionBridge';
import type { SceneInteractionTargetDefinition } from './types';

interface SceneInteractionTargetProps {
  definition: SceneInteractionTargetDefinition;
}

export default function SceneInteractionTarget({ definition }: SceneInteractionTargetProps) {
  const { registerTarget, unregisterTarget } = useSceneInteractionBridge();

  useEffect(() => {
    registerTarget(definition);

    return () => {
      unregisterTarget(definition.id);
    };
  }, [definition, registerTarget, unregisterTarget]);

  return null;
}
