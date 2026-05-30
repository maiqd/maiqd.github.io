---
name: create-learn-page
description: >-
  Create or update a Learn article page from an assets/contents/*.md study file.
  Use when the user asks to create a learn page, sync article from content file,
  add a new /learn/ route, or references assets/contents/*.md for page generation.
---

# Create Learn Page from Content File

Turn `assets/contents/{slug}.md` into a live `/learn/{slug}/` article.

## Inputs

| Input | Rule |
|-------|------|
| **Slug** | Filename without `.md` (e.g. `hermes-agent-with-deepseek`) |
| **Content file** | `assets/contents/{slug}.md` |
| **Reference pages** | `openclaw-use-cases` (full template), `clean-vs-vertical-slice` (updated template) |

Read the content file fully before writing any templates.

## Content file anatomy

Typical structure:

```
Intro line + source attribution
Youtube video: https://www.youtube.com/watch?v=VIDEO_ID

# Part 1: Content Analysis & Summarization
  → Becomes tabbed content sections

# Part 2: Learning Materials Generation
  ## Quiz Questions     → Interactive quiz (convert to multiple-choice)
  ## Flashcards         → Flip cards in Study section
  ## Reflection Questions → Ordered list in Study section
```

**Extract from header:**
- Video URL → embed `https://www.youtube.com/embed/VIDEO_ID?enablejsapi=1`
- Author/title → `author-tag` and page `title` / `description`

**Part 1 → tabs:** Group related `##` / `###` sections into 2–4 tabs. Name tabs from content (e.g. "Core concepts", "Setup", "Use cases") — not generic placeholders.

**Quiz formats:**
- **Multiple choice** (preferred): options A–D with `**Correct Answer:** X` → map to `correctIndex` 0–3
- **Direct Q&A** (`**Answer:** …`): rewrite as 4-option MC when possible; otherwise use True/False or best-match options

**Flashcards:** `Front [Term]` / `Back:` pairs → flip-card buttons.

**Reflection:** Question text + optional `*Answer/Guidance:*` → `<ol class="reflection-list">` items (include guidance inline when present).

## Files to create or update

```
src/learn/{slug}/index.njk              ← front matter + include
src/_includes/article-bodies/{slug}.njk ← HTML body
src/_includes/article-scripts/{slug}.njk ← quiz JS + tab/flashcard helpers
src/_data/learnArticles.json            ← hub card entry
```

Do **not** edit `_site/` or commit generated HTML.

## Page layout (required pattern)

Match existing learn articles — stacked wide layout:

| Section | Element id | Purpose |
|---------|------------|---------|
| Header | `overview-sec` | `<h1>`, subtitle, author-tag |
| Content | `content-sec` | Video + tabbed `organic-card` |
| Quiz | `quiz-sec` | 5–15 MC questions in `organic-card` |
| Study | `study-sec` | Flashcards + reflection |

Use `layout-grid layout-grid--stacked`, `learn-section--primary`, `card-span organic-card--content`.

Set `mermaid: true` in front matter only when the body includes `<pre class="mermaid">` diagrams.

## Slug & metadata rules

```yaml
# src/learn/{slug}/index.njk
permalink: /learn/{slug}/index.html
bodyClass: learn-page learn-article learn-article--wide
navLinks:
  - { id: overview-sec, label: Overview }
  - { id: video-sec,     label: Video }
  - { id: content-sec,   label: <tab theme> }
  - { id: quiz-sec,      label: Quiz }
  - { id: study-sec,     label: Study }
scriptsInclude: article-scripts/{slug}.njk
```

- `title`: `{Article Title} · Learn · Mai QD`
- `description`: One sentence summarizing Part 1 topics + quiz/flashcards
- Hub blurb in `learnArticles.json`: ≤120 chars, mention video notes + study tools

## HTML conventions

- Escape entities: `&ldquo;` `&rsquo;` `&amp;` `&mdash;`
- Inline code: `<code>hermes model</code>`
- Bullet lists: `<ul class="bullet-list">`
- Numbered workflows: `<ol class="use-case-list">` or `<ol class="prompt-list">`
- Callouts: `<div class="clay-callout">`
- Footer: link to source YouTube video

Copy tab/quiz/flashcard markup from reference pages — do not invent new CSS classes.

## Quiz script rules

In `article-scripts/{slug}.njk`:

```javascript
const quizData = [
  { correctIndex: 2, explanation: "Why this answer is correct." },
  // one entry per question, same order as HTML #q-0, #q-1, …
];
```

Include helpers from reference: `switchTab`, `toggleFlashcard`, `flashcardKey`, `selectOption`, `showExplanation`, `updateControls`, `prevQuestion`, `nextQuestion`, `calculateFinalAssessment`, `resetQuiz`.

Score commentary thresholds: perfect / ≥60% / below.

## Workflow checklist

```
- [ ] Read assets/contents/{slug}.md
- [ ] Read reference: src/_includes/article-bodies/openclaw-use-cases.njk
- [ ] Create src/learn/{slug}/index.njk
- [ ] Create src/_includes/article-bodies/{slug}.njk
- [ ] Create src/_includes/article-scripts/{slug}.njk
- [ ] Add entry to src/_data/learnArticles.json (avoid duplicates)
- [ ] npm run build — must exit 0
- [ ] Spot-check: video embed, tab count, quiz length matches quizData
```

## Updating an existing page

When user says "update {slug} with @assets/contents/{slug}.md":

1. Read both the content file and existing `{slug}.njk` files
2. Replace Part 1 tabs, quiz, flashcards, reflection from markdown
3. Keep slug, permalink, and file paths unchanged
4. Sync `quizData` length and `correctIndex` with HTML questions
5. Update `learnArticles.json` blurb if scope changed
6. Run `npm run build`

## UI design

When styling learn pages, also read `design/design-system.md` and follow `.cursor/rules/design-ui.mdc`.

## Templates

For copy-paste file skeletons, see [templates.md](templates.md).
