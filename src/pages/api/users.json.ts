import type { APIRoute } from 'astro';


export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/'
    })
  )
}

export function getStaticPaths() {
  return [
    { params: { id: "0" } },
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } }
  ]
}
