import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse } from 'yaml';

// Keep the order entries appear in the YAML file.
const ordered = (text: string) =>
  (parse(text) as Record<string, unknown>[]).map((entry, i) => ({ ...entry, order: i }));

// Blog posts: one markdown file per post in src/content/posts/
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Projects: one entry per project in src/data/projects.yaml
const projects = defineCollection({
  loader: file('src/data/projects.yaml', { parser: ordered }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    learned: z.string().optional(),
    built: z.string().optional(), // e.g. "by hand", "with AI"
    order: z.number(),
    featured: z.boolean().default(false),
    hidden: z.boolean().default(false),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

// Work history: src/data/work.yaml
const work = defineCollection({
  loader: file('src/data/work.yaml', { parser: ordered }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    order: z.number(),
    dates: z.string(),
    highlights: z.array(z.string()).default([]),
  }),
});

export const collections = { posts, projects, work };
