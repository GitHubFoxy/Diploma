export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData()
    const data = JSON.stringify(Object.fromEntries(formData));
    const response = await fetch("http://localhost:3002", {
        method: 'POST', 
        body: data
    })
    return new Response(await response.text())
  }