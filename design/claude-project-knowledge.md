# Claude Project Knowledge — Organic / Natural UI (condensed)

Upload with `design/design-system.md` for UI design sessions only.

## Scope

Styling, layout, components, visual refactors — not config or content-only edits.

## Stack

Static: `styles/*.scss`, `index.html`. Compile CSS with `npm run build:css`.

## Style

**Organic / Natural** — wabi-sabi, earth-drawn palette, soft tinted shadows, grain texture, blob shapes, gentle motion.

## Colors

| Token | Hex |
|-------|-----|
| background | `#FDFCF8` |
| foreground | `#2C2C24` |
| primary (moss) | `#5D7052` |
| primary-foreground | `#F3F4F1` |
| secondary (clay) | `#C18C5D` |
| accent (sand) | `#E6DCCD` |
| muted | `#F0EBE5` |
| muted-foreground | `#78786C` |
| border | `#DED8CF` |
| destructive | `#A85448` |

**Fonts:** Fraunces 600–800 (headings), Nunito or Quicksand (body)

## Must-haves

- No pure-black shadows; use moss/clay tinted soft shadows
- Grain overlay on body: ~3–4% opacity, `mix-blend-mode: multiply`
- Organic `border-radius` blobs + generous `rounded-2xl`/`3xl`
- Pill buttons/cards/inputs; primary moss, outline terracotta
- Hover: `scale-105` buttons, `-translate-y-1` cards, `rotate-1` testimonials
- Transitions: `duration-300`–`500`, no harsh snaps
- Section rhythm: `py-32`, varied max-widths, alternating section tints
- Blob backgrounds with `blur-3xl`; asymmetric card radii
- A11y: 48px targets, moss focus ring, AA+ contrast per design doc

## Full spec

See `design/design-system.md` for navigation, icons, responsive breakpoints, and layout grids.
