import { useMemo } from 'react';
import { registerInteractable, unregisterInteractable } from '../interaction/registry';
import { SceneInteractionBridgeContext } from './bridgeContext';
import type { SceneInteractionTargetDefinition } from './types';

export function SceneInteractionBridgeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useMemo(
    () => ({
      registerTarget: (definition: SceneInteractionTargetDefinition) => {
        registerInteractable({
          id: definition.id,
          object: definition.object,
          supportedInteractions: definition.supportedInteractions,
        });
      },

      unregisterTarget: (id: string) => {
        unregisterInteractable(id);
      },
    }),
    []
  );

  return (
    <SceneInteractionBridgeContext.Provider value={value}>
      {children}
    </SceneInteractionBridgeContext.Provider>
  );
}