# angelina jiang · portfolio

Personal portfolio website. Built with **Next.js (App Router)**, **React**, and
**Tailwind CSS v4**. Plain, minimal, monospace, with a coffee-toned palette, a
left sidebar nav, and six pages: home, about, work, projects, skills, contact.

Live at **[angelsanddevslol.github.io](https://angelsanddevslol.github.io/)**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs the static site to ./out
```

## Project structure

```
app/
  layout.tsx        root layout (loads the sidebar + fonts)
  page.tsx          home
  about/            about page
  work/             work experience
  projects/         projects
  skills/           skills
  contact/          contact
  data.ts           all page content lives here
  globals.css       theme tokens (the coffee palette)
components/
  Sidebar.tsx       left sidebar: avatar, nav, social icons, resume
  PageHeading.tsx   shared page title block
public/assets/      served files: profile.png, resume.pdf
```

## Editing content

All page content lives in [`app/data.ts`](app/data.ts). Edit there to update
experience, projects, skills, and contact info. No need to touch the page
components.

To swap the photo or resume, drop the file into [`public/assets/`](public/assets/)
(this is the only folder that is web-served; the avatar reads `profile.png` and
the resume links read `resume.pdf`).

## Theme

Colors are defined as tokens in [`app/globals.css`](app/globals.css) under the
`@theme` block (`--color-paper`, `--color-ink`, `--color-accent`,
`--color-sidebar`, and so on). Change them in one place and the whole site
updates.

## Deployment to GitHub Pages

This repo is a user/organization page (`angelsanddevslol.github.io`), served
from the domain root, so no `basePath` is needed. Deployment is automated via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): every push to
`main` builds the static export and publishes it to Pages.

One-time setup: in the repo **Settings → Pages → Build and deployment**, set the
**Source** to **GitHub Actions**. After that, pushes deploy automatically.
