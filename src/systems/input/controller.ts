import type { InputEvent, InputRequest } from './types';

type InputEventListener = (event: InputEvent) => void;
type InputRequestListener = (request: InputRequest) => void;

const inputEventListeners = new Set<InputEventListener>();
const inputRequestListeners = new Set<InputRequestListener>();

export function emitInputEvent(event: InputEvent) {
  for (const listener of inputEventListeners) {
    listener(event);
  }
}

export function requestInput(request: InputRequest) {
  for (const listener of inputRequestListeners) {
    listener(request);
  }
}

export function subscribeInputEvents(listener: InputEventListener) {
  inputEventListeners.add(listener);
  return () => {
    inputEventListeners.delete(listener);
  };
}

export function subscribeInputRequests(listener: InputRequestListener) {
  inputRequestListeners.add(listener);
  return () => {
    inputRequestListeners.delete(listener);
  };
}
