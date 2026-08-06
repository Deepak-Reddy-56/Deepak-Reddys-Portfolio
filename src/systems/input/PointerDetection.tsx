import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Raycaster, PerspectiveCamera } from "three";

import { listInteractables } from "../interaction/registry";
import { requestInteraction } from "../interaction/controller";

const raycaster = new Raycaster();

export default function PointerDetection() {
  const { camera, pointer } = useThree();
  const previousTarget = useRef<string | null>(null);

  useFrame(() => {

    if (!(camera instanceof PerspectiveCamera)) {
    return;
}

    raycaster.setFromCamera(pointer, camera);

    let currentTarget: string | null = null;

    for (const interactable of listInteractables()) {
      const hits = raycaster.intersectObject(interactable.object, true);

      if (hits.length > 0) {
        currentTarget = interactable.id;
        break;
      }
    }

    if (currentTarget !== previousTarget.current) {
      previousTarget.current = currentTarget;

      if (currentTarget) {
        requestInteraction({
          targetId: currentTarget,
          type: "input",
        });
      }
    }
  });

  return null;
}