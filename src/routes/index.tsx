import { useNavigate, type DocumentHead } from '@qwik.dev/router';
import { component$, useContext } from '@qwik.dev/core';
import { ContextAId } from '~/context/context-a.tsx';

export default component$(() => {
  const nav = useNavigate();
  const signalA = useContext(ContextAId);
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        <button
          onClick$={() => {
            signalA.value = Math.random().toString();
            void nav('/path-1');
          }}
        >
          navigate
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
