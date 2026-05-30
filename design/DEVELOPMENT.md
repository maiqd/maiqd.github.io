# Local development (Eleventy + SCSS)

Static site built with [Eleventy](https://www.11ty.dev/) from `src/`, deployed to GitHub Pages via GitHub Actions.

## Setup

```bash
npm install
```

## Develop

```bash
npm run dev      # build CSS, serve _site/ with watch (http://localhost:8080)
npm run start    # alias for dev
```

Edit templates in `src/`, styles in `styles/`. CSS recompiles on dev start; restart dev or run `npm run build:css` after SCSS edits while the server is running.

## Build

```bash
npm run build:css    # SCSS → assets/css/
npm run build:11ty   # src/ → _site/
npm run build        # both
```

Output lands in `_site/` (gitignored). Do not commit generated HTML.

## Content

| Path | Role |
|------|------|
| `src/index.njk` | Homepage |
| `src/_includes/home-body.njk` | Homepage main content |
| `src/learn/` | Learn hub + articles |
| `src/_includes/nav.njk` | Shared nav partial |
| `src/_data/siteNav.json` | Site nav links (About, Projects, …) |
| `src/_data/learnArticles.json` | Learn hub card list |
| `content/cv.yml` | Content draft (manual sync into templates for now) |
| `design/design-system.md` | Visual spec |

## Routes

| URL | Source |
|-----|--------|
| `/` | `src/index.njk` |
| `/learn/` | `src/learn/index.njk` |
| `/learn/clean-vs-vertical-slice/` | `src/learn/clean-vs-vertical-slice/index.njk` |
| `/learn/openclaw-use-cases/` | `src/learn/openclaw-use-cases/index.njk` |

Shared learn UI: `assets/css/learn.css`, `assets/js/learn-nav.js`, `assets/js/learn-mermaid.js`.

**Mermaid diagrams** (learn articles): set `mermaid: true` in article front matter. Wrap charts in `.mermaid-diagram` / `<pre class="mermaid">`.

Add pages under `src/` with `permalink: /your/path/index.html`.

## Deploy

Push to `main`. GitHub Actions runs `npm run build` and publishes `_site/`.

**One-time setup:** Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Preview without Eleventy

```bash
npm run build && npx serve _site
```
