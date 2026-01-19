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
import { ContextBId } from '~/context/context-b.tsx';

export const ContextCId =
  createContextId<Signal<string | undefined>>('contextC');

export const ContextCProvider = component$(() => {
  const signal = useSignal<string | undefined>();
  const signalB = useContext(ContextBId);

  useVisibleTask$(({ track }) => {
    track(() => signalB.value);
    signal.value = signalB.value;
  });

  useContextProvider(ContextCId, signal);
  useContext(ContextCId);
  return typeof signal.value === 'string' ? <Slot /> : <div>loading . . .</div>;
});
