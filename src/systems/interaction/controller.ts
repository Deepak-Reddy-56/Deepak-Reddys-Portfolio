import type { InteractionEvent, InteractionRequest } from './types';

type InteractionRequestListener = (request: InteractionRequest) => void;
type InteractionEventListener = (event: InteractionEvent) => void;

const requestListeners = new Set<InteractionRequestListener>();
const eventListeners = new Set<InteractionEventListener>();

export function requestInteraction(request: InteractionRequest) {
  for (const listener of requestListeners) {
    listener(request);
  }
}

export function emitInteractionEvent(event: InteractionEvent) {
  for (const listener of eventListeners) {
    listener(event);
  }
}

export function subscribeInteractionRequests(listener: InteractionRequestListener) {
  requestListeners.add(listener);
  return () => {
    requestListeners.delete(listener);
  };
}

export function subscribeInteractionEvents(listener: InteractionEventListener) {
  eventListeners.add(listener);
  return () => {
    eventListeners.delete(listener);
  };
}
