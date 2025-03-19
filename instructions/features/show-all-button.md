
# Feature 12: 

We'll have a 'Show all' button right after the directory entries, directing users to the full resources page /directory.

## Implementation

Ended up dumbing it down and moving the View all link below. 

Code 

<!-- src/components/sections/DirectorySection.astro 
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="flex justify-between items-center mb-12">
    <h2 class="text-3xl font-bold">Featured Listings</h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {directoryItems.map((item) => (
      <DirectoryItemCard
        title={item.data.title}
        description={item.data.description}
        tags={item.data.tags}
        id={item.slug}
      />
    ))}
  </div>
  
  <!-- Centering the Show All link
  <div class="text-center mt-8">
    <a href="/directory" class="text-primary font-semibold hover:text-secondary">
      Show All →
    </a>
</div> 
  </div> -->

