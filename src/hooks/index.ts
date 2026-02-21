import { Signal, useSignal, useTask$ } from '@qwik.dev/core';

const useHook = (): Signal<string> => {
  return useSignal<string>('');
};

export const useMainHook = () => {
  const signal = useSignal<string>('');
  const hookSignal = useHook();

  useTask$((parameters) => {
    parameters.track(signal);
    parameters.track(hookSignal);
  });
};
