import { useEffect, useRef } from 'react';
import { subscribeInputEvents } from '../input/controller';
import { getInteractable } from './registry';
import type { PointerInputPayload } from '../input/types';
import { requestCameraState } from '../camera/cameraController';
import {
  emitInteractionEvent,
  subscribeInteractionEvents,
  subscribeInteractionRequests,
} from './controller';

export default function InteractionManager() {
  const hoveredTarget = useRef<string | null>(null);
  const focusedTarget = useRef<string | null>(null);

  useEffect(() => {
    const unsubscribeRequests = subscribeInteractionRequests((request) => {

      const interactable = getInteractable(request.targetId);

      if (!interactable) {
        if (hoveredTarget.current !== null) {
          emitInteractionEvent({
            id: crypto.randomUUID(),
            targetId: hoveredTarget.current,
            type: 'hoverEnd',
            timestamp: Date.now(),
          });

          hoveredTarget.current = null;
        }

        return;
      }

      if (hoveredTarget.current === interactable.id) {
        return;
      }

      if (hoveredTarget.current !== null) {
        emitInteractionEvent({
          id: crypto.randomUUID(),
          targetId: hoveredTarget.current,
          type: 'hoverEnd',
          timestamp: Date.now(),
        });
      }

      hoveredTarget.current = interactable.id;


      emitInteractionEvent({
        id: crypto.randomUUID(),
        targetId: interactable.id,
        type: 'hover',
        timestamp: Date.now(),
      });
    });

    const unsubscribeInputEvents = subscribeInputEvents((event) => {
      if (event.type !== 'pointerDown') {
        return;
      }

      if (event.device !== 'pointer') {
        return;
      }

      const payload = event.payload as PointerInputPayload | undefined;

      if (!payload || payload.button !== 0) {
        return;
      }

      if (hoveredTarget.current === null) {
        return;
      }


      emitInteractionEvent({
        id: crypto.randomUUID(),
        targetId: hoveredTarget.current,
        type: 'click',
        timestamp: Date.now(),
      });
    });

    const unsubscribeEvents = subscribeInteractionEvents((event) => {

      if (event.type !== 'click') {
        return;
      }

      requestCameraState('Monitor');


      if (focusedTarget.current === event.targetId) {
        return;
      }

      if (focusedTarget.current !== null) {
        emitInteractionEvent({
          id: crypto.randomUUID(),
          targetId: focusedTarget.current,
          type: 'blur',
          timestamp: Date.now(),
        });
      }

      focusedTarget.current = event.targetId;

      emitInteractionEvent({
        id: crypto.randomUUID(),
        targetId: focusedTarget.current,
        type: 'focus',
        timestamp: Date.now(),
      });
    });

    return () => {
      unsubscribeRequests();
      unsubscribeInputEvents();
      unsubscribeEvents();
    };
  }, []);

  return null;
}
