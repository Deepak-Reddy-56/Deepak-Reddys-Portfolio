import { useEffect, useRef } from 'react';
import { getInteractable } from './registry';
import {
  emitInteractionEvent,
  subscribeInteractionEvents,
  subscribeInteractionRequests,
} from './controller';

export default function InteractionManager() {
  const hoveredTarget = useRef<string | null>(null);

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

    const unsubscribeEvents = subscribeInteractionEvents(() => {
      // Reserved for future interaction lifecycle handling.
    });

    return () => {
      unsubscribeRequests();
      unsubscribeEvents();
    };
  }, []);

  return null;
}
