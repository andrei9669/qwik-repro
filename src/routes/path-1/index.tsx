import { component$, useContext } from '@qwik.dev/core';
import { ContextCId } from '~/context/context-c.tsx';

export default component$(() => {
  const signal = useContext(ContextCId);
  return (
    <>
      <div>page path-1</div>
      <div>{signal.value}</div>
    </>
  );
});
