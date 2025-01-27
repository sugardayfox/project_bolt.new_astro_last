import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  return new Response(JSON.stringify({ 
    error: 'Submissions are handled through content management' 
  }), {
    status: 400,
    headers: { 'Content-Type': 'application/json' }
  });
};