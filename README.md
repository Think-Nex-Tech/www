# ThinkNex Website

Official company website for **ThinkNex** — *Ideas Deserve Intelligent Execution.*

ThinkNex transforms ideas into digital products, intelligent systems and technology solutions through software engineering, AI, automation and technology consulting.

## What we do

- Digital Product Engineering
- AI & Intelligent Systems
- Automation & Integration
- Cloud & Technology Solutions
- Technology Consulting

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) with React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Deployment (GitHub Pages)

The site is built as a static export (`output: "export"`) and deployed by the workflow in `.github/workflows/deploy.yml` on every push to `main`.

1. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main`. The site is published at `https://<org>.github.io/<repo-name>/`.

The workflow sets `NEXT_PUBLIC_BASE_PATH` to `/<repo-name>`. For a custom domain or a root `<org>.github.io` repo, remove that env var from the workflow.

## Project structure

```
app/                  Routes, layout, global styles and SEO metadata
components/layout/    Navbar and Footer
components/sections/  Page sections (Hero, Services)
public/               Static assets and brand imagery
```

## License

© ThinkNex. All rights reserved.
