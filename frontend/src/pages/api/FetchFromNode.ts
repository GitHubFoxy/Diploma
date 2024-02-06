export async function GET({params, request}) {
    const response = await fetch("http:/localhost:3000/")
    if (response.ok) {
      return new Response(await response.text())
    }
    return new Response('something went wrong')
}