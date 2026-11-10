# ryanbrownewell.com

Ryan Brownewell's personal site. It's built with [Astro](https://astro.build), produces plain static HTML, has no tracking, and needs no JavaScript in the browser.

## Run it locally

```bash
npm install      # first time only
npm run dev      # http://localhost:4321, reloads as you edit
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Where things live

| To change… | Edit |
|---|---|
| Name, tagline, home intro, social links | `src/config.ts` |
| About page | `src/pages/about.md` |
| Now + Favorites | `src/pages/now.md` |
| Projects | `src/data/projects.yaml` |
| Work history | `src/data/work.yaml` |
| Résumé PDF | save it as `public/resume.pdf` |
| Blog posts | `src/content/posts/*.md` |
| Colors and fonts | `src/styles/global.css` (tokens at the top) |

## Add a blog post

Create `src/content/posts/my-post-title.md`. The filename becomes the URL, here `/writing/my-post-title/`.

```md
---
title: My post title
date: 2026-11-20
description: One line for previews and RSS (optional).
tags: [teams, testing]      # optional
draft: true                 # optional: shows in `npm run dev` only
---

Write the post here in markdown.
```

Posts are listed newest first. The RSS feed at `/rss.xml` updates automatically, and drafts never go into it.

## Add a project

Add an entry to `src/data/projects.yaml`:

```yaml
- id: my-project              # unique, no spaces
  name: My project
  summary: One or two sentences.
  learned: What I learned.    # optional
  built: by hand              # optional tag, e.g. "with AI"
  featured: true              # also show on the home page
  links:
    - { label: GitHub, url: https://github.com/... }
```

The order in the file is the order on the site. To hide a project without deleting it, set `hidden: true`.

## Update "Now"

Edit the `now:` list and the `updated:` date at the top of `src/pages/now.md`. The same list appears on the home page. Favorites are in the `favorites:` list in the same file.

To add a cover or logo, save the image in `src/assets/now/` or `src/assets/favorites/` and set `image: now/that-file.jpg` on the item. Any size works, because the site resizes images when it builds. Leave `image` off and the item shows as a plain text tag.

## Social links

Fill in the links in `src/config.ts`. A link left as an empty string (`''`) is hidden everywhere.

## Deploy

The site is hosted on **GitHub Pages**. To deploy, commit and push to `main`:

```bash
git add -A
git commit -m "Add a post"
git push
```

The workflow in `.github/workflows/deploy.yml` then builds the site and publishes it. The run takes about a minute, and you can watch it in the repo's **Actions** tab.

- **Domain:** `ryanbrownewell.com` is set in `public/CNAME` and in the repo's Settings → Pages. HTTPS is handled by GitHub.
- **Redirect:** `heyryanb.com` forwards to `ryanbrownewell.com` with a 301 redirect at the registrar. It isn't part of this repo.
- **Private notes:** `personal-website-handoff.md`, `domain-options.md` and `mockups/` are git-ignored on purpose. They stay on your machine only.
