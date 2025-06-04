# Astro Starter Kit: Blog

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/templates/tree/main/astro-blog-starter-template)

![Astro Template Preview](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

<!-- dash-content-start -->

Create a blog with Astro and deploy it on Cloudflare Workers as a [static website](https://developers.cloudflare.com/workers/static-assets/).

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

<!-- dash-content-end -->

## Getting Started

Outside of this repo, you can start a new project with this template using [C3](https://developers.cloudflare.com/pages/get-started/c3/) (the `create-cloudflare` CLI):

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/astro-blog-starter-template
```

A live public deployment of this template is available at [https://astro-blog-starter-template.templates.workers.dev](https://astro-blog-starter-template.templates.workers.dev)

## 🚀 Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                           | Action                                           |
| :-------------------------------- | :----------------------------------------------- |
| `npm install`                     | Installs dependencies                            |
| `npm run dev`                     | Starts local dev server at `localhost:4321`      |
| `npm run build`                   | Build your production site to `./dist/`          |
| `npm run preview`                 | Preview your build locally, before deploying     |
| `npm run astro ...`               | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`         | Get help using the Astro CLI                     |
| `npm run build && npm run deploy` | Deploy your production site to Cloudflare        |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

# Personal Website - madala.me

Welcome to Purna Sai Madala's personal website built with Astro. This site features a blog with multiple categories including personal posts, cooking recipes, and technical content.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Content collections
│   │   ├── blog/        # General blog posts
│   │   ├── cooking/     # Recipe posts
│   │   └── personal/    # Personal blog posts
│   ├── layouts/         # Layout components
│   ├── pages/           # Page routes
│   └── styles/          # Global styles
└── dist/                # Built site (generated)
```

## 📝 Content Management

Content is managed through markdown files in the `src/content/` directory:

- **Blog posts**: `src/content/blog/`
- **Cooking recipes**: `src/content/cooking/`  
- **Personal posts**: `src/content/personal/`

Each content file includes frontmatter for metadata like title, description, publish date, and more.

## 🌐 Deployment to Cloudflare Pages

The site is configured for deployment to Cloudflare Pages at **madala.me**.

### Deployment Steps:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy to madala.me"
   git push origin main
   ```

2. **Configure Cloudflare Pages**:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: `NODE_VERSION=18`

3. **Custom Domain**:
   - Add `madala.me` as custom domain in Cloudflare Pages
   - Configure DNS to point to Cloudflare Pages

## 🛠️ Built With

- [Astro](https://astro.build/) - Static site generator
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting

## 📦 Features

- ✅ Static site generation
- ✅ Multiple content types (blog, cooking, personal)
- ✅ RSS feed generation
- ✅ SEO optimized with sitemap
- ✅ Responsive design
- ✅ Fast loading times
- ✅ Automatic deployments

## 🔗 URLs

- **Production**: https://madala.me
- **Development**: http://localhost:4321

---

Built with ❤️ by Purna Sai Madala
