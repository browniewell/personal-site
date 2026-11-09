import { getCollection } from 'astro:content';

/** Published posts, newest first. Drafts show in `npm run dev` only. */
export async function getPosts() {
  const posts = await getCollection('posts', (p) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects() {
  return (await getCollection('projects'))
    .filter((p) => !p.data.hidden)
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getWork() {
  return (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);
}

export function formatDate(d: Date) {
  return d.toISOString().slice(0, 10);
}
