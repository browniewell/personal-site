import { getCollection } from 'astro:content';

/** Published posts, newest first. Drafts show in `npm run dev` only. */
export async function getPosts() {
  const posts = await getCollection('posts', (p) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Astro logs a YAML syntax error and carries on with an empty collection.
// Fail the build instead, so a typo can't publish an empty page.
async function getRequired<C extends 'projects' | 'work' | 'reading'>(name: C) {
  const entries = await getCollection(name);
  if (entries.length === 0) {
    throw new Error(`src/data/${name}.yaml is empty or has a YAML error (check quoting and indentation).`);
  }
  return entries;
}

export async function getProjects() {
  return (await getRequired('projects'))
    .filter((p) => !p.data.hidden)
    // Completed projects first, then in progress; file order within each.
    .sort((a, b) => statusRank(a.data.status) - statusRank(b.data.status) || a.data.order - b.data.order);
}

function statusRank(status: string) {
  return status === 'complete' ? 0 : 1;
}

export async function getWork() {
  return (await getRequired('work')).sort((a, b) => a.data.order - b.data.order);
}

/** Books finished in the most recent year in reading.yaml, newest first. */
export async function getReading() {
  const all = await getRequired('reading');
  const year = Math.max(...all.map((b) => b.data.finished.getUTCFullYear()));
  const books = all
    .map((b) => b.data)
    .filter((b) => b.finished.getUTCFullYear() === year)
    .sort((a, b) => b.finished.valueOf() - a.finished.valueOf() || b.order - a.order);
  return { year, books };
}

/**
 * The Now list minus any book already in reading.yaml, so a book is never both
 * "reading" and finished. Finishing a book = adding it to reading.yaml.
 */
export async function withoutFinished<T extends { title: string; label?: string }>(items: T[]) {
  const key = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const finished = new Set((await getRequired('reading')).map((b) => key(b.data.title)));
  return items.filter((i) => !(i.label?.startsWith('read') && finished.has(key(i.title))));
}

export function formatDate(d: Date) {
  return d.toISOString().slice(0, 10);
}
