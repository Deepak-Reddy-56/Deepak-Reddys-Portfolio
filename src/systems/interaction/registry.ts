import type { InteractableRegistration } from './types';

const interactables = new Map<string, InteractableRegistration>();

export function registerInteractable(interactable: InteractableRegistration) {
  if (!interactable.id) return;
  interactables.set(interactable.id, interactable);
}

export function unregisterInteractable(id: string) {
  interactables.delete(id);
}

export function getInteractable(id: string): InteractableRegistration | undefined {
  return interactables.get(id);
}

export function listInteractables(): InteractableRegistration[] {
  return Array.from(interactables.values());
}
