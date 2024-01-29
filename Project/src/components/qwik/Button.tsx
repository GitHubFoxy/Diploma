import { component$, useStore } from '@builder.io/qwik';
// @ts-ignore
export default component$(() => {
  const store = useStore({ count: 0 });

  return (
    <main>
      <p>Count: {store.count}</p>
      <p>
        {/* @ts-ignore */}
        <button onClick$={() => store.count++}>Click</button>
      </p>
    </main>
  );
});
