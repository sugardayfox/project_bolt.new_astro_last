import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export async function performSearch(query: string, resultsContainer: HTMLElement) {
  const searchTerm = query.trim().toLowerCase();
  
  if (!searchTerm || searchTerm.length < 2) {
    resultsContainer.innerHTML = '<p class="text-center text-gray-500">Start typing to search...</p>';
    return;
  }

  try {
    const [directory, posts] = await Promise.all([
      getCollection('directory'),
      getCollection('posts')
    ]);

    const filteredResults = [
      ...directory
        .filter(item => 
          item.data.title.toLowerCase().includes(searchTerm) ||
          item.data.description.toLowerCase().includes(searchTerm)
        )
        .map(item => ({
        type: 'directory' as const,
        id: item.slug,
        data: item.data
      })),
      ...posts
        .filter(post =>
          post.data.title.toLowerCase().includes(searchTerm) ||
          post.data.description.toLowerCase().includes(searchTerm)
        )
        .map(post => ({
        type: 'post' as const,
        id: post.slug,
        data: post.data
      }))
    ];

    resultsContainer.innerHTML = filteredResults.length ? filteredResults
      .map(result => `
        <a
          href="/${result.type === 'directory' ? 'directory' : 'blog'}/${result.id}"
          class="block p-4 hover:bg-gray-50 rounded-lg"
        >
          <h3 class="font-semibold">${result.data.title}</h3>
          <p class="text-sm text-gray-600">${result.data.description}</p>
          <span class="text-xs text-gray-500 mt-1 inline-block">
            ${result.type === 'directory' ? 'Directory' : 'Blog'}
          </span>
        </a>
      `)
      .join('') : '<p class="text-center text-gray-500">No results found</p>';
  } catch (error) {
    console.error('Search error:', error);
    resultsContainer.innerHTML = '<p class="text-center text-red-500">An error occurred while searching</p>';
  }
}