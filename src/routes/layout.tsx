import { component$, Slot } from '@qwik.dev/core';
import { ContextAProvider } from '~/context/context-a.tsx';

export default component$(() => {
  return (
    <ContextAProvider>
      <Slot />
    </ContextAProvider>
  );
});
