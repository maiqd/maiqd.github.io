---
description: Hand-drawn design system for UI files only
applyTo: "_sass/**/*.scss,_sass/**/*.sass,_includes/**/*.html,_layouts/**/*.html,assets/css/**,index.html,design/**"
---

# Hand-drawn UI design (path-scoped)

Full specification: [design/design-system.md](../../design/design-system.md)

## Scope

These instructions apply **only** when creating or editing files matching `applyTo` above, or when the user explicitly requests UI/design work.

Do **not** use for `_config.yml`, markdown copy-only changes, or backend/tooling.

## Stack

Jekyll resume site: SCSS in `_sass/`, HTML in `_includes/` and `_layouts/`. Implement tokens as SCSS variables and mixins; extend existing skins under `_sass/skins/`.

## Design constraints

- Irregular wobbly `border-radius` on containers and buttons (never generic rounded corners only)
- Hard offset shadows (`4px 4px 0px #2d2d2d`), no blur
- Palette: `#fdfbf7`, `#2d2d2d`, `#e5e0d8`, `#ff4d4d`, `#2d5da1`
- Typography: Kalam (headings), Patrick Hand (body)
- Small rotations, dashed secondary borders, paper dot texture on body
- Buttons: press-flat active state (shadow removed + translate)
- Responsive: collapse grids on mobile; hide decorative SVGs with `hidden md:block`
- Accessibility: min 48px touch targets, visible focus (blue `#2d5da1`)

## Process

1. Inspect current SCSS/HTML patterns before editing
2. Propose minimal, token-first changes
3. Avoid generic corporate UI; preserve hand-drawn personality from the design system doc
