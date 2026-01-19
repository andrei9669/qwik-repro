import { component$, Slot } from '@qwik.dev/core';
import { ContextBProvider } from '~/context/context-b.tsx';
import { ContextCProvider } from '~/context/context-c.tsx';

export default component$(() => {
  return (
      <ContextBProvider>
        <ContextCProvider>
          <Slot />
        </ContextCProvider>
      </ContextBProvider>
  );
});
