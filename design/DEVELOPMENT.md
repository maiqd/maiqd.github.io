# Local development (static site)

No Jekyll. GitHub Pages serves files from the repo root (`.nojekyll` disables Jekyll).

## Setup

```bash
npm install
```

## CSS

Edit SCSS in `styles/`, then compile:

```bash
npm run build:css    # one-off
npm run watch:css    # watch while editing
```

Commit `assets/css/main.css` after style changes so Pages works without a CI build.

## Content

| File | Role |
|------|------|
| `index.html` | Live homepage / CV markup |
| `content/cv.yml` | Content draft (manual sync into HTML for now) |
| `design/design-system.md` | Visual spec |

## Preview

```bash
npx serve .
# or: python3 -m http.server 4000
```

Open http://localhost:3000 (serve) or :4000 (python).

## Routes

| URL | File |
|-----|------|
| `/` | `index.html` |
| `/learn/` | `learn/index.html` (article index) |
| `/learn/clean-vs-vertical-slice/` | `learn/clean-vs-vertical-slice/index.html` |

Shared learn UI: `assets/css/learn.css` (from `styles/_learn.scss`, `styles/_learn-article.scss`), `assets/js/learn-nav.js`.

Add pages as `some/path/index.html` for clean URLs without `.html`.

## Deploy

Push to `main`. GitHub Pages publishes the repo as static files — no build step required if `main.css` is committed.
