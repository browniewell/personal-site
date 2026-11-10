// Site-wide settings. Edit text and links here.
// Any link left as an empty string is hidden automatically.

export const site = {
  name: 'Ryan Brownewell',
  shortName: 'ryan.brownewell',
  title: 'Ryan Brownewell',
  description:
    'Engineering manager with a QA heart. Teams, testing, side projects, and the occasional post.',
  // Home page
  greeting: "Hi, I'm Ryan.",
  tagline:
    'Engineering manager with a QA heart. I lead with trust, and I still like knowing how things break.',
  intro:
    "I've spent fourteen years in software, starting in test automation and moving into leading teams, most recently in regulated digital health. I build teams where people feel safe asking questions early. These days I'm tinkering with small projects and learning in public about building software alongside AI.",
};

export const links = {
  resume: '/resume.pdf', // the PDF lives at public/resume.pdf
  linkedin: 'https://www.linkedin.com/in/ryan-brownewell/',
  github: 'https://github.com/browniewell',
  photography: '', // TODO: photography site, once it's live
  // Add more socials here, then list them in `socials` below.
  bluesky: '',
  mastodon: '',
};

// Shown in the footer and on the About page, in this order.
export const socials = [
  { label: 'LinkedIn', url: links.linkedin },
  { label: 'GitHub', url: links.github },
  { label: 'Photography', url: links.photography },
  { label: 'Bluesky', url: links.bluesky },
  { label: 'Mastodon', url: links.mastodon },
].filter((s) => s.url);

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Work', href: '/work/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'Now', href: '/now/' },
];
