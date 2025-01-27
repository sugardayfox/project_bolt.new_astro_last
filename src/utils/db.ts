import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export async function getDirectoryItems(lang: string) {
  const items = await getCollection('directory');
  return items.filter(item => item.data.lang === lang);
}

export async function getBlogPosts(lang: string) {
  const posts = await getCollection('posts');
  return posts.filter(post => post.data.lang === lang);
}

export async function getDirectoryItem(slug: string) {
  const items = await getCollection('directory');
  return items.find(item => item.slug === slug);
}

export async function getBlogPost(slug: string) {
  const posts = await getCollection('posts');
  return posts.find(post => post.slug === slug);
}