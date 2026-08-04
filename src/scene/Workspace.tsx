import { useGLTF } from '@react-three/drei';

import workspaceUrl from '../../assets/models/workspace.glb?url';
import SceneInteractionTarget from '../systems/scene-interaction/SceneInteractionTarget';

export default function Workspace() {
  const { scene } = useGLTF(workspaceUrl);

  return (
    <>
      <primitive object={scene} />
      <SceneInteractionTarget
        definition={{
          id: 'monitor',
          supportedInteractions: ['hover', 'hoverEnd', 'click', 'doubleClick', 'focus', 'blur'],
        }}
      />
    </>
  );
}