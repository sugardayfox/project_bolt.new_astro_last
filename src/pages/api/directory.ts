import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ url }) => {
  const lang = url.searchParams.get('lang') || 'en';
  
  try {
    const items = await getCollection('directory');
    const filteredItems = items.filter(item => item.data.lang === lang);

    return new Response(JSON.stringify(filteredItems), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch directory items' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}