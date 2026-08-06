import type { InputSourceRegistration } from './types';

const inputSources = new Map<string, InputSourceRegistration>();

export function registerInputSource(source: InputSourceRegistration) {
  if (!source.id) return;
  inputSources.set(source.id, source);
}

export function unregisterInputSource(id: string) {
  inputSources.delete(id);
}

export function getInputSource(id: string): InputSourceRegistration | undefined {
  return inputSources.get(id);
}

export function listInputSources(): InputSourceRegistration[] {
  return Array.from(inputSources.values());
}
