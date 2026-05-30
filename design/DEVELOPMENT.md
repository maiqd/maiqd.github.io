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
| `index.html` | Homepage — About, Projects, Experience, Contact |
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
| `/learn/openclaw-use-cases/` | `learn/openclaw-use-cases/index.html` (from `assets/contents/openclaw-use-cases.md`) |

Shared learn UI: `assets/css/learn.css` (from `styles/_learn.scss`, `styles/_learn-article.scss`, `styles/_learn-mermaid.scss`, `styles/_learn-responsive.scss`), `assets/js/learn-nav.js`, `assets/js/learn-mermaid.js`.

Responsive: single-column below 1200px for two-column articles; stacked articles stay vertical; nav collapses to menu ≤767px. Rebuild CSS after SCSS edits.

**Mermaid diagrams** (any learn article): wrap in `.mermaid-diagram` / `.mermaid-diagram__canvas`, use `<pre class="mermaid">` for the chart, load Mermaid 11 CDN then `learn-mermaid.js`. Optional node styles — append to diagram source:

```
classDef learnStep fill:#FEFEFA,stroke:#5D7052,stroke-width:2px,color:#2C2C24
classDef learnHandoff fill:#E6DCCD,stroke:#C18C5D,stroke-width:2px,color:#4A4A40
```

Add pages as `some/path/index.html` for clean URLs without `.html`.

## Deploy

Push to `main`. GitHub Pages publishes the repo as static files — no build step required if `main.css` is committed.
