# angelina jiang — portfolio

Personal portfolio website. Built with **Next.js (App Router)**, **React**, and
**Tailwind CSS v4**. Plain, minimal, monospace — with a left sidebar nav and six
pages: home, about, work, projects, skills, contact.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs static site to ./out
```

## Editing content

All page content lives in [`app/data.ts`](app/data.ts) — edit there to update
experience, projects, skills, and contact info. No need to touch the page
components.

## Deployment — GitHub Pages

This repo is a user/organization page (`angelsanddevslol.github.io`), served
from the domain root, so no `basePath` is needed. Deployment is automated via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): every push to
`main` builds the static export and publishes it to Pages.

One-time setup: in the repo **Settings → Pages → Build and deployment**, set the
**Source** to **GitHub Actions**. After that, pushes deploy automatically.
