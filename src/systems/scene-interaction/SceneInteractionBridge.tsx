import { useMemo } from 'react';
import { registerInteractable, unregisterInteractable } from '../interaction/registry';
import { SceneInteractionBridgeContext } from './bridgeContext';

export function SceneInteractionBridgeProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo(() => ({
    registerTarget: (definition: { id: string; supportedInteractions: import('../interaction/types').InteractionType[] }) => {
      registerInteractable({
        id: definition.id,
        supportedInteractions: definition.supportedInteractions,
      });
    },
    unregisterTarget: (id: string) => {
      unregisterInteractable(id);
    },
  }), []);

  return (
    <SceneInteractionBridgeContext.Provider value={value}>
      {children}
    </SceneInteractionBridgeContext.Provider>
  );
}
