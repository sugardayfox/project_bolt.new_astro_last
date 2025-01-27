import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ url }) => {
  const lang = url.searchParams.get('lang') || 'en';
  
  try {
    const posts = await getCollection('posts');
    const filteredPosts = posts
      .filter(post => post.data.lang === lang)
      .sort((a, b) => new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime());

    return new Response(JSON.stringify(filteredPosts), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}