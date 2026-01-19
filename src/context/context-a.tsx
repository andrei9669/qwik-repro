import {
  component$,
  createContextId,
  Signal,
  Slot,
  useContextProvider,
  useSignal,
} from '@qwik.dev/core';

export const ContextAId =
  createContextId<Signal<string | undefined>>('contextA');

export const ContextAProvider = component$(() => {
  const signal = useSignal<string | undefined>();
  useContextProvider(ContextAId, signal);
  return <Slot />;
});
