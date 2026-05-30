---
description: Organic / Natural design system for UI files only
applyTo: "_sass/**/*.scss,_sass/**/*.sass,_includes/**/*.html,_layouts/**/*.html,assets/css/**,index.html,design/**"
---

# Organic / Natural UI (path-scoped)

Full specification: [design/design-system.md](../../design/design-system.md)

## Scope

Applies **only** when editing files matching `applyTo` above, or when the user explicitly requests UI/design work.

Do **not** use for `_config.yml`, copy-only markdown, or tooling.

## Stack

Jekyll resume site: SCSS in `_sass/`, HTML in `_includes/` and `_layouts/`. Implement tokens as SCSS variables/mixins; extend skins under `_sass/skins/`.

## Philosophy

Wabi-sabi: warmth, softness, imperfection. No straight harsh corners or pure-black shadows. Tactile, calming, handcrafted feel.

## Tokens

| Token | Value |
|-------|-------|
| background | `#FDFCF8` |
| foreground | `#2C2C24` |
| primary | `#5D7052` |
| primary-foreground | `#F3F4F1` |
| secondary | `#C18C5D` |
| accent | `#E6DCCD` |
| muted | `#F0EBE5` |
| muted-foreground | `#78786C` |
| border | `#DED8CF` |
| destructive | `#A85448` |

**Fonts:** Fraunces (headings 600–800), Nunito or Quicksand (body, rounded terminals)

## Design constraints

- Organic blob radii + `rounded-2xl`/`rounded-3xl`; avoid sharp 90° UI
- Soft shadows: `0 4px 20px -2px rgba(93,112,82,0.15)` (moss), clay tint for float states
- Body grain texture: fixed pseudo-element, noise pattern, `multiply`, 3–5% opacity
- Buttons: pills; primary moss; outline terracotta; `hover:scale-105`, `active:scale-95`
- Cards: `#FEFEFA`, timber border 50%, asymmetric `2rem`+ radii, lift on hover
- Inputs: pills, semi-transparent white, moss focus ring
- Nav: sticky glass pill (`backdrop-blur`, white/70)
- Layout: `py-32`, varied `max-w-*` (7xl → 2xl by section), `gap-8`/`gap-12`
- Decor: blurred blob washes, rotated image frames, curved SVG connectors, section background alternation
- Responsive: mobile-first; blobs `overflow: hidden` on small screens
- A11y: 48px targets, moss `focus-visible:ring-2 ring-offset-2`, semantic HTML

## Process

1. Inspect current SCSS/HTML before editing
2. Token-first, minimal diffs
3. Prefer organic personality over generic Bootstrap defaults
