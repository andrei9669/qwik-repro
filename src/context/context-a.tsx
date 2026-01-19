import {
  component$,
  createContextId,
  Signal,
  Slot,
  useContext,
  useContextProvider,
  useSignal,
} from '@qwik.dev/core';

export const ContextAId =
  createContextId<Signal<string | undefined>>('contextA');

export const ContextAProvider = component$(() => {
  const signal = useSignal<string | undefined>();
  useContextProvider(ContextAId, signal);
  useContext(ContextAId);
  return <Slot />;
});
