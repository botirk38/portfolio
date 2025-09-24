# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14+ portfolio blog template built with:
- **Next.js App Router** - Modern React framework with file-based routing
- **TypeScript** - Type safety throughout the codebase
- **Tailwind CSS v4 (alpha)** - Utility-first CSS framework
- **MDX** - Markdown with JSX components for blog posts
- **Geist Font** - San Francisco-inspired typeface
- **Vercel Analytics & Speed Insights** - Performance monitoring

## Development Commands

```bash
# Start development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```

## Architecture

### App Router Structure
- `app/` - Next.js App Router directory
  - `layout.tsx` - Root layout with global styles, fonts, and analytics
  - `page.tsx` - Homepage with portfolio intro and blog post preview
  - `blog/` - Blog functionality
    - `page.tsx` - Blog listing page
    - `utils.ts` - MDX parsing and frontmatter utilities
    - `posts/` - MDX blog post files
    - `[slug]/page.tsx` - Dynamic blog post pages
  - `components/` - Shared React components
    - `nav.tsx` - Navigation component
    - `footer.tsx` - Footer component
    - `posts.tsx` - Blog post listing component
    - `mdx.tsx` - MDX rendering components
  - `og/route.tsx` - Dynamic OG image generation
  - `rss/route.ts` - RSS feed generation
  - `robots.ts` - Robots.txt generation
  - `sitemap.ts` - Sitemap generation

### Blog System
- Blog posts are MDX files in `app/blog/posts/`
- Frontmatter structure:
  ```yaml
  ---
  title: "Post Title"
  publishedAt: "2023-01-01"
  summary: "Post description"
  image: "optional-image.jpg"
  ---
  ```
- Posts are parsed by `getBlogPosts()` in `app/blog/utils.ts`
- Automatic date formatting and relative time display

### Styling
- Uses Tailwind CSS v4 (alpha) with PostCSS
- Global styles in `app/global.css`
- Dark/light mode support via CSS variables
- Typography uses Geist Sans and Geist Mono fonts
- Mobile-first responsive design

### Configuration Files
- `tsconfig.json` - TypeScript configuration with Next.js plugin
- `postcss.config.js` - PostCSS with Tailwind integration
- No custom Next.js config file (using defaults)

## Key Patterns

### Component Organization
- Components are co-located with their usage (in `app/components/`)
- Each page has its own metadata export
- MDX components are customized in `mdx.tsx`

### Data Flow
- Blog posts are statically generated at build time
- RSS feed and sitemap are generated as route handlers
- OG images are dynamically generated per blog post

### SEO & Performance
- Comprehensive metadata setup in root layout
- RSS feed at `/rss`
- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Dynamic OG images at `/og`
- Vercel Analytics and Speed Insights integrated