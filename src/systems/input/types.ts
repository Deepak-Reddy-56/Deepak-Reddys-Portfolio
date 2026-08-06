export type InputDeviceType = 'pointer' | 'keyboard' | 'touch' | 'gamepad';

export type InputEventType =
  | 'pointerDown'
  | 'pointerMove'
  | 'pointerUp'
  | 'pointerCancel'
  | 'keyDown'
  | 'keyUp'
  | 'touchStart'
  | 'touchMove'
  | 'touchEnd'
  | 'touchCancel'
  | 'gamepadConnect'
  | 'gamepadDisconnect';

export interface InputSourceRegistration {
  id: string;
  device: InputDeviceType;
  supportedEvents: InputEventType[];
}

export interface InputEvent {
  id: string;
  sourceId: string;
  device: InputDeviceType;
  type: InputEventType;
  timestamp: number;
  payload?: unknown;
}

export interface InputRequest {
  id: string;
  sourceId: string;
  device: InputDeviceType;
  type: InputEventType;
  timestamp: number;
  payload?: unknown;
}
