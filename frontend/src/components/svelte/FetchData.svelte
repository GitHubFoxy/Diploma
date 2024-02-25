<script >
  let data = "Waiting for fetch";
  async function FetchData() {
    const response = await fetch("api/FetchFromBun", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.text();
    data = result;
  }
</script>

<button on:click={FetchData}>Fetch Data</button>
<h1>{data}</h1>
