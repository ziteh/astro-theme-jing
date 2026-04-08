# Astro Theme Jing

A simple blog theme, powered by [Astro](https://astro.build/).

Features:

- Auto-generate post description based on word count or up to the `<!-- more -->` tag
- Auto-expanding & collapsing table of contents (Tocbot)
- Search (Pagefind)
- Syntax highlighting (Expressive Code)
- Sitemap & RSS support
- Markdown & MDX support

## Usage

```sh
# Installs dependencies
pnpm i

# Starts local dev server
pnpm dev

# Build your production site
pnpm build
```

## Project Structure

```text
├── public/
├── src/
│   ├── content/blog/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── consts.ts
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

The `src/content/blog` directory contains "collections" of related Markdown and MDX documents. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

### SEOnaut

```bash
pnpm seonaut:up

pnpm dev --host
```

<http://localhost:9000/signin>

<http://host.containers.internal:4321>

## Todo

- [ ] On the `posts/` page, tags and categories are displayed on mobile devices and are collapsed by default
- [ ] On the `posts/[slug]` page, the sidebar becomes a floating button on mobile devices; tap to expand
