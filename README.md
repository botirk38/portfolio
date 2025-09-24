# Botir Khaltaev | Portfolio

Personal portfolio and blog of Botir Khaltaev - Systems Software Engineer specializing in storage systems, operating systems, and ML infrastructure.

## 🚀 Live Site

[botirkhaltaev.com](https://botirkhaltaev.com)

## 🛠️ Tech Stack

- **Next.js 15** (App Router) - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **MDX** - Blog posts with JSX components
- **Bun** - Package manager and runtime
- **Biome** - Linting and formatting
- **Vercel Analytics** - Performance monitoring
- **Geist Font** - Typography

## 🏗️ Features

- Modern blog with MDX support
- SEO optimized (sitemap, robots, JSON-LD schema)
- RSS feed
- Dynamic OG image generation
- Syntax highlighting for code blocks
- Dark/light mode support
- Responsive design
- CI/CD with GitHub Actions

## 🚀 Development

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Lint code
bun run lint

# Type check
bun run typecheck
```

## 📝 Blog Posts

Blog posts are written in MDX and stored in `app/blog/posts/`. Each post includes frontmatter with metadata:

```yaml
---
title: "Post Title"
publishedAt: "2023-01-01"
summary: "Post description"
image: "optional-image.jpg"
---
```

## 🧰 Project Structure

```
app/
├── blog/               # Blog functionality
│   ├── posts/         # MDX blog posts
│   ├── [slug]/        # Dynamic blog post pages
│   └── utils.ts       # Blog utilities
├── components/        # Shared components
├── og/               # OG image generation
├── rss/              # RSS feed
└── global.css        # Global styles
```

## 📊 CI/CD

Automated CI/CD pipeline with GitHub Actions:
- 🔍 Linting and formatting checks
- 🏗️ TypeScript type checking
- 🚀 Production build validation
- 🔒 Security auditing
- ⚡ Smart caching for fast builds

---

Built with ❤️ by [Botir Khaltaev](https://github.com/botirk38)
