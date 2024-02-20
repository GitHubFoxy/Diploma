export async function GET({ params, request}) {
    const response = await fetch("http://localhost:3002/api/posts/")
    if (response.ok) {
        return new Response(await response.text())
    }
}