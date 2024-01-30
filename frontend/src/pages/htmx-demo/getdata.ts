    export async function GET({params, request}) {
        const response = await fetch("http:/localhost/index.php")
  return new Response(await response.text())
}