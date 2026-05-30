# Claude Project Knowledge — Hand-drawn UI (condensed)

Upload with `design/design-system.md` for UI design sessions only.

## Scope

Use for styling, layout, components, and visual refactors — not for site config or content edits.

## Stack

Jekyll: `_sass/*.scss`, `_includes/*.html`, `_layouts/*.html`.

## Tokens

| Role | Value |
|------|-------|
| Background | `#fdfbf7` |
| Foreground | `#2d2d2d` |
| Muted | `#e5e0d8` |
| Accent | `#ff4d4d` |
| Pen | `#2d5da1` |

**Fonts:** Kalam 700 (headings), Patrick Hand 400 (body)

## Must-haves

- Irregular `border-radius` (e.g. `255px 15px 225px 15px / 15px 225px 15px 255px`)
- Shadow: `4px 4px 0px 0px #2d2d2d` (hover: reduce offset; active: none + translate)
- Paper texture: radial-gradient dots, 24px grid
- Rotation -2° to 2° on cards; `border-dashed` for secondary UI
- Buttons: white → red fill on hover; secondary uses muted → blue
- Mobile: `hidden md:block` for arrows, squiggles, bouncing decor

## Full spec

See `design/design-system.md` for buttons, cards, inputs, layout, and responsive tables.
