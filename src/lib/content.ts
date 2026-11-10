import { getCollection } from 'astro:content';

/** Published posts, newest first. Drafts show in `npm run dev` only. */
export async function getPosts() {
  const posts = await getCollection('posts', (p) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Astro logs a YAML syntax error and carries on with an empty collection.
// Fail the build instead, so a typo can't publish an empty page.
async function getRequired<C extends 'projects' | 'work'>(name: C) {
  const entries = await getCollection(name);
  if (entries.length === 0) {
    throw new Error(`src/data/${name}.yaml is empty or has a YAML error (check quoting and indentation).`);
  }
  return entries;
}

export async function getProjects() {
  return (await getRequired('projects'))
    .filter((p) => !p.data.hidden)
    .sort((a, b) => a.data.order - b.data.order);
}

export async function getWork() {
  return (await getRequired('work')).sort((a, b) => a.data.order - b.data.order);
}

export function formatDate(d: Date) {
  return d.toISOString().slice(0, 10);
}
