import { useEffect } from 'react';
import { getInteractable } from './registry';
import { subscribeInteractionEvents, subscribeInteractionRequests } from './controller';

export default function InteractionManager() {
  useEffect(() => {
    const unsubscribeRequests = subscribeInteractionRequests((request) => {
      getInteractable(request.targetId);
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
