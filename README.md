# Brain Hacks Math

A React + Tailwind site for mental-math tricks, blog posts, and a practice quiz —
built in the "Hand-Drawn" design system (wobbly borders, hard offset shadows,
handwritten type via Kalam / Patrick Hand).

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Structure

- `src/components/ui/` — Button, Card, Badge (the wobbly/tape/tack/post-it primitives)
- `src/components/` — Navbar, Footer
- `src/pages/` — Home, Tricks, TrickDetail, Blog, BlogPost, Quiz
- `src/data/` — trick content (grouped by series) and blog posts, edit these to
  add real content without touching any components
- `src/index.css` — the design tokens live in the `@theme` block at the top

## Adding a trick or category

Edit `src/data/tricks.js` — add a trick object to an existing category's
`tricks` array, or add a whole new category object. Routing and listing pages
pick it up automatically.

## Adding a blog post

Edit `src/data/blog.js` — add a post object with a `body` array of paragraphs.
