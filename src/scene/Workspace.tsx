import { useGLTF } from '@react-three/drei';

import workspaceUrl from '../../assets/models/workspace.glb?url';
import SceneInteractionTarget from '../systems/scene-interaction/SceneInteractionTarget';

export default function Workspace() {
  const { scene } = useGLTF(workspaceUrl);

  const monitorObject = scene.getObjectByName('Monitor');

  if (!monitorObject) {
    throw new Error('Monitor object not found in workspace scene.');
  }

  return (
    <>
      <primitive object={scene} />

      <SceneInteractionTarget
        definition={{
          id: 'monitor',
          object: monitorObject,
          supportedInteractions: [
            'hover',
            'hoverEnd',
            'click',
            'doubleClick',
            'focus',
            'blur',
          ],
        }}
      />
    </>
  );
}