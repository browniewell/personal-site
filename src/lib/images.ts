import type { ImageMetadata } from 'astro';

// Every image under src/assets, so markdown frontmatter can refer to one by path,
// e.g. `image: now/new-girl.jpg` means src/assets/now/new-girl.jpg.
const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

export function asset(path?: string): ImageMetadata | undefined {
  if (!path) return undefined;
  const key = '/src/assets/' + path.replace(/^\/?(src\/)?assets\//, '');
  const found = images[key];
  if (!found) throw new Error(`Image not found: ${key.slice(1)} (check the filename in your frontmatter)`);
  return found.default;
}
