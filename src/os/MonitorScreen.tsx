import { Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import type { Object3D } from 'three';
import Desktop from './Desktop';
import StandbyScreen from './standby/StandbyScreen';
import { getState } from '../systems/camera/registry';
import { requestCameraState } from '../systems/camera/cameraController';

interface MonitorScreenProps {
  screenObject: Object3D;
}

export default function MonitorScreen({
  screenObject,
}: MonitorScreenProps) {
  const { camera } = useThree();

  const [poweredOn, setPoweredOn] = useState(false);
  const poweredOnRef = useRef(false);

  const transform = useMemo(() => {
    screenObject.updateWorldMatrix(true, false);

    const position = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();

    screenObject.matrixWorld.decompose(
      position,
      quaternion,
      scale
    );

    return {
      position,
      quaternion,
      scale,
    };
  }, [screenObject]);

  useFrame(() => {
    const monitorState = getState('Monitor');

    if (!monitorState) {
      return;
    }

    const targetPosition = new THREE.Vector3(
      ...monitorState.position
    );

    const distance = camera.position.distanceTo(targetPosition);

    // Camera has reached the Monitor state.
    if (distance < 0.15 && !poweredOnRef.current) {
      poweredOnRef.current = true;
      setPoweredOn(true);
    }

    // Camera has left the Monitor state.
    if (distance > 0.5 && poweredOnRef.current) {
      poweredOnRef.current = false;
      setPoweredOn(false);
    }
  });

  const wakeMonitor = () => {
    requestCameraState('Monitor');
  };

  return (
    <group
      position={transform.position}
      quaternion={transform.quaternion}
      scale={transform.scale}
    >
      <Html
        transform
        center
        position={[0, 0, 0.01]}
        distanceFactor={1}
        style={{
          width: '710px',
          height: '402px',
          background: '#111',
          color: '#fff',
          overflow: 'hidden',
          pointerEvents: 'auto',
          padding: 0,
          margin: 0,
          border: 'none',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
          }}
        >
          {poweredOn ? (
            <Desktop />
          ) : (
            <StandbyScreen onWake={wakeMonitor} />
          )}
        </div>
      </Html>
    </group>
  );
}