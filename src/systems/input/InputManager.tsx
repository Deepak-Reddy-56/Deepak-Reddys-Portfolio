import { useEffect } from 'react';
import { requestInteraction } from '../interaction/controller';
import { emitInputEvent, requestInput, subscribeInputRequests } from './controller';
import { registerInputSource, unregisterInputSource } from './registry';
import type { InputDeviceType, InputEventType } from './types';

const POINTER_SOURCE_ID = 'pointer';

function getInputType(eventType: string): InputEventType | null {
  switch (eventType) {
    case 'pointerdown':
      return 'pointerDown';
    case 'pointermove':
      return 'pointerMove';
    case 'pointerup':
      return 'pointerUp';
    case 'pointercancel':
      return 'pointerCancel';
    case 'keydown':
      return 'keyDown';
    case 'keyup':
      return 'keyUp';
    case 'touchstart':
      return 'touchStart';
    case 'touchmove':
      return 'touchMove';
    case 'touchend':
      return 'touchEnd';
    case 'touchcancel':
      return 'touchCancel';
    case 'gamepadconnected':
      return 'gamepadConnect';
    case 'gamepaddisconnected':
      return 'gamepadDisconnect';
    default:
      return null;
  }
}

function getInputDevice(type: InputEventType): InputDeviceType {
  if (type.startsWith('pointer')) return 'pointer';
  if (type.startsWith('key')) return 'keyboard';
  if (type.startsWith('touch')) return 'touch';
  return 'gamepad';
}

function createInputRecord(type: InputEventType, payload: unknown) {
  const device = getInputDevice(type);
  const id = `${device}:${type}:${Date.now()}`;

  return {
    id,
    sourceId: POINTER_SOURCE_ID,
    device,
    type,
    timestamp: Date.now(),
    payload,
  };
}

export default function InputManager() {
  useEffect(() => {
    registerInputSource({
      id: POINTER_SOURCE_ID,
      device: 'pointer',
      supportedEvents: ['pointerDown', 'pointerMove', 'pointerUp', 'pointerCancel'],
    });

    const forwardRequest = subscribeInputRequests((request) => {
      requestInteraction({
        targetId: 'input',
        type: 'input',
        source: request.sourceId,
        payload: request,
      });
    });

    const handleDomEvent = (event: Event) => {
      const inputType = getInputType(event.type);

      if (!inputType) {
        return;
      }

      const inputRecord = createInputRecord(inputType, event);
      emitInputEvent(inputRecord);
      requestInput(inputRecord);
    };

    const listeners: Array<[keyof WindowEventMap, EventListener]> = [
      ['pointerdown', handleDomEvent],
      ['pointermove', handleDomEvent],
      ['pointerup', handleDomEvent],
      ['pointercancel', handleDomEvent],
      ['keydown', handleDomEvent],
      ['keyup', handleDomEvent],
      ['touchstart', handleDomEvent],
      ['touchmove', handleDomEvent],
      ['touchend', handleDomEvent],
      ['touchcancel', handleDomEvent],
      ['gamepadconnected', handleDomEvent],
      ['gamepaddisconnected', handleDomEvent],
    ];

    for (const [type, listener] of listeners) {
      window.addEventListener(type, listener, { passive: true });
    }

    return () => {
      forwardRequest();
      unregisterInputSource(POINTER_SOURCE_ID);

      for (const [type, listener] of listeners) {
        window.removeEventListener(type, listener);
      }
    };
  }, []);

  return null;
}
