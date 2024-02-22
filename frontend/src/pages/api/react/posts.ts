export async function GET({ params, request}) {
    const response = await fetch("http://localhost:3001")
    if (response.ok) {  
        const data = await response.text()
        return new Response(data)
    }
}