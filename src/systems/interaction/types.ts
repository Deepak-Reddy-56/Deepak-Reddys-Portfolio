export type InteractionType = 'hover' | 'hoverEnd' | 'click' | 'doubleClick' | 'focus' | 'blur' | 'input';

export interface InteractableRegistration {
  id: string;
  supportedInteractions: InteractionType[];
}

export interface InteractionRequest {
  targetId: string;
  type: InteractionType;
  source?: string;
  payload?: unknown;
}

export interface InteractionEvent {
  id: string;
  targetId: string;
  type: InteractionType;
  timestamp: number;
  payload?: unknown;
}
