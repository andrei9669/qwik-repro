import {
  component$,
  createContextId,
  Signal,
  Slot,
  useContext,
  useContextProvider,
  useSignal,
  useVisibleTask$,
} from '@qwik.dev/core';
import { ContextAId } from '~/context/context-a.tsx';

export const ContextBId =
  createContextId<Signal<string | undefined>>('contextB');

export const ContextBProvider = component$(() => {
  const signal = useSignal<string | undefined>();
  const signalA = useContext(ContextAId);

  useVisibleTask$(({ track }) => {
    track(() => signalA.value);
    signal.value = signalA.value;
  });
  useContextProvider(ContextBId, signal);
  return typeof signal.value === 'string' ? <Slot /> : <div>loading . . .</div>;
});
