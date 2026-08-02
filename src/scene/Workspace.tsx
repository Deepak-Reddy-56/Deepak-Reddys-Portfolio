import { useGLTF } from '@react-three/drei';

import workspaceUrl from '../../assets/models/workspace.glb?url';

export default function Workspace() {
  const { scene } = useGLTF(workspaceUrl);

  return <primitive object={scene} />;
}