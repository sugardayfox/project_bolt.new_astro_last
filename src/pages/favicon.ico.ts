import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/favicon.svg', // Redirect to the favicon.svg in the public folder
    },
  });
};