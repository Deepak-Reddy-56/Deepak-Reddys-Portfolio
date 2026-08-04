import { useContext } from 'react';
import { SceneInteractionBridgeContext } from './bridgeContext';

export function useSceneInteractionBridge() {
  const context = useContext(SceneInteractionBridgeContext);

  if (!context) {
    throw new Error('SceneInteractionBridgeProvider is required to register scene interactions.');
  }

  return context;
}
