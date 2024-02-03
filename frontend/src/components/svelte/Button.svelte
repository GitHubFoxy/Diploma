<script>
  let count = 0;
</script>

<div>
  <button
    class="text-lg cursor-pointer transition-colors p-2 rounded hover:bg-slate-300"
    on:click={() => (count += 1)}>count++</button
  >
  <h1 class="text-xl">{count}</h1>
</div>
